import { business } from "@/config/business";

function escapeText(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/\r\n|\r|\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
}

// Fold at 75 octets without splitting a UTF-8 character.
function foldLine(line: string): string {
  let folded = "";
  let bytes = 0;
  for (const character of line) {
    const size = Buffer.byteLength(character, "utf8");
    if (bytes + size > 75) {
      folded += "\r\n ";
      bytes = 1;
    }
    folded += character;
    bytes += size;
  }
  return folded;
}

function card(lines: string[]): string {
  return ["BEGIN:VCARD", "VERSION:3.0", ...lines, "END:VCARD"].map(foldLine).join("\r\n");
}

export function createContactCards(): string {
  const organization = `ORG:${escapeText(business.name)}`;
  const showroom = card([
    `FN:${escapeText(business.name)}`,
    `N:;${escapeText(business.name)};;;`,
    organization,
    ...business.showroom.phones.map((phone) => `TEL;TYPE=WORK,VOICE:${phone.uri}`),
    `ADR;TYPE=WORK:;;${escapeText(business.showroom.address)};;;;`,
    `NOTE:${escapeText(business.representation)}`,
  ]);
  const sales = business.sales.map((person) => card([
    `FN:${escapeText(person.contactName)} — ${escapeText(business.name)}`,
    `N:;${escapeText(person.contactName)};;;`,
    organization,
    "TITLE:کارشناس فروش",
    `TEL;TYPE=CELL,VOICE:${person.phone.uri}`,
  ]));
  return [showroom, ...sales, ""].join("\r\n");
}
