const SOURCES = {
  amfi: { name: "AMFI: find and verify a mutual fund distributor", url: "https://www.amfiindia.com/" },
  sebi: { name: "SEBI: investor information", url: "https://www.sebi.gov.in/" },
  scores: { name: "SEBI SCORES: lodge an investor complaint", url: "https://scores.sebi.gov.in/" },
  maharera: { name: "MahaRERA: registered projects and agents (Maharashtra)", url: "https://maharera.maharashtra.gov.in/" },
  gujrera: { name: "GujRERA: registered projects and agents (Gujarat)", url: "https://gujrera.gujarat.gov.in/" },
  irdai: { name: "IRDAI: insurance regulator", url: "https://irdai.gov.in/" },
  bima: { name: "Bima Bharosa: IRDAI policyholder complaints", url: "https://policyholder.gov.in/" },
  rbi: { name: "RBI: borrower and banking information", url: "https://www.rbi.org.in/" },
  cibil: { name: "TransUnion CIBIL: credit score and report", url: "https://www.cibil.com/" },
  it: { name: "Income Tax Department: tax rules and ELSS deductions", url: "https://www.incometax.gov.in/" },
} as const;

export type SourceKey = keyof typeof SOURCES;

/** Links to the regulator or authority behind each rule, so a reader can check the claim at the source. */
export function OfficialSources({ keys }: { keys: SourceKey[] }) {
  return (
    <section className="py-10 bg-surface border-t border-border" aria-labelledby="official-sources">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="official-sources" className="font-heading font-semibold text-xl text-primary mb-3">Official sources</h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
          {keys.map((k) => (
            <li key={k}>
              <a href={SOURCES[k].url} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-secondary underline underline-offset-2 hover:text-primary">
                {SOURCES[k].name}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-body text-xs text-foreground-muted mt-4 measure">These are the regulators&apos; own sites. Rules change, so check the current position there before acting.</p>
      </div>
    </section>
  );
}
