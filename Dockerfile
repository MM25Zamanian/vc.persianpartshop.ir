# syntax=docker/dockerfile:1.7
ARG NODE_VERSION=24.22.0-alpine
FROM node:${NODE_VERSION} AS base
WORKDIR /app
ENV PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH \
    NEXT_TELEMETRY_DISABLED=1
RUN corepack enable && corepack prepare pnpm@10.6.1 --activate

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm config set store-dir /pnpm/store && pnpm install --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
# Copy only build inputs: docs, CI and nginx changes do not invalidate Next.js.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.json next.config.ts eslint.config.mjs ./
COPY app/ ./app/
COPY config/ ./config/
COPY lib/ ./lib/
COPY public/ ./public/
RUN pnpm lint
ARG SITE_URL
ENV SITE_URL=${SITE_URL}
RUN pnpm build

FROM ghcr.io/gecut/nginx/cdn:2.0.0 AS runtime
ENV NGINX_CDN_S_MAXAGE=300 \
    NGINX_CDN_IMAGE_S_MAXAGE=300 \
    NGINX_CDN_HTML_S_MAXAGE=300 \
    NGINX_CDN_CACHE_HASHED="public, max-age=300, must-revalidate" \
    NGINX_CDN_CACHE_UNVERSIONED_STATIC="public, max-age=300, must-revalidate" \
    NGINX_CDN_CACHE_JSON="public, max-age=300, must-revalidate" \
    NGINX_CDN_CACHE_IMAGE="public, max-age=300, must-revalidate" \
    NGINX_CDN_CACHE_HTML="public, max-age=300, must-revalidate" \
    NGINX_CDN_CACHE_SERVICE_WORKER="no-cache" \
    NGINX_CDN_CACHE_ERROR="no-store" \
    NGINX_GZIP=off \
    NGINX_GZIP_STATIC=off \
    NGINX_GZIP_VARY=off \
    NGINX_EXPIRES_DYNAMIC=off \
    NGINX_EXPIRES_STATIC=off \
    NGINX_EXPIRES_DEFAULT=off
# The base image owns the /server-info healthcheck.
COPY nginx/40-contacts.conf.template /etc/nginx/templates/location.d/40-contacts.conf.template
COPY --from=builder --chown=nginx:nginx /app/out/ /data/
