import Image from "next/image";
import { PhoneCallingIcon } from "@solar-icons/react/linear/phone-calling";
import { MapPointIcon } from "@solar-icons/react/linear/map-point";
import { UsersGroupRoundedIcon } from "@solar-icons/react/linear/users-group-rounded";
import { business, directionsUrl } from "@/config/business";
import { ContactDrawer } from "./_contact-drawer";
import { BorderBeam } from "./_border-beam";

function ShowroomPhones() {
  return (
    <ul className="contact-list">
      {business.showroom.phones.map((phone, index) => (
        <li key={phone.uri}>
          <a className="contact-row" href={`tel:${phone.uri}`}>
            <span className="contact-name">خط {index === 0 ? "اول" : "دوم"} فروشگاه</span>
            <span className="phone-number"><bdi dir="ltr">{phone.display}</bdi><PhoneCallingIcon size={20} aria-hidden="true" /></span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function SalesContacts() {
  return (
    <ul className="contact-list">
      {business.sales.map((person) => (
        <li key={person.id}>
          <a className="contact-row" href={`tel:${person.phone.uri}`}>
            <span className="contact-name">{person.name}</span>
            <span className="contact-role">{person.role}{person.roleIsSample && " (نمونه)"}</span>
            <span className="phone-number"><bdi dir="ltr">{person.phone.display}</bdi><PhoneCallingIcon size={20} aria-hidden="true" /></span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function LocationDetails({ location }: { location: { name: string; address: string; coordinates: readonly [number, number] } }) {
  return (
    <>
      <address className="showroom-address">{location.address}</address>
      <a className="drawer-primary" href={directionsUrl(location)} target="_blank" rel="noopener noreferrer">
        <MapPointIcon size={20} aria-hidden="true" />مسیریابی تا {location.name === "فروشگاه مرکزی" ? "فروشگاه" : location.name}
      </a>
    </>
  );
}

function MapCredit() {
  return <p className="map-credit">© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a></p>;
}

export default function Home() {
  return (
    <main className="business-page" id="main-content">
      <div className="business-card">
        <article className="card-face" aria-labelledby="business-name">
          <BorderBeam />
          <Image className="brand-logo" src="/assets/persepolis-logo.png" alt={business.brand} width={535} height={632} sizes="(min-width: 640px) 84px, 60px" preload />
          <header>
            <h1 id="business-name" translate="no">{business.name}</h1>
            <p className="brand-role">{business.representation}</p>
          </header>
        </article>
        <nav className="card-actions" aria-label="جزئیات کارت ویزیت">
          <ContactDrawer label="ارتباط با ما" title="ارتباط با ما" description="برای گفت‌وگو با کارشناسان، یکی از شماره‌های زیر را انتخاب کنید." icon={<UsersGroupRoundedIcon size={24} />}>
            <SalesContacts />
          </ContactDrawer>
          <ContactDrawer label="دفتر مرکزی" title="دفتر مرکزی" pattern={<Image src="/assets/maps/office-map.svg" alt="" fill sizes="(max-width: 544px) 100vw, 544px" unoptimized />} icon={<MapPointIcon size={24} />}>
            <LocationDetails location={business.office} />
            <MapCredit />
          </ContactDrawer>
          <ContactDrawer label="فروشگاه مرکزی" title="فروشگاه مرکزی" pattern={<Image src="/assets/maps/store-map.svg" alt="" fill sizes="(max-width: 544px) 100vw, 544px" unoptimized />} icon={<MapPointIcon size={24} />}>
            <LocationDetails location={business.showroom} />
            <div className="location-phones"><ShowroomPhones /></div>
            <MapCredit />
          </ContactDrawer>
        </nav>
        <noscript>
          <section className="no-script-contacts" aria-label="اطلاعات تماس">
            <h2>ارتباط با ما</h2><SalesContacts />
            <h2>دفتر مرکزی</h2><LocationDetails location={business.office} />
            <h2>فروشگاه مرکزی</h2><LocationDetails location={business.showroom} /><ShowroomPhones />
          </section>
        </noscript>
      </div>
    </main>
  );
}
