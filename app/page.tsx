import Nav             from '@/components/nav'
import Hero            from '@/components/hero'
import TrustBar        from '@/components/trust-bar'
import Stats           from '@/components/stats'
import Problem         from '@/components/problem'
import Features        from '@/components/features'
import HowItWorks      from '@/components/how-it-works'
import PhoneMockup     from '@/components/phone-mockup'
import Security        from '@/components/security'
import About           from '@/components/about'
import SurveySection   from '@/components/survey-section'
import DownloadSection from '@/components/download-section'
import WaitlistSection from '@/components/waitlist-section'
import FAQ             from '@/components/faq'
import Footer          from '@/components/footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <Problem />
        <Features />
        <HowItWorks />
        <PhoneMockup />
        <Security />
        <About />
        <SurveySection />
        <DownloadSection />
        <WaitlistSection />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
