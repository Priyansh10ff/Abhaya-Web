'use client'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Shield, Smartphone, Bell, ArrowLeft, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M3.18 23.76a2.4 2.4 0 0 1-1.18-2.1V2.34A2.4 2.4 0 0 1 3.18.24l.1-.06 11.9 11.9-11.9 11.9-.1-.22zM16.54 8.22l-2.7-2.7L5.5 1.08l9.12 9.12 1.92-1.98zM20.4 10.26a2.4 2.4 0 0 1 0 3.48l-2.34 1.38-2.1-2.1 2.1-2.1 2.34 1.34zM5.5 22.92l8.34-4.44-2.7-2.7L5.5 22.92z" />
    </svg>
  )
}

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function DownloadContent() {
  const params   = useSearchParams()
  const platform = params.get('platform') ?? 'android'
  const isIOS    = platform === 'ios'

  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  async function handleNotify(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark flex flex-col relative overflow-hidden">
      {/* Aurora bg */}
      <div className="hero-aurora opacity-40" />
      <div className="hero-grid" />

      {/* Back link */}
      <div className="relative z-10 px-5 md:px-8 pt-6">
        <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70
                                   transition-colors text-sm font-medium group">
          <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
          Back to Abhaya
        </Link>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-5 md:px-8 py-16 relative z-10">
        <div className="text-center max-w-lg">

          {/* Platform badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10
                       rounded-full px-5 py-2.5 mb-8"
          >
            <div className="text-white/50">
              {isIOS ? <AppStoreIcon /> : <PlayStoreIcon />}
            </div>
            <span className="text-white/60 text-sm font-medium">
              Abhaya for {isIOS ? 'iOS' : 'Android'}
            </span>
          </motion.div>

          {/* Phone illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-block mb-10 animate-float"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-teal/20 blur-3xl scale-75 rounded-full" />

            {/* Phone */}
            <div className="relative w-36 h-64 mx-auto bg-dark-2 rounded-[2.2rem]
                            border border-white/10 overflow-hidden shadow-2xl">
              {/* Notch */}
              <div className="absolute top-3 inset-x-0 flex justify-center">
                <div className="w-16 h-4 bg-dark rounded-full" />
              </div>
              {/* Screen content */}
              <div className="absolute inset-0 pt-10 flex flex-col items-center justify-center gap-3 px-4">
                <div className="w-10 h-10 rounded-2xl bg-teal flex items-center justify-center">
                  <Shield size={20} className="text-white" />
                </div>
                <span className="text-white font-serif font-semibold text-sm">Abhaya</span>
                <div className="flex flex-col gap-1.5 w-full">
                  {['Emergency', 'Legal AI', 'Vault', 'Map'].map(f => (
                    <div key={f} className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-teal/50 rounded-full w-3/4" />
                    </div>
                  ))}
                </div>
                <div className="mt-2 bg-teal/20 border border-teal/30 rounded-xl px-3 py-1.5">
                  <span className="text-teal-glow text-[10px] font-semibold">Building…</span>
                </div>
              </div>
              {/* Bottom bar */}
              <div className="absolute bottom-2 inset-x-0 flex justify-center">
                <div className="w-12 h-1 bg-white/20 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              We&apos;re building it{' '}
              <span className="italic gradient-text">right now.</span>
            </h1>
            <p className="text-white/45 text-lg font-light leading-relaxed mb-8 max-w-md mx-auto">
              The {isIOS ? 'iOS' : 'Android'} app is in active development. Leave your email and you&apos;ll be the first to know the moment it hits the {isIOS ? 'App Store' : 'Play Store'}.
            </p>
          </motion.div>

          {/* Notify form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {!submitted ? (
              <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="waitlist-input flex-1 px-5 py-3.5 rounded-2xl text-sm font-medium"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-shimmer text-white font-semibold text-sm px-6 py-3.5
                             rounded-2xl flex items-center gap-2 justify-center whitespace-nowrap"
                >
                  <Bell size={15} />
                  {loading ? 'Saving…' : 'Notify me'}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl
                           bg-teal/15 border border-teal/25 max-w-sm mx-auto"
              >
                <CheckCircle2 size={18} className="text-teal-glow" />
                <span className="text-white/80 text-sm font-medium">
                  We&apos;ll notify you the moment it launches!
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* What's being built */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-14 grid grid-cols-2 gap-3 max-w-sm mx-auto"
          >
            {[
              { icon: '🛡️', label: 'Offline emergency guide' },
              { icon: '⚖️', label: 'Legal rights AI'         },
              { icon: '🔒', label: 'Evidence vault'          },
              { icon: '🗺️', label: 'Safety map'              },
              { icon: '💬', label: 'Anonymous community'     },
              { icon: '🩺', label: 'Health tracker'          },
            ].map(f => (
              <div key={f.label}
                   className="flex items-center gap-2.5 bg-white/[0.04] border border-white/8
                              rounded-xl px-3.5 py-3 text-left">
                <span className="text-base">{f.icon}</span>
                <span className="text-white/50 text-xs font-medium">{f.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Switch platform link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-white/25 text-sm"
          >
            Looking for{' '}
            <Link
              href={`/download?platform=${isIOS ? 'android' : 'ios'}`}
              className="text-teal-glow/60 hover:text-teal-glow transition-colors"
            >
              {isIOS ? 'Android' : 'iOS'}
            </Link>{' '}
            instead?
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default function DownloadPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-teal border-t-transparent animate-spin" />
      </div>
    }>
      <DownloadContent />
    </Suspense>
  )
}
