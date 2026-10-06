import { useState, type ReactNode } from "react";

type Page = "landing" | "overview" | "materials" | "simulation" | "copilot" | "sources";
type IconName =
  | "activity"
  | "air"
  | "arrow"
  | "atom"
  | "book"
  | "brain"
  | "check"
  | "chevron"
  | "clock"
  | "close"
  | "database"
  | "flame"
  | "gauge"
  | "menu"
  | "oxygen"
  | "play"
  | "pressure"
  | "search"
  | "shield"
  | "spark"
  | "user";

const paths: Record<IconName, ReactNode> = {
  activity: <><path d="M3 12h4l2-7 4 14 2-7h6" /></>,
  air: <><path d="M4 8h10a3 3 0 1 0-3-3" /><path d="M4 12h15a2.5 2.5 0 1 1-2.5 2.5" /><path d="M4 16h7" /></>,
  arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
  atom: <><circle cx="12" cy="12" r="1.5" /><ellipse cx="12" cy="12" rx="9" ry="3.5" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" /></>,
  book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z" /><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z" /></>,
  brain: <><path d="M9.5 4.5a3 3 0 0 0-5 2.2A3.5 3.5 0 0 0 4 13a3 3 0 0 0 3 4.8A3 3 0 0 0 12 20V5a3 3 0 0 0-2.5-.5Z" /><path d="M14.5 4.5a3 3 0 0 1 5 2.2 3.5 3.5 0 0 1 .5 6.3 3 3 0 0 1-3 4.8A3 3 0 0 1 12 20V5a3 3 0 0 1 2.5-.5Z" /><path d="M7 9h2M15 9h2M7 15h2M15 15h2" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  chevron: <><path d="m9 18 6-6-6-6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
  flame: <><path d="M12 22c4 0 7-3 7-7 0-3-1.5-6-5-10 .2 3-1 5-2.5 6.5C10 10 9.5 8.5 10 6c-3 2.5-5 5.5-5 9 0 4 3 7 7 7Z" /><path d="M9.5 17c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5c0-1.2-.7-2.5-2-4-.2 1.2-.7 2-1.3 2.6-.5-.5-.8-1.1-.7-2.1-.7 1-1 2.3-1 3.5Z" /></>,
  gauge: <><path d="M4 18a8 8 0 1 1 16 0" /><path d="m12 14 4-4" /><path d="M7 18h10" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  oxygen: <><circle cx="10" cy="12" r="6" /><path d="M16 8h4M18 6v4" /></>,
  play: <><path d="m8 5 11 7-11 7z" /></>,
  pressure: <><circle cx="12" cy="12" r="9" /><path d="M12 12 16 8M7 15h10" /></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></>,
  shield: <><path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6z" /><path d="m9 12 2 2 4-4" /></>,
  spark: <><path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z" /><path d="m18 16 .7 2.3L21 19l-2.3.7L18 22l-.7-2.3L15 19l2.3-.7z" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Button({ children, variant = "primary", onClick, type = "button", disabled = false }: { children: ReactNode; variant?: "primary" | "secondary" | "ghost"; onClick?: () => void; type?: "button" | "submit"; disabled?: boolean }) {
  return <button className={`btn btn-${variant}`} onClick={onClick} type={type} disabled={disabled}>{children}</button>;
}

function Badge({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "green" | "amber" | "red" | "slate" }) {
  return <span className={`badge badge-${tone}`}><span className="badge-dot" />{children}</span>;
}

function Logo({ compact = false, onClick }: { compact?: boolean; onClick?: () => void }) {
  return <button className="logo" onClick={onClick} aria-label="ShikhaSpace home">
    <span className="logo-mark"><Icon name="flame" size={21} /></span>
    {!compact && <span><strong>SHUNNOSHIKHA AI</strong><small>SHIKHASPACE</small></span>}
  </button>;
}

const nav: { page: Page; label: string }[] = [
  { page: "overview", label: "Mission Overview" },
  { page: "materials", label: "Materials" },
  { page: "simulation", label: "Simulation" },
  { page: "copilot", label: "AI Copilot" },
  { page: "sources", label: "Data Sources" },
];

