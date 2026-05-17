'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield, Scale, Lock, AlertTriangle,
  MapPin, MessageCircle, Briefcase, Heart, CreditCard, FileCheck
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    emoji: '🛡️',
    name: 'Emergency Guide',
    tag: 'First 72 hours',
    tagColor: 'bg-red-50 text-red-600',
    short: 'Step-by-step action guide for the most critical hours after an incident.',
    full: 'The first 72 hours are critical for evidence. Most people don\'t know: you can go straight to a hospital without police, CCTV footage deletes after 48 hours if you don\'t request it, and doctors must examine you by law. Abhaya walks you through every step — in your language, even without internet.',
    highlight: 'Works offline · Hindi, Kannada, Tamil, Telugu, Bengali',
    size: 'lg', // large card
  },
  {
    icon: Scale,
    emoji: '⚖️',
    name: 'Legal Rights AI',
    tag: 'AI-powered',
    tagColor: 'bg-blue-50 text-blue-600',
    short: 'Ask about your legal rights in plain language. Get real answers instantly.',
    full: 'Police are legally required to file your FIR. You can go to a magistrate if they refuse. Free legal aid is available in every district. You can get a protection order in 3 days under the DV Act. You ask. Abhaya answers — in your language, not legal jargon.',
    highlight: 'DV Act · POSH · IPC 376 · Protection Orders · Free legal aid',
    size: 'md',
  },
  {
    icon: Lock,
    emoji: '🔒',
    name: 'Evidence Vault',
    tag: 'Encrypted',
    tagColor: 'bg-teal-light text-teal',
    short: 'Tamper-proof, encrypted storage for all your evidence. Only you hold the key.',
    full: 'Save screenshots, photos, audio, and documents. Each file gets an RFC 3161 legal timestamp — proving exactly when it was saved and that it hasn\'t been altered. Encrypted with keys that live only on your device. Not on our servers. Not anywhere anyone can access without you.',
    highlight: 'RFC 3161 timestamping · E2E encrypted · Legal chain of custody',
    size: 'md',
  },
  {
    icon: AlertTriangle,
    emoji: '🚨',
    name: 'FIR Escalator',
    tag: 'Anti-corruption',
    tagColor: 'bg-orange-50 text-orange-600',
    short: 'When police refuse to help — which is illegal — here\'s exactly what you do next.',
    full: 'Refusing to register an FIR is a criminal offence. But police count on you not knowing what to do next. Abhaya generates a complaint letter to your district SP, links you to your state\'s e-FIR portal, and explains the magistrate petition process under CrPC 156(3). All in 5 minutes.',
    highlight: 'District SP contacts · State e-FIR links · Pre-filled complaint letters',
    size: 'md',
  },
  {
    icon: MapPin,
    emoji: '🗺️',
    name: 'Safety Map',
    tag: 'Crowd-sourced',
    tagColor: 'bg-purple-50 text-purple-600',
    short: 'Real-time safety ratings built from women\'s actual reports — not police data.',
    full: 'Police crime data is massively underreported. The Abhaya safety map is built entirely from anonymous reports by women who have felt unsafe at specific places, at specific times of day. Drop a pin. Tag the time. Over time, this becomes the most honest safety map in India.',
    highlight: 'Anonymous pins · Time-of-day filter · Route safety scores',
    size: 'md',
  },
  {
    icon: MessageCircle,
    emoji: '💬',
    name: 'Safe Space',
    tag: 'Anonymous',
    tagColor: 'bg-green-50 text-green-600',
    short: 'Talk to someone. No name, no photo, no account required.',
    full: 'No identity. No judgment. No one in your life finds out. An anonymous community for when you can\'t tell your family or friends what\'s happening. Moderated by trained volunteers. AI that quietly watches for crisis signals and connects people to real support — without being preachy.',
    highlight: 'No account needed · Trained moderators · AI crisis detection',
    size: 'md',
  },
  {
    icon: Briefcase,
    emoji: '💼',
    name: 'POSH Rights',
    tag: 'Workplace',
    tagColor: 'bg-indigo-50 text-indigo-600',
    short: '47% of working women don\'t know their POSH rights. You\'re about to.',
    full: 'The Sexual Harassment at Workplace Act has been law since 2013. Most women don\'t know the 90-day company resolution deadline, that the IC process has legal teeth, or that they can go to the Local Committee if their company doesn\'t cooperate. Abhaya explains your rights and documents everything.',
    highlight: 'Anonymous reporting · IC timeline tracker · Local Committee escalation',
    size: 'md',
  },
  {
    icon: Heart,
    emoji: '🩺',
    name: 'Health',
    tag: 'Period & PCOS',
    tagColor: 'bg-pink-50 text-pink-600',
    short: 'Period tracking, PCOS information, and menstrual health education — without the shame.',
    full: 'Track your cycle, log PCOS symptoms, find government schemes for free menstrual products near you. Explainers in regional languages designed to be shared on WhatsApp without embarrassment. Because 23% of girls drop out of school at puberty — mostly because nobody explained anything to them.',
    highlight: 'PCOS tracker · Govt scheme finder · WhatsApp-shareable explainers',
    size: 'md',
  },
  {
    icon: CreditCard,
    emoji: '💰',
    name: 'Finance',
    tag: 'Credit builder',
    tagColor: 'bg-yellow-50 text-yellow-700',
    short: 'Build a financial identity even without a formal salary — to access credit independently.',
    full: 'Many women work as unpaid family labor or informal domestic workers. No formal income = no credit history = no escape. Abhaya lets you log work, record UPI payments, and build a shadow credit score shareable with NBFC partners for collateral-free loans.',
    highlight: 'Shadow credit score · Govt scheme checker · NBFC partnerships',
    size: 'md',
  },
  {
    icon: FileCheck,
    emoji: '📋',
    name: 'Case Tracker',
    tag: 'eCourts API',
    tagColor: 'bg-gray-100 text-gray-600',
    short: 'Track your own court case. Get hearing reminders. Never lose track again.',
    full: 'Cases drag for years. Victims get ambushed by sudden hearing dates, miss deadlines, and lose faith in the process — not because they want to, but because navigating the court system is exhausting. Abhaya pulls your case from eCourts, sends hearing reminders, and explains what each date means in plain language.',
    highlight: 'eCourts integration · Hearing reminders · Plain-language explanations',
    size: 'md',
  },
]

