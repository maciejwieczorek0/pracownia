import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const currentY = window.scrollY
      const heroHeight = document.querySelector('.hero')?.offsetHeight ?? 0
      const inHero = currentY < Math.max(heroHeight - 80, 0)
      const scrollingUp = currentY < lastY

      setIsVisible(inHero || scrollingUp)
      lastY = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="logo">Pracownia Widawa</div>
      <div className="nav-links">
        <a href="#products">Oferta</a>
        <a href="#gallery">Realizacje</a>
        <a href="#contact">Kontakt</a>
      </div>
    </nav>
  )
}