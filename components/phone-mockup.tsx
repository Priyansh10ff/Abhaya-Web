'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Lock, MapPin, Scale, Heart, MessageCircle } from 'lucide-react'

const screens = [
  {
    label: 'Emergency Guide',
    icon: Shield,
    color: '#0B6860',
    bg: '#0D1F1D',
    content: (
      <div className="p-4 flex flex-col gap-3">
        <div className="text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-1">
          Emergency · Step 2 of 5
        </div>
        <div className="text-white font-semibold text-sm leading-snug mb-1">
          Go to a hospital now
        </div>
        <div className="bg-white/5 rounded-xl p-3 border border-white/10">
          <p className="text-white/70 text-[11px] leading-relaxed">
            You do <span className="text-[#00C9B8] font-medium">not</span> need a police
            complaint first. Any govt hospital must examine you.
          </p>
        </div>
        {['Do not shower or change clothes', 'Bring your phone fully charged', 'You have the right to a female doctor'].map(t => (
          <div key={t} className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#0B6860]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[#00C9B8] text-[10px]">✓</span>
            </div>
            <span className="text-white/70 text-[11px] leading-relaxed">{t}</span>
          </div>
        ))}
        <button className="w-full bg-[#0B6860] text-white text-[11px] font-semibold
                           py-2.5 rounded-xl mt-1">
          Find nearest hospital →
        </button>
      </div>
    ),
  },
  {
    label: 'Legal AI',
    icon: Scale,
    color: '#1A4A9B',
    bg: '#0D1528',
    content: (
      <div className="p-4 flex flex-col gap-2.5">
        <div className="text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-1">
          Legal Rights AI
        </div>
        <div className="bg-white/5 rounded-xl rounded-tl-sm p-3 border border-white/10 self-start max-w-[85%]">
          <p className="text-white/80 text-[11px] leading-relaxed">
            The police refused to take my complaint. What do I do?
          </p>
        </div>
        <div className="bg-[#1A4A9B]/30 rounded-xl rounded-tr-sm p-3 border border-[#1A4A9B]/50 self-end max-w-[90%]">
          <p className="text-white/80 text-[11px] leading-relaxed">
            Refusing an FIR is <span className="text-blue-300 font-medium">illegal under Section 154 CrPC</span>. Here are your 3 options right now →
          </p>
        </div>
        <div className="bg-white/5 rounded-xl p-3 border border-white/10">
          {['Complaint to District SP', 'File e-FIR online', 'Section 156(3) petition'].map((o, i) => (
            <div key={o} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0">
              <span className="text-[#00C9B8] text-[10px] font-bold">{i+1}.</span>
              <span className="text-white/70 text-[11px]">{o}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: 'Evidence Vault',
    icon: Lock,
    color: '#0B6860',
    bg: '#0A1A19',
    content: (
      <div className="p-4 flex flex-col gap-3">
        <div className="text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-1">
          Evidence Vault · 3 items secured
        </div>
        {[
          { name: 'Screenshot_whatsapp.jpg', size: '2.4 MB', time: 'Saved 11:42 PM', type: '📸' },
          { name: 'Voice_note_recording.m4a', size: '8.1 MB', time: 'Saved 11:48 PM', type: '🎙️' },
          { name: 'Location_log_22nov.txt',  size: '12 KB',  time: 'Saved 11:51 PM', type: '📍' },
        ].map(f => (
          <div key={f.name} className="bg-white/5 rounded-xl p-3 border border-white/10 flex items-center gap-3">
            <span className="text-lg">{f.type}</span>
            <div className="flex-1 min-w-0">
              <p className="text-white/80 text-[10px] font-medium truncate">{f.name}</p>
              <p className="text-white/35 text-[9px]">{f.size} · {f.time}</p>
            </div>
            <div className="w-5 h-5 rounded-full bg-[#0B6860]/40 flex items-center justify-center flex-shrink-0">
              <span className="text-[#00C9B8] text-[8px]">✓</span>
            </div>
          </div>
        ))}
        <div className="bg-[#00C9B8]/10 rounded-xl p-2.5 border border-[#00C9B8]/20 text-center">
          <span className="text-[#00C9B8] text-[10px] font-medium">
            🔒 RFC 3161 timestamped · E2E encrypted
          </span>
        </div>
      </div>
    ),
  },
  {
    label: 'Safety Map',
    icon: MapPin,
    color: '#7C3AED',
    bg: '#110D1E',
    content: (
      <div className="p-4 flex flex-col gap-3">
        <div className="text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-1">
          Safety Map · Bengaluru
        </div>
        {/* Fake map */}
        <div className="relative w-full h-28 bg-[#1A1030] rounded-xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 opacity-20"
               style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)', backgroundSize: '20px 20px' }} />
          {/* Pins */}
          {[
            { x:'30%', y:'40%', c:'bg-red-500', pulse:true },
            { x:'55%', y:'60%', c:'bg-orange-500', pulse:false },
            { x:'70%', y:'30%', c:'bg-red-500', pulse:false },
            { x:'45%', y:'25%', c:'bg-yellow-500', pulse:false },
          ].map((p,i) => (
            <div key={i} className={`absolute w-3 h-3 ${p.c} rounded-full -translate-x-1.5 -translate-y-1.5 ${p.pulse ? 'animate-pulse' : ''}`}
                 style={{ left: p.x, top: p.y }} />
          ))}
          <div className="absolute bottom-2 right-2 bg-white/10 rounded-lg px-2 py-1">
            <span className="text-white/60 text-[9px]">6 reports near you</span>
          </div>
        </div>
        <div className="flex gap-2">
          {['All times','Evening','Night'].map((t,i) => (
            <div key={t} className={`flex-1 text-center py-1.5 rounded-lg text-[10px] font-medium cursor-pointer
              ${i===2 ? 'bg-purple-600/40 text-purple-300 border border-purple-500/30' : 'bg-white/5 text-white/40'}`}>
              {t}
            </div>
          ))}
        </div>
        <div className="bg-white/5 rounded-xl p-3 border border-white/10">
          <p className="text-white/60 text-[10px] leading-relaxed">
            📍 <span className="text-white/80 font-medium">MG Road area</span> — 3 women reported feeling unsafe here after 9pm this week
          </p>
        </div>
      </div>
    ),
  },
]

const floatingBadges = [
  { icon: Shield, label: 'Works offline',      pos: 'top-8 -left-16 md:-left-24',   delay: 0 },
  { icon: Lock,   label: 'E2E Encrypted',      pos: 'top-32 -right-14 md:-right-20', delay: 0.3 },
  { icon: Scale,  label: 'Legal AI',           pos: 'bottom-32 -left-14 md:-left-20',delay: 0.6 },
  { icon: Heart,  label: '6 languages',        pos: 'bottom-10 -right-12 md:-right-18',delay: 0.9 },
]

export default function PhoneMockup() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % screens.length), 3500)
    return () => clearInterval(t)
  }, [])

  const current = screens[active]

  return (
    <section className="bg-dark py-24 md:py-36 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-eyebrow text-teal-glow/60 mb-4">In your pocket</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Everything you need,
              <span className="italic gradient-text"> always with you.</span>
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-8">
              Built mobile-first. Works offline. Available in 6 Indian languages. Designed for the moment you need it — not the ideal conditions you wish you had.
            </p>

            {/* Screen tabs */}
            <div className="flex flex-wrap gap-2">
              {screens.map((s, i) => {
                const Icon = s.icon
                return (
                  <button
                    key={s.label}
                    onClick={() => setActive(i)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium
                                transition-all duration-200 border
                                ${active === i
                                  ? 'bg-teal text-white border-teal shadow-teal-glow'
                                  : 'bg-white/5 text-white/40 border-white/10 hover:border-white/20 hover:text-white/60'
                                }`}
                  >
                    <Icon size={12} />
                    {s.label}
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center relative"
          >
            {/* Floating badges */}
            {floatingBadges.map((b, i) => {
              const Icon = b.icon
              return (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: b.delay + 0.5, duration: 0.5 }}
                  className={`absolute ${b.pos} z-20 hidden md:flex items-center gap-2
                               bg-white/5 backdrop-blur-sm border border-white/10
                               rounded-full px-3 py-2 animate-float`}
                  style={{ animationDelay: `${b.delay}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-teal/30 flex items-center justify-center">
                    <Icon size={12} className="text-teal-glow" />
                  </div>
                  <span className="text-white/70 text-[11px] font-medium whitespace-nowrap">{b.label}</span>
                </motion.div>
              )
            })}

            {/* The phone */}
            <div className="relative w-[240px] md:w-[260px]">
              {/* Frame */}
              <div
                className="phone-frame relative overflow-hidden"
                style={{
                  background: '#080E1A',
                  border: '2px solid rgba(255,255,255,0.08)',
                  borderRadius: '2.5rem',
                  height: '520px',
                }}
              >
                {/* Notch */}
                <div className="absolute top-4 inset-x-0 flex justify-center z-20">
                  <div className="w-24 h-5 bg-dark rounded-full" />
                </div>

                {/* Status bar */}
                <div className="absolute top-4 inset-x-0 px-6 flex justify-between items-center z-10">
                  <span className="text-white/40 text-[9px] font-medium">9:41</span>
                  <span className="text-white/40 text-[9px]">●●●</span>
                </div>

                {/* Screen content */}
                <div className="absolute inset-0 pt-12" style={{ background: current.bg }}>
                  {/* App header */}
                  <div className="px-4 py-3 flex items-center gap-2.5 border-b border-white/5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                         style={{ background: current.color }}>
                      <Shield size={14} className="text-white" />
                    </div>
                    <span className="text-white font-serif font-semibold text-sm">Abhaya</span>
                    <span className="ml-auto text-white/30 text-[10px]">{current.label}</span>
                  </div>

                  {/* Screen content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      {current.content}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-0 inset-x-0 h-8 flex items-center justify-center
                                border-t border-white/5 bg-dark/50 backdrop-blur-sm">
                  <div className="w-24 h-1 bg-white/20 rounded-full" />
                </div>
              </div>

              {/* Glow under phone */}
              <div className="absolute -bottom-6 inset-x-4 h-12 bg-teal/20 blur-2xl rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