function Navbar({ page, setPage }: { page: Page; setPage: (page: Page) => void }) {
  const [open, setOpen] = useState(false);
  return <header className="navbar">
    <div className="nav-inner">
      <Logo onClick={() => setPage("landing")} />
      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
        {nav.map((item) => <button key={item.page} className={page === item.page ? "nav-item active" : "nav-item"} onClick={() => { setPage(item.page); setOpen(false); }}>{item.label}</button>)}
      </nav>
      <div className="nav-right">
        <Badge tone="green">Operational</Badge>
        <button className="profile" aria-label="Team HASH profile"><span>TH</span><div><strong>Team HASH</strong><small>Mission team</small></div></button>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Open menu"><Icon name={open ? "close" : "menu"} /></button>
      </div>
    </div>
  </header>;
}

function SectionTitle({ eyebrow, title, subtitle, action }: { eyebrow?: string; title: string; subtitle?: string; action?: ReactNode }) {
  return <div className="section-head"><div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>{action}</div>;
}

function Landing({ setPage }: { setPage: (page: Page) => void }) {
  return <main>
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="nasa-ring">N</span> NASA SPACE APPS CHALLENGE 2026</div>
          <h1>AI-Powered Fire Safety Intelligence for the Future of Space.</h1>
          <p>Explore microgravity combustion, spacecraft materials and NASA research through interactive analytics and evidence-grounded AI.</p>
          <div className="hero-actions">
            <Button onClick={() => setPage("overview")}>Explore Fire Safety <Icon name="arrow" size={17} /></Button>
            <Button variant="secondary" onClick={() => setPage("copilot")}><Icon name="spark" size={17} /> Ask the AI Copilot</Button>
          </div>
          <div className="hero-proof">
            <span><Icon name="database" size={18} /><strong>5</strong> NASA data sources</span>
            <span><Icon name="shield" size={18} /><strong>Verified</strong> evidence chain</span>
            <span><Icon name="atom" size={18} /><strong>Microgravity</strong> focused</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Space habitat combustion research visualization">
          <img src="https://images.unsplash.com/photo-1700862889195-17cdf950b5d0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=82&w=1200" alt="Clean aerospace habitat corridor used as a contextual research visualization" />
          <div className="visual-tint" />
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="flame-core"><span /><i /></div>
          <div className="data-tag tag-one"><small>O₂ CONCENTRATION</small><strong>30.0%</strong></div>
          <div className="data-tag tag-two"><small>GRAVITY MODE</small><strong>MICROGRAVITY</strong></div>
          <div className="data-tag tag-three"><span className="pulse" /><small>COMBUSTION MODEL ACTIVE</small></div>
          <div className="visual-caption"><span>HAB-07 / COMBUSTION CELL</span><span>LIVE MODEL</span></div>
        </div>
      </div>
    </section>
    <section className="mission-strip">
      <p>CREATED BY <strong>TEAM HASH</strong></p>
      <div />
      <p>CHALLENGE <strong>FLAME IN FREEFALL</strong></p>
      <div />
      <p>PLATFORM <strong>SHIKHASPACE</strong></p>
    </section>
    <section className="capabilities">
      <SectionTitle eyebrow="MISSION CAPABILITIES" title="From raw research to actionable insight." subtitle="A connected workspace for combustion science, material assessment and mission-safety analysis." />
      <div className="capability-grid">
        {[
          ["activity", "Fire Dynamics", "Compare flame propagation behavior across gravity and environmental conditions."],
          ["shield", "Materials Intelligence", "Assess spacecraft material flammability with traceable evidence."],
          ["spark", "Evidence-Grounded AI", "Synthesize findings while keeping source evidence distinctly visible."],
        ].map(([icon, title, text], index) => <button className="capability-card" key={title} onClick={() => setPage((["overview", "materials", "copilot"] as Page[])[index])}>
          <span className="cap-number">0{index + 1}</span><span className="cap-icon"><Icon name={icon as IconName} /></span><h3>{title}</h3><p>{text}</p><span className="text-link">Open workspace <Icon name="arrow" size={16} /></span>
        </button>)}
      </div>
    </section>
  </main>;
}

const metrics = [
  { icon: "oxygen", label: "O₂ Concentration", value: "30.0", unit: "%", trend: "+0.2% / 1h", note: "Within test range", status: "stable" },
  { icon: "pressure", label: "Cabin Pressure", value: "101.3", unit: "kPa", trend: "±0.1 / 1h", note: "Nominal", status: "stable" },
  { icon: "air", label: "Airflow Velocity", value: "0.42", unit: "m/s", trend: "+0.03 / 1h", note: "Laminar", status: "stable" },
  { icon: "shield", label: "Fire Risk", value: "LOW", unit: "", trend: "No change", note: "Monitored", status: "safe" },
];

