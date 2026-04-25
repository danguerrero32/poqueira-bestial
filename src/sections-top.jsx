// Top sections: Nav, Hero, Pain, Value, About Dan
const { DiamondOrnament, StarBurst, ArrowRight, PlayCircle, RidgeBackdrop, RidgeLine, SunDial } = window.SvgArt;

const Nav = () =>
<nav style={{
  position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
  display: "flex", alignItems: "center", justifyContent: "space-between",
  padding: "22px 40px",
  color: "var(--paper)"
}}>
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <img src="assets/keen-impact-logo.png" alt="Keen Impact" style={{ height: 32, filter: "brightness(0) invert(1) sepia(1) saturate(0) brightness(1.05)", display: "none" }} />
      {/* Inline SVG version that picks up gold cleanly on dark */}
      <KeenImpactLogo dark />
    </div>
    <div style={{ display: "flex", gap: 32, fontSize: 13, letterSpacing: ".02em" }} className="nav-links">
      <a href="#dolor" style={navLink}>Diagnóstico</a>
      <a href="#valor" style={navLink}>Propuesta</a>
      <a href="#modulos" style={navLink}>Módulos</a>
      <a href="#bonus" style={navLink}>Bonus fundador</a>
      <a href="#contacto" style={navLink}>Contacto</a>
    </div>
    <a href="#contacto" className="btn btn-ghost" style={{ padding: "12px 20px", fontSize: 13 }}>
      Pide tu cita <ArrowRight size={14} />
    </a>
  </nav>;

const navLink = { color: "rgba(244,239,230,.78)", textDecoration: "none", transition: "color .2s", fontWeight: 500 };

const KeenImpactLogo = ({ dark = false }) =>
<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <img src="assets/keen-impact-logo.png" alt=""
  style={{
    height: 30,
    filter: dark ? "brightness(0) invert(1)" : "none",
    opacity: dark ? 0.92 : 1
  }} />
  
  </div>;


