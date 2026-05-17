'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView }            from 'framer-motion'

const stats = [
  {
    value: 86,
    suffix: '+',
    label: 'rapes reported every day',
    sub: 'NCRB 2021 data',
    color: 'text-red-400',
  },
  {
    value: 70,
    suffix: '×',
    label: 'go unreported for every 1 case filed',
    sub: 'estimated underreporting',
    color: 'text-orange-400',
  },
  {
    value: 16,
    prefix: '<',
    suffix: '%',
    label: 'conviction rate across 6 years',
    sub: 'as low as 9% in 2020',
    color: 'text-yellow-400',
  },
  {
    value: 65,
    suffix: '%',
    label: 'acquittal rate in rape cases 2022',
    sub: 'the system protects perpetrators',
    color: 'text-teal-glow',
  },
]

function Counter({ value, prefix = '', suffix = '', color }: {
  value: number; prefix?: string; suffix?: string; color: string
}) {
  const [count, setCount]   = useState(0)
  const ref                  = useRef<HTMLSpanElement>(null)
  const inView               = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const start    = performance.now()
    const tick     = (now: number) => {
      const pct = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - pct, 4)
      setCount(Math.round(ease * value))
      if (pct < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span ref={ref} className={`font-serif font-bold stat-number ${color}`}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-[#0D1320] py-24 md:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="section-eyebrow text-teal-glow/60 mb-4">The reality</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Numbers the system doesn&apos;t want you to sit with
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/[0.025] p-8 md:p-10 flex flex-col gap-3"
            >
              <div className="text-5xl md:text-6xl leading-none mb-1">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} color={s.color} />
              </div>
              <p className="text-white/80 font-medium text-base leading-snug">{s.label}</p>
              <p className="text-white/30 text-xs font-medium tracking-wide uppercase">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-white/25 text-center text-sm mt-8"
        >
          Sources: NCRB 2021, National Family Health Survey, Ministry of Women &amp; Child Development
        </motion.p>
      </div>
    </section>
  )
}
