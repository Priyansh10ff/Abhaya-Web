'use client'
import { motion } from 'framer-motion'

const scenarios = [
  {
    emoji: '🤫',
    title: 'The "stay quiet" moment at work',
    body: 'Something happened — a comment, a touch, a message. You didn\'t know if it "counted." You didn\'t know who to tell. You stayed quiet because the alternative felt worse.',
  },
  {
    emoji: '🌃',
    title: 'Changing your route because of a feeling',
    body: 'Not a news story, not a police report — just your gut. You\'ve made decisions about where to walk, how to dress, what time to leave, all because of a feeling you\'ve learned not to ignore.',
  },
  {
    emoji: '🚔',
    title: '"Will the police even help?"',
    body: 'You or someone you know needed to file a complaint. You hesitated — not because nothing happened, but because you weren\'t sure they\'d register it. Or if they\'d make it worse.',
  },
  {
    emoji: '📱',
    title: 'Keeping evidence with nowhere to put it',
    body: 'Screenshots. A voice note. A photo. You kept them because something felt wrong — but nowhere safe to store them, and no idea if they\'d ever matter in court.',
  },
  {
    emoji: '🤐',
    title: 'No one you could tell',
    body: 'Not your family. Not your friends. Because telling them would mean explaining, justifying, managing their reaction. Some things are too heavy to carry alone and too complicated to share.',
  },
]

export default function Problem() {
  return (
    <section className="bg-warm-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mb-14"
        >
          <p className="section-eyebrow text-teal mb-4">Why Abhaya exists</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight mb-4">
            Does any of this sound familiar?
          </h2>
          <p className="text-ink-muted text-lg font-light leading-relaxed">
            Not statistics. Not news headlines. Just real moments that happen to real women every day — and have no good solution yet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`
                bg-white border border-border rounded-2xl p-7 feature-card
                ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
              `}
            >
              <div className="text-3xl mb-4">{s.emoji}</div>
              <h3 className="font-serif font-semibold text-ink text-lg mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-ink-muted text-[0.9rem] leading-relaxed">{s.body}</p>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-teal rounded-2xl p-7 flex flex-col justify-between feature-card"
          >
            <div>
              <p className="text-teal-light/70 text-sm font-medium mb-3">If even one of these hit close to home</p>
              <h3 className="font-serif text-white text-xl font-semibold leading-snug mb-4">
                That&apos;s exactly why we&apos;re building Abhaya.
              </h3>
            </div>
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-teal-light font-medium text-sm
                         border border-teal-light/30 rounded-full px-5 py-2.5 self-start
                         hover:bg-white/10 transition-colors"
            >
              See what we&apos;re building →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
