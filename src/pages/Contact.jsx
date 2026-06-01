import './Contact.css'
import { assetUrl } from '@/utils/assetUrl'

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1 className="contact-heading">
          Contact<span className="contact-heading-dot">.</span>
        </h1>

        <div className="contact-details">
          <div className="contact-item">
            <h2 className="contact-label">Email</h2>
            <a href="mailto:drucilla.williams@moeschools.edu.jm" className="contact-link">
              drucilla.williams@moeschools.edu.jm
            </a>
          </div>

          <div className="contact-item">
            <h2 className="contact-label">School affiliation</h2>
            <p className="contact-school">Montego Bay High School</p>
            <img
              src={assetUrl('images/MBHS-Logo.webp')}
              alt="Montego Bay High School logo"
              className="contact-logo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