// ============ HERO ============
const Hero = () => {
  const [time, setTime] = React.useState("");
  React.useEffect(() => {
    const update = () => {
      const now = new Date();
      const opts = { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Madrid" };
      setTime(now.toLocaleTimeString("es-ES", opts));
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="grain" style={{
      position: "relative",
      background: "linear-gradient(180deg, #0E1A2B 0%, #142339 70%, #0E1A2B 100%)",
      color: "var(--paper)",
      overflow: "hidden",
      paddingBottom: 0
    }}>
      <Nav />
      {/* Top hairline tickers */}
      <div style={{
        position: "absolute", top: 84, left: 0, right: 0,
        borderTop: "1px solid rgba(184,153,104,.18)",
        borderBottom: "1px solid rgba(184,153,104,.18)",
        padding: "10px 40px",
        display: "flex", justifyContent: "space-between",
        fontFamily: "JetBrains Mono, monospace", fontSize: 11,
        letterSpacing: ".22em", textTransform: "uppercase",
        color: "rgba(244,239,230,.55)",
        zIndex: 5
      }}>
        <span>Bubión · Capileira · Pampaneira</span>
        <span style={{ display: "flex", gap: 24 }}>
          <span>1296 m · Sierra Nevada</span>
          <span>·</span>
          <span>{time} CET</span>
          <span>·</span>
          <span style={{ color: "var(--gold-2)" }}>Plazas fundador 5 / abierta</span>
        </span>
      </div>

      <div className="container" style={{ paddingTop: 170, paddingBottom: 80, position: "relative", zIndex: 4 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 80, alignItems: "start" }} className="hero-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <DiamondOrnament size={16} />
              <span className="eyebrow" style={{ color: "var(--gold-2)" }}>Para restauración del Barranco del Poqueira</span>
            </div>

            <h1 className="display" style={{
              fontWeight: 350,
              fontSize: "clamp(46px, 6.4vw, 96px)",
              lineHeight: 0.98,
              margin: 0,
              letterSpacing: "-0.025em"
            }}>
              Tu negocio<br />
              trabajando<br />
              <span style={{ fontStyle: "italic", fontWeight: 300, color: "var(--gold-2)" }}>mientras descansas.</span>
            </h1>

            <div style={{ maxWidth: 560, marginTop: 36 }}>
              <p style={{ fontSize: 19, lineHeight: 1.55, color: "rgba(244,239,230,.78)", margin: 0, fontWeight: 300 }}>
                El genio de la lámpara existe, y está disponible para ti. La operativa fácil y ágil que siempre soñaste: gestión casi automatizada, presencia digital de primera y un equipo de asistentes invisibles trabajando casi gratis para ti.
                <span style={{ color: "var(--paper)" }}> Sin tecnicismos. Sin complicaciones.</span> Desde los primeros días.
              </p>
            </div>

            <div style={{ display: "flex", gap: 16, marginTop: 44, alignItems: "center", flexWrap: "wrap" }}>
              <a href="#contacto" className="btn btn-gold">
                Quiero saber más <ArrowRight size={16} stroke="var(--night)" />
              </a>
              <a href="#modulos" className="btn btn-ghost">
                Ver los 7 módulos
              </a>
            </div>

            {/* Stat strip */}
            <div style={{
              marginTop: 72,
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
              borderTop: "1px solid rgba(184,153,104,.25)",
              borderBottom: "1px solid rgba(184,153,104,.25)"
            }}>
              {[
              ["18+", "años diseñando sistemas"],
              ["2 M€", "valor en productos creados"],
              ["7 días", "para tu nueva web"],
              ["−85%", "errores administrativos"]].
              map(([n, l], i) =>
              <div key={i} style={{
                padding: "20px 20px 20px 0",
                borderRight: i < 3 ? "1px solid rgba(184,153,104,.15)" : "none",
                paddingLeft: i === 0 ? 0 : 20
              }}>
                  <div className="display" style={{ fontSize: 36, fontWeight: 350, color: "var(--gold-2)", lineHeight: 1, letterSpacing: "-0.02em" }}>{n}</div>
                  <div style={{ fontSize: 11, marginTop: 8, color: "rgba(244,239,230,.55)", textTransform: "uppercase", letterSpacing: ".15em", fontFamily: "JetBrains Mono, monospace" }}>{l}</div>
                </div>
              )}
            </div>
          </div>

          {/* Right column: portrait + ornament card */}
          <div style={{ position: "relative" }}>
            <div style={{
              position: "relative",
              border: "1px solid rgba(184,153,104,.35)",
              padding: 24,
              background: "rgba(20,35,57,.4)",
              backdropFilter: "blur(2px)"
            }}>
              <div className="eyebrow" style={{ color: "var(--gold-2)", display: "flex", justifyContent: "space-between" }}>
                <span>Dossier № 01</span>
                <span>Bubión, 2026</span>
              </div>
              <div style={{
                marginTop: 20,
                position: "relative",
                aspectRatio: "5 / 6",
                background: "linear-gradient(160deg, #1c2c44 0%, #0E1A2B 100%)",
                overflow: "hidden"
              }}>
                {/* Sun dial bg */}
                <div style={{ position: "absolute", top: -40, right: -40, opacity: .35 }}>
                  <SunDial size={300} />
                </div>
                {/* Ridge backdrop */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%" }}>
                  <RidgeBackdrop />
                </div>
                <img src="assets/dan-guerrero.png" alt="Dan Guerrero" style={{
                  position: "absolute", bottom: 0, right: -10, width: "115%", height: "auto", maxHeight: "100%",
                  objectFit: "contain", objectPosition: "bottom right",
                  filter: "drop-shadow(0 30px 60px rgba(0,0,0,.5))"
                }} />
                <div style={{ position: "absolute", top: 18, left: 18, display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="pill" style={{ color: "var(--paper)" }}>
                    <span className="dot live" /> En el valle
                  </span>
                </div>
              </div>
              <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div style={{ fontFamily: "Instrument Serif, serif", fontSize: 26, fontStyle: "italic", letterSpacing: "-0.01em" }}>Dan Guerrero</div>
                  <div className="eyebrow" style={{ color: "rgba(244,239,230,.55)", marginTop: 4 }}>Tu vecino, tu consultor</div>
                </div>
                <StarBurst size={18} color="var(--gold)" />
              </div>
            </div>

            {/* Floating quote tag */}
            <div style={{
              position: "absolute",
              bottom: -28, left: -28,
              background: "var(--paper)", color: "var(--ink)",
              padding: "14px 18px",
              maxWidth: 240,
              fontFamily: "Instrument Serif, serif",
              fontStyle: "italic", fontSize: 17, lineHeight: 1.35,
              border: "1px solid var(--hairline)",
              boxShadow: "0 30px 60px -20px rgba(0,0,0,.5)"
            }}>
              <span style={{ color: "var(--gold-deep)" }}>“</span>Vengo en persona, escucho, observo y lo monto a tu medida.<span style={{ color: "var(--gold-deep)" }}>”</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ridge silhouette */}
      <div style={{ position: "relative", height: 120, marginTop: -40 }}>
        <RidgeBackdrop />
      </div>

      {/* Marquee */}
      <div style={{
        borderTop: "1px solid rgba(184,153,104,.2)",
        borderBottom: "1px solid rgba(184,153,104,.2)",
        padding: "18px 0", overflow: "hidden",
        background: "rgba(20,35,57,.4)"
      }}>
        <div className="marquee-track" style={{ color: "var(--gold-2)", fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 22, fontWeight: 300 }}>
          {Array.from({ length: 2 }).map((_, k) =>
          <React.Fragment key={k}>
              <span>Reservas que se gestionan solas (y el cliente se siente atendido)</span><DiamondOrnament size={12} />
              <span>{"Contabilidad: < 30 minutos al trimestre"}</span><DiamondOrnament size={12} />
              <span>Stock en tiempo real</span><DiamondOrnament size={12} />
              <span>Redes que publican con una orden de tu voz</span><DiamondOrnament size={12} />
              <span>Google trabajando para ti, a todas horas</span><DiamondOrnament size={12} />
              <span>Tu IA hablando en cristiano</span><DiamondOrnament size={12} />
            </React.Fragment>
          )}
        </div>
      </div>
    </header>);

};

// ============ SECTION 1 — Pain ============
const PainSection = () =>
<section id="dolor" style={{ padding: "140px 0 120px", background: "var(--paper)" }}>
    <div className="container">
      <SectionHeader num="I" label="El diagnóstico" />
      <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 80, alignItems: "start", marginTop: 56 }} className="two-col">
        <div>
          <h2 className="display" style={{
          fontWeight: 350,
          fontSize: "clamp(36px, 4.6vw, 64px)",
          lineHeight: 1.02,
          margin: 0,
          letterSpacing: "-0.02em"
        }}>
            ¿Cuántas horas llevas <span style={{ fontStyle: "italic", color: "var(--gold-deep)" }}>esta semana</span> pensando en cosas que no son tus clientes?
          </h2>
        </div>
        <div style={{ paddingTop: 12 }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--hairline-dark)" }}>
            {[
          "Facturas pendientes apilándose en una carpeta sin abrir.",
          "Pedidos a proveedores que se repiten cada semana, idénticos, hechos a mano.",
          "El stock que no cuadra y nadie sabe explicar por qué.",
          "Reservas que entran por el teléfono cuando tienes las dos manos ocupadas.",
          "Las redes que llevan meses sin moverse.",
          "La presentación del trimestre — que te quita el sueño."].
          map((line, i) =>
          <li key={i} style={{
            padding: "16px 0", borderBottom: "1px solid var(--hairline-dark)",
            display: "flex", gap: 18, alignItems: "baseline"
          }}>
                <span className="mono" style={{ color: "var(--gold-deep)", fontSize: 12, minWidth: 28 }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontSize: 17, color: "var(--ink)" }}>{line}</span>
              </li>
          )}
          </ul>

          <div style={{
          marginTop: 40,
          padding: "32px 36px",
          background: "var(--night)", color: "var(--paper)",
          position: "relative"
        }}>
            <div className="display" style={{ fontSize: 28, fontStyle: "italic", fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.01em" }}>
              Tú montaste este negocio para otra cosa. No para apagar fuegos administrativos.
            </div>
            <div style={{
            marginTop: 20, display: "flex", alignItems: "center", gap: 12
          }}>
              <span style={{ height: 1, width: 40, background: "var(--gold)" }} />
              <span className="display" style={{ fontSize: 22, fontStyle: "italic", color: "var(--gold-2)" }}>Eso se acabó.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;


// ============ SECTION 2 — Value ============
const ValueSection = () =>
<section id="valor" style={{
  padding: "140px 0 140px",
  background: "linear-gradient(180deg, var(--paper) 0%, var(--paper-2) 100%)",
  position: "relative", overflow: "hidden"
}}>
    <div style={{ position: "absolute", top: 60, right: -100, opacity: .25 }}>
      <SunDial size={420} />
    </div>

    <div className="container" style={{ position: "relative" }}>
      <SectionHeader num="II" label="La propuesta de valor" />

      <div style={{ maxWidth: 920, marginTop: 56 }}>
        <h2 className="display" style={{
        fontWeight: 350, fontSize: "clamp(40px, 5.2vw, 76px)", lineHeight: 1.0, margin: 0, letterSpacing: "-0.025em"
      }}>
          Es como contratar al <span style={{ fontStyle: "italic" }}>genio de la lámpara</span>:<br />
          <span style={{ color: "var(--gold-deep)" }}>pides, y se te da.</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginTop: 64, alignItems: "start" }} className="two-col">
        <div>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink)", margin: 0 }}>
            Imagina tener a tu disposición varios expertos trabajando codo con codo contigo —{" "}
            <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", color: "var(--terra)" }}>uno en contabilidad</em>,{" "}
            <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", color: "var(--terra)" }}>otro en marketing</em>,{" "}
            <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", color: "var(--terra)" }}>otro gestionando proveedores</em>,{" "}
            <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", color: "var(--terra)" }}>otro atendiendo reservas</em>{" "}
            — pagando por todo ello menos de lo que te cobraría uno solo a media jornada.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink)", marginTop: 22 }}>
            Eso es lo que la IA bien implementada puede hacer por tu negocio. Y yo me encargo de que funcione desde el primer día, adaptado a ti, a tu local y a tu forma de trabajar.
          </p>
        </div>

        {/* Team stack visual */}
        <div>
          <div style={{
          background: "var(--paper)",
          border: "1px solid var(--hairline-dark)",
          padding: 28,
          position: "relative"
        }}>
            <div className="eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 18 }}>Tu equipo invisible</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
            ["Contable", "registra facturas, cuadra IVA, presenta trimestres", "20 €/mes"],
            ["Reservas", "atiende llamadas, WhatsApp y Google sin descanso", "incluido"],
            ["Marketing", "publica con un comando de voz, en tu tono", "20 €/mes"],
            ["Compras", "vigila stock, lanza pedidos, evita roturas", "incluido"],
            ["Asistente", "responde preguntas frecuentes, coordina turnos", "20 €/mes"]].
            map(([rol, desc, fee], i) =>
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "100px 1fr auto", gap: 16, alignItems: "center",
              padding: "16px 0",
              borderTop: i === 0 ? "none" : "1px solid var(--hairline-dark)"
            }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)" }} />
                    <span style={{ fontWeight: 600, fontSize: 14 }}>{rol}</span>
                  </div>
                  <span style={{ fontSize: 13, color: "#5a6478", lineHeight: 1.4 }}>{desc}</span>
                  <span className="mono" style={{ fontSize: 11, color: "var(--gold-deep)" }}>{fee}</span>
                </div>
            )}
            </div>
            <div style={{
            marginTop: 22, paddingTop: 18, borderTop: "1px solid var(--gold)",
            display: "flex", justifyContent: "space-between", alignItems: "baseline"
          }}>
              <span className="eyebrow">Total contratado a media jornada</span>
              <span className="display" style={{ fontSize: 28, color: "var(--gold-deep)", fontStyle: "italic", textDecoration: "line-through", textDecorationThickness: 1, opacity: .6 }}>≥ 1 200 €/mes</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 6 }}>
              <span className="eyebrow" style={{ color: "var(--terra)" }}>Tu coste real con Keen Impact</span>
              <span className="display" style={{ fontSize: 36, color: "var(--ink)" }}>desde 60 €<span style={{ fontSize: 14, color: "#5a6478" }}>/mes</span></span>
            </div>
          </div>
        </div>
      </div>

      <div style={{
      marginTop: 80,
      padding: "44px 56px",
      background: "var(--night)",
      color: "var(--paper)",
      display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 40, alignItems: "center"
    }} className="value-bar">
        <DiamondOrnament size={32} />
        <p className="display" style={{
        margin: 0, fontSize: 26, lineHeight: 1.3, fontWeight: 300, fontStyle: "italic"
      }}>
          Te devuelvo horas preciadas de tu vida. Las que se iban en tareas que no aportan ni un euro directo.<br />
          <span style={{ color: "var(--gold-2)" }}>Horas de sueño. De descanso. De estar presente donde de verdad importa.</span>
        </p>
        <span className="mono" style={{ color: "var(--gold-2)", fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", textAlign: "right" }}>
          y no necesitas<br />saber nada<br />de tecnología
        </span>
      </div>
    </div>
  </section>;


// ============ SECTION 3 — About Dan ============
const AboutSection = () =>
<section style={{
  padding: "140px 0",
  background: "var(--night)", color: "var(--paper)",
  position: "relative", overflow: "hidden"
}} className="grain">
    <div className="container" style={{ position: "relative" }}>
      <SectionHeader num="III" label="Quién hay detrás" inverted />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, marginTop: 56, alignItems: "center" }} className="two-col">
        <div style={{ position: "relative" }}>
          <div style={{
          position: "relative",
          background: "linear-gradient(160deg, #142339 0%, #0a1320 100%)",
          border: "1px solid rgba(184,153,104,.35)",
          padding: 28,
          aspectRatio: "4/5"
        }}>
            <div className="eyebrow" style={{ color: "var(--gold-2)", display: "flex", justifyContent: "space-between" }}>
              <span>Dan Guerrero · Bubión</span>
              <span>est. 2008</span>
            </div>
            <div style={{
            position: "absolute", inset: 28, top: 60,
            background: "linear-gradient(180deg, rgba(20,35,57,0) 0%, rgba(14,26,43,.7) 100%)",
            border: "1px solid rgba(184,153,104,.2)",
            overflow: "hidden"
          }}>
              <div style={{ position: "absolute", inset: 0, opacity: .5 }}>
                <SunDial size={500} />
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60%" }}>
                <RidgeBackdrop />
              </div>
              <img src="assets/dan-guerrero.png" alt="Dan Guerrero" style={{
              position: "absolute", bottom: 0, right: 0, width: "100%",
              objectFit: "contain", filter: "drop-shadow(0 20px 50px rgba(0,0,0,.6))"
            }} />
            </div>
          </div>
          {/* Signature card */}
          <div style={{
          position: "absolute", bottom: -32, right: -32,
          background: "var(--gold)", color: "var(--night)",
          padding: "20px 26px",
          maxWidth: 220,
          border: "1px solid var(--gold-deep)",
          boxShadow: "0 30px 60px -20px rgba(0,0,0,.5)"
        }}>
            <div className="eyebrow">Firma</div>
            <div style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontSize: 32, marginTop: 4, letterSpacing: "-0.01em" }}>Dan G.</div>
            <div style={{ fontSize: 11, marginTop: 4, opacity: .8 }} className="mono">desde Bubión</div>
          </div>
        </div>

        <div>
          <h2 className="display" style={{
          fontWeight: 350, fontSize: "clamp(36px, 4.6vw, 64px)", lineHeight: 1.02, margin: 0,
          letterSpacing: "-0.025em"
        }}>
            No soy una agencia.<br />
            <span style={{ fontStyle: "italic", color: "var(--gold-2)" }}>Soy tu vecino de Bubión</span>
          </h2>

          <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr", gap: 18, fontSize: 17, lineHeight: 1.65, color: "rgba(244,239,230,.82)" }}>
            <p style={{ margin: 0 }}>
              Me llamo Dan y soy granaíno de nacimiento. Sobrino del pintor Manuel Maldonado, para ser más exactos. Llevo más de <strong style={{ color: "var(--paper)" }}>18 años</strong> diseñando sistemas digitales que resuelven problemas reales para negocios reales. He creado productos y servicios valorados en más de <strong style={{ color: "var(--paper)" }}>2 millones de euros</strong>. Y desde finales de 2025 vivo aquí arriba, en <strong style={{ color: "var(--gold-2)" }}>Bubión</strong>.
            </p>
            <p style={{ margin: 0 }}>Mi propuesta: visitarte en persona. Te escucho, observo, y si te gusta mi propuesta, monto lo que necesites, a tu medida. Soy un tío de monte, y de resolver problemas. Entiendo el ritmo de aquí. Lo que ofreces, lo que piden los clientes. Yo solo facilito el puente.

          </p>
          </div>

          {/* Pilot card */}
          <div style={{
          marginTop: 36,
          padding: "22px 26px",
          border: "1px solid rgba(184,153,104,.35)",
          display: "flex", alignItems: "center", gap: 22
        }}>
            <span className="pill" style={{ background: "rgba(74,222,128,.08)", borderColor: "rgba(74,222,128,.4)", color: "#9ae5b1" }}>
              <span className="dot live" /> Piloto en marcha
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: "rgba(244,239,230,.6)" }} className="eyebrow">Primer restaurante piloto</div>
              <div className="display" style={{ fontSize: 26, marginTop: 2, fontStyle: "italic" }}>Los Trotamundos</div>
            </div>
            <a href="#" className="btn btn-ghost" style={{ padding: "10px 16px", fontSize: 12 }}>
              Verlo <ArrowRight size={12} />
            </a>
          </div>

          {/* Testimonios row */}
          <div style={{ marginTop: 36 }}>
            <div className="eyebrow" style={{ color: "var(--gold-2)", marginBottom: 14 }}>Testimonios</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              {[
            { name: "Gilberto", kind: "Vídeo", icon: "▶" },
            { name: "Adrián", kind: "Audio", icon: "♪" },
            { name: "Fernando", kind: "Audio", icon: "♪" },
            { name: "D. Jimper", kind: "Texto", icon: "❝" }].
            map((t, i) =>
            <div key={i} style={{
              border: "1px solid rgba(184,153,104,.25)", padding: "16px 14px",
              background: "rgba(20,35,57,.4)",
              cursor: "pointer", transition: "border-color .25s"
            }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--gold)"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(184,153,104,.25)"}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="mono" style={{ fontSize: 10, color: "var(--gold-2)", textTransform: "uppercase", letterSpacing: ".18em" }}>{t.kind}</span>
                    <span style={{ color: "var(--gold)" }}>{t.icon}</span>
                  </div>
                  <div style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontSize: 22, marginTop: 18 }}>{t.name}</div>
                </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;


// shared section header
const SectionHeader = ({ num, label, inverted }) =>
<div style={{ display: "flex", alignItems: "center", gap: 18 }}>
    <span className="display" style={{
    fontStyle: "italic", fontWeight: 300, fontSize: 56,
    color: inverted ? "var(--gold-2)" : "var(--gold-deep)",
    lineHeight: 1, letterSpacing: "-0.02em"
  }}>{num}</span>
    <span style={{ height: 1, width: 60, background: inverted ? "rgba(184,153,104,.4)" : "var(--hairline)" }} />
    <span className="eyebrow" style={{ color: inverted ? "var(--gold-2)" : "var(--gold-deep)" }}>{label}</span>
  </div>;


window.TopSections = { Nav, Hero, PainSection, ValueSection, AboutSection, SectionHeader, KeenImpactLogo };