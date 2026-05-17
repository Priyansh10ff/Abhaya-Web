'use client'
import { motion } from 'framer-motion'
import { Code2, Heart, Shield } from 'lucide-react'

const values = [
  { icon: Code2,   label: 'Independent developer', body: 'No VC funding. No corporate agenda. Just code and conviction.' },
  { icon: Heart,   label: 'Built from Bengaluru',   body: 'Understanding the ground reality of safety in Indian cities.' },
  { icon: Shield,  label: 'Open to audit',          body: 'The security architecture will be publicly documented and verifiable.' },
]

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-eyebrow text-teal mb-4">Who&apos;s building this</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
              A developer who got
              <span className="italic text-teal"> angry enough</span> to build something.
            </h2>
            <div className="space-y-4 text-ink-soft text-base leading-relaxed">
              <p>
                India has 20+ women&apos;s safety apps. They all make the same mistake: they assume the police respond, the system works, and information is already accessible. They&apos;re wrong on all three.
              </p>
              <p>
                Abhaya started with a simple question: <em className="font-medium text-ink">if the system routinely fails women, what does a tool look like that routes around the system?</em> Not one that trusts police to respond, but one that helps women navigate, document, escalate, and survive — with or without institutional support.
              </p>
              <p>
                This isn&apos;t a startup looking for a market. It&apos;s a tool that should exist, being built by someone with the skills to build it. The evidence vault, the legal AI, the FIR escalator — these are answers to specific failure points in the Indian justice pipeline. Each feature exists because something in the system doesn&apos;t.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="bg-white border border-border rounded-2xl p-6 flex gap-5 items-start feature-card"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">{v.label}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{v.body}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Quote block */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="bg-teal rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-4 right-5 text-6xl text-white/10 font-serif leading-none">&ldquo;</div>
              <p className="text-white/90 text-base leading-relaxed italic font-light relative z-10">
                Build tools that create paper trails, preserve evidence, and route around gatekeepers. Don&apos;t build tools that assume the system works.
              </p>
              <p className="text-white/40 text-sm mt-3 font-medium">— The design principle behind every feature</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
