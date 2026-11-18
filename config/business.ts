export const business = {
  name: "بازرگانی زمانیان",
  brand: "کاشی پرسپولیس",
  representation: "نمایندگی انحصاری کاشی پرسپولیس یزد در خراسان بزرگ",
  catalog: {
    url: "https://catalog.persianpartshop.ir",
    enabled: false,
  },
  office: {
    name: "دفتر مرکزی",
    mapsUrl: "https://maps.app.goo.gl/NkTdPy8zxmNhoL2o8",
    coordinates: [36.3165102, 59.5851922],
    address: "چهارراه ابوطالب، پاساژ جام‌جم، طبقه ۵، واحد ۵۰۱",
    phones: [
      { display: "۰۵۱ ۳۷۱۲ ۳۲۱۲", uri: "+985137123212" },
      { display: "۰۵۱ ۳۷۱۲ ۳۲۱۳", uri: "+985137123213" },
      { display: "۰۵۱ ۳۷۱۲ ۳۲۱۴", uri: "+985137123214" },
      { display: "۰۵۱ ۳۷۱۲ ۳۲۱۵", uri: "+985137123215" },
    ],
  },
  showroom: {
    name: "فروشگاه مرکزی",
    mapsUrl: "https://maps.app.goo.gl/JBy7KEyvFv3pG1Fi8",
    coordinates: [36.352268, 59.561522],
    shortAddress: "توس ۳۳ و ۳۳/۱",
    address: "میدان شهید فهمیده به سمت میدان معراج، بین توس ۳۳ و ۳۳/۱، فروشگاه پرسپولیس",
    phones: [
      { display: "۰۵۱ ۳۶۵۱ ۱۷۱۷", uri: "+985136511717" },
      { display: "۰۵۱ ۳۶۵۱ ۱۸۱۸", uri: "+985136511818" },
    ],
  },
  sales: [
    { id: "azma", role: "کارشناس فروش", name: "سرکار خانم آزما", contactName: "خانم آزما", phone: { display: "۰۹۱۵ ۶۲۰ ۱۱۶۲", uri: "+989156201162" } },
    { id: "mehraban", role: "کارشناس فروش", name: "جناب آقای مهندس مهربان", contactName: "مهندس مهربان", phone: { display: "۰۹۱۰ ۱۱۵ ۴۲۲۰", uri: "+989101154220" } },
    { id: "shariatzadeh", role: "کارشناس فروش", name: "جناب آقای مهندس شریعت زاده", contactName: "مهندس شریعت زاده", phone: { display: "۰۹۱۵ ۰۰۲ ۶۴۰۰", uri: "+989150026400" } },
    { id: "ghadimi", role: "کارشناس فروش", name: "جناب آقای مهندس قدیمی", contactName: "مهندس قدیمی", phone: { display: "۰۹۱۵ ۰۲۹ ۷۴۰۴", uri: "+989150297404" } },
  ],
} as const;

export const businessDescription = `${business.name}، ${business.representation}. نشانی نمایشگاه مرکزی و راه‌های تماس با کارشناسان فروش.`;

export function directionsUrl(location: { coordinates: readonly [number, number] }): string {
  return `https://www.google.com/maps/dir/?${new URLSearchParams({ api: "1", destination: location.coordinates.join(",") }).toString()}`;
}
