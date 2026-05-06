export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-surface" style={{ backgroundImage: 'url(/hero/hero-main.png)' }}>
        <div className="overlay">
          <p className="hero-kicker">Nowoczesne ogrodzenia i konstrukcje stalowe</p>
          <h1>Projekt, produkcja i montaz ogrodzen pod wymiar</h1>
          <p>Trwale realizacje dopasowane do architektury Twojego domu.</p>
          <div className="hero-actions">
            <button type="button" onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}>
              Darmowa wycena
            </button>
            <button type="button" className="secondary" onClick={() => document.querySelector('#products').scrollIntoView({ behavior: 'smooth' })}>
              Zobacz oferte
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}