'use client'
import { motion } from 'framer-motion'

const items = [
  'DV Act 2005',
  'POSH Act 2013',
  'IPC Section 376',
  'CrPC Section 156(3)',
  'Legal Services Authorities Act',
  'Free Legal Aid (NALSA)',
  'eCourts API',
  'RFC 3161 Timestamping',
  'End-to-End Encryption',
  'DV Act 2005',
  'POSH Act 2013',
  'IPC Section 376',
  'CrPC Section 156(3)',
  'Legal Services Authorities Act',
  'Free Legal Aid (NALSA)',
  'eCourts API',
  'RFC 3161 Timestamping',
  'End-to-End Encryption',
]

export default function TrustBar() {
  return (
    <section id="trust" className="bg-dark border-b border-white/5 py-5 overflow-hidden">
      <div className="flex items-center gap-0" style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
        <motion.div
          className="flex items-center gap-10 whitespace-nowrap flex-shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="text-white/30 text-xs font-medium tracking-wider uppercase">
                {item}
              </span>
              <span className="text-teal-glow/40 text-xs">·</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
