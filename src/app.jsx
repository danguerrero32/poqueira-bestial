// Main app: assembles all sections + tweaks panel
const { Hero, PainSection, ValueSection, AboutSection } = window.TopSections;
const { ModulesSection } = window;
const { BonusSection, PaymentSection, CtaSection, Footer } = window.BottomSections;
const { TweaksPanel, useTweaks, TweakSection, TweakSelect, TweakToggle, TweakSlider, TweakRadio } = window;

const PALETTES = {
  noche: {
    night: "#0E1A2B", night2: "#142339",
    gold: "#B89968", gold2: "#C9AC7F", goldDeep: "#8E6E3F",
    paper: "#F4EFE6", paper2: "#ECE4D3",
    ink: "#1A2438", terra: "#7A4A2B",
  },
  dia: {
    night: "#2C2417", night2: "#3a311f",
    gold: "#A57F4B", gold2: "#C09462", goldDeep: "#7A5A30",
    paper: "#F8F2E4", paper2: "#EFE5CD",
    ink: "#2A2418", terra: "#7A4A2B",
  },
  sierra: {
    night: "#1B2A22", night2: "#243429",
    gold: "#B89968", gold2: "#C9AC7F", goldDeep: "#7A5A30",
    paper: "#F1ECDF", paper2: "#E5DEC9",
    ink: "#1F2A22", terra: "#5e3a1f",
  },
  ocaso: {
    night: "#1d1014", night2: "#2a1820",
    gold: "#C99464", gold2: "#D8A87E", goldDeep: "#9A6438",
    paper: "#F4ECDF", paper2: "#EBDFC6",
    ink: "#221820", terra: "#8a3e24",
  },
};

const FONTS = {
  Fraunces: '"Fraunces", serif',
  "Instrument Serif": '"Instrument Serif", serif',
  "Playfair Display": '"Playfair Display", serif',
};

const App = () => {
  const defaultsRaw = document.getElementById("tweaks-defaults").textContent;
  const defaults = JSON.parse(defaultsRaw.replace(/\/\*EDITMODE-(BEGIN|END)\*\//g, ""));
  const [tweaks, setTweak] = useTweaks(defaults);

  // Apply palette + display font globally
  React.useEffect(() => {
    const p = PALETTES[tweaks.palette] || PALETTES.noche;
    const root = document.documentElement;
    root.style.setProperty("--night", p.night);
    root.style.setProperty("--night-2", p.night2);
    root.style.setProperty("--gold", p.gold);
    root.style.setProperty("--gold-2", p.gold2);
    root.style.setProperty("--gold-deep", p.goldDeep);
    root.style.setProperty("--paper", p.paper);
    root.style.setProperty("--paper-2", p.paper2);
    root.style.setProperty("--ink", p.ink);
    root.style.setProperty("--terra", p.terra);
    document.body.style.background = p.paper;
    document.body.style.color = p.ink;

    // gold intensity
    const intensity = tweaks.goldIntensity || 1;
    root.style.setProperty("--hairline", `rgba(184,153,104,${0.35 * intensity})`);

    // display font
    const ff = FONTS[tweaks.displayFont] || FONTS.Fraunces;
    document.querySelectorAll(".display").forEach(el => {
      el.style.fontFamily = ff;
    });
  }, [tweaks]);

  // Scroll reveal
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Hero/>
      <PainSection/>
      <ValueSection/>
      <AboutSection/>
      <ModulesSection goldHex={(PALETTES[tweaks.palette] || PALETTES.noche).gold}/>
      <BonusSection showCountdown={tweaks.showCountdown}/>
      <PaymentSection/>
      <CtaSection/>
      <Footer/>

      <TweaksPanel>
        <TweakSection label="Paleta" />
        <TweakRadio
          label="Estilo"
          value={tweaks.palette}
          onChange={v => setTweak("palette", v)}
          options={[
            {value:"noche", label:"Noche"},
            {value:"dia", label:"Día"},
            {value:"sierra", label:"Sierra"},
            {value:"ocaso", label:"Ocaso"},
          ]}
        />
        <TweakSection label="Tipografía" />
        <TweakSelect
          label="Display"
          value={tweaks.displayFont}
          onChange={v => setTweak("displayFont", v)}
          options={[
            {value:"Fraunces", label:"Fraunces"},
            {value:"Instrument Serif", label:"Instrument Serif"},
            {value:"Playfair Display", label:"Playfair Display"},
          ]}
        />
        <TweakSection label="Acento" />
        <TweakSlider
          label="Oro"
          value={tweaks.goldIntensity}
          min={0.4} max={2} step={0.1}
          onChange={v => setTweak("goldIntensity", v)}
          unit="x"
        />
        <TweakSection label="Bonus" />
        <TweakToggle
          label="Cuenta atrás"
          value={tweaks.showCountdown}
          onChange={v => setTweak("showCountdown", v)}
        />
      </TweaksPanel>
    </>
  );
};

// Inject extra fonts for tweaks
const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

// Responsive helpers
const responsiveCSS = document.createElement("style");
responsiveCSS.textContent = `
  @media (max-width: 960px) {
    .hero-grid, .two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
    .nav-links { display: none !important; }
    .module-row { grid-template-columns: 60px 1fr !important; }
    .module-row > div:last-child { grid-column: 1 / -1; text-align: left !important; align-items: flex-start !important; }
    .value-bar { grid-template-columns: 1fr !important; gap: 24px !important; padding: 32px 24px !important; }
    .payment-grid { grid-template-columns: 1fr !important; }
    .payment-grid > div { border-right: none !important; border-bottom: 1px solid var(--hairline-dark); }
  }
`;
document.head.appendChild(responsiveCSS);

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
