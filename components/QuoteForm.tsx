"use client";

import { FormEvent, useMemo, useState } from "react";

const chairTypes = ["Regular", "Resin / Resina", "Chiavari"];
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
  const [submitted, setSubmitted] = useState(false);

  const hasChairs = selectedServices.includes("Chairs / Sillas");
  const hasLinens = selectedServices.includes("Linens / Manteles");
  const hasCanopy = selectedServices.some((item) => item.startsWith("Canopy"));
  const hasDishware = selectedServices.includes("Dishware / Loza");

  const serviceCount = useMemo(() => selectedServices.length, [selectedServices]);

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="quoteSuccess" role="status">
        <p className="eyebrow dark">QUOTE DETAILS READY • DATOS LISTOS</p>
        <h3>Thank you — your event details are organized.</h3>
        <p>
          The website form itself is ready. We still need to connect the final Send button to
          Decoraciones Coco&apos;s preferred inbox or messaging destination before customers can submit it.
        </p>
        <button className="button" type="button" onClick={() => setSubmitted(false)}>
          Edit Request / Editar solicitud
        </button>
      </div>
    );
  }

  return (
    <form className="quoteForm" onSubmit={handleSubmit}>
      <div className="formIntro">
        <div>
          <p className="eyebrow dark">REQUEST A QUOTE • SOLICITA UNA COTIZACIÓN</p>
          <h2>Tell us about your event.</h2>
        </div>
        <p>
          Fill in what you know. We&apos;ll use these details to prepare your event quote.
          <br />
          Llena la información que tengas para preparar tu cotización.
        </p>
      </div>

      <fieldset className="formSection">
        <legend>1. Event details / Detalles del evento</legend>
        <div className="fieldGrid">
          <label>
            <FieldLabel>Name / Nombre *</FieldLabel>
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            <FieldLabel>Phone number / Número de teléfono *</FieldLabel>
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label className="wideField">
            <FieldLabel>Event address / Domicilio del evento</FieldLabel>
            <input name="address" autoComplete="street-address" />
          </label>
          <label>
            <FieldLabel>Date / Fecha *</FieldLabel>
            <input name="date" type="date" required />
          </label>
          <label>
            <FieldLabel>Theme / Tema</FieldLabel>
            <input name="theme" placeholder="Colors, theme, occasion..." />
          </label>
        </div>
      </fieldset>

      <fieldset className="formSection">
        <legend>2. What do you need? / ¿Qué necesitas?</legend>
        <p className="sectionHint">Choose all that apply. Selecciona todo lo que necesites.</p>
        <div className="choiceGrid">
          {serviceOptions.map((service) => {
            const checked = selectedServices.includes(service);
            return (
              <label className={`choiceCard ${checked ? "selected" : ""}`} key={service}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleService(service)}
                />
                <span>{service}</span>
              </label>
            );
          })}
        </div>
        <p className="selectionCount">{serviceCount} selected / seleccionados</p>
      </fieldset>

      <fieldset className="formSection">
        <legend>3. Rental details / Detalles de renta</legend>
        <div className="fieldGrid">
          <label>
            <FieldLabel>Table type / Tipo de mesa</FieldLabel>
            <select name="tableType" defaultValue="">
              <option value="">Select / Selecciona</option>
              <option>Round — 8 people</option>
              <option>Round — 10 people</option>
              <option>Rectangle — 6 ft</option>
            </select>
          </label>
          <label>
            <FieldLabel>Number of tables / Número de mesas</FieldLabel>
            <input name="tableQuantity" type="number" min="0" inputMode="numeric" />
          </label>

          {hasChairs && (
            <>
              <label>
                <FieldLabel>Chair type / Tipo de silla</FieldLabel>
                <select name="chairType" defaultValue="">
                  <option value="">Select / Selecciona</option>
                  {chairTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </label>
              <label>
                <FieldLabel>Number of chairs / # de sillas</FieldLabel>
                <input name="chairQuantity" type="number" min="0" inputMode="numeric" />
              </label>
              <label>
                <FieldLabel>Chiavari color / Color Chiavari</FieldLabel>
                <select name="chiavariColor" defaultValue="">
                  <option value="">If applicable / Si aplica</option>
                  {chiavariColors.map((color) => <option key={color}>{color}</option>)}
                </select>
              </label>
              <label>
                <FieldLabel>Special seating / Sillas especiales</FieldLabel>
                <select name="specialChair" defaultValue="">
                  <option value="">None / Ninguna</option>
                  <option>Royal chair — Gold</option>
                  <option>Royal chair — Silver</option>
                  <option>Kid chairs — Regular</option>
                </select>
              </label>
            </>
          )}

          {hasLinens && (
            <>
              <label>
                <FieldLabel>Table cloth type / Tipo de mantel</FieldLabel>
                <select name="linenType" defaultValue="">
                  <option value="">Select / Selecciona</option>
                  <option>Round</option>
                  <option>Rectangular</option>
                </select>
              </label>
              <label>
                <FieldLabel>Color(s) / Color(es)</FieldLabel>
                <input name="linenColors" />
              </label>
              <label>
                <FieldLabel>Number of linens / # de manteles</FieldLabel>
                <input name="linenQuantity" type="number" min="0" inputMode="numeric" />
              </label>
              <label>
                <FieldLabel>Linen style / Estilo</FieldLabel>
                <select name="linenStyle" defaultValue="">
                  <option value="">Select / Selecciona</option>
                  <option>Mantel only</option>
                  <option>Mantel with Diamante</option>
                  <option>Mantel with Runner</option>
                </select>
              </label>
            </>
          )}

          {hasCanopy && (
            <label className="wideField">
              <FieldLabel>Canopy size / Tamaño de carpa</FieldLabel>
              <select name="canopySize" defaultValue="">
                <option value="">Select / Selecciona</option>
                {canopySizes.map((size) => <option key={size}>{size}</option>)}
              </select>
            </label>
          )}

          {hasDishware && (
            <div className="wideField compactChoices">
              <FieldLabel>Dishware set / Loza set</FieldLabel>
              {[
                "Charger",
                "Napkin / Servilleta",
                "Wineglass / Copa",
                "Food plate / Plato de comida",
              ].map((item) => (
                <label key={item} className="inlineCheck">
                  <input type="checkbox" name="dishware" value={item} /> {item}
                </label>
              ))}
            </div>
          )}
        </div>
      </fieldset>

      <fieldset className="formSection">
        <legend>4. Inspiration & notes / Inspiración y notas</legend>
        <div className="fieldGrid">
          <label className="wideField">
            <FieldLabel>Questions, comments, concerns / Preguntas o comentarios</FieldLabel>
            <textarea name="notes" rows={5} placeholder="Tell us anything else we should know..." />
          </label>
          <div className="wideField uploadNotice">
            <strong>Inspiration photos / Fotos de inspiración</strong>
            <p>
              Photo uploads will be enabled when the final quote-delivery system is connected.
              For now, customers can mention what they want here and share images during follow-up.
            </p>
          </div>
        </div>
      </fieldset>

      <div className="formSubmitRow">
        <p>
          No request is sent yet — this button currently lets us test the finished customer experience.
        </p>
        <button className="button" type="submit">Review Request / Revisar solicitud</button>
      </div>
    </form>
  );
}
