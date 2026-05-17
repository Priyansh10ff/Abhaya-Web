'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function WaitlistSection() {
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
    <section id="waitlist" className="bg-dark py-24 md:py-36 relative overflow-hidden">
      {/* Aurora bg */}
      <div className="absolute inset-0 hero-aurora opacity-50" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />

      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20
                          rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-teal-glow animate-pulse2" />
            <span className="text-teal-glow text-xs font-semibold tracking-wide uppercase">
              Early access · Limited spots
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Be first in line
            <span className="italic gradient-text block mt-1">when Abhaya launches.</span>
          </h2>

          <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Join the waitlist. Get early access before public launch. Help shape what gets built with your survey feedback.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="waitlist-input flex-1 px-5 py-4 rounded-2xl text-sm font-medium"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-shimmer text-white font-semibold text-sm px-7 py-4
                             rounded-2xl whitespace-nowrap flex items-center gap-2
                             justify-center disabled:opacity-60"
                >
                  {loading ? 'Joining…' : <><span>Join waitlist</span><ArrowRight size={16} /></>}
                </button>
              </div>
              {error && <p className="text-red-400 text-xs mt-3">{error}</p>}
              <p className="text-white/20 text-xs mt-4">
                One email when we launch. No spam. Unsubscribe any time.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-md mx-auto"
            >
              <div className="flex items-center justify-center gap-3 py-5 px-8 rounded-2xl
                              bg-teal/15 border border-teal/25">
                <CheckCircle2 size={22} className="text-teal-glow" />
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">You&apos;re on the list.</p>
                  <p className="text-white/50 text-xs mt-0.5">
                    We&apos;ll email you the moment Abhaya is ready.
                  </p>
                </div>
              </div>
              <a
                href="/survey"
                className="inline-flex items-center gap-2 text-teal-glow/70 text-sm
                           hover:text-teal-glow transition-colors mt-5 font-medium"
              >
                While you wait — take the survey and shape what gets built →
              </a>
            </motion.div>
          )}
        </motion.div>

        {/* What you get */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-2xl
                     overflow-hidden border border-white/5"
        >
          {[
            { title: 'First access',   body: 'Get the app before anyone else' },
            { title: 'Shape the build', body: 'Your survey answers decide priorities' },
            { title: 'Free forever',   body: 'Core safety features will always be free' },
          ].map(b => (
            <div key={b.title} className="bg-white/[0.03] px-6 py-5 text-center">
              <p className="text-teal-glow text-sm font-semibold mb-1">{b.title}</p>
              <p className="text-white/35 text-xs">{b.body}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
