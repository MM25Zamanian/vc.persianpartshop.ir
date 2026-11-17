"use client";

import { useRef, type ReactNode } from "react";
import { Drawer } from "@base-ui/react/drawer";
import { CloseCircleIcon } from "@solar-icons/react/linear/close-circle";

type ContactDrawerProps = {
  label: string;
  title: string;
  description?: string;
  pattern?: ReactNode;
  icon: ReactNode;
  children: ReactNode;
};

export function ContactDrawer({ label, title, description, pattern, icon, children }: ContactDrawerProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <Drawer.Root swipeDirection="down">
      <Drawer.Trigger className="card-action" aria-label={title}>
        <span className="card-action-icon" aria-hidden="true">{icon}</span>
        <span>{label}</span>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop className="details-backdrop" />
        <Drawer.Viewport className="details-viewport">
          <Drawer.Popup className={pattern ? "details-popup location-popup" : "details-popup"} initialFocus={titleRef}>
            {pattern && <div className="location-pattern" aria-hidden="true">{pattern}</div>}
            <div className="drawer-grip-area" aria-hidden="true"><div className="drawer-grip" /></div>
            <header className="drawer-header">
              <Drawer.Close className="drawer-close" aria-label="بستن جزئیات">
                <CloseCircleIcon size={24} aria-hidden="true" />
              </Drawer.Close>
              <Drawer.Title className="drawer-title" ref={titleRef} tabIndex={-1}>{title}</Drawer.Title>
            </header>
            <Drawer.Content className="drawer-body">
              {description && <Drawer.Description className="drawer-description">{description}</Drawer.Description>}
              {children}
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
