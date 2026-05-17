'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'When will Abhaya be available?',
    a: 'We\'re building in phases. The MVP — Emergency Guide, Legal Rights AI, and FIR Escalator — is our first milestone. Join the waitlist and you\'ll know the moment it\'s ready. Core safety features will be available free before the full app launches.',
  },
  {
    q: 'Is this app really anonymous? How do I know?',
    a: 'The safety map and community features work with no account — there\'s literally no identifying data to store. For the evidence vault, the encryption key is derived on your device and never transmitted to our servers. We will publish our security architecture publicly so it can be independently audited. "Trust us" isn\'t good enough for an app like this — so we\'re making it verifiable.',
  },
  {
    q: 'What if I lose my phone — do I lose my evidence vault?',
    a: 'The vault uses a passphrase-derived encryption key. As long as you remember your passphrase (not stored anywhere), you can restore your vault to a new device from our encrypted backups. We\'re also building a split-key backup option where trusted contacts hold key fragments. This is one of the hardest UX problems we\'re solving.',
  },
  {
    q: 'Can police or government access my data through Abhaya?',
    a: 'No. We have no law enforcement partnerships and no data-sharing agreements. If a legal order is served to us demanding user data, the encrypted blobs we store are mathematically useless without your device key. We can\'t decrypt what we don\'t hold the key to.',
  },
  {
    q: 'Will this work in my language?',
    a: 'The Emergency Guide, Legal AI, and all core safety features will be available in Hindi, Kannada, Tamil, Telugu, Bengali, and Marathi at launch. We\'re prioritising languages by population coverage — if yours isn\'t in the first batch, it will be in the second. The survey helps us understand regional priorities.',
  },
  {
    q: 'What\'s the difference between Abhaya and other women\'s safety apps?',
    a: 'Most safety apps have one feature: an SOS button that calls police. The problem is that 75% of women don\'t trust police to respond, and 2 in 3 incidents go unreported for exactly that reason. Abhaya is built around the assumption that the system often fails — so every feature works around it rather than through it. Evidence preservation, legal rights information, FIR escalation — these are tools for a system that isn\'t reliable.',
  },
  {
    q: 'Is the legal information in the app accurate?',
    a: 'The legal AI is trained on the specific Acts that apply to each situation — DV Act 2005, POSH Act 2013, IPC 376, CrPC provisions — and is regularly reviewed. However, it\'s informational, not legal advice. For complex cases, Abhaya will connect you to free legal aid lawyers through DLSA (District Legal Services Authority) in your area, who can provide proper counsel.',
  },
  {
    q: 'Does this work without internet?',
    a: 'The Emergency Guide — the most critical feature — is built offline-first and works with zero connectivity. The Legal AI and Safety Map require internet. Evidence vault syncing works offline and uploads when you reconnect. We designed for the scenario where you\'re somewhere with no signal and need help immediately.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-warm-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="section-eyebrow text-teal mb-4">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
            Questions we&apos;d ask too
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between
                           gap-4 hover:bg-cream/50 transition-colors duration-200"
              >
                <span className="font-semibold text-ink text-base leading-snug">{f.q}</span>
                <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center
                                 transition-colors duration-200
                                 ${open === i ? 'bg-teal text-white' : 'bg-cream text-ink-muted'}`}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-border pt-4">
                      <p className="text-ink-muted text-[0.9rem] leading-relaxed">{f.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-ink-muted text-sm mt-10"
        >
          Have a different question?{' '}
          <a href="mailto:YOUR_EMAIL_HERE" className="text-teal font-medium hover:underline">
            Write to us directly.
          </a>
        </motion.p>
      </div>
    </section>
  )
}
