'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    n: '01',
    icon: '📱',
    title: 'Something happens at 11pm',
    body: 'You open Abhaya. No login screen. No loading spinner. The emergency guide opens immediately — because we know you might be shaking. First thing it says: "Go somewhere safe first. Then come back to this."',
    tag: 'Zero friction. Works offline.',
  },
  {
    n: '02',
    icon: '🏥',
    title: 'It tells you exactly what to do right now',
    body: 'Don\'t shower. Don\'t change clothes. Go to any hospital — you don\'t need a police complaint first, the doctor must examine you by law. The app shows the nearest hospital and gives you the exact words to say when you get there.',
    tag: 'Evidence protocol in your language.',
  },
  {
    n: '03',
    icon: '🔒',
    title: 'You save everything before it disappears',
    body: 'The vault opens. You import his WhatsApp messages, a photo, your location. Each file gets legally timestamped and encrypted. The app reminds you: "CCTV footage of this area deletes in 48 hours — do you want to request it now?" One tap generates the request letter.',
    tag: 'RFC 3161 tamper-proof timestamps.',
  },
  {
    n: '04',
    icon: '🚔',
    title: 'The police refuse to file your FIR',
    body: 'The app says: "This is illegal. Here\'s exactly what to do." It generates a complaint to your district Superintendent of Police. It links to your state\'s e-FIR portal. It explains a Section 156(3) magistrate petition. Suddenly you know more than they\'re counting on you not knowing.',
    tag: 'Bypasses the first corrupt gatekeeper.',
  },
  {
    n: '05',
    icon: '📋',
    title: 'The case drags for months. You don\'t lose track.',
    body: 'The case tracker pulls your hearing dates from eCourts automatically. Before each date, it explains what to expect in plain language. It connects you to a free legal aid lawyer in your district. When you feel like giving up — and everyone does — the app is still there, still tracking.',
    tag: 'eCourts integration · Free legal aid locator.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-warm-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="section-eyebrow text-teal mb-4">A real example</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight max-w-xl mb-4">
            What Abhaya looks like when you actually need it
          </h2>
          <p className="text-ink-muted text-lg font-light max-w-lg leading-relaxed">
            Not a demo. A real situation — and exactly what the app does, step by step.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] md:left-[27px] top-0 bottom-0 w-px timeline-line hidden sm:block" />

          <div className="flex flex-col gap-10 md:gap-14">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 md:gap-10 relative"
              >
                {/* Step number bubble */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-teal flex items-center
                                  justify-center border-4 border-warm-white shadow-md">
                    <span className="text-xl md:text-2xl">{s.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-teal-mid font-semibold tracking-widest">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="font-serif font-semibold text-ink text-xl md:text-2xl leading-snug mb-3">
                    {s.title}
                  </h3>
                  <p className="text-ink-muted text-base leading-relaxed mb-4">
                    {s.body}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-teal-light rounded-full
                                  px-3.5 py-1.5 text-teal text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                    {s.tag}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
