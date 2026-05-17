'use client'
import { motion } from 'framer-motion'
import { Lock, Eye, Server, UserX } from 'lucide-react'

const promises = [
  {
    icon: Lock,
    title: 'Your vault key lives on your device. Only.',
    body: 'The evidence vault uses end-to-end encryption. The encryption key is derived from your device — not stored on our servers, not in our database, not accessible to us under any circumstances. Even if someone broke into our servers, your vault is unreadable.',
  },
  {
    icon: Eye,
    title: 'Zero ads. Zero data selling. Ever.',
    body: 'Abhaya is not built on an advertising model. We will never sell your data, share your usage patterns, or allow your information to be used for targeting. The business model is B2B POSH compliance, not selling attention or data. Your information has no commercial value inside Abhaya.',
  },
  {
    icon: UserX,
    title: 'Genuinely anonymous where it matters.',
    body: 'The safety map, community support, and survey features work with zero identifying information. No name, no email, no account required. On the evidence vault, anonymity is enforced at the encryption layer — even a court order served to us cannot decrypt your files without your key.',
  },
  {
    icon: Server,
    title: 'We will never share your data with police.',
    body: 'This is non-negotiable. We have no law enforcement partnerships. No data-sharing agreements. If a legal order compels us to produce data, the encrypted blob we store is all we can provide — and it\'s useless without your key. The app exists to help you navigate the system, not feed data into it.',
  },
]

export default function Security() {
  return (
    <section id="security" className="bg-[#071A18] py-24 md:py-32 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 opacity-[0.04]"
           style={{ backgroundImage: 'radial-gradient(#00C9B8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="section-eyebrow text-teal-glow/50 mb-4">Privacy & security</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto mb-4">
            What we promise to <span className="italic gradient-text">never</span> do
          </h2>
          <p className="text-white/40 text-lg font-light max-w-lg mx-auto">
            For an app handling evidence of violence, trust isn&apos;t a feature — it&apos;s the foundation. Here&apos;s ours, in plain language.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {promises.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/[0.04] border border-teal/20 rounded-2xl p-7 md:p-8
                           hover:border-teal/40 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/20 border border-teal/30 flex items-center
                                justify-center mb-5 group-hover:bg-teal/30 transition-colors duration-300">
                  <Icon size={20} className="text-teal-glow" />
                </div>
                <h3 className="font-serif text-white font-semibold text-lg leading-snug mb-3">
                  {p.title}
                </h3>
                <p className="text-white/45 text-[0.88rem] leading-relaxed">{p.body}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Tech stack trust */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 bg-white/[0.03] border border-white/5 rounded-2xl p-6 text-center"
        >
          <p className="text-white/30 text-xs font-medium tracking-wide uppercase mb-3">
            Built with open, auditable technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['libsodium E2E Encryption', 'RFC 3161 Timestamps', 'Supabase RLS Policies', 'Open Source Audit-ready'].map(t => (
              <span key={t} className="text-teal-glow/50 text-xs font-medium px-3 py-1.5
                                       bg-teal/10 rounded-full border border-teal/20">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