function TelemetryCard({ item }: { item: typeof metrics[number] }) {
  return <article className="telemetry-card">
    <div className="metric-top"><span className="metric-icon"><Icon name={item.icon as IconName} /></span><Badge tone={item.status === "safe" ? "green" : "blue"}>{item.status === "safe" ? "Low risk" : "Stable"}</Badge></div>
    <p className="metric-label">{item.label}</p>
    <div className="metric-value">{item.value}<small>{item.unit}</small></div>
    <div className="metric-foot"><span><Icon name="activity" size={14} />{item.trend}</span><strong>{item.note}</strong></div>
  </article>;
}

function FlameChart() {
  return <div className="chart-wrap">
    <div className="chart-ylabel">PROPAGATION RATE</div>
    <svg className="line-chart" viewBox="0 0 760 260" preserveAspectRatio="none" role="img" aria-label="Line chart comparing Earth and microgravity flame propagation">
      {[40, 90, 140, 190, 240].map((y) => <line key={y} x1="52" y1={y} x2="740" y2={y} className="grid-line" />)}
      {[52, 190, 328, 466, 604, 740].map((x) => <line key={x} x1={x} y1="28" x2={x} y2="240" className="grid-line vertical" />)}
      <path className="area micro-area" d="M52 214 C140 205 170 181 242 166 S350 142 430 124 S560 107 620 86 S700 58 740 52 L740 240 L52 240Z" />
      <path className="line earth" d="M52 218 C140 210 175 194 242 181 S355 160 430 151 S565 132 620 121 S700 110 740 106" />
      <path className="line micro" d="M52 214 C140 205 170 181 242 166 S350 142 430 124 S560 107 620 86 S700 58 740 52" />
      <line x1="466" y1="28" x2="466" y2="240" className="hover-line" />
      <circle cx="466" cy="116" r="5" className="point micro-point" />
      <circle cx="466" cy="146" r="5" className="point earth-point" />
      <g className="tooltip-svg"><rect x="485" y="62" width="154" height="72" rx="7" /><text x="499" y="82">T + 48 SECONDS</text><text x="499" y="104">Microgravity  <tspan>0.78</tspan></text><text x="499" y="122">Earth — 1G     <tspan>0.51</tspan></text></g>
      <text x="50" y="256">0s</text><text x="185" y="256">16s</text><text x="322" y="256">32s</text><text x="458" y="256">48s</text><text x="598" y="256">64s</text><text x="722" y="256">80s</text>
    </svg>
    <div className="chart-xlabel">TIME (SECONDS)</div>
  </div>;
}

function Pipeline() {
  const steps = [["search", "Query rewrite"], ["database", "PSI vector search"], ["shield", "Evidence verification"], ["brain", "Scientific synthesis"]];
  return <div className="pipeline">{steps.map(([icon, label], i) => <div className="pipeline-step" key={label}>
    <span><Icon name={icon as IconName} size={17} /></span><div><small>STEP 0{i + 1}</small><strong>{label}</strong></div><Icon name="check" size={15} />
  </div>)}</div>;
}

