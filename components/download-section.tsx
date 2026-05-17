'use client'
import { motion } from 'framer-motion'
import { Smartphone } from 'lucide-react'
import Link from 'next/link'

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M3.18 23.76a2.4 2.4 0 0 1-1.18-2.1V2.34A2.4 2.4 0 0 1 3.18.24l.1-.06 11.9 11.9-11.9 11.9-.1-.22zM16.54 8.22l-2.7-2.7L5.5 1.08l9.12 9.12 1.92-1.98zM20.4 10.26a2.4 2.4 0 0 1 0 3.48l-2.34 1.38-2.1-2.1 2.1-2.1 2.34 1.34zM5.5 22.92l8.34-4.44-2.7-2.7L5.5 22.92z" />
    </svg>
  )
}

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

export default function DownloadSection() {
  return (
    <section id="download" className="bg-[#0D1320] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20
                          rounded-full px-4 py-2 mb-6">
            <Smartphone size={13} className="text-teal-glow" />
            <span className="text-teal-glow text-xs font-semibold tracking-wide uppercase">
              Mobile app · Coming soon
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Get Abhaya on your phone
          </h2>
          <p className="text-white/45 text-lg font-light max-w-lg mx-auto leading-relaxed">
            The full app — with offline emergency guide, encrypted vault, and legal AI — is coming to Android and iOS. Join the waitlist to be first.
          </p>
        </motion.div>

        {/* Store buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          {/* Android */}
          <Link href="/download?platform=android">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10
                            rounded-2xl px-6 py-4 cursor-pointer hover:bg-white/10
                            hover:border-teal/30 transition-all duration-200 group min-w-[200px]">
              <div className="text-white/60 group-hover:text-teal-glow transition-colors">
                <PlayStoreIcon />
              </div>
              <div className="text-left">
                <p className="text-white/35 text-[10px] uppercase tracking-widest font-medium">
                  Get it on
                </p>
                <p className="text-white font-semibold text-base leading-tight">Google Play</p>
              </div>
            </div>
          </Link>

          {/* iOS */}
          <Link href="/download?platform=ios">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10
                            rounded-2xl px-6 py-4 cursor-pointer hover:bg-white/10
                            hover:border-teal/30 transition-all duration-200 group min-w-[200px]">
              <div className="text-white/60 group-hover:text-teal-glow transition-colors">
                <AppStoreIcon />
              </div>
              <div className="text-left">
                <p className="text-white/35 text-[10px] uppercase tracking-widest font-medium">
                  Download on the
                </p>
                <p className="text-white font-semibold text-base leading-tight">App Store</p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Build progress */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-xl mx-auto bg-white/[0.04] border border-white/8 rounded-2xl p-6"
        >
          <p className="text-white/35 text-xs font-semibold tracking-widest uppercase text-center mb-5">
            Build progress
          </p>
          <div className="flex flex-col gap-3">
            {[
              { label: 'Marketing site',        done: true,  pct: 100 },
              { label: 'Survey & research',      done: true,  pct: 100 },
              { label: 'Emergency guide',        done: false, pct: 60  },
              { label: 'Legal rights AI',        done: false, pct: 40  },
              { label: 'Evidence vault',         done: false, pct: 20  },
              { label: 'Android app',            done: false, pct: 10  },
              { label: 'iOS app',                done: false, pct: 5   },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-4">
                <div className={`w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center
                                 ${item.done ? 'bg-teal' : 'bg-white/10'}`}>
                  {item.done && <span className="text-white text-[9px]">✓</span>}
                </div>
                <span className={`text-sm flex-1 ${item.done ? 'text-white/80' : 'text-white/35'}`}>
                  {item.label}
                </span>
                <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden flex-shrink-0">
                  <div
                    className={`h-full rounded-full transition-all ${item.done ? 'bg-teal' : 'bg-teal/40'}`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
                <span className="text-white/25 text-xs w-8 text-right">{item.pct}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
