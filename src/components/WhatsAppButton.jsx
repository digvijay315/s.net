import { FaWhatsapp } from 'react-icons/fa'
import { company } from '../data/content'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-[0_8px_30px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-110"
    >
      <FaWhatsapp />
    </a>
  )
}
