import QuoteForm from "@/components/QuoteForm";

const basePath = "/decoraciones-cocos";
const gallery = [
  "IMG_0731.jpeg", "IMG_0732.jpeg", "IMG_0733.jpeg", "IMG_0734.jpeg",
  "IMG_0735.jpeg", "IMG_0736.jpeg", "IMG_0737.jpeg", "IMG_0738.jpeg",
  "IMG_0739.jpeg", "IMG_0740.jpeg", "IMG_0741.jpeg", "IMG_0742.jpeg",
  "IMG_0743.jpeg", "IMG_0744.jpeg", "IMG_0745.jpeg", "IMG_0747.jpeg",
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top">Decoraciones Coco&apos;s</a>
        <nav>
          <a href="#photos">Photos</a>
          <a href="#services">Services</a>
          <a href="#quote">Quote</a>
          <a href="https://www.instagram.com/decoracionescocos" target="_blank" rel="noreferrer">Instagram</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroInner">
          <p className="eyebrow">DECORACIONES COCO&apos;S</p>
          <h1>Decoraciones Coco&apos;s</h1>
          <p>Decoraciones de todo tipo de eventos.</p>
          <div className="heroActions">
            <a className="button" href="#quote">Quote request / Solicitud de cotización</a>
          </div>
        </div>
      </section>

      <section className="photoSection" id="photos">
        <div className="sectionInner">
          <p className="eyebrow dark">PHOTOS</p>
          <h2>Decoraciones Coco&apos;s</h2>
          <div className="photoGrid">
            {gallery.map((file, index) => (
              <figure className="photoCard" key={file}>
                <img
                  src={`${basePath}/${file}`}
                  alt={`Decoraciones Coco's photo ${index + 1}`}
                  loading={index < 4 ? "eager" : "lazy"}
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="servicesSection" id="services">
        <div className="sectionInner">
          <p className="eyebrow dark">OPTIONS FROM THE QUOTE FORM</p>
          <h2>Services / Servicios</h2>
          <div className="serviceGrid">
            <article><h3>Tables / Mesas</h3><p>Round — 8 people<br />Round — 10 people<br />Rectangle — 6 ft</p></article>
            <article><h3>Chairs / Sillas</h3><p>Regular<br />Resina<br />Chiavari</p></article>
            <article><h3>Linens / Manteles</h3><p>Round<br />Rectangular<br />Color/s</p></article>
            <article><h3>Decor / Decoración</h3><p>Centerpieces / Centros de mesa<br />Center table decor / Mesa principal<br />Candy table / Mesa de dulces</p></article>
            <article><h3>Canopy / Carpa</h3><p>Canopy<br />Canopy with draping / Carpa con telas</p></article>
            <article><h3>Dishware / Loza</h3><p>Charger<br />Servilleta / Napkin<br />Copa / Wineglass<br />Plato de comida / Food Plate</p></article>
          </div>
        </div>
      </section>

      <section className="quoteSection" id="quote">
        <div className="sectionInner"><QuoteForm /></div>
      </section>

      <footer className="siteFooter">
        <strong>Decoraciones Coco&apos;s</strong>
        <a href="https://www.instagram.com/decoracionescocos" target="_blank" rel="noreferrer">@decoracionescocos</a>
      </footer>
    </main>
  );
}