function Overview({ setPage }: { setPage: (page: Page) => void }) {
  return <main className="app-main">
    <div className="page-head">
      <div><p className="eyebrow">MISSION CONTROL / HAB-07</p><h1>Space Habitat Fire Safety</h1><p>Microgravity combustion intelligence powered by NASA research and AI.</p></div>
      <div className="status-panel"><div><small>SYSTEM STATUS</small><Badge tone="green">Operational</Badge></div><div><small>LAST ANALYSIS</small><strong>Live · 09:44 UTC</strong></div><div><small>DATA SOURCES</small><strong>PSI + SAFFIRE + NTRS + OSDR</strong></div></div>
    </div>
    <section>
      <SectionTitle eyebrow="LIVE ENVIRONMENT" title="Habitat Telemetry" action={<button className="live-label"><span /> Refreshing in 04s</button>} />
      <div className="telemetry-grid">{metrics.map((item) => <TelemetryCard item={item} key={item.label} />)}</div>
    </section>
    <div className="dashboard-grid">
      <section className="card chart-card">
        <div className="card-head"><div><p className="eyebrow">COMBUSTION ANALYTICS</p><h2>Flame Propagation Dynamics</h2><p>1G vs Microgravity · BASS-II reference model</p></div><div className="chart-actions"><button className="seg active">80 sec</button><button className="seg">Compare</button><button className="icon-button"><Icon name="chevron" size={17} /></button></div></div>
        <div className="legend"><span><i className="earth-key" />EARTH — 1G</span><span><i className="micro-key" />MICROGRAVITY</span><span className="chart-unit">RATE · mm/s</span></div>
        <FlameChart />
        <div className="chart-insight"><span><Icon name="spark" size={17} /></span><p><strong>Scientific insight</strong>Microgravity alters natural convection and changes flame propagation behaviour.</p><Badge tone="blue">Modelled</Badge></div>
      </section>
      <aside className="card activity-card">
        <div className="card-head"><div><p className="eyebrow">MISSION LOG</p><h2>System Activity</h2></div><button className="icon-button"><Icon name="chevron" size={17} /></button></div>
        <div className="system-stack"><Badge tone="green">Data connected</Badge><Badge tone="blue">AI ready</Badge><Badge tone="green">Evidence verified</Badge></div>
        <div className="timeline">
          {[["09:42", "Telemetry updated", "O₂ + cabin sensors"], ["09:43", "Simulation completed", "Run SIM-2841"], ["09:44", "Evidence retrieved", "4 relevant sources"], ["09:44", "Analysis verified", "Confidence: High"]].map(([time, title, meta], i) => <div className="timeline-row" key={title}><span className={i === 3 ? "timeline-dot active" : "timeline-dot"} /><time>{time}</time><div><strong>{title}</strong><small>{meta}</small></div></div>)}
        </div>
        <Button variant="secondary" onClick={() => setPage("sources")}>View source health <Icon name="arrow" size={16} /></Button>
      </aside>
    </div>
    <section className="card copilot-preview">
      <div className="copilot-intro"><span className="ai-mark"><Icon name="spark" /></span><div><p className="eyebrow">RESEARCH INTELLIGENCE</p><h2>ShunnoShikha AI Copilot</h2><p>Evidence-grounded scientific research assistant</p></div><Badge tone="green">AI ready</Badge></div>
      <div className="copilot-grid">
        <div>
          <label className="prompt-box"><span>Ask a question about microgravity combustion…</span><textarea defaultValue="How does oxygen concentration affect flame propagation in microgravity?" /><div><small>Answers cite retrieved research evidence</small><Button onClick={() => setPage("copilot")}>Analyze Evidence <Icon name="arrow" size={16} /></Button></div></label>
          <Pipeline />
        </div>
        <div className="answer-card">
          <div className="answer-label"><span>GENERATED SYNTHESIS</span><Badge tone="blue">Confidence · High</Badge></div>
          <p>Increased oxygen concentration generally elevates flame spread rate and can expand flammability limits in microgravity. Without buoyancy-driven convection, oxygen transport is governed more strongly by diffusion and imposed airflow.</p>
          <div className="evidence-box"><div><span><Icon name="shield" size={17} /></span><div><small>RETRIEVED EVIDENCE</small><strong>NASA PSI / BASS-II</strong></div></div><Badge tone="green">Verified</Badge></div>
          <div className="citations"><strong>CITATIONS</strong><button>[1] NASA PSI</button><button>[2] BASS-II</button></div>
        </div>
      </div>
    </section>
  </main>;
}

const materialData = [
  { name: "PMMA", type: "Acrylic polymer", ignition: "High", spread: "High", oxygen: "High", risk: "High", evidence: 14 },
  { name: "Nomex", type: "Meta-aramid", ignition: "Low", spread: "Low", oxygen: "Moderate", risk: "Low", evidence: 9 },
  { name: "Silicone", type: "Elastomer", ignition: "Moderate", spread: "Low", oxygen: "Moderate", risk: "Moderate", evidence: 7 },
  { name: "Kapton", type: "Polyimide film", ignition: "Low", spread: "Moderate", oxygen: "Moderate", risk: "Moderate", evidence: 11 },
];

function Risk({ value }: { value: string }) {
  const tone = value === "High" ? "red" : value === "Moderate" ? "amber" : "green";
  return <span className={`risk risk-${tone}`}><i />{value}</span>;
}

