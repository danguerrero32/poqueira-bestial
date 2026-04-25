// Modules section (the meat of the offer)
const { DiamondOrnament, ArrowRight, ModuleGlyph, StarBurst } = window.SvgArt;
const { SectionHeader } = window.TopSections;

const MODULES = [
  {
    id: 1,
    name: "Tu web profesional",
    sub: "Para los que no tienen web — o la tienen, y da vergüenza ajena.",
    deliverable: "En menos de 7 días tienes una web que parece de restaurante gourmet. Con tu imagen de marca, con el sabor del Poqueira.",
    bullets: [
      "Diseño completo adaptado a tu marca y tu local",
      "Carta o menú digital actualizable",
      "Sistema de reservas online (sin depender del teléfono)",
      "Sección de reviews integrada",
      "Contacto directo · SEO básico configurado",
    ],
    price: "997 €",
    earlyPrice: "597 €",
    note: "Pago único · soporte 12 meses incluido",
    tag: "Más vendido",
  },
  {
    id: 2,
    name: "Google y Tripadvisor trabajando para ti",
    sub: "Para los que aparecen en el mapa pero no aprovechan ni la mitad.",
    deliverable: "La mayoría está en Google. Pero muy pocos tienen su ficha optimizada de verdad. Eso es dinero por el desagüe.",
    bullets: [
      "Google My Business auditado y optimizado de arriba a abajo",
      "Reservas de Google activadas y conectadas con tu sistema",
      "Tripadvisor revisado y puesto a punto",
      "Todo sincronizado para que no tengas que tocarlo",
    ],
    price: "197 €",
    earlyPrice: "197 €",
    note: "Pago único",
  },
  {
    id: 3,
    name: "TPV avanzado con IA",
    sub: "Para los que quieren operativa de restaurante moderno sin volverse locos.",
    deliverable: "Comandas, reservas, takeaway, fichaje… todo desde una pantalla, todo conectado, todo en la nube.",
    bullets: [
      "Alta y configuración completa del sistema",
      "TPV táctil con IA integrada",
      "Reservas y comandas ágiles",
      "Fichaje de empleados — obligatorio por ley, aquí simple",
      "Takeaway con tienda online propia (pago online o en local)",
      "Delivery integrado con múltiples plataformas",
      "Formación in situ + materiales para tu ritmo",
    ],
    price: "397 €",
    earlyPrice: "397 €",
    note: "Pago único · mensualidad TPV desde 50 €/mes (aparte)",
  },
  {
    id: 4,
    name: "Contabilidad, stock y proveedores en piloto automático",
    sub: "El que más horas libera. El que más pesa cuando no lo tienes.",
    deliverable: "Presenta tu contabilidad trimestral en menos de 30 minutos — lo que tardes en fotografiar las facturas.",
    bullets: [
      "Contabilidad: foto a factura → registrado y clasificado",
      "Stock en tiempo real, sin contar nada a mano",
      "Pedidos a proveedores ágiles, con menos errores",
      "Reducción de pérdidas humanas entre el 80 % y el 90 %",
      "Integración con el TPV si tienes el Módulo 3",
    ],
    price: "497 €",
    earlyPrice: "497 €",
    note: "Pago único · mensualidad IA (20 €/mes) cubierta el primer año",
    tag: "El que más libera",
  },
  {
    id: 5,
    name: "La IA como tu copiloto diario",
    sub: "Un asistente invisible que nunca se cansa, nunca se queja, siempre está.",
    deliverable: "No hace falta saber de tecnología. Solo saber pedir. Yo te enseño cómo.",
    bullets: [
      "Sesión de implementación personalizada (presencial + online)",
      "Flujos de trabajo con IA adaptados a tu negocio",
      "Respuestas automáticas a las preguntas que más se repiten",
      "Equipo coordinado: todos con los mismos datos",
      "Procesos documentados para personal nuevo",
    ],
    price: "297 €",
    earlyPrice: "297 €",
    note: "Pago único · mensualidad IA (20 €/mes) cubierta el primer año",
  },
  {
    id: 6,
    name: "Redes sociales: habla al móvil y listo",
    sub: "Para los que saben que deberían publicar más, pero nunca tienen tiempo.",
    deliverable: "Un comando de voz. Una foto o un vídeo. Publicado. Así de simple.",
    bullets: [
      "Configuración del sistema de automatización",
      "Formación práctica: voz + contenido → publicación en segundos",
      "Tono y estilo alineado con tu marca",
      "Calendario editorial básico configurado",
    ],
    price: "297 €",
    earlyPrice: "297 €",
    note: "Pago único · mensualidad IA (20 €/mes) cubierta el primer año",
  },
  {
    id: 7,
    name: "Fotografía y vídeo profesional",
    sub: "Opcional. Para que tu web, menú y redes transmitan de verdad.",
    deliverable: "Una imagen vale más que mil palabras. En restauración, más que mil euros en publicidad.",
    bullets: [
      "Sesión fotográfica profesional",
      "Vídeo para web, redes y catálogo",
      "Edición y entrega en formatos listos",
      "Adaptado a tu marca y carta",
    ],
    price: "desde 350 €",
    earlyPrice: "desde 350 €",
    note: "Presupuesto según necesidad y volumen",
    optional: true,
  },
];

