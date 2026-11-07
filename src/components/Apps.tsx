const apps = [
  { icon: "🌐", name: "Firefox", category: "Browser" },
  { icon: "🌍", name: "Chrome", category: "Browser" },
  { icon: "📄", name: "LibreOffice Writer", category: "Office" },
  { icon: "📊", name: "LibreOffice Calc", category: "Office" },
  { icon: "📑", name: "LibreOffice Impress", category: "Office" },
  { icon: "🗃️", name: "LibreOffice Base", category: "Office" },
  { icon: "🎬", name: "VLC", category: "Media" },
  { icon: "📦", name: "Xarchiver", category: "Archive" },
  { icon: "🔧", name: "Synaptic", category: "Package Mgr" },
  { icon: "📁", name: "Dolphin", category: "File Manager" },
  { icon: "🖥️", name: "Konsole", category: "Terminal" },
  { icon: "🔍", name: "KFind", category: "Search" },
];

export default function Apps() {
  return (
    <section className="section" id="apps">
      <div className="container">
        <div className="section__header">
          <div className="section__tag">Included Apps</div>
          <h2 className="section__title">Pre-installed and ready to go</h2>
          <p className="section__desc">
            A curated set of productivity, media, and utility apps ship with every build.
          </p>
        </div>

        <div className="apps__grid">
          {apps.map((a, i) => (
            <div className="app-tile" key={i}>
              <div className="app-tile__icon">{a.icon}</div>
              <div className="app-tile__name">{a.name}</div>
              <div className="app-tile__category">{a.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
