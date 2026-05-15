export default function Products() {
  const items = [
    {
      title: 'Ogrodzenia poziome',
      description: 'Proste linie i nowoczesny charakter do wspolczesnej zabudowy.',
      img: `${import.meta.env.BASE_URL}gallery/work-01.png`
    },
    {
      title: 'Ogrodzenia pionowe',
      description: 'Lekka forma i elegancja z wieksza przepuszczalnoscia swiatla.',
      img: `${import.meta.env.BASE_URL}gallery/work-08.png`
    },
    {
      title: 'Bramy i furtki',
      description: 'Spojne stylistycznie systemy z opcja automatyki i kontroli dostepu.',
      img: `${import.meta.env.BASE_URL}gallery/work-04.png`
    },
    {
      title: 'Konstrukcje stalowe',
      description: 'Balustrady, schody i elementy stalowe wykonywane pod konkretny projekt.',
      img: `${import.meta.env.BASE_URL}gallery/work-05.png`
    }
  ]

  return (
    <section className="products" id="products">
      <div className="section-intro">
        <p className="section-kicker">Oferta</p>
        <h2>Kolekcje dopasowane do Twojej posesji</h2>
      </div>
      {items.map((item, i) => (
        <article key={item.title} className="product-card">
          <img src={item.img} alt={item.title} />
          <div className="product-overlay">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </section>
  )
}