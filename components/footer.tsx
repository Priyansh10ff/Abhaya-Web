import { Shield } from 'lucide-react'

const links = {
  Features: [
    { label: 'Emergency Guide',   href: '#features' },
    { label: 'Legal Rights AI',   href: '#features' },
    { label: 'Evidence Vault',    href: '#features' },
    { label: 'FIR Escalator',     href: '#features' },
    { label: 'Safety Map',        href: '#features' },
    { label: 'POSH Rights',       href: '#features' },
    { label: 'Health',            href: '#features' },
    { label: 'Finance',           href: '#features' },
  ],
  Resources: [
    { label: 'How it works',      href: '#how-it-works' },
    { label: 'Security',          href: '#security'     },
    { label: 'FAQ',               href: '#faq'          },
    { label: 'Privacy Policy',    href: '/privacy'      },
    { label: 'Take the Survey',   href: '/survey'       },
  ],
  'Get help now': [
    { label: 'iCall (Mental health)',    href: 'https://icallhelpline.org' },
    { label: 'NALSA (Free legal aid)',   href: 'https://nalsa.gov.in'     },
    { label: 'NCW Helpline: 181',        href: 'tel:181'                  },
    { label: 'Women Helpline: 1091',     href: 'tel:1091'                 },
    { label: 'SHe-Box (POSH)',           href: 'https://shebox.nic.in'    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-teal flex items-center justify-center">
                <Shield size={17} className="text-white" />
              </div>
              <span className="font-serif font-semibold text-xl text-white">Abhaya</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              Safety, legal rights, evidence vault, health — one app. Built for women in India, for when the system fails you.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Hindi', 'Kannada', 'Tamil', 'Telugu', 'Bengali', 'Marathi'].map(l => (
                <span key={l} className="text-white/30 text-[11px] border border-white/10 rounded-full px-2.5 py-1">
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map(item => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/35 text-sm hover:text-white/70 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row
                        items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Abhaya. Built with care in Bengaluru, India.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-white/20 text-xs hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="mailto:YOUR_EMAIL_HERE" className="text-white/20 text-xs hover:text-white/50 transition-colors">
              Contact
            </a>
            <span className="text-white/10 text-xs">
              Core features will always be free.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
