import { useState } from 'react'

export default function Gallery() {
  const images = Array.from({ length: 15 }, (_, index) => `/gallery/work-${String(index + 1).padStart(2, '0')}.png`)

  const [selected, setSelected] = useState(null)

  return (
    <section className="gallery" id="gallery">
      <h2>Nasze realizacje</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <button key={img} type="button" className="gallery-item" onClick={() => setSelected(img)} aria-label={`Powiększ realizację ${i + 1}`}>
            <img src={img} alt={`Realizacja ogrodzenia ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {selected && (
        <div className="popup" onClick={() => setSelected(null)}>
          <img src={selected} alt="Powiększone zdjęcie realizacji" />
        </div>
      )}
    </section>
  )
}