const ModuleCard = ({ m, expanded, onToggle, gold }) => {
  return (
    <article style={{
      borderTop: "1px solid var(--hairline-dark)",
      padding: expanded ? "36px 0 44px" : "32px 0",
      display:"grid",
      gridTemplateColumns: "80px 1fr 280px",
      gap: 32,
      alignItems:"start",
      transition: "background .3s",
      background: expanded ? "rgba(184,153,104,.05)" : "transparent",
      cursor: "pointer",
      position: "relative",
    }} className="module-row" onClick={onToggle}>
      <div style={{display:"flex", flexDirection:"column", gap: 14, alignItems:"flex-start"}}>
        <span className="display" style={{
          fontSize: 38, fontStyle:"italic", color: "var(--gold-deep)", lineHeight: 1, letterSpacing:"-0.02em"
        }}>{String(m.id).padStart(2, "0")}</span>
        <ModuleGlyph id={m.id} color={gold} size={36}/>
      </div>

      <div>
        <div style={{display:"flex", alignItems:"baseline", gap: 14, flexWrap:"wrap"}}>
          <h3 className="display" style={{
            margin: 0, fontWeight: 350, fontSize: "clamp(24px, 2.4vw, 34px)",
            letterSpacing:"-0.02em", lineHeight: 1.1,
          }}>{m.name}</h3>
          {m.tag && <span style={{
            fontFamily:"JetBrains Mono, monospace", fontSize: 10, padding: "4px 10px",
            background: "var(--night)", color: "var(--gold-2)",
            textTransform:"uppercase", letterSpacing:".18em",
          }}>{m.tag}</span>}
          {m.optional && <span style={{
            fontFamily:"JetBrains Mono, monospace", fontSize: 10, padding: "4px 10px",
            border: "1px solid var(--hairline)", color:"var(--gold-deep)",
            textTransform:"uppercase", letterSpacing:".18em",
          }}>Opcional</span>}
        </div>
        <div style={{
          fontFamily:"Instrument Serif, serif", fontStyle:"italic", fontSize: 19, color:"var(--terra)", marginTop: 6,
        }}>{m.sub}</div>

        <p style={{fontSize: 16, color:"#3a4658", marginTop: 14, marginBottom: 0, maxWidth: 620, lineHeight: 1.55}}>
          {m.deliverable}
        </p>

        <div style={{
          maxHeight: expanded ? 600 : 0,
          overflow: "hidden",
          transition: "max-height .5s ease",
        }}>
          <ul style={{
            listStyle:"none", margin: "22px 0 0", padding: 0,
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 28px",
            maxWidth: 720,
          }}>
            {m.bullets.map((b, i) => (
              <li key={i} style={{display:"flex", alignItems:"flex-start", gap: 10, fontSize: 14, lineHeight: 1.5, color:"var(--ink)"}}>
                <span style={{color: gold, marginTop: 8, flexShrink: 0}}>
                  <svg width="8" height="8" viewBox="0 0 8 8"><path d="M4 0 L8 4 L4 8 L0 4 Z" fill="currentColor"/></svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{textAlign:"right", display:"flex", flexDirection:"column", alignItems:"flex-end", gap: 4}}>
        {m.earlyPrice !== m.price && (
          <span className="mono" style={{fontSize: 11, color:"var(--gold-deep)", textTransform:"uppercase", letterSpacing:".15em"}}>
            <span style={{textDecoration:"line-through", opacity:.55}}>{m.price}</span> · 5 primeros
          </span>
        )}
        <div className="display" style={{
          fontSize: m.earlyPrice.startsWith("desde") ? 30 : 44,
          fontWeight: 350, lineHeight: 1, color:"var(--ink)", letterSpacing:"-0.02em",
        }}>{m.earlyPrice}</div>
        <div style={{fontSize: 12, color:"#5a6478", maxWidth: 240, marginTop: 4}}>{m.note}</div>
        <button onClick={(e) => { e.stopPropagation(); onToggle(); }} style={{
          marginTop: 14,
          background: "transparent", border: "1px solid var(--hairline-dark)",
          padding: "8px 14px", fontFamily:"JetBrains Mono, monospace",
          fontSize: 11, letterSpacing:".15em", textTransform:"uppercase",
          cursor: "pointer", color: "var(--ink)",
          display:"inline-flex", alignItems:"center", gap: 8,
        }}>
          {expanded ? "Ocultar" : "Detalles"}
          <span style={{transform: expanded ? "rotate(45deg)" : "none", transition:"transform .3s"}}>+</span>
        </button>
      </div>
    </article>
  );
};

const ModulesSection = ({ goldHex }) => {
  const [expanded, setExpanded] = React.useState(new Set([1, 4]));
  const [selected, setSelected] = React.useState(new Set([1, 4]));

  const toggle = (id) => {
    const next = new Set(expanded);
    next.has(id) ? next.delete(id) : next.add(id);
    setExpanded(next);
  };

  const toggleSelect = (id) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };

  // calculate budget (skip module 7 — variable)
  const budget = MODULES.filter(m => selected.has(m.id) && !m.optional)
    .reduce((sum, m) => sum + parseInt(m.earlyPrice.replace(/\D/g,""), 10), 0);
  const discount = Math.round(budget * 0.10);

  return (
    <section id="modulos" style={{padding: "140px 0 120px", background: "var(--paper)"}}>
      <div className="container">
        <SectionHeader num="IV" label="Los módulos"/>
        <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr", gap: 80, marginTop: 56, alignItems:"end"}} className="two-col">
          <h2 className="display" style={{
            margin: 0, fontWeight: 350, fontSize: "clamp(40px, 5.4vw, 76px)", lineHeight: 1.0, letterSpacing:"-0.025em",
          }}>
            Tú eliges lo que necesitas.<br/>
            <span style={{fontStyle:"italic", color: "var(--gold-deep)"}}>Yo me encargo del resto.</span>
          </h2>
          <p style={{fontSize: 17, lineHeight: 1.6, margin: 0, color:"#3a4658"}}>
            No hay paquetes cerrados que te obliguen a pagar por cosas que no quieres. Cada negocio es distinto. Eliges los módulos que te hacen falta y los combinamos a tu medida.
          </p>
        </div>

        {/* Module list */}
        <div style={{marginTop: 64, borderBottom: "1px solid var(--hairline-dark)"}}>
          {MODULES.map(m => (
            <ModuleCard key={m.id} m={m} expanded={expanded.has(m.id)} onToggle={() => toggle(m.id)} gold={goldHex}/>
          ))}
        </div>

        {/* Configurator */}
        <div style={{
          marginTop: 64,
          background: "var(--night)",
          color: "var(--paper)",
          padding: "44px 56px",
          display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems:"center",
          position: "relative",
        }} className="value-bar">
          <div>
            <div className="eyebrow" style={{color:"var(--gold-2)"}}>Configura tu plan</div>
            <h3 className="display" style={{margin: "10px 0 22px", fontWeight: 350, fontSize: 32, fontStyle:"italic", lineHeight: 1.15}}>
              Marca los módulos y mira tu presupuesto al instante.
            </h3>
            <div style={{display:"flex", flexWrap:"wrap", gap: 8}}>
              {MODULES.map(m => {
                const on = selected.has(m.id);
                return (
                  <button key={m.id} onClick={() => toggleSelect(m.id)} style={{
                    padding: "10px 16px",
                    border: `1px solid ${on ? "var(--gold)" : "rgba(184,153,104,.3)"}`,
                    background: on ? "var(--gold)" : "transparent",
                    color: on ? "var(--night)" : "var(--paper)",
                    fontFamily:"Inter, sans-serif",
                    fontSize: 13, fontWeight: 500,
                    cursor:"pointer",
                    transition: "all .2s",
                    display:"inline-flex", alignItems:"center", gap: 8,
                  }}>
                    <span style={{
                      width: 14, height: 14, border: `1px solid ${on ? "var(--night)" : "var(--gold-2)"}`,
                      display:"inline-flex", alignItems:"center", justifyContent:"center",
                      background: on ? "var(--night)" : "transparent",
                    }}>
                      {on && <span style={{color:"var(--gold)", fontSize: 10, lineHeight: 1}}>✓</span>}
                    </span>
                    {String(m.id).padStart(2,"0")} · {m.name.split(" ").slice(0,3).join(" ")}{m.name.split(" ").length > 3 ? "…" : ""}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{
            borderLeft: "1px solid rgba(184,153,104,.3)",
            paddingLeft: 48, minWidth: 280,
          }}>
            <div className="eyebrow" style={{color:"var(--gold-2)"}}>Tu inversión estimada</div>
            <div className="display" style={{fontSize: 56, fontWeight: 350, color:"var(--paper)", lineHeight: 1, marginTop: 10, letterSpacing:"-0.02em"}}>
              {budget.toLocaleString("es-ES")} €
            </div>
            <div style={{fontSize: 13, color:"var(--gold-2)", marginTop: 8}}>
              Pago único · −{discount.toLocaleString("es-ES")} € si pagas todo de una
            </div>
            <a href="#contacto" className="btn btn-gold" style={{marginTop: 22}}>
              Reservar plazas <ArrowRight size={14} stroke="var(--night)"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

window.ModulesSection = ModulesSection;