function Materials() {
  const [selected, setSelected] = useState<(typeof materialData)[number] | null>(null);
  return <main className="app-main">
    <div className="page-head simple"><div><p className="eyebrow">MATERIALS INTELLIGENCE</p><h1>Material Flammability Matrix</h1><p>Comparative material risk analysis for spacecraft habitats.</p></div><Button><Icon name="book" size={17} /> Export assessment</Button></div>
    <section className="summary-grid">
      <div><small>MATERIALS ASSESSED</small><strong>24</strong><span>Across 6 material classes</span></div>
      <div><small>HIGH-RISK FLAGS</small><strong className="danger">3</strong><span>Require engineering review</span></div>
      <div><small>EVIDENCE RECORDS</small><strong>147</strong><span>PSI, NTRS and OSDR</span></div>
      <div><small>LAST SYNCHRONIZED</small><strong className="compact">09:38 UTC</strong><span>All sources connected</span></div>
    </section>
    <section className="card table-card">
      <div className="table-toolbar"><label className="search-field"><Icon name="search" size={17} /><input placeholder="Search materials…" /></label><div><select aria-label="Filter risk"><option>All risk levels</option><option>High risk</option><option>Moderate risk</option><option>Low risk</option></select><select aria-label="Sort materials"><option>Sort: Overall risk</option><option>Sort: Name</option></select></div></div>
      <div className="table-scroll"><table><thead><tr><th>Material</th><th>Ignition Risk</th><th>Flame Spread</th><th>Oxygen Sensitivity</th><th>Overall Risk</th><th>Evidence</th><th /></tr></thead>
        <tbody>{materialData.map((m) => <tr key={m.name} onClick={() => setSelected(m)}><td><span className={`material-swatch swatch-${m.name.toLowerCase()}`} /><div><strong>{m.name}</strong><small>{m.type}</small></div></td><td><Risk value={m.ignition} /></td><td><Risk value={m.spread} /></td><td><Risk value={m.oxygen} /></td><td><Risk value={m.risk} /></td><td><span className="evidence-count"><Icon name="book" size={15} />{m.evidence} sources</span></td><td><button className="row-button" aria-label={`Open ${m.name} details`}><Icon name="chevron" size={17} /></button></td></tr>)}</tbody>
      </table></div>
      <div className="table-note"><Icon name="shield" size={17} />Risk classifications summarize available experimental evidence and do not replace mission-specific qualification testing.</div>
    </section>
    <section className="card matrix-note"><div><span className="matrix-icon"><Icon name="atom" /></span><div><h3>Interpreting the matrix</h3><p>Risk combines ignition propensity, observed flame spread and sensitivity to oxygen enrichment. Select a material to inspect supporting properties and source evidence.</p></div></div><Button variant="secondary">View methodology</Button></section>
    {selected && <div className="drawer-backdrop" onClick={() => setSelected(null)}><aside className="drawer" onClick={(e) => e.stopPropagation()}>
      <div className="drawer-head"><div><p className="eyebrow">MATERIAL RECORD / MAT-004</p><h2>{selected.name}</h2><p>{selected.type}</p></div><button className="icon-button" onClick={() => setSelected(null)}><Icon name="close" /></button></div>
      <div className="drawer-body">
        <div className="risk-overview"><small>OVERALL ASSESSMENT</small><Risk value={selected.risk} /><p>Based on currently indexed microgravity combustion evidence.</p></div>
        <h3>Combustion properties</h3>
        <dl className="property-list"><div><dt>Ignition risk</dt><dd><Risk value={selected.ignition} /></dd></div><div><dt>Flame spread</dt><dd><Risk value={selected.spread} /></dd></div><div><dt>Oxygen sensitivity</dt><dd><Risk value={selected.oxygen} /></dd></div><div><dt>Evidence coverage</dt><dd>{selected.evidence} records</dd></div></dl>
        <h3>Scientific notes</h3><p className="scientific-note">Material response varies with sample geometry, ambient pressure, oxygen concentration and imposed airflow. Qualification must reflect the intended habitat environment.</p>
        <h3>Primary evidence</h3>{["NASA PSI · BASS-II Material Set", "NASA NTRS · Spacecraft Fire Safety", "OSDR · Combustion Dataset"].map((x, i) => <button className="source-row" key={x}><span><Icon name={i === 0 ? "database" : "book"} /></span><div><strong>{x}</strong><small>Verified source · {2024 - i}</small></div><Icon name="arrow" size={16} /></button>)}
      </div>
      <div className="drawer-footer"><Button variant="secondary" onClick={() => setSelected(null)}>Close</Button><Button>Open full evidence</Button></div>
    </aside></div>}
  </main>;
}

