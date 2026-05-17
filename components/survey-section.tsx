'use client'
import { motion } from 'framer-motion'
import { ClipboardList, ArrowRight, CheckCircle2 } from 'lucide-react'

const perks = [
  'Takes only 3 minutes',
  'Completely anonymous — no email needed',
  'Your answers decide what gets built first',
  'Shape the app before it launches',
]

export default function SurveySection() {
  return (
    <section id="survey" className="bg-cream py-24 md:py-32 relative overflow-hidden">
      {/* Decorative bg circle */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px]
                      rounded-full bg-teal/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-eyebrow text-teal mb-4">3-minute survey</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight mb-5">
              Tell us what you
              <span className="italic text-teal"> actually need.</span>
            </h2>
            <p className="text-ink-muted text-lg font-light leading-relaxed mb-8">
              We&apos;re not building this in a boardroom. Every feature priority, every language choice, every design decision is guided by real women telling us what matters. That&apos;s you.
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {perks.map(p => (
                <li key={p} className="flex items-center gap-3 text-ink-soft text-[0.92rem]">
                  <CheckCircle2 size={16} className="text-teal flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="https://abhaya-survey.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-shimmer text-white
                         font-semibold px-7 py-4 rounded-2xl text-[0.95rem]"
            >
              <ClipboardList size={18} />
              Take the survey
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right — survey preview card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Fake survey preview */}
            <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-card">
              {/* Header */}
              <div className="bg-teal px-7 py-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <ClipboardList size={15} className="text-white" />
                  </div>
                  <span className="text-white font-serif font-semibold">Abhaya Survey</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Help us build the right things, in the right order, for the right people.
                </p>
              </div>

              {/* Preview questions */}
              <div className="px-7 py-6 flex flex-col gap-5">
                {[
                  { q: 'Have you ever felt unsafe and didn\'t know who to call?', a: 'Yes, more than once' },
                  { q: 'Which feature would you actually use?',                   a: 'Emergency guide'   },
                  { q: 'What\'s the biggest reason you might not use this app?',  a: 'Privacy concerns'  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <p className="text-ink text-sm font-medium leading-snug">{item.q}</p>
                    <div className="flex items-center gap-2.5 bg-teal-light border border-teal/20
                                    rounded-xl px-4 py-2.5 self-start">
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-teal flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                      </div>
                      <span className="text-teal text-sm font-medium">{item.a}</span>
                    </div>
                  </div>
                ))}

                <div className="pt-2 border-t border-border">
                  <a
                    href="https://abhaya-survey.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-teal
                               text-white font-semibold text-sm py-3.5 rounded-xl
                               hover:bg-teal-mid transition-colors duration-200"
                  >
                    Answer all 9 questions →
                  </a>
                  <p className="text-ink-muted/60 text-xs text-center mt-2.5">
                    Anonymous · 3 minutes · no account needed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
