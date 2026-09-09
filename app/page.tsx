import QuoteForm from "@/components/QuoteForm";

const photoTent = "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";

const photoBackdrop = "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";

const serviceGroups = [
  { title: "Chairs / Sillas", items: ["Regular", "Resina", "Chiavari", "Royal Chair — Gold", "Royal Chair — Silver", "Kid Chairs — Regular"] },
  { title: "Tables / Mesas", items: ["Round — 8 people", "Round — 10 people", "Rectangle — 6 ft"] },
  { title: "Linens / Manteles", items: ["Round", "Rectangular", "Mantel only", "Mantel w/ Diamante", "Mantel w/ Runner"] },
  { title: "Decor / Decoración", items: ["Centerpieces / Centros de mesa", "Center Table Decor / Mesa principal", "Candy Table / Mesa de dulces"] },
  { title: "Canopies / Carpas", items: ["Canopy / Carpa", "Canopy with draping / Carpa con telas", "Sizes from 14 x 20 to 30 x 60", "Unknown / Measure"] },
  { title: "Dishware / Loza Set", items: ["Charger", "Napkin / Servilleta", "Wineglass / Copa", "Food Plate / Plato de comida"] },
];

const chiavariColors = ["Clear", "White", "Silver", "Gold"];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top">Decoraciones Coco&apos;s</a>
        <div className="navLinks">
          <a href="#photos">Photos</a>
          <a href="#options">Options</a>
          <a href="#quote" className="button buttonSmall">Quote / Cotización</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="shell heroContent">
          <p className="eyebrow">DECORACIONES COCO&apos;S</p>
          <h1>Event quote request.<br />Solicitud de cotización.</h1>
          <p className="heroCopy">Please fill out the quote details and we will get back to you with a price.<br />Por favor llena la información para recibir un precio.</p>
          <div className="actions">
            <a className="button" href="#quote">Start Quote / Empezar</a>
            <a className="button buttonGhost" href="#photos">See Photos / Ver fotos</a>
          </div>
        </div>
      </section>

      <section className="photoSection" id="photos">
        <div className="shell">
          <p className="eyebrow dark">PHOTOS FROM @DECORACIONESCOCOS</p>
          <h2>Real work shown on Instagram.</h2>
          <div className="photoGrid">
            <figure className="photoCard"><img src={`data:image/jpeg;base64,${photoTent}`} alt="Decoraciones Coco's tent setup shown in the provided Instagram recording" /><figcaption>Tent setup / Carpa</figcaption></figure>
            <figure className="photoCard"><img src={`data:image/jpeg;base64,${photoBackdrop}`} alt="Decoraciones Coco's balloon backdrop shown in the provided Instagram recording" /><figcaption>Balloon backdrop / Decoración</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="section shell" id="options">
        <p className="eyebrow dark">OPTIONS FROM THE QUOTE FORM • OPCIONES DEL FORMULARIO</p>
        <h2>Available selections.</h2>
        <div className="detailGrid">{serviceGroups.map((group) => (<a className="detailCard detailCardLink" href="#quote" key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul><span className="cardAction">Choose in quote form →</span></a>))}</div>
      </section>

      <section className="darkSection"><div className="shell optionSplit"><div><p className="eyebrow">CHIAVARI CHAIRS • SILLAS CHIAVARI</p><h2>Color options listed in the form.</h2></div><div className="chipRow">{chiavariColors.map((color) => <a className="optionChip" href="#quote" key={color}>{color}</a>)}</div></div></section>

      <section className="section shell" id="pricing">
        <p className="eyebrow dark">TABLE CLOTH PRICING • PRECIOS DE MANTELES</p><h2>Pricing shown in the original form.</h2>
        <div className="pricingGrid"><a className="priceCard priceCardLink" href="#quote"><h3>Round / Redondo</h3><div><span>Mantel only</span><strong>$12</strong></div><div><span>Mantel w/ Diamante</span><strong>$15</strong></div><div><span>Mantel w/ Runner</span><strong>$15</strong></div><span className="cardAction">Add to quote →</span></a><a className="priceCard priceCardLink" href="#quote"><h3>Rectangular</h3><div><span>Mantel only</span><strong>$8</strong></div><div><span>Mantel w/ Diamante</span><strong>$12</strong></div><div><span>Mantel w/ Runner</span><strong>$12</strong></div><span className="cardAction">Add to quote →</span></a></div>
      </section>

      <section className="section shell canopySection"><div><p className="eyebrow dark">CANOPY SIZES • TAMAÑOS DE CARPA</p><h2>Sizes listed in the form.</h2></div><div className="sizeGrid">{["14 x 20", "20 x 20", "20 x 30", "20 x 40", "30 x 30", "30 x 40", "30 x 50", "30 x 60", "Unknown / Measure"].map((size) => (<a href="#quote" key={size}>{size}</a>))}</div></section>

      <section className="quoteSection" id="quote"><div className="shell"><QuoteForm /></div></section>
      <section className="instagramStrip"><div className="shell instagramInner"><div><p className="eyebrow dark">DECORACIONES COCO&apos;S</p><h3>Instagram</h3></div><a className="button" href="https://www.instagram.com/decoracionescocos" target="_blank" rel="noreferrer">@decoracionescocos</a></div></section>
      <footer><div className="shell footerInner"><strong>Decoraciones Coco&apos;s</strong><span>Quote form / Formulario de cotización</span></div></footer>
    </main>
  );
}
