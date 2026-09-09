"use client";

import { useMemo, useState } from "react";

const officialFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScrJyqjbnvjDBe1GNzFUgROKHkJH6PAhpwxXQM-hP_o8BpFNw/viewform";
const chairTypes = ["Regular", "Resina", "Chiavari"];
const chiavariColors = ["Clear", "White", "Silver", "Gold"];
const canopySizes = ["14 x 20", "20 x 20", "20 x 30", "20 x 40", "30 x 30", "30 x 40", "30 x 50", "30 x 60", "Unknown / Measure"];
const serviceOptions = [
  "Tables / Mesas",
  "Chairs / Sillas",
  "Linens / Manteles",
  "Centerpieces / Centros de mesa",
  "Center table decor / Mesa principal",
  "Candy table / Mesa de dulces",
  "Canopy / Carpa",
  "Canopy with draping / Carpa con telas",
  "Dishware / Loza",
];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <span className="fieldLabel">{children}</span>;
}

export default function QuoteForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const hasChairs = selectedServices.includes("Chairs / Sillas");
  const hasLinens = selectedServices.includes("Linens / Manteles");
  const hasCanopy = selectedServices.some((item) => item.startsWith("Canopy"));
  const hasDishware = selectedServices.includes("Dishware / Loza");
  const hasCenterpieces = selectedServices.includes("Centerpieces / Centros de mesa");
  const hasCenterTable = selectedServices.includes("Center table decor / Mesa principal");
  const hasCandyTable = selectedServices.includes("Candy table / Mesa de dulces");
  const serviceCount = useMemo(() => selectedServices.length, [selectedServices]);

  function toggleService(service: string) {
    setSelectedServices((current) => current.includes(service) ? current.filter((item) => item !== service) : [...current, service]);
  }

  return (
    <div className="quoteForm">
      <div className="formIntro">
        <div><p className="eyebrow dark">DECORACIONES COCO&apos;S</p><h2>Quote request / Solicitud de cotización</h2></div>
        <p>Please fill out the quote details and continue to the request form.<br />Por favor llena los detalles de la cotización y continúa al formulario.</p>
      </div>

      <fieldset className="formSection"><legend>1. Event details / Detalles del evento</legend><div className="fieldGrid">
        <label><FieldLabel>Nombre / Name</FieldLabel><input name="name" autoComplete="name" /></label>
        <label><FieldLabel>Número de Teléfono / Phone Number</FieldLabel><input name="phone" type="tel" autoComplete="tel" /></label>
        <label className="wideField"><FieldLabel>Domicilio del Evento / Event Address</FieldLabel><input name="address" autoComplete="street-address" /></label>
        <label><FieldLabel>Fecha / Date</FieldLabel><input name="date" type="date" /></label>
        <label><FieldLabel>Tema / Theme</FieldLabel><input name="theme" /></label>
      </div></fieldset>

      <fieldset className="formSection"><legend>2. Services / Servicios</legend><div className="choiceGrid">
        {serviceOptions.map((service) => { const checked = selectedServices.includes(service); return <label className={`choiceCard ${checked ? "selected" : ""}`} key={service}><input type="checkbox" checked={checked} onChange={() => toggleService(service)} /><span>{service}</span></label>; })}
      </div><p className="selectionCount">{serviceCount} selected / seleccionados</p></fieldset>

      <fieldset className="formSection"><legend>3. Tables, chairs & linens / Mesas, sillas y manteles</legend><div className="fieldGrid">
        <label><FieldLabel>Table / Mesa</FieldLabel><select name="tableType" defaultValue=""><option value="">Select / Selecciona</option><option>Round — 8 people</option><option>Round — 10 people</option><option>Rectangle — 6 ft</option></select></label>
        <label><FieldLabel>Number of tables / Número de mesas</FieldLabel><input name="tableQuantity" type="number" min="0" inputMode="numeric" /></label>
        {hasChairs && <><label><FieldLabel>Chairs / Sillas</FieldLabel><select name="chairType" defaultValue=""><option value="">Select / Selecciona</option>{chairTypes.map((type) => <option key={type}>{type}</option>)}</select></label><label><FieldLabel># Chairs / # Sillas</FieldLabel><input name="chairQuantity" type="number" min="0" inputMode="numeric" /></label><label><FieldLabel>Chiavari color</FieldLabel><select name="chiavariColor" defaultValue=""><option value="">Select / Selecciona</option>{chiavariColors.map((color) => <option key={color}>{color}</option>)}</select></label><label><FieldLabel>Silla de Trono / Royal Chair</FieldLabel><select name="royalChair" defaultValue=""><option value="">Select / Selecciona</option><option>Gold</option><option>Silver</option></select></label><label><FieldLabel>Silla de Niños / Kid Chairs</FieldLabel><select name="kidChair" defaultValue=""><option value="">Select / Selecciona</option><option>Regular</option></select></label></>}
        {hasLinens && <><label><FieldLabel>Tipo de Mantel / Type of Table Cloth</FieldLabel><select name="linenType" defaultValue=""><option value="">Select / Selecciona</option><option>Round</option><option>Rectangular</option></select></label><label><FieldLabel>Color/es / Color/s</FieldLabel><input name="linenColors" /></label><label><FieldLabel># Manteles / # of Table Cloths</FieldLabel><input name="linenQuantity" type="number" min="0" inputMode="numeric" /></label><label><FieldLabel>Style / Estilo</FieldLabel><select name="linenStyle" defaultValue=""><option value="">Select / Selecciona</option><option>Mantel only</option><option>Mantel w/ Diamante</option><option>Mantel w/ Runner</option></select></label><div className="wideField formPriceNote"><strong>Pricing shown in the original form</strong><p>Round: Mantel only $12 · w/ Diamante $15 · w/ Runner $15</p><p>Rectangular: Mantel only $8 · w/ Diamante $12 · w/ Runner $12</p></div></>}
      </div></fieldset>

      <fieldset className="formSection"><legend>4. Decor, canopy & dishware / Decoración, carpa y loza</legend><div className="fieldGrid">
        {hasCenterpieces && <label className="wideField"><FieldLabel>Centro de Mesa / Centerpieces — reference photo</FieldLabel><input type="file" name="centerpiecePhoto" accept="image/*" /></label>}
        {hasCenterTable && <label className="wideField"><FieldLabel>Mesa Principal / Center Table Decor — reference photo</FieldLabel><input type="file" name="centerTablePhoto" accept="image/*" /></label>}
        {hasCandyTable && <label className="wideField"><FieldLabel>Mesa de Dulces / Candy Table — reference photo</FieldLabel><input type="file" name="candyTablePhoto" accept="image/*" /></label>}
        {hasCanopy && <label className="wideField"><FieldLabel>Canopy size / Tamaño de carpa</FieldLabel><select name="canopySize" defaultValue=""><option value="">Select / Selecciona</option>{canopySizes.map((size) => <option key={size}>{size}</option>)}</select></label>}
        {hasDishware && <div className="wideField compactChoices"><FieldLabel>Loza Set</FieldLabel>{["Charger", "Servilleta / Napkin", "Copa / Wineglass", "Plato de comida / Food Plate"].map((item) => <label key={item} className="inlineCheck"><input type="checkbox" name="dishware" value={item} /> {item}</label>)}</div>}
      </div></fieldset>

      <fieldset className="formSection"><legend>5. Questions, Comments, Concerns</legend><label className="wideField"><FieldLabel>Questions, Comments, Concerns</FieldLabel><textarea name="notes" rows={5} /></label></fieldset>

      <div className="formSubmitRow"><p>Complete your request / Completa tu solicitud</p><a className="button" href={officialFormUrl} target="_blank" rel="noreferrer">Continue / Continuar</a></div>
    </div>
  );
}
