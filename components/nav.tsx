'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Shield } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Features',     href: '#features'     },
  { label: 'How it works', href: '#how-it-works'  },
  { label: 'Security',     href: '#security'      },
  { label: 'About',        href: '#about'         },
  { label: 'FAQ',          href: '#faq'           },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1  }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed top-0 inset-x-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5 shadow-2xl'
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center
                            group-hover:bg-teal-mid transition-colors duration-200">
              <Shield size={16} className="text-white" />
            </div>
            <span className="font-serif font-semibold text-lg text-white tracking-tight">
              Abhaya
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#waitlist"
              className="btn-shimmer text-white font-medium text-sm px-5 py-2.5 rounded-full"
            >
              Get early access
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1,  y: 0   }}
            exit={{ opacity: 0,    y: -20  }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-16 z-40 bg-dark/95 backdrop-blur-xl
                       border-b border-white/5 px-5 py-6 md:hidden"
          >
            <div className="flex flex-col gap-5">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-white font-medium text-base transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={() => setOpen(false)}
                className="btn-shimmer text-white font-medium text-sm px-5 py-3
                           rounded-full text-center mt-2"
              >
                Get early access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
