export function TrustBadge() {
  return (
    <div className="flex w-full flex-col items-center gap-6 rounded-3xl border border-tannengruen/10 bg-white p-8 text-center shadow-sm shadow-tannengruen/5 md:p-10">
      {/* ProvenExpert Bewertungssiegel */}
      <a
        href="https://www.provenexpert.com/enver-ilhan/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget"
        title="Kundenbewertungen & Erfahrungen zu Enver Ilhan. Mehr Infos anzeigen."
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <img
          src="https://images.provenexpert.com/81/c4/d95502432fe1216db1be4de1857e/widget_portrait_180_de_0.png"
          alt="Erfahrungen & Bewertungen zu Enver Ilhan"
          width={180}
          height={216}
          style={{ border: 0 }}
        />
      </a>
      {/* /ProvenExpert Bewertungssiegel */}

      <p className="text-sm text-muted">ProvenExpert-Bewertung aus Envers bisheriger Vertriebsarbeit</p>

      <div className="grid w-full grid-cols-2 gap-6 border-t border-tannengruen/10 pt-6">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-extrabold text-tannengruen">86+</span>
          <span className="text-sm text-muted">betreute Kunden</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-extrabold text-tannengruen">Ø 6×+</span>
          <span className="text-sm text-muted">Return on Invest</span>
        </div>
      </div>
    </div>
  );
}
