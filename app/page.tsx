import QuoteForm from "@/components/QuoteForm";

const serviceGroups = [
  {
    title: "Chairs / Sillas",
    items: ["Regular", "Resina", "Chiavari", "Royal Chair — Gold", "Royal Chair — Silver", "Kid Chairs — Regular"],
  },
  {
    title: "Tables / Mesas",
    items: ["Round — 8 people", "Round — 10 people", "Rectangle — 6 ft"],
  },
  {
    title: "Linens / Manteles",
    items: ["Round", "Rectangular", "Mantel only", "Mantel w/ Diamante", "Mantel w/ Runner"],
  },
  {
    title: "Decor / Decoración",
    items: ["Centerpieces / Centros de mesa", "Center Table Decor / Mesa principal", "Candy Table / Mesa de dulces"],
  },
  {
    title: "Canopies / Carpas",
    items: ["Canopy / Carpa", "Canopy with draping / Carpa con telas", "Sizes from 14 x 20 to 30 x 60", "Unknown / Measure"],
  },
  {
    title: "Dishware / Loza Set",
    items: ["Charger", "Napkin / Servilleta", "Wineglass / Copa", "Food Plate / Plato de comida"],
  },
];

const chiavariColors = ["Clear", "White", "Silver", "Gold"];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top">Decoraciones Coco&apos;s</a>
        <div className="navLinks">
          <a href="#options">Options</a>
          <a href="#pricing">Pricing</a>
          <a href="#quote" className="button buttonSmall">Quote / Cotización</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="shell heroContent">
          <p className="eyebrow">DECORACIONES COCO&apos;S</p>
          <h1>Event quote request.<br />Solicitud de cotización.</h1>
          <p className="heroCopy">
            Please fill out the quote details and we will get back to you with a price.
            <br />Por favor llena la información para recibir un precio.
          </p>
          <div className="actions">
            <a className="button" href="#quote">Start Quote / Empezar</a>
            <a className="button buttonGhost" href="#options">See Options / Ver opciones</a>
          </div>
        </div>
      </section>

      <section className="section shell" id="options">
        <p className="eyebrow dark">OPTIONS FROM THE QUOTE FORM • OPCIONES DEL FORMULARIO</p>
        <h2>Available selections.</h2>
        <div className="detailGrid">
          {serviceGroups.map((group) => (
            <article className="detailCard" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="darkSection">
        <div className="shell optionSplit">
          <div>
            <p className="eyebrow">CHIAVARI CHAIRS • SILLAS CHIAVARI</p>
            <h2>Color options listed in the form.</h2>
          </div>
          <div className="chipRow">
            {chiavariColors.map((color) => <span className="optionChip" key={color}>{color}</span>)}
          </div>
        </div>
      </section>

      <section className="section shell" id="pricing">
        <p className="eyebrow dark">TABLE CLOTH PRICING • PRECIOS DE MANTELES</p>
        <h2>Pricing shown in the original form.</h2>
        <div className="pricingGrid">
          <article className="priceCard">
            <h3>Round / Redondo</h3>
            <div><span>Mantel only</span><strong>$12</strong></div>
            <div><span>Mantel w/ Diamante</span><strong>$15</strong></div>
            <div><span>Mantel w/ Runner</span><strong>$15</strong></div>
          </article>
          <article className="priceCard">
            <h3>Rectangular</h3>
            <div><span>Mantel only</span><strong>$8</strong></div>
            <div><span>Mantel w/ Diamante</span><strong>$12</strong></div>
            <div><span>Mantel w/ Runner</span><strong>$12</strong></div>
          </article>
        </div>
      </section>

      <section className="section shell canopySection">
        <div>
          <p className="eyebrow dark">CANOPY SIZES • TAMAÑOS DE CARPA</p>
          <h2>Sizes listed in the form.</h2>
        </div>
        <div className="sizeGrid">
          {["14 x 20", "20 x 20", "20 x 30", "20 x 40", "30 x 30", "30 x 40", "30 x 50", "30 x 60", "Unknown / Measure"].map((size) => (
            <span key={size}>{size}</span>
          ))}
        </div>
      </section>

      <section className="quoteSection" id="quote">
        <div className="shell">
          <QuoteForm />
        </div>
      </section>

      <section className="instagramStrip">
        <div className="shell instagramInner">
          <div>
            <p className="eyebrow dark">DECORACIONES COCO&apos;S</p>
            <h3>Instagram</h3>
          </div>
          <a className="button" href="https://www.instagram.com/decoracionescocos" target="_blank" rel="noreferrer">
            @decoracionescocos
          </a>
        </div>
      </section>

      <footer>
        <div className="shell footerInner">
          <strong>Decoraciones Coco&apos;s</strong>
          <span>Quote form / Formulario de cotización</span>
        </div>
      </footer>
    </main>
  );
}
