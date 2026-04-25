// SVG art: ridge silhouette, ornaments, simple icons
// All abstract / geometric — no hand-drawn imagery.

const RidgeBackdrop = ({ stroke = "rgba(184,153,104,0.55)", fill = "none", style = {} }) => (
  <svg viewBox="0 0 1440 360" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block", ...style }} aria-hidden="true">
    <defs>
      <linearGradient id="ridgeFade" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(184,153,104,0.0)" />
        <stop offset="100%" stopColor="rgba(184,153,104,0.18)" />
      </linearGradient>
    </defs>
    {/* far ridge */}
    <path d="M0,260 L80,230 L160,250 L240,200 L320,225 L420,180 L520,210 L600,170 L700,205 L800,165 L900,200 L1000,170 L1100,210 L1200,180 L1300,220 L1440,195 L1440,360 L0,360 Z"
      fill="url(#ridgeFade)" stroke={stroke} strokeWidth="1" />
    {/* mid ridge */}
    <path d="M0,300 L120,270 L240,290 L360,255 L480,275 L600,245 L720,275 L840,250 L960,280 L1080,255 L1200,285 L1320,265 L1440,290 L1440,360 L0,360 Z"
      fill="rgba(184,153,104,0.10)" stroke={stroke} strokeWidth="1" strokeOpacity=".7" />
    {/* near ridge */}
    <path d="M0,335 L160,315 L320,330 L480,305 L640,325 L800,305 L960,330 L1120,310 L1280,325 L1440,310 L1440,360 L0,360 Z"
      fill="rgba(184,153,104,0.18)" />
  </svg>
);

const SunDial = ({ size = 220, stroke = "rgba(184,153,104,.7)" }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
    <circle cx="100" cy="100" r="80" fill="none" stroke={stroke} strokeWidth="1" />
    <circle cx="100" cy="100" r="60" fill="none" stroke={stroke} strokeWidth="1" strokeDasharray="2 4" />
    <circle cx="100" cy="100" r="3" fill={stroke} />
    {Array.from({length:24}).map((_,i)=>{
      const a = (i/24)*Math.PI*2 - Math.PI/2;
      const r1 = i%6===0 ? 70 : 76;
      const r2 = 80;
      return <line key={i} x1={100+Math.cos(a)*r1} y1={100+Math.sin(a)*r1} x2={100+Math.cos(a)*r2} y2={100+Math.sin(a)*r2} stroke={stroke} strokeWidth={i%6===0?1.4:0.8}/>;
    })}
  </svg>
);

// Diamond ornament (Alpujarra textile motif, very abstracted)
const DiamondOrnament = ({ size = 22, color = "var(--gold)" }) => (
  <svg width={size} height={size} viewBox="0 0 22 22" aria-hidden="true">
    <path d="M11 1 L21 11 L11 21 L1 11 Z" fill="none" stroke={color} strokeWidth="1" />
    <path d="M11 5 L17 11 L11 17 L5 11 Z" fill={color} fillOpacity=".25" stroke={color} strokeWidth=".7" />
    <circle cx="11" cy="11" r="1.4" fill={color} />
  </svg>
);

const StarBurst = ({ size = 14, color = "var(--gold)" }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true">
    <path d="M7 0 L8 6 L14 7 L8 8 L7 14 L6 8 L0 7 L6 6 Z" fill={color}/>
  </svg>
);

