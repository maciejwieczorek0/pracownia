const benefits = [
  {
    title: 'Dlugowiecznosc i odpornosc',
    description: 'Stalowe i aluminiowe systemy z zabezpieczeniem antykorozyjnym na lata.'
  },
  {
    title: 'Estetyka i styl',
    description: 'Nowoczesne wzory, ktore podkreslaja charakter posesji i architekture domu.'
  },
  {
    title: 'Bezpieczenstwo',
    description: 'Solidne wykonanie, stabilne konstrukcje i mozliwosc integracji z automatyka.'
  },
  {
    title: 'Kompleksowa obsluga',
    description: 'Pomiar, doradztwo, projekt i montaz w jednej sprawdzonej ekipie.'
  }
]

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="section-intro">
        <p className="section-kicker">Dlaczego my</p>
        <h2>Ogrodzenie, ktore laczy design i funkcjonalnosc</h2>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <article key={benefit.title} className="benefit-card">
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
