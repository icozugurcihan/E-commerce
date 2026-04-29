import heroImage from "../assets/hero-1.jpg";

const offices = [
  {
    city: "Paris",
    address: "1901 Thorn ridge Cir.",
    zip: "75000 Paris",
    phone: "+451 215 215",
    fax: "+451 215 215",
  },
  {
    city: "Berlin",
    address: "4140 Parker Rd.",
    zip: "75000 Paris",
    phone: "+451 215 215",
    fax: "+451 215 215",
  },
  {
    city: "New York",
    address: "2715 Ash Dr. San Jose,",
    zip: "75000 Paris",
    phone: "+451 215 215",
    fax: "+451 215 215",
  },
  {
    city: "London",
    address: "3517 W. Gray St. Utica,",
    zip: "75000 Paris",
    phone: "+451 215 215",
    fax: "+451 215 215",
  },
];

export default function ContactPage() {
  return (
    <section
  className="relative min-h-screen bg-cover bg-center text-white lg:bg-center"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-[#003b43]/95 to-[#00bcd4]/60 lg:bg-gradient-to-r lg:from-[#003b43]/95 lg:via-[#006b78]/80 lg:to-[#00bcd4]/40" />

  <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 py-16 lg:flex lg:items-center lg:px-16 lg:py-20">
    <div className="grid w-full gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
        <h1 className="text-3xl font-bold tracking-wide sm:text-4xl lg:text-5xl lg:font-extrabold">
          CONTACT US
        </h1>

        <p className="mt-6 text-sm font-semibold leading-6 text-white/90 lg:mt-10 lg:text-lg lg:leading-7">
          Problems trying to resolve the conflict between the two major
          realms of Classical physics: Newtonian mechanics
        </p>

        <button className="mt-8 rounded-md bg-sky-400 px-8 py-3 text-sm font-bold uppercase tracking-wide transition hover:bg-sky-500 lg:mt-10 lg:px-12 lg:py-5">
          Contact Us
        </button>
      </div>

      <div className="grid gap-y-14 text-center sm:grid-cols-2 sm:gap-x-12 sm:text-left lg:gap-x-16 lg:gap-y-16">
        {offices.map((office) => (
          <div key={office.city}>
            <h2 className="text-xl font-bold lg:text-3xl lg:font-extrabold">
              {office.city}
            </h2>

            <p className="mt-3 text-base font-medium lg:mt-6 lg:text-2xl lg:font-semibold lg:leading-snug">
              {office.address}
            </p>

            <div className="mx-auto mt-3 h-[2px] w-12 bg-sky-400 sm:mx-0 lg:mt-5 lg:h-1 lg:w-16" />

            <p className="mt-3 text-sm font-bold lg:mt-6 lg:text-xl">
              {office.zip}
            </p>

            <p className="mt-3 text-sm font-bold lg:mt-5 lg:text-lg">
              Phone : {office.phone}
            </p>

            <p className="mt-1 text-sm font-bold lg:mt-5 lg:text-lg">
              Fax : {office.fax}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
  );
}