// Top sections: Nav, Hero (scroll-jacking), Pain, Value, About Dan
const { DiamondOrnament, StarBurst, ArrowRight, RidgeBackdrop, SunDial } = window.SvgArt;

// ============ FOLGAOREST LOGO ============
const FolgaoRestLogo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <svg width="30" height="26" viewBox="0 0 30 26" fill="none" style={{ flexShrink: 0 }}>
      <path d="M15 2L28 24H2L15 2Z" stroke="var(--gold)" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
      <path d="M15 9L21 24H9L15 9Z" fill="var(--gold)" opacity="0.35"/>
    </svg>
    <div style={{ lineHeight: 1.15 }}>
      <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", color: "var(--paper)", textTransform: "uppercase" }}>FolgaoRest</div>
      <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(184,153,104,0.65)" }}>by Keen Impact</div>
    </div>
  </div>
);

// ============ NAV ============
const Nav = () => (
  <nav style={{
    position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "22px 40px",
    color: "var(--paper)",
  }}>
    <FolgaoRestLogo />
    <div style={{ display: "flex", gap: 28, fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase" }} className="nav-links">
      {["Inicio","Servicios","Consultoría","Testimonios","FAQ","Contacto"].map(item => (
        <a key={item} href={`#${item.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")}`} style={navLink}>{item}</a>
      ))}
    </div>
    <div style={{ display: "flex", border: "1px solid rgba(184,153,104,0.35)", borderRadius: 999, overflow: "hidden" }}>
      <button style={{ ...langBtn, color: "var(--gold-2)", background: "rgba(184,153,104,0.12)" }}>ES</button>
      <button style={{ ...langBtn, color: "rgba(244,239,230,0.4)" }}>EN</button>
    </div>
  </nav>
);

const navLink = { color: "rgba(244,239,230,.75)", textDecoration: "none", transition: "color .2s", fontWeight: 500 };
const langBtn = { background: "transparent", border: "none", fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.1em", padding: "7px 13px", cursor: "pointer" };

const KeenImpactLogo = ({ dark = false }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <img src="assets/keen-impact-logo.png" alt=""
      style={{ height: 30, filter: dark ? "brightness(0) invert(1)" : "none", opacity: dark ? 0.92 : 1 }}
    />
  </div>
);

// ============ HERO — scroll-jacking ============
// Estructura: outer div de 500vh actúa como "carril de scroll"
// El header dentro es position:sticky — queda fijo mientras el usuario scrollea
// progress [0..1] controla qué elementos son visibles
//
// Hero 1 (el antes): progress 0.00 → 0.42
// Hero 2 (la solución): progress 0.38 → 1.00
// Botones de Hero 2 aparecen a progress 0.75
// Scroll normal se reanuda automáticamente al salir del carril (500vh)
//
// VIDEO: coloca el archivo en /assets/hero-video.mp4 o /uploads/hero-video.mp4
// El poster (miniatura) ya está en uploads/

const HERO_SCROLL_HEIGHT = "500vh";

const Hero = () => {
  const outerRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      if (!outerRef.current) return;
      const { top, height } = outerRef.current.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      if (scrollable <= 0) return;
      setProgress(Math.min(1, Math.max(0, -top / scrollable)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Devuelve estilos de animación para cada elemento según umbral de entrada
  const anim = (enter, exit = null) => ({
    opacity: progress < enter ? 0 : (exit !== null && progress > exit ? 0 : 1),
    transform: `translateY(${progress < enter ? "22px" : "0px"})`,
    transition: "opacity 0.65s ease, transform 0.65s ease",
    willChange: "opacity, transform",
  });

  const h1Visible = progress < 0.42;
  const h2Visible = progress >= 0.38;

  return (
    <>
      {/* ── CARRIL DE SCROLL ── */}
      <div ref={outerRef} style={{ height: HERO_SCROLL_HEIGHT, position: "relative" }}>

        <header style={{
          position: "sticky", top: 0, height: "100vh", overflow: "hidden",
          color: "var(--paper)",
        }} className="grain">

          {/* ── VIDEO DE FONDO (compartido entre Hero 1 y Hero 2) ──
              Reemplaza src con la ruta de tu vídeo.
              El poster se usa como fallback mientras carga. */}
          <video
            autoPlay muted loop playsInline
            poster="uploads/d3b80f74f54248e8a99628af444c6a61031c681862c64b67bfe3ede1ee04f0d0.jpg"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", zIndex: 0,
            }}
          >
            <source src="assets/hero-video.mp4" type="video/mp4" />
            <source src="uploads/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Overlay oscuro */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(180deg, rgba(14,26,43,0.78) 0%, rgba(14,26,43,0.48) 50%, rgba(14,26,43,0.78) 100%)",
          }} />

          {/* Nav — siempre visible */}
          <div style={{ position: "relative", zIndex: 10 }}>
            <Nav />
          </div>

          {/* ════════════════════════════════════════
              HERO 1 — El peso del antes
              Visible: progress 0.00 → 0.42
              ════════════════════════════════════════ */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 2,
            display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "center",
            textAlign: "center", padding: "80px 40px 40px",
            opacity: h1Visible ? 1 : 0,
            transition: "opacity 0.55s ease",
            pointerEvents: h1Visible ? "auto" : "none",
          }}>
            <div style={{ maxWidth: 820 }}>

              {/* Eyebrow de localización */}
              <div style={{
                ...anim(0.03),
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 10, letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(244,239,230,0.45)",
                marginBottom: 48,
              }}>
                Bubión · Capileira · Pampaneira · Sierra Nevada
              </div>

              {/* Línea de dolor 1 */}
              <p style={{
                ...anim(0.09),
                fontFamily: "Instrument Serif, serif",
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.8vw, 38px)",
                lineHeight: 1.4, fontWeight: 300,
                color: "rgba(244,239,230,0.70)",
                margin: "0 0 16px",
              }}>
                El negocio funciona.
              </p>

              {/* Línea de dolor 2 */}
              <p style={{
                ...anim(0.16),
                fontSize: "clamp(15px, 1.9vw, 24px)",
                lineHeight: 1.65, fontWeight: 300,
                color: "rgba(244,239,230,0.60)",
                margin: "0 0 52px",
              }}>
                Pero a ti todavía te queda una montaña de trabajo<br />
                y asuntos que resolver por delante.
              </p>

              {/* Separador */}
              <div style={{
                ...anim(0.23),
                height: 1, width: 60,
                background: "rgba(184,153,104,0.4)",
                margin: "0 auto 52px",
              }} />

              {/* Titular principal */}
              <h1 className="display" style={{
                ...anim(0.28),
                fontSize: "clamp(56px, 8.5vw, 126px)",
                fontWeight: 300, fontStyle: "italic",
                lineHeight: 0.93, letterSpacing: "-0.025em",
                margin: 0, color: "var(--paper)",
              }}>
                Hasta que un día...
              </h1>

              {/* Indicador de scroll */}
              <div style={{
                ...anim(0.35),
                marginTop: 68,
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: 10,
              }}>
                <span style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 10, letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgba(244,239,230,0.35)",
                }}>Sigue bajando</span>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <svg width="18" height="10" viewBox="0 0 18 10" fill="none"
                    style={{ animation: "folgao-bounce 1.8s ease-in-out 0s infinite" }}>
                    <path d="M1 1L9 9L17 1" stroke="var(--gold-2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg width="18" height="10" viewBox="0 0 18 10" fill="none"
                    style={{ animation: "folgao-bounce 1.8s ease-in-out 0.22s infinite" }}>
                    <path d="M1 1L9 9L17 1" stroke="var(--gold-2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

            </div>
          </div>

          {/* ════════════════════════════════════════
              HERO 2 — La solución
              Visible: progress 0.38 → 1.00
              Botones aparecen a 0.75 (todos los elementos listos)
              ════════════════════════════════════════ */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 3,
            display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "center",
            textAlign: "center", padding: "80px 40px 40px",
            opacity: h2Visible ? 1 : 0,
            transition: "opacity 0.55s ease",
            pointerEvents: h2Visible ? "auto" : "none",
          }}>
            <div style={{ maxWidth: 960 }}>

              {/* Eyebrow con líneas laterales */}
              <div style={{
                ...anim(0.43),
                display: "flex", alignItems: "center",
                justifyContent: "center", gap: 18,
                marginBottom: 36,
              }}>
                <span style={{ height: 1, width: 48, background: "rgba(184,153,104,0.45)" }} />
                <span style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 10, letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgba(244,239,230,0.55)",
                }}>A partir de ahora:</span>
                <span style={{ height: 1, width: 48, background: "rgba(184,153,104,0.45)" }} />
              </div>

              {/* Titular línea 1 */}
              <h1 className="display" style={{
                ...anim(0.50),
                fontSize: "clamp(56px, 7.8vw, 116px)",
                fontWeight: 350, lineHeight: 0.94,
                letterSpacing: "-0.025em",
                margin: 0, color: "var(--paper)",
              }}>
                Tú terminas
              </h1>

              {/* Titular línea 2 — oro itálico */}
              <h1 className="display" style={{
                ...anim(0.57),
                fontSize: "clamp(56px, 7.8vw, 116px)",
                fontWeight: 300, fontStyle: "italic",
                lineHeight: 0.94, letterSpacing: "-0.025em",
                margin: "6px 0 0", color: "var(--gold-2)",
              }}>
                antes que nadie
              </h1>

              {/* Descripción */}
              <p style={{
                ...anim(0.63),
                fontSize: "clamp(16px, 1.8vw, 22px)",
                lineHeight: 1.65, color: "rgba(244,239,230,0.78)",
                margin: "40px 0 0", fontWeight: 300,
              }}>
                Y te vas a tus cosas. A descansar.<br />
                Tu negocio sigue funcionando, mejor que nunca.
              </p>

              {/* Caption */}
              <p style={{
                ...anim(0.69),
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 10, letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(184,153,104,0.65)",
                margin: "18px 0 0",
                fontStyle: "italic",
              }}>
                Di adiós a las tareas mecánicas.&nbsp;&nbsp;
                Las horas libres son mucho más reales.
              </p>

              {/* Botones CTA — aparecen últimos, a 0.75 */}
              <div style={{
                ...anim(0.75),
                display: "flex", gap: 14,
                justifyContent: "center",
                marginTop: 52, flexWrap: "wrap",
              }}>
                <a href="#dolor" className="btn btn-gold" style={{ padding: "14px 28px", fontSize: 13, letterSpacing: "0.06em" }}>
                  Quiero saber más ↓
                </a>
                <a href="#modulos" className="btn btn-ghost" style={{ padding: "14px 28px", fontSize: 13, letterSpacing: "0.06em" }}>
                  Ver el piloto →
                </a>
              </div>

            </div>
          </div>

        </header>
      </div>
      {/* ── FIN CARRIL DE SCROLL ──
          A partir de aquí el scroll normal se reanuda.
          El marquee queda justo debajo del hero. */}

      {/* Marquee */}
      <div style={{
        borderTop: "1px solid rgba(184,153,104,.2)",
        borderBottom: "1px solid rgba(184,153,104,.2)",
        padding: "18px 0", overflow: "hidden",
        background: "rgba(14,26,43,.96)",
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
    </>
  );
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
            <p style={{ margin: 0 }}>Mi propuesta: visitarte en persona. Te escucho, observo, y si te gusta mi propuesta, monto lo que necesites, a tu medida. Soy un tío de monte, y de resolver problemas. Entiendo el ritmo de aquí. Lo que ofreces, lo que piden los clientes. Yo solo facilito el puente.</p>
          </div>

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