const ArrowRight = ({ size = 16, stroke = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
    <path d="M2 8 H13 M9 4 L13 8 L9 12" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlayCircle = ({ size = 56, color = "var(--paper)" }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" aria-hidden="true">
    <circle cx="28" cy="28" r="27" fill="none" stroke={color} strokeWidth="1"/>
    <path d="M23 19 L38 28 L23 37 Z" fill={color}/>
  </svg>
);

// Simple module glyphs — geometric, never figurative
const ModuleGlyph = ({ id, color = "var(--gold)", size = 44 }) => {
  const c = color;
  const s = size;
  switch(id) {
    case 1: // web
      return <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
        <rect x="3" y="7" width="38" height="30" rx="2" stroke={c} strokeWidth="1.2"/>
        <line x1="3" y1="14" x2="41" y2="14" stroke={c} strokeWidth="1.2"/>
        <circle cx="7.5" cy="10.5" r=".9" fill={c}/><circle cx="10.5" cy="10.5" r=".9" fill={c}/><circle cx="13.5" cy="10.5" r=".9" fill={c}/>
        <line x1="9" y1="22" x2="35" y2="22" stroke={c} strokeWidth="1.2" opacity=".5"/>
        <line x1="9" y1="27" x2="28" y2="27" stroke={c} strokeWidth="1.2" opacity=".5"/>
        <rect x="9" y="31" width="10" height="3" fill={c} opacity=".7"/>
      </svg>;
    case 2: // map / pin
      return <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
        <path d="M22 6 C15 6 10 11 10 18 C10 26 22 38 22 38 C22 38 34 26 34 18 C34 11 29 6 22 6 Z" stroke={c} strokeWidth="1.2"/>
        <circle cx="22" cy="18" r="4" stroke={c} strokeWidth="1.2"/>
        <path d="M3 32 L41 32" stroke={c} strokeWidth="1" strokeDasharray="2 3" opacity=".5"/>
      </svg>;
    case 3: // tpv
      return <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
        <rect x="6" y="6" width="32" height="22" rx="2" stroke={c} strokeWidth="1.2"/>
        <rect x="11" y="11" width="22" height="12" stroke={c} strokeWidth="1" opacity=".5"/>
        <path d="M10 28 L34 28 L36 38 L8 38 Z" stroke={c} strokeWidth="1.2"/>
        <line x1="14" y1="33" x2="30" y2="33" stroke={c} strokeWidth="1" opacity=".6"/>
      </svg>;
    case 4: // boxes / stock
      return <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
        <rect x="6" y="22" width="14" height="14" stroke={c} strokeWidth="1.2"/>
        <rect x="24" y="22" width="14" height="14" stroke={c} strokeWidth="1.2"/>
        <rect x="15" y="8" width="14" height="14" stroke={c} strokeWidth="1.2"/>
        <line x1="22" y1="8" x2="22" y2="22" stroke={c} strokeWidth="1" opacity=".5"/>
        <line x1="13" y1="29" x2="13" y2="36" stroke={c} strokeWidth="1" opacity=".5"/>
      </svg>;
    case 5: // copilot orbit
      return <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="5" fill={c}/>
        <ellipse cx="22" cy="22" rx="16" ry="6" stroke={c} strokeWidth="1.2" transform="rotate(-25 22 22)"/>
        <ellipse cx="22" cy="22" rx="16" ry="6" stroke={c} strokeWidth="1.2" transform="rotate(25 22 22)" opacity=".7"/>
      </svg>;
    case 6: // social waves
      return <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
        <circle cx="14" cy="22" r="3" fill={c}/>
        <path d="M19 22 Q22 18 25 22 Q28 26 31 22" stroke={c} strokeWidth="1.4" fill="none"/>
        <path d="M14 14 Q22 4 30 14" stroke={c} strokeWidth="1" fill="none" opacity=".5"/>
        <path d="M14 30 Q22 40 30 30" stroke={c} strokeWidth="1" fill="none" opacity=".5"/>
      </svg>;
    case 7: // camera aperture
      return <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" stroke={c} strokeWidth="1.2"/>
        <path d="M22 8 L28 18 L17 18 Z" fill={c} opacity=".7"/>
        <path d="M36 22 L26 28 L26 17 Z" fill={c} opacity=".7"/>
        <path d="M22 36 L16 26 L27 26 Z" fill={c} opacity=".7"/>
        <path d="M8 22 L18 16 L18 27 Z" fill={c} opacity=".7"/>
        <circle cx="22" cy="22" r="3" stroke={c} strokeWidth="1" fill="var(--paper)"/>
      </svg>;
    default: return null;
  }
};

// Ridge as drawn line (for hero lockup)
const RidgeLine = ({ stroke = "var(--gold)", style = {} }) => (
  <svg viewBox="0 0 600 80" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block", ...style }} aria-hidden="true">
    <path d="M0,60 L60,40 L120,55 L190,25 L260,50 L320,18 L390,45 L460,22 L530,48 L600,30"
      fill="none" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

window.SvgArt = { RidgeBackdrop, SunDial, DiamondOrnament, StarBurst, ArrowRight, PlayCircle, ModuleGlyph, RidgeLine };
