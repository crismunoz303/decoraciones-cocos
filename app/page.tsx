const services = [
  ["Tables & Chairs", "Mesas y sillas"],
  ["Linens", "Mantelería"],
  ["Centerpieces", "Centros de mesa"],
  ["Candy Tables", "Mesas de dulces"],
  ["Canopies & Draping", "Carpas y decoración"],
  ["Dishware", "Vajilla"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top">Decoraciones Coco&apos;s</a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#quote" className="button buttonSmall">Get a Quote</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="shell heroContent">
          <p className="eyebrow">EVENT DECOR • PARTY RENTALS • CELEBRATIONS</p>
          <h1>Beautiful moments,<br />made unforgettable.</h1>
          <p className="heroSpanish">Momentos hermosos, hechos inolvidables.</p>
          <p className="heroCopy">
            Thoughtful event decor and rentals for the celebrations that matter most.
          </p>
          <div className="actions">
            <a className="button" href="#quote">Request a Quote</a>
            <a className="button buttonGhost" href="#gallery">View Our Work</a>
          </div>
        </div>
      </section>

      <section className="section shell" id="services">
        <p className="eyebrow dark">WHAT WE OFFER • LO QUE OFRECEMOS</p>
        <h2>Everything your celebration needs.</h2>
        <div className="serviceGrid">
          {services.map(([english, spanish]) => (
            <article className="serviceCard" key={english}>
              <div className="serviceImagePlaceholder" aria-hidden="true" />
              <h3>{english}</h3>
              <p>{spanish}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallerySection" id="gallery">
        <div className="shell split">
          <div>
            <p className="eyebrow">OUR WORK • NUESTRO TRABAJO</p>
            <h2>Designed around your moment.</h2>
          </div>
          <p>
            Weddings, birthdays, quinceañeras, baby showers and custom celebrations.
            Real event photography will replace these placeholders as we build the gallery.
          </p>
        </div>
        <div className="shell galleryGrid">
          <div className="galleryPlaceholder tall" />
          <div className="galleryPlaceholder" />
          <div className="galleryPlaceholder" />
        </div>
      </section>

      <section className="section shell quote" id="quote">
        <div>
          <p className="eyebrow dark">LET&apos;S CELEBRATE • CELEBREMOS</p>
          <h2>Tell us about your event.</h2>
          <p>
            We&apos;re building a simple bilingual quote experience here so customers can choose
            what they need without working through a long form.
          </p>
        </div>
        <a className="button" href="https://www.instagram.com/decoracionescocos" target="_blank" rel="noreferrer">
          Visit Instagram
        </a>
      </section>

      <footer>
        <div className="shell footerInner">
          <strong>Decoraciones Coco&apos;s</strong>
          <span>Made for celebrations.</span>
        </div>
      </footer>
    </main>
  );
}
