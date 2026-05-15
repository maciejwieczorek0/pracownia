import { useState } from 'react'

const leadEmail = import.meta.env.VITE_LEAD_EMAIL

export default function Contact() {
  const [toast, setToast] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const showToast = (type, message) => {
    setToast({ type, message })
    window.setTimeout(() => {
      setToast({ type: '', message: '' })
    }, 4000)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (!leadEmail) {
      showToast('error', 'Brak konfiguracji maila odbiorcy (VITE_LEAD_EMAIL).')
      return
    }

    setIsSubmitting(true)

    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      projectType: formData.get('projectType'),
      message: formData.get('message'),
      rodoConsent: formData.get('rodoConsent') ? 'TAK' : 'NIE',
      _subject: 'Nowa prosba o wycene - formularz strony',
      _template: 'table',
      _captcha: 'false'
    }

    try {
      const response = await fetch(`https://formsubmit.co/${leadEmail}`, {
        method: 'POST',
        body: formData
      })
    
      if (!response.ok) {
        throw new Error()
      }
    
      form.reset()
      showToast('success', 'Prosba o wycene zostala wyslana pomyslnie.')
    } catch {
      showToast('error', 'Wysylka nie powiodla sie.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-box">
        <p className="section-kicker">Kontakt</p>
        <h2>Umow darmowy pomiar i wycene</h2>
        <p>Odpowiadamy do 24h i pomagamy dobrac najlepsze rozwiazanie do Twojej posesji.</p>

        <form
          action={`https://formsubmit.co/${leadEmail}`}
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_subject"
            value="Nowa prosba o wycene - formularz strony"
          />
          <input name="name" placeholder="Imie" required />
          <input name="phone" placeholder="Telefon" required />
          <input name="email" type="email" placeholder="Email" required />

          <select name="projectType" defaultValue="" required>
            <option value="" disabled>Typ realizacji</option>
            <option>Ogrodzenie poziome</option>
            <option>Ogrodzenie pionowe</option>
            <option>Brama i furtka</option>
            <option>Balustrady i schody</option>
          </select>

          <textarea name="message" placeholder="Opisz projekt i miejscowosc montazu" required />

          <label className="rodo-consent">
            <input className="rodo-checkbox" name="rodoConsent" type="checkbox" required />
            <span>
              Wyrazam zgode na przetwarzanie danych osobowych w celu kontaktu i przygotowania wyceny.
              Szczegoly w <a href="#privacy-policy">Polityce prywatnosci</a>.
            </span>
          </label>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Wysylanie...' : 'Popros o wycene'}
          </button>
        </form>

        {toast.message && (
          <div className={`contact-toast ${toast.type === 'success' ? 'toast-success' : 'toast-error'}`}>
            {toast.message}
          </div>
        )}

        <div className="trust">
          <span>Bezplatna wycena</span>
          <span>Szybki kontakt</span>
          <span>Pomiar na miejscu</span>
        </div>
      </div>

      <div className="privacy-policy-box" id="privacy-policy">
        <h3>Polityka prywatnosci (RODO)</h3>
        <p>
          Administratorem danych jest Pracownia Widawa. Dane podane w formularzu przetwarzamy w celu kontaktu
          i przygotowania wyceny na podstawie Twojej zgody. Dane nie sa udostepniane podmiotom trzecim
          poza niezbednymi uslugami technicznymi obslugujacymi wysylke formularza.
        </p>
        <p>
          Masz prawo dostepu do danych, ich poprawiania, usuniecia, ograniczenia przetwarzania oraz
          cofniecia zgody. W sprawach dotyczacych danych osobowych skontaktuj sie z nami mailowo.
        </p>
      </div>
    </section>
  )
}