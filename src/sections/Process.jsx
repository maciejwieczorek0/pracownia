import { motion } from 'framer-motion'

export default function Process() {
  const steps = [
    { title: 'Kontakt', desc: 'Napisz lub zadzwoń', icon: '📞' },
    { title: 'Wycena', desc: 'Indywidualna oferta', icon: '📄' },
    { title: 'Produkcja', desc: 'Realizacja projektu', icon: '🏭' },
    { title: 'Montaż', desc: 'Instalacja u klienta', icon: '🔧' }
  ]

  return (
    <section className="process">
      <h2>Jak wygląda współpraca</h2>

      <div className="funnel-horizontal">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className={`funnel-step-h step-h-${i}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}