'use client'
import { useState } from 'react'
import { motion }   from 'framer-motion'
import { ArrowDown, Sparkles, CheckCircle2 } from 'lucide-react'

const fade = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="hero-bg min-h-screen flex flex-col justify-center relative pt-16">
      {/* Layers */}
      <div className="hero-aurora" />
      <div className="hero-grid" />
      <div className="hero-noise" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full
                      bg-teal-glow/5 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 left-[5%] w-48 h-48 rounded-full
                      bg-teal/10 blur-3xl animate-float pointer-events-none"
           style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 py-24 md:py-32 text-center">

        {/* Badge */}
        <motion.div {...fade(0.1)} className="inline-flex items-center gap-2 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full
                          bg-white/5 border border-white/10 badge-glow">
            <Sparkles size={13} className="text-teal-glow" />
            <span className="text-xs font-medium text-white/70 tracking-wide">
              Coming soon · India&apos;s most complete women&apos;s safety app
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-teal-glow animate-pulse2 ml-1" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fade(0.2)}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white
                     leading-[1.05] tracking-tight mb-6"
        >
          The app that{' '}
          <span className="italic gradient-text">has your back.</span>
          <br />
          When nothing else does.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fade(0.35)}
          className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto mb-4
                     font-light leading-relaxed"
        >
          Safety guide, legal rights AI, encrypted evidence vault, safety map, 
          peer support, POSH help, period tracker — one app, built for when 
          the system fails you.
        </motion.p>

        {/* Language note */}
        <motion.p {...fade(0.4)} className="text-white/30 text-sm mb-10 font-medium tracking-wide">
          Hindi · Kannada · Tamil · Telugu · Bengali · Marathi
        </motion.p>

        {/* Waitlist form */}
        <motion.div {...fade(0.5)} className="max-w-md mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="waitlist-input flex-1 px-4 py-3.5 rounded-full text-sm font-medium"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-shimmer text-white font-semibold text-sm px-7 py-3.5
                           rounded-full whitespace-nowrap disabled:opacity-60"
              >
                {loading ? 'Joining…' : 'Get early access'}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 py-3.5 px-6 rounded-full
                         bg-teal/20 border border-teal-glow/30"
            >
              <CheckCircle2 size={18} className="text-teal-glow" />
              <span className="text-white/90 text-sm font-medium">
                You&apos;re on the list. We&apos;ll notify you first.
              </span>
            </motion.div>
          )}
          {error && <p className="text-red-400 text-xs mt-2 text-center">{error}</p>}
          <p className="text-white/25 text-xs mt-3">
            No spam. Just one email when we launch. Unsubscribe any time.
          </p>
        </motion.div>

        {/* Stat teaser */}
        <motion.div
          {...fade(0.65)}
          className="mt-16 grid grid-cols-3 gap-px max-w-xl mx-auto
                     bg-white/5 rounded-2xl overflow-hidden border border-white/5"
        >
          {[
            { n: '86+',  label: 'rapes reported daily'    },
            { n: '70×',  label: 'cases go unreported'     },
            { n: '<16%', label: 'conviction rate'         },
          ].map(s => (
            <div key={s.label} className="bg-white/[0.03] px-4 py-4 text-center">
              <div className="text-2xl font-serif font-bold text-teal-glow stat-number">{s.n}</div>
              <div className="text-white/40 text-xs mt-0.5 leading-tight">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 inset-x-0 flex justify-center"
      >
        <a href="#trust" className="flex flex-col items-center gap-1.5 text-white/25
                                    hover:text-white/50 transition-colors group">
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