function FlameVisual({ running }: { running: boolean }) {
  return <div className={running ? "sim-visual running" : "sim-visual"}>
    <div className="sim-grid-lines" /><div className="sim-axis axis-x">X / AXIAL POSITION</div><div className="sim-axis axis-y">Y / RADIAL POSITION</div>
    <div className="flow-line flow-1" /><div className="flow-line flow-2" /><div className="flow-line flow-3" />
    <div className="sim-flame"><i className="flame-outer" /><i className="flame-mid" /><i className="flame-inner" /><span className="sample-rod" /></div>
    <div className="scale"><span>LOW</span><i /><span>HIGH TEMPERATURE</span></div>
    <div className="sim-reticle"><span /></div>
    {running && <div className="sim-progress"><span /><strong>Solving propagation model…</strong><small>Iteration 64 / 100</small></div>}
  </div>;
}

function Simulation() {
  const [running, setRunning] = useState(false);
  const [oxygen, setOxygen] = useState(30);
  const [airflow, setAirflow] = useState(0.42);
  const run = () => { setRunning(true); window.setTimeout(() => setRunning(false), 2400); };
  return <main className="app-main">
    <div className="page-head simple"><div><p className="eyebrow">SIMULATION WORKSPACE / SIM-2841</p><h1>Microgravity Flame Simulation</h1><p>Explore how environmental conditions influence flame propagation.</p></div><div className="simulation-status"><Badge tone={running ? "amber" : "green"}>{running ? "Simulation running" : "Model ready"}</Badge><span>v2.4.1</span></div></div>
    <div className="simulation-layout">
      <aside className="card controls">
        <div className="card-head"><div><p className="eyebrow">INPUT PARAMETERS</p><h2>Environment</h2></div><button className="reset-button">Reset</button></div>
        <div className="control-group"><div className="control-label"><label htmlFor="oxygen">O₂ concentration</label><output>{oxygen}%</output></div><input id="oxygen" className="range" type="range" min="18" max="40" value={oxygen} onChange={(e) => setOxygen(Number(e.target.value))} /><div className="range-labels"><span>18%</span><span>40%</span></div></div>
        <div className="control-group"><div className="control-label"><label htmlFor="airflow">Airflow velocity</label><output>{airflow.toFixed(2)} m/s</output></div><input id="airflow" className="range" type="range" min="0" max="1" step="0.01" value={airflow} onChange={(e) => setAirflow(Number(e.target.value))} /><div className="range-labels"><span>0 m/s</span><span>1.0 m/s</span></div></div>
        <label className="field-label">Cabin pressure<div className="unit-input"><input type="number" defaultValue="101.3" /><span>kPa</span></div></label>
        <div className="field-label">Gravity mode<div className="toggle-group"><button>1G</button><button className="active">Microgravity</button></div></div>
        <label className="field-label">Material<select><option>PMMA — Acrylic</option><option>Nomex</option><option>Silicone</option><option>Kapton</option></select></label>
        <div className="model-note"><Icon name="shield" size={17} /><p><strong>Model scope</strong>Results are comparative estimates, not certification data.</p></div>
        <Button onClick={run} disabled={running}><Icon name={running ? "activity" : "play"} size={17} />{running ? "Running Simulation…" : "Run Simulation"}</Button>
      </aside>
      <section className="card simulation-stage">
        <div className="card-head"><div><p className="eyebrow">COMBUSTION VISUALIZATION</p><h2>Flame envelope · Axial section</h2></div><div className="view-controls"><button className="active">Live</button><button>Before / After</button><button>1G vs μG</button></div></div>
        <FlameVisual running={running} />
        <div className="sim-metrics"><div><small>FLAME SPREAD RATE</small><strong>0.78 <span>mm/s</span></strong><em>+18% vs 1G</em></div><div><small>PROPAGATION TREND</small><strong>Increasing</strong><em className="blue">Diffusion-led</em></div><div><small>SIMULATION STATUS</small><strong>{running ? "Computing" : "Completed"}</strong><em className="green">{running ? "In progress" : "Converged"}</em></div><div><small>ENVIRONMENT</small><strong>{oxygen}% O₂</strong><em>{airflow.toFixed(2)} m/s airflow</em></div></div>
      </section>
    </div>
  </main>;
}

