// Bottom sections: Bonus, Payment, CTA, Footer
const { DiamondOrnament, ArrowRight, StarBurst } = window.SvgArt;
const { SectionHeader, KeenImpactLogo } = window.TopSections;

// ============ BONUS ============
const BonusSection = ({ showCountdown }) => {
  const [tl, setTl] = React.useState({d:0,h:0,m:0,s:0});

  React.useEffect(() => {
    const target = new Date("2026-05-10T23:59:59+02:00").getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTl({d,h,m,s});
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="bonus" className="grain" style={{
      padding: "140px 0",
      background: "linear-gradient(160deg, #2a1f15 0%, #0E1A2B 60%, #0E1A2B 100%)",
      color:"var(--paper)",
      position:"relative", overflow:"hidden",
    }}>
      {/* Big italic background number */}
      <div className="display" style={{
        position:"absolute", right: -30, top: 60,
        fontSize: 460, fontStyle:"italic", fontWeight: 200,
        color:"rgba(184,153,104,.05)", lineHeight: .8, letterSpacing:"-0.04em",
        userSelect:"none", pointerEvents:"none",
      }}>5</div>

      <div className="container" style={{position:"relative"}}>
        <div style={{display:"flex", alignItems:"center", gap: 18}}>
          <span className="display" style={{
            fontStyle:"italic", fontWeight: 300, fontSize: 56,
            color:"var(--gold-2)", lineHeight: 1, letterSpacing:"-0.02em",
          }}>V</span>
          <span style={{height: 1, width: 60, background:"rgba(184,153,104,.4)"}}/>
          <span className="eyebrow" style={{color:"var(--gold-2)"}}>Bonus fundador</span>
          <span className="pill" style={{borderColor:"rgba(74,222,128,.4)", color:"#9ae5b1", marginLeft: 12}}>
            <span className="dot live"/> 3 plazas restantes
          </span>
        </div>

        <h2 className="display" style={{
          fontWeight: 350, fontSize:"clamp(46px, 6.4vw, 96px)", lineHeight: .98,
          margin: "44px 0 0", letterSpacing:"-0.025em",
          maxWidth: 1100,
        }}>
          Solo para los <span style={{fontStyle:"italic", color:"var(--gold-2)"}}>5 primeros.</span><br/>
          Solo hasta el <span style={{fontStyle:"italic", color:"var(--gold-2)"}}>10 de mayo.</span>
        </h2>

        {showCountdown && (
          <div style={{
            marginTop: 48,
            display:"grid", gridTemplateColumns:"repeat(4, max-content)", gap: 16,
            alignItems: "end",
          }}>
            {[
              ["Días", tl.d],
              ["Horas", tl.h],
              ["Minutos", tl.m],
              ["Segundos", tl.s],
            ].map(([l, v], i) => (
              <div key={i} style={{
                border:"1px solid rgba(184,153,104,.35)",
                padding: "20px 28px", minWidth: 130, textAlign:"center",
                background:"rgba(20,35,57,.5)",
              }}>
                <div className="display" style={{
                  fontSize: 64, fontWeight: 300, lineHeight: 1, color:"var(--gold-2)",
                  fontVariantNumeric: "tabular-nums", letterSpacing:"-0.02em",
                }}>{String(v).padStart(2,"0")}</div>
                <div className="mono" style={{fontSize: 11, marginTop: 8, color:"rgba(244,239,230,.6)", textTransform:"uppercase", letterSpacing:".22em"}}>{l}</div>
              </div>
            ))}
          </div>
        )}

        <div style={{display:"grid", gridTemplateColumns:"1.1fr .9fr", gap: 80, marginTop: 64, alignItems:"start"}} className="two-col">
          <div>
            <p style={{fontSize: 19, lineHeight: 1.6, color:"rgba(244,239,230,.85)", margin: 0, fontWeight: 300}}>
              Estamos preparando algo que va a cambiar la manera en que los visitantes descubren y consumen en el <strong style={{color:"var(--gold-2)"}}>Barranco del Poqueira</strong>.
            </p>
            <p style={{fontSize: 17, lineHeight: 1.65, color:"rgba(244,239,230,.7)", marginTop: 22}}>
              Una plataforma pensada para que el turismo que llega aquí se integre de verdad con la economía local. Que consuma de forma consciente. Que se lleve una experiencia que no encuentran en ningún otro sitio. Y que vuelva.
            </p>
            <p style={{fontSize: 17, lineHeight: 1.65, color:"rgba(244,239,230,.7)", marginTop: 16}}>
              No podemos decir más por ahora. El lanzamiento está previsto para <strong style={{color:"var(--paper)"}}>julio de 2026</strong>.
            </p>
          </div>

          <div style={{
            border: "1px solid rgba(184,153,104,.4)",
            padding: 36,
            background: "rgba(184,153,104,.08)",
          }}>
            <div className="eyebrow" style={{color:"var(--gold-2)"}}>Lo que entra de regalo</div>
            <ul style={{listStyle:"none", margin: "16px 0 0", padding: 0}}>
              {[
                ["Early adopter", "Posicionamiento preferente 12 meses"],
                ["Presencia destacada", "En la portada de la plataforma"],
                ["Acceso anticipado", "Antes que tu competencia"],
                ["Tarifa fundador", "Precio congelado — sin subidas"],
              ].map(([t, d], i) => (
                <li key={i} style={{
                  display:"grid", gridTemplateColumns:"24px 1fr", gap: 14,
                  padding: "16px 0", borderTop: i === 0 ? "none" : "1px solid rgba(184,153,104,.2)",
                  alignItems:"baseline",
                }}>
                  <DiamondOrnament size={16} color="var(--gold-2)"/>
                  <div>
                    <div style={{fontWeight: 600, color:"var(--paper)", fontSize: 15}}>{t}</div>
                    <div style={{fontSize: 13, color:"rgba(244,239,230,.65)", marginTop: 2}}>{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          marginTop: 80, padding: "36px 0", borderTop: "1px solid rgba(184,153,104,.25)", borderBottom: "1px solid rgba(184,153,104,.25)",
          display:"flex", justifyContent:"space-between", alignItems:"center", gap: 24, flexWrap:"wrap",
        }}>
          <div className="display" style={{fontSize: 28, fontStyle:"italic", fontWeight: 300, lineHeight: 1.25, maxWidth: 720, letterSpacing:"-0.01em"}}>
            ¿Eres de los que se adelantan,<br/>
            <span style={{color:"var(--gold-2)"}}>o de los que llegan cuando ya no hay sitio?</span>
          </div>
          <a href="#contacto" className="btn btn-gold">
            Reservar mi plaza fundador <ArrowRight size={16} stroke="var(--night)"/>
          </a>
        </div>
      </div>
    </section>
  );
};

// ============ PAYMENT ============
const PaymentSection = () => (
  <section style={{padding: "120px 0", background: "var(--paper-2)"}}>
    <div className="container">
      <SectionHeader num="VI" label="Condiciones de pago"/>
      <h2 className="display" style={{
        fontWeight: 350, fontSize:"clamp(36px, 4.8vw, 64px)", lineHeight: 1.05,
        margin: "44px 0 56px", letterSpacing:"-0.025em",
      }}>
        <span style={{fontStyle:"italic"}}>Sin excusas</span> para decir que no.
      </h2>

      <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap: 0, border: "1px solid var(--hairline-dark)"}} className="payment-grid">
        {[
          {
            tag: "Opción A · Recomendada",
            title: "Pago único",
            value: "−10 %",
            valueLabel: "descuento sobre el total",
            body: "Lo pagas todo al confirmar y te ahorras un diez por ciento. Lo más limpio para ambas partes.",
          },
          {
            tag: "Opción B · Equilibrada",
            title: "50 / 50",
            value: "0 % interés",
            valueLabel: "sin recargo, sin letras",
            body: "Reservas con la mitad. Pagas la otra mitad cuando todo esté funcionando como te prometí.",
          },
          {
            tag: "Opción C · Cómoda",
            title: "Financiado",
            value: "Klarna",
            valueLabel: "fracciona en cómodos plazos",
            body: "Si quieres repartir el pago en mensualidades, lo hacemos a través de Klarna. Aprobación en minutos.",
          },
        ].map((p, i) => (
          <div key={i} style={{
            padding: 36,
            borderRight: i < 2 ? "1px solid var(--hairline-dark)" : "none",
            background: i === 0 ? "var(--night)" : "transparent",
            color: i === 0 ? "var(--paper)" : "var(--ink)",
            position: "relative",
          }}>
            <div className="eyebrow" style={{color: i === 0 ? "var(--gold-2)" : "var(--gold-deep)"}}>{p.tag}</div>
            <div className="display" style={{
              fontSize: 32, fontWeight: 350, marginTop: 14, fontStyle:"italic", letterSpacing:"-0.01em",
            }}>{p.title}</div>
            <div className="display" style={{
              fontSize: 64, fontWeight: 350, marginTop: 24, lineHeight: 1, color: i === 0 ? "var(--gold-2)" : "var(--ink)",
              letterSpacing:"-0.025em",
            }}>{p.value}</div>
            <div style={{fontSize: 13, marginTop: 6, color: i === 0 ? "rgba(244,239,230,.6)" : "#5a6478", textTransform:"uppercase", letterSpacing:".12em", fontFamily:"JetBrains Mono, monospace"}}>{p.valueLabel}</div>
            <p style={{fontSize: 14, lineHeight: 1.6, marginTop: 24, color: i === 0 ? "rgba(244,239,230,.78)" : "#3a4658"}}>{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============ CTA ============
const CtaSection = () => (
  <section id="contacto" className="grain" style={{
    padding: "140px 0 120px",
    background: "linear-gradient(180deg, #0E1A2B 0%, #142339 100%)",
    color:"var(--paper)", position:"relative", overflow:"hidden"
  }}>
    <div className="container" style={{position:"relative"}}>
      <SectionHeader num="VII" label="Siguiente paso" inverted/>

      <h2 className="display" style={{
        fontWeight: 350, fontSize:"clamp(46px, 6.6vw, 100px)", lineHeight: .98,
        margin: "48px 0 0", letterSpacing:"-0.025em",
        maxWidth: 1100,
      }}>
        El próximo paso es<br/>
        <span style={{fontStyle:"italic", color:"var(--gold-2)"}}>una conversación,</span><br/>
        sin compromiso.
      </h2>

      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap: 80, marginTop: 64}} className="two-col">
        <div>
          <p style={{fontSize: 19, lineHeight: 1.6, color:"rgba(244,239,230,.82)", margin: 0, fontWeight: 300}}>
            Cuéntame cómo funciona tu negocio ahora mismo. Yo te digo qué módulos tienen más sentido para ti y qué puedes esperar desde los primeros días.
          </p>
          <p style={{fontFamily:"Instrument Serif, serif", fontStyle:"italic", fontSize: 26, lineHeight: 1.4, marginTop: 28, color:"var(--gold-2)"}}>
            Sin jerga técnica. Sin presión. Solo dos personas del valle hablando de cómo hacer las cosas mejor.
          </p>

          <div style={{marginTop: 44, display:"flex", flexDirection:"column", gap: 0, border:"1px solid rgba(184,153,104,.3)"}}>
            {[
              ["Escríbeme", "WhatsApp", "+34 600 000 000"],
              ["Llámame", "Teléfono", "+34 600 000 000"],
              ["Visíteme", "En el valle", "Bubión · cita previa"],
              ["E-mail", "Correo", "dan@keenimpact.es"],
            ].map(([k, l, v], i) => (
              <a key={i} href="#" style={{
                padding: "20px 24px",
                borderTop: i === 0 ? "none" : "1px solid rgba(184,153,104,.2)",
                display: "grid", gridTemplateColumns: "120px 110px 1fr auto", gap: 16, alignItems:"center",
                color:"var(--paper)", textDecoration:"none",
                transition: "background .2s",
              }} onMouseEnter={e=>e.currentTarget.style.background="rgba(184,153,104,.08)"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                <span className="display" style={{fontSize: 20, fontStyle:"italic"}}>{k}</span>
                <span className="mono" style={{fontSize: 11, color:"var(--gold-2)", textTransform:"uppercase", letterSpacing:".18em"}}>{l}</span>
                <span style={{fontSize: 16, color:"rgba(244,239,230,.85)"}}>{v}</span>
                <ArrowRight size={14} stroke="var(--gold-2)"/>
              </a>
            ))}
          </div>
        </div>

        {/* Mini form */}
        <div style={{
          background: "var(--paper)",
          color: "var(--ink)",
          padding: 40,
          border: "1px solid var(--gold)",
          position:"relative",
        }}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <div className="eyebrow" style={{color:"var(--gold-deep)"}}>Pide tu cita</div>
            <StarBurst color="var(--gold)"/>
          </div>
          <h3 className="display" style={{margin: "12px 0 28px", fontSize: 30, fontStyle:"italic", fontWeight: 350, lineHeight: 1.15}}>
            Cuéntame quién eres y qué te quita el sueño.
          </h3>

          <form onSubmit={e => { e.preventDefault(); alert("Gracias. Te respondo en menos de 24 h."); }}>
            <div style={{display:"flex", flexDirection:"column", gap: 18}}>
              <Field label="Tu nombre" placeholder="Cómo te llamas"/>
              <Field label="Tu negocio" placeholder="Nombre del local · Bubión / Capileira / Pampaneira"/>
              <Field label="Cómo prefieres que te conteste" placeholder="Teléfono o e-mail"/>
              <div>
                <div className="eyebrow" style={{color:"var(--gold-deep)", marginBottom: 8}}>¿Qué te quita el sueño?</div>
                <textarea rows={3} placeholder="Cuéntamelo en 2 líneas — sin formalismos." style={{
                  width:"100%", border:"1px solid var(--hairline-dark)", padding: "12px 14px",
                  fontFamily:"Inter, sans-serif", fontSize: 15, resize:"vertical", background:"transparent",
                  outline:"none",
                }} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="var(--hairline-dark)"}/>
              </div>
              <button type="submit" className="btn btn-gold" style={{justifyContent:"center", marginTop: 8}}>
                Enviar — sin compromiso <ArrowRight size={14} stroke="var(--night)"/>
              </button>
              <div className="mono" style={{fontSize: 10, color:"#5a6478", textAlign:"center", letterSpacing:".15em", textTransform:"uppercase"}}>
                Respuesta en menos de 24 h hábiles
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Field = ({ label, placeholder }) => (
  <div>
    <div className="eyebrow" style={{color:"var(--gold-deep)", marginBottom: 8}}>{label}</div>
    <input placeholder={placeholder} style={{
      width:"100%", border:"none", borderBottom:"1px solid var(--hairline-dark)",
      padding: "8px 0", fontFamily:"Inter, sans-serif", fontSize: 16,
      background:"transparent", outline:"none",
    }} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="var(--hairline-dark)"}/>
  </div>
);

// ============ FOOTER ============
const Footer = () => (
  <footer style={{padding: "60px 0 40px", background: "var(--night)", color: "rgba(244,239,230,.6)", borderTop:"1px solid rgba(184,153,104,.2)"}}>
    <div className="container" style={{display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap: 24}}>
      <div style={{display:"flex", alignItems:"center", gap: 18}}>
        <KeenImpactLogo dark/>
        <span style={{height: 18, width: 1, background:"rgba(184,153,104,.3)"}}/>
        <span className="mono" style={{fontSize: 11, letterSpacing:".18em", textTransform:"uppercase"}}>Bubión · Sierra Nevada</span>
      </div>
      <div style={{fontSize: 13}}>© 2026 Keen Impact · Dan Guerrero · Diseñado en el valle</div>
      <div style={{display:"flex", gap: 24, fontSize: 13}}>
        <a href="#" style={{color:"inherit", textDecoration:"none"}}>Aviso legal</a>
        <a href="#" style={{color:"inherit", textDecoration:"none"}}>Privacidad</a>
        <a href="#" style={{color:"inherit", textDecoration:"none"}}>Cookies</a>
      </div>
    </div>
  </footer>
);

window.BottomSections = { BonusSection, PaymentSection, CtaSection, Footer };