export default function Features() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="features" className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-eyebrow text-teal mb-4">What Abhaya does</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight mb-4">
            10 features. One mission.
          </h2>
          <p className="text-ink-muted text-lg font-light">
            Every feature is built around one insight: the system often fails women. So we built around it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon
            const isOpen = expanded === i
            return (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`
                  bg-white border border-border rounded-2xl p-6 cursor-pointer
                  feature-card group
                  ${i === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}
                `}
                onClick={() => setExpanded(isOpen ? null : i)}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0
                                    group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                      <Icon size={18} className="text-teal group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-serif font-semibold text-ink text-[1.05rem] leading-tight">
                          {f.name}
                        </h3>
                        <span className={`text-[0.65rem] font-semibold px-2 py-0.5 rounded-full ${f.tagColor}`}>
                          {f.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`text-ink-muted/40 text-xs font-medium mt-1 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </div>

                <p className="text-ink-muted text-sm leading-relaxed mb-0">
                  {f.short}
                </p>

                {/* Expanded */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border mt-4">
                        <p className="text-ink-soft text-sm leading-relaxed mb-3">{f.full}</p>
                        <div className="inline-flex items-center gap-1.5 bg-teal-light rounded-full
                                        px-3 py-1.5 text-teal text-xs font-medium">
                          <span className="text-[10px]">◆</span>
                          {f.highlight}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-ink-muted/60 text-sm mt-8"
        >
          Click any card to learn more
        </motion.p>
      </div>
    </section>
  )
}