const sourceCards = [
  ["NASA PSI", "Physical Sciences Informatics", "Experiment repository", "BASS-II Flame Spread Dataset"],
  ["BASS-II", "Burning and Suppression of Solids", "Combustion experiment", "Microgravity Solid Fuel Burning"],
  ["SAFFIRE", "Spacecraft Fire Experiment", "Orbital experiment", "Large-Scale Fire Growth Analysis"],
  ["NTRS", "Technical Reports Server", "Technical literature", "Spacecraft Materials Flammability"],
  ["OSDR", "Open Science Data Repository", "Open dataset", "Space Biology & Physical Sciences"],
];

function Copilot() {
  const [query, setQuery] = useState("How does elevated oxygen affect PMMA flame spread in microgravity?");
  const [processing, setProcessing] = useState(false);
  const ask = () => { setProcessing(true); window.setTimeout(() => setProcessing(false), 1800); };
  return <main className="copilot-page">
    <aside className="history-panel">
      <div className="history-head"><p className="eyebrow">RESEARCH THREADS</p><button className="icon-button">+</button></div>
      <button className="new-thread"><Icon name="spark" size={16} />New investigation</button>
      <small className="history-date">TODAY</small>
      {["Oxygen effect on PMMA", "SAFFIRE airflow conditions", "Nomex ignition thresholds"].map((x, i) => <button className={i === 0 ? "history-item active" : "history-item"} key={x}><Icon name="book" size={16} /><span><strong>{x}</strong><small>{i === 0 ? "4 sources · 09:44" : "Research complete"}</small></span></button>)}
      <small className="history-date">PREVIOUS</small>
      <button className="history-item"><Icon name="book" size={16} /><span><strong>Kapton material review</strong><small>7 sources · Yesterday</small></span></button>
      <div className="history-footer"><Icon name="shield" size={18} /><p><strong>Evidence policy</strong><small>Synthesis is always separated from retrieved source material.</small></p></div>
    </aside>
    <section className="conversation">
      <div className="conversation-head"><div><h1>Oxygen effect on PMMA</h1><p>Investigation ID · INV-2026-084</p></div><Badge tone="green">Evidence verified</Badge></div>
      <div className="messages">
        <div className="user-message"><span>TH</span><div><small>YOU · 09:42 UTC</small><p>{query}</p></div></div>
        <div className="ai-message"><span className="ai-mark"><Icon name="spark" /></span><div className="ai-content"><div className="message-meta"><small>SHUNNOSHIKHA AI · 09:44 UTC</small><Badge tone="blue">Confidence · High</Badge></div>
          {processing ? <div className="processing"><div className="loading-bars"><i /><i /><i /></div><strong>Retrieving NASA evidence…</strong><small>Searching PSI, NTRS and OSDR</small></div> : <>
            <div className="answer-section"><h3>Answer</h3><p>Elevated oxygen concentration increases PMMA flame spread in microgravity by supporting faster surface pyrolysis and broadening the conditions under which a flame can remain sustained. In reduced gravity, the absence of buoyancy makes this response especially dependent on oxygen diffusion and forced airflow.</p><p>Across the retrieved BASS-II evidence, the direction of this relationship is consistent, although the exact spread rate depends on specimen geometry and flow conditions.<sup>[1]</sup><sup>[2]</sup></p></div>
            <div className="reasoning-section"><h3>Reasoning summary</h3><ol><li>Identify PMMA experiments with varied oxygen concentration.</li><li>Compare reported flame spread direction and transport conditions.</li><li>Check agreement across experimental and technical-report sources.</li></ol></div>
            <div className="inline-evidence"><div><Icon name="shield" /><p><small>EVIDENCE BASIS</small><strong>4 sources retrieved · 3 directly relevant · Cross-source agreement high</strong></p></div><Badge tone="green">Verified</Badge></div>
            <p className="caution"><strong>Scientific caution:</strong> This synthesis describes experimental trends, not a universal ignition threshold or flight certification limit.</p>
          </>}
        </div></div>
      </div>
      <div className="composer"><label><textarea value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ask a follow-up question…" /><div><span><Icon name="database" size={15} /> NASA sources enabled</span><Button onClick={ask} disabled={processing}>{processing ? "Analyzing…" : "Analyze evidence"} <Icon name="arrow" size={16} /></Button></div></label><small>AI synthesis may contain uncertainty. Review cited evidence for mission-critical decisions.</small></div>
    </section>
    <aside className="evidence-panel">
      <div className="evidence-head"><div><p className="eyebrow">RETRIEVED EVIDENCE</p><h2>4 source records</h2></div><Badge tone="green">Verified</Badge></div>
      <div className="evidence-tabs"><button className="active">Relevant</button><button>All sources</button></div>
      <div className="evidence-list">{sourceCards.slice(0, 4).map((s, i) => <article className="evidence-card" key={s[0]}><div className="source-top"><span>{s[0]}</span><small>0.{96 - i * 5} relevance</small></div><h3>{s[3]}</h3><p>“Observed flame spread response under oxygen-enriched, low-gravity test conditions…”</p><div><button className="citation">[{i + 1}]</button><button className="open-source">Open source <Icon name="arrow" size={14} /></button></div></article>)}</div>
    </aside>
  </main>;
}

function Sources() {
  return <main className="app-main">
    <div className="page-head simple"><div><p className="eyebrow">DATA INFRASTRUCTURE</p><h1>NASA Research Sources</h1><p>Connected public research repositories supporting evidence-grounded analysis.</p></div><Badge tone="green">All systems connected</Badge></div>
    <div className="disclaimer"><Icon name="shield" /><p><strong>Independent project notice</strong> ShunnoShikha AI is an independent NASA Space Apps Challenge project and does not imply official NASA endorsement.</p></div>
    <section className="source-grid">{sourceCards.map((s, i) => <article className="source-overview-card" key={s[0]}>
      <div className="source-logo">{s[0]}</div><Badge tone={i === 2 ? "blue" : "green"}>{i === 2 ? "Indexed" : "Connected"}</Badge>
      <h2>{s[1]}</h2><p>{i === 0 ? "Curated archive of NASA physical science experiments and related data." : i === 1 ? "Microgravity investigations into solid-fuel burning and suppression." : i === 2 ? "Orbital experiments investigating larger-scale spacecraft fires." : i === 3 ? "Searchable collection of NASA technical reports and publications." : "Open repository for NASA-funded biological and physical science data."}</p>
      <div className="source-meta"><span><small>DATASET TYPE</small><strong>{s[2]}</strong></span><span><small>INDEX HEALTH</small><strong>Current</strong></span></div>
      <Button variant="secondary">Explore source <Icon name="arrow" size={16} /></Button>
    </article>)}</section>
    <section className="card source-health"><SectionTitle eyebrow="CONNECTION HEALTH" title="Evidence pipeline status" /><div className="health-rows">{sourceCards.map((s, i) => <div key={s[0]}><span className="source-initial">{s[0].slice(0, 2)}</span><div><strong>{s[0]}</strong><small>Last synchronized {i + 2} minutes ago</small></div><span className="health-bar"><i style={{ width: `${96 - i * 2}%` }} /></span><Badge tone="green">Operational</Badge></div>)}</div></section>
  </main>;
}

function Footer() {
  return <footer><div><Logo /><p>Independent research interface by Team HASH for NASA Space Apps Challenge 2026.</p></div><div><span>FLAME IN FREEFALL</span><span>AI-POWERED FIRE SAFETY</span><span>v1.0</span></div></footer>;
}

export default function App() {
  const [page, setPage] = useState<Page>("landing");
  const navigateTo = (nextPage: Page) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return <div className="app-shell">
    <Navbar page={page} setPage={navigateTo} />
    {page === "landing" && <Landing setPage={navigateTo} />}
    {page === "overview" && <Overview setPage={navigateTo} />}
    {page === "materials" && <Materials />}
    {page === "simulation" && <Simulation />}
    {page === "copilot" && <Copilot />}
    {page === "sources" && <Sources />}
    {page !== "copilot" && <Footer />}
    <nav className="mobile-bottom">{nav.slice(0, 4).map((item) => <button key={item.page} className={page === item.page ? "active" : ""} onClick={() => navigateTo(item.page)}><Icon name={item.page === "overview" ? "gauge" : item.page === "materials" ? "shield" : item.page === "simulation" ? "flame" : "spark"} size={19} /><span>{item.label.split(" ")[0]}</span></button>)}</nav>
  </div>;
}
