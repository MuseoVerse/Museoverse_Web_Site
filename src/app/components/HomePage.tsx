import { Link } from "react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ScanSearch, BookOpen, Globe, Users, BarChart3, Sparkles,
  ChevronDown, Building2, Smartphone, ArrowRight, Presentation, Download,
  Eye, MessageCircle, Map, TrendingUp
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BackgroundParticles } from "./BackgroundParticles";
import {
  BlockReveal,
  FloatingElement,
  MarqueeRow,
  SectionReveal,
  StaggerGroup,
  StaggerItem,
} from "./animations";
import { AppStoreBadgeContent, GooglePlayBadgeContent } from "./storeIcons";
import ecosystemPreviewImage from "../../assets/Gemini_Generated_Image_5xeie25xeie25xei.png";
import heroLeftFrameImage from "../../assets/pexels-photo-3957980.webp";
import heroCenterFrameImage from "../../assets/64d0d95f9e8f747f189f5da697e0557efb1ff413.png";
import howItWorksBackgroundImage from "../../assets/photo0jpg.jpg";

const FEATURES = [
  { icon: ScanSearch, title: "AI Artifact Recognition", desc: "Point your camera at any artifact and instantly unlock its story, origin, and cultural significance." },
  { icon: BookOpen, title: "Personalized Storytelling", desc: "AI-narrated stories adapt to your language, interests, and depth preferences." },
  { icon: Sparkles, title: "Interactive AR Annotations", desc: "See layered details appear on artifacts in real-time through your device camera." },
  { icon: Users, title: "Social Museum Feed", desc: "Share discoveries, react to posts, and connect with fellow culture enthusiasts." },
  { icon: Globe, title: "Virtual Museum Tours", desc: "Explore world-class museums from anywhere with immersive virtual walkthroughs." },
  { icon: BarChart3, title: "Museum Analytics", desc: "Museums gain deep insights into visitor engagement, exhibit performance, and storytelling impact." },
];

const STEPS = [
  { num: "01", title: "Discover a Museum", desc: "Browse nearby or virtual museums through the app's intelligent recommendations." },
  { num: "02", title: "Scan & Listen", desc: "Point your camera at artifacts. AI identifies them and tells their story in your language." },
  { num: "03", title: "Explore & Share", desc: "Save favorites, share on the social feed, and explore virtual extensions." },
  { num: "04", title: "Museums Measure Impact", desc: "Institutions track engagement, exhibit performance, and visitor satisfaction in real-time." },
];

const FAQS = [
  { q: "What is MuseoVerse?", a: "MuseoVerse is an AI-powered platform that transforms museum visits into immersive, personalized storytelling experiences while providing museums with powerful analytics and engagement tools." },
  { q: "Is MuseoVerse for museums or visitors?", a: "Both. Visitors get an intelligent companion app for discovering artifacts and stories. Museums get a partner platform with analytics, campaigns, and digital visibility tools." },
  { q: "How does artifact recognition work?", a: "Using advanced computer vision and our cultural knowledge base, the app identifies artifacts through your camera and delivers rich contextual storytelling in real-time." },
  { q: "Can I explore museums remotely?", a: "Yes. MuseoVerse offers virtual museum tours, allowing you to explore world-renowned collections from anywhere in the world." },
  { q: "How can museums partner with MuseoVerse?", a: "Museums can request a demo through our website. Our team will guide you through onboarding, content integration, and dashboard setup." },
  { q: "Is there a mobile app?", a: "Yes, MuseoVerse is available on both iOS and Android. Download it from the App Store or Google Play." },
];

const TRUST_STATS = [
  { value: "120+", label: "partner museums" },
  { value: "30+", label: "languages supported" },
  { value: "18M+", label: "annual visitors reached" },
];

const TRUSTED_MUSEUMS_PRIMARY = [
  "Grand Egyptian Museum",
  "The Louvre",
  "British Museum",
  "Uffizi Gallery",
  "Met Museum",
  "Smithsonian",
  "Rijksmuseum",
  "Prado Museum",
  "Vatican Museums",
  "Acropolis Museum",
];

const TRUSTED_MUSEUMS_SECONDARY = [
  "Musee d'Orsay",
  "Louvre Abu Dhabi",
  "Getty Museum",
  "National Gallery of Art",
  "Museum of Islamic Art Doha",
  "National Museum of Korea",
  "MoMA",
  "M+ Hong Kong",
  "Pergamon Museum",
  "MUNCH",
];

function PhoneMockup({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="bg-[#1a1a1a] rounded-[32px] p-[6px] shadow-[0_24px_64px_rgba(52,23,1,0.2)]">
        <div className="bg-black rounded-[26px] overflow-hidden w-[220px] h-[440px] md:w-[260px] md:h-[520px]">
          <ImageWithFallback src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#c9a84c]/15">
      <button
        className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="font-['Manrope'] text-[15px] md:text-[16px] text-[#341701] pr-4">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0"
        >
          <ChevronDown size={18} className={open ? "text-[#c9a84c]" : "text-[#76593a]/40"} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-['Manrope'] text-[14px] text-[#76593a]/70 leading-[24px] pb-5 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf9f4] via-[#f5f0e4] to-[#fbf9f4]" />
        <BackgroundParticles className="opacity-[0.22]" />
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#ffe088]/8 blur-[120px]"
          animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 md:pt-24 pb-8 md:pb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <BlockReveal className="flex-1 text-center lg:text-left max-w-[560px]" y={20}>
              <div className="inline-flex items-center gap-2 bg-[#341701]/5 rounded-full px-4 py-1.5 mb-6">
                <Sparkles size={14} className="text-[#c9a84c]" />
                <span className="font-['Manrope'] text-[12px] tracking-[1.5px] uppercase text-[#76593a]">AI-Powered Museum Experiences</span>
              </div>
              <h1 className="font-['Playfair_Display'] text-[36px] md:text-[52px] lg:text-[58px] text-[#341701] leading-[1.1] tracking-[-1px] mb-6">
                See History<br />
                <span className="text-[#c9a84c]">Through Vision</span>
              </h1>
              <p className="font-['Manrope'] text-[16px] md:text-[18px] text-[#76593a]/80 leading-[28px] mb-8 max-w-[480px] mx-auto lg:mx-0">
                Turn museum visits into living stories. AI-powered discovery for visitors. Measurable cultural impact for museums.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto font-['Manrope'] text-[14px] tracking-[0.3px] px-7 py-3.5 rounded-full bg-[#341701] text-[#ffe088] hover:bg-[#4a2508] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(52,23,1,0.14)] transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
                >
                  <Presentation size={16} strokeWidth={2} />
                  Book a Demo
                </Link>
                <Link
                  to="/for-visitors"
                  className="w-full sm:w-auto font-['Manrope'] text-[14px] tracking-[0.3px] px-7 py-3.5 rounded-full border border-[#c9a84c]/40 text-[#341701] hover:bg-[#341701]/5 hover:-translate-y-0.5 transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
                >
                  <Download size={16} strokeWidth={2} />
                  Download App
                </Link>
              </div>
              {/* Store badges */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <a href="#" className="flex items-center gap-2 bg-[#341701] rounded-lg px-3 py-2 hover:bg-[#4a2508] hover:-translate-y-0.5 transition-all">
                  <AppStoreBadgeContent
                    iconFill="#ffe088"
                    iconHeight={18}
                    iconWidth={18}
                    subtitleClassName="hidden"
                    textClassName="text-[11px] text-[#ffe088]"
                  />
                </a>
                <a href="#" className="flex items-center gap-2 bg-[#341701] rounded-lg px-3 py-2 hover:bg-[#4a2508] hover:-translate-y-0.5 transition-all">
                  <GooglePlayBadgeContent
                    iconHeight={16}
                    iconWidth={18}
                    subtitleClassName="hidden"
                    textClassName="text-[11px] text-[#ffe088]"
                  />
                </a>
              </div>
            </BlockReveal>

            {/* Device Mockups */}
            <BlockReveal className="flex-1 flex justify-center items-end gap-[-20px] relative" delay={0.12} y={24}>
              <FloatingElement className="hidden md:block -mr-6 mb-8 opacity-70" delay={0.1} distance={10} duration={6.5}>
                <PhoneMockup
                  src={heroLeftFrameImage}
                  alt="MuseoVerse Scan Feature"
                />
              </FloatingElement>
              <FloatingElement className="z-10" distance={14} duration={5.8}>
                <PhoneMockup
                  src={heroCenterFrameImage}
                  alt="MuseoVerse App"
                />
              </FloatingElement>
              <FloatingElement className="hidden md:block -ml-6 mb-8 opacity-70" delay={0.16} distance={10} duration={7}>
                <PhoneMockup
                  src="https://images.unsplash.com/photo-1774176105904-f3ed4b6323a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZ3JlZWslMjBzY3VscHR1cmUlMjBtYXJibGV8ZW58MXx8fHwxNzc0ODA2OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="MuseoVerse Virtual"
                />
              </FloatingElement>
            </BlockReveal>
          </div>
        </div>
      </section>

      {/* WHAT IS MUSEOVERSE */}
      <SectionReveal className="relative overflow-hidden py-20 md:py-28">
        <BackgroundParticles className="opacity-[0.12]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
          <BlockReveal className="text-center mb-16">
            <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">The Platform</span>
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[40px] text-[#341701] mt-3 mb-4">One Ecosystem, Two Worlds</h2>
            <p className="font-['Manrope'] text-[15px] text-[#76593a]/70 max-w-[520px] mx-auto leading-[26px]">
              MuseoVerse bridges visitors and institutions through AI-powered storytelling, social discovery, and cultural analytics.
            </p>
          </BlockReveal>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <StaggerItem key={f.title}>
                <div className="group bg-white rounded-2xl p-7 border border-[#c9a84c]/10 hover:border-[#c9a84c]/30 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(52,23,1,0.08)] transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#341701]/5 flex items-center justify-center mb-5 group-hover:bg-[#341701] group-hover:-translate-y-0.5 transition-all duration-300">
                    <f.icon size={20} className="text-[#c9a84c] group-hover:text-[#ffe088] transition-colors duration-300" />
                  </div>
                  <h3 className="font-['Manrope'] text-[16px] text-[#341701] mb-2">{f.title}</h3>
                  <p className="font-['Manrope'] text-[13px] text-[#76593a]/60 leading-[22px]">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </SectionReveal>

      {/* HOW IT WORKS */}
      <SectionReveal className="relative overflow-hidden py-20 md:py-28 bg-[#341701]">
        <div className="absolute inset-0 opacity-3">
          <ImageWithFallback
            src={howItWorksBackgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <BlockReveal className="text-center mb-16">
            <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#ffe088]/60">How It Works</span>
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[40px] text-[#fbf9f4] mt-3">Four Steps to a Richer Experience</h2>
          </BlockReveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <StaggerItem key={s.num} className="h-full">
                <div className="relative h-full bg-[#fbf9f4]/5 rounded-2xl p-7 border border-[#ffe088]/10 hover:border-[#ffe088]/25 hover:-translate-y-1 transition-all duration-300">
                  <span className="font-['Playfair_Display'] text-[48px] leading-none text-[#ffe088]/10 absolute top-0 right-6">{s.num}</span>
                  <div className="relative z-10 flex h-full flex-col">
                    <h3 className="font-['Manrope'] text-[16px] text-[#ffe088] mb-3 mt-6">{s.title}</h3>
                    <p className="font-['Manrope'] text-[13px] text-[#fbf9f4]/50 leading-[22px]">{s.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </SectionReveal>

      {/* BUILT FOR BOTH SIDES */}
      <SectionReveal className="relative overflow-hidden py-20 md:py-28">
        <BackgroundParticles className="opacity-[0.14]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
          <BlockReveal className="text-center mb-16">
            <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">Built for Both Sides</span>
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[40px] text-[#341701] mt-3">Two Audiences, One Platform</h2>
          </BlockReveal>
          <StaggerGroup className="grid grid-cols-1 lg:grid-cols-2 gap-6" staggerChildren={0.16}>
            {/* For Visitors */}
            <StaggerItem>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f5f0e4] to-[#fbf9f4] p-8 md:p-10 border border-[#c9a84c]/15 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(52,23,1,0.08)] transition-all duration-300">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[#ffe088]/10 blur-[80px]" />
              <div className="relative">
                <Smartphone size={28} className="text-[#c9a84c] mb-5" />
                <h3 className="font-['Playfair_Display'] text-[24px] text-[#341701] mb-3">For Visitors</h3>
                <p className="font-['Manrope'] text-[14px] text-[#76593a]/70 leading-[24px] mb-6">
                  Discover the stories behind every artifact. Explore with AI guidance, share your journey, and experience museums like never before — in person or virtually.
                </p>
                <ul className="space-y-3 mb-8">
                  {["AI-powered artifact stories", "Personalized audio guides", "Social museum feed", "Virtual exploration"].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#c9a84c]/15 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                      </div>
                      <span className="font-['Manrope'] text-[13px] text-[#76593a]">{t}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/for-visitors" className="inline-flex items-center gap-2 font-['Manrope'] text-[14px] text-[#341701] group">
                  Explore the App <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              </div>
            </StaggerItem>

            {/* For Museums */}
            <StaggerItem>
              <div className="relative overflow-hidden rounded-3xl bg-[#341701] p-8 md:p-10 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(52,23,1,0.18)] transition-all duration-300">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[#ffe088]/5 blur-[80px]" />
              <div className="relative">
                <Building2 size={28} className="text-[#ffe088] mb-5" />
                <h3 className="font-['Playfair_Display'] text-[24px] text-[#fbf9f4] mb-3">For Museums</h3>
                <p className="font-['Manrope'] text-[14px] text-[#fbf9f4]/60 leading-[24px] mb-6">
                  Understand your visitors, measure exhibit impact, and modernize engagement with an intelligent partner platform built for cultural institutions.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Real-time analytics dashboard", "Exhibit performance tracking", "Visitor behavior insights", "Digital visibility tools"].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#ffe088]/15 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ffe088]" />
                      </div>
                      <span className="font-['Manrope'] text-[13px] text-[#fbf9f4]/70">{t}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/for-museums" className="inline-flex items-center gap-2 font-['Manrope'] text-[14px] text-[#ffe088] group">
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </SectionReveal>

      {/* ECOSYSTEM PREVIEW */}
      <SectionReveal className="relative overflow-hidden pt-20 md:pt-28 pb-10 md:pb-14 bg-gradient-to-b from-[#f5f0e4] to-[#fbf9f4]">
        <BackgroundParticles className="opacity-[0.14]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
            <BlockReveal>
              <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">The Connected Ecosystem</span>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[38px] text-[#341701] mt-3 mb-5">Visitor App Meets<br/>Museum Intelligence</h2>
              <p className="font-['Manrope'] text-[15px] text-[#76593a]/70 leading-[26px] mb-8">
                Every scan, story listened, and virtual tour explored feeds into a powerful analytics dashboard — giving museums the insights they need while visitors enjoy seamless cultural discovery.
              </p>
              <StaggerGroup className="grid grid-cols-2 gap-4" delayChildren={0.1} staggerChildren={0.08}>
                {[
                  { icon: Eye, label: "380K+", sub: "Artifacts Scanned" },
                  { icon: MessageCircle, label: "2.4M", sub: "Stories Delivered" },
                  { icon: Map, label: "120+", sub: "Partner Museums" },
                  { icon: TrendingUp, label: "94%", sub: "Engagement Rate" },
                ].map((s) => (
                  <StaggerItem key={s.label}>
                    <div className="bg-white rounded-xl p-5 border border-[#c9a84c]/10 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(52,23,1,0.08)] transition-all duration-300">
                      <s.icon size={18} className="text-[#c9a84c] mb-2" />
                      <div className="font-['Playfair_Display'] text-[24px] text-[#341701]">{s.label}</div>
                      <div className="font-['Manrope'] text-[12px] text-[#76593a]/50">{s.sub}</div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </BlockReveal>
            <BlockReveal className="relative" delay={0.12}>
              <div className="rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(52,23,1,0.12)] border border-[#c9a84c]/10 hover:-translate-y-1 transition-transform duration-300">
                <ImageWithFallback
                  src={ecosystemPreviewImage}
                  alt="MuseoVerse Dashboard"
                  className="w-full h-[320px] md:h-[400px] object-cover"
                />
              </div>
              <FloatingElement className="absolute -bottom-6 -left-6 hidden md:block" delay={0.16} distance={8} duration={5.8}>
                <div className="bg-white rounded-xl p-4 shadow-[0_8px_32px_rgba(52,23,1,0.1)] border border-[#c9a84c]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#341701] flex items-center justify-center">
                      <TrendingUp size={18} className="text-[#ffe088]" />
                    </div>
                    <div>
                      <div className="font-['Manrope'] text-[13px] text-[#341701]">Engagement Up</div>
                      <div className="font-['Manrope'] text-[11px] text-[#c9a84c]">+47% this month</div>
                    </div>
                  </div>
                </div>
              </FloatingElement>
            </BlockReveal>
          </div>
        </div>
      </SectionReveal>

      {/* TRUST */}
      <SectionReveal className="relative overflow-hidden pt-10 md:pt-14 pb-12 md:pb-16 bg-gradient-to-b from-[#fbf9f4] to-[#f5f0e4]/65">
        <BackgroundParticles className="opacity-[0.12]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="relative rounded-[36px] border border-[#c9a84c]/15 bg-white/70 px-6 py-10 md:px-10 md:py-14 shadow-[0_20px_60px_rgba(52,23,1,0.06)] backdrop-blur-sm overflow-hidden">
            <div className="absolute -top-20 right-0 h-[240px] w-[240px] rounded-full bg-[#ffe088]/12 blur-[90px]" />
            <div className="absolute -bottom-24 left-0 h-[240px] w-[240px] rounded-full bg-[#341701]/[0.04] blur-[110px]" />

            <BlockReveal className="relative text-center">
              <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">
                Trusted by Institutions
              </span>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[38px] text-[#341701] mt-3 mb-4">
                A Growing Network of World-Class Museums
              </h2>
              <p className="font-['Manrope'] text-[15px] text-[#76593a]/68 max-w-[680px] mx-auto leading-[26px]">
                From iconic global collections to next-generation cultural spaces, MuseoVerse is built for institutions that want their storytelling to feel as alive as their collections.
              </p>
            </BlockReveal>

            <StaggerGroup
              className="relative grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-[900px] mx-auto mt-10 mb-10"
              delayChildren={0.08}
              staggerChildren={0.08}
            >
              {TRUST_STATS.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="rounded-2xl border border-[#c9a84c]/12 bg-[#fbf9f4]/85 px-5 py-5 text-center shadow-[0_12px_30px_rgba(52,23,1,0.04)] hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(52,23,1,0.08)] transition-all duration-300">
                    <div className="font-['Playfair_Display'] text-[28px] md:text-[32px] text-[#341701]">
                      {stat.value}
                    </div>
                    <div className="font-['Manrope'] text-[12px] tracking-[1.2px] uppercase text-[#76593a]/55 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <BlockReveal className="relative">
              <div className="space-y-4">
                <MarqueeRow items={TRUSTED_MUSEUMS_PRIMARY} duration={28} />
                <MarqueeRow items={TRUSTED_MUSEUMS_SECONDARY} reverse duration={31} />
              </div>
              <p className="font-['Manrope'] text-[13px] text-[#76593a]/58 text-center mt-7">
                New institutions are added continuously across archaeology, art, design, science, and cultural heritage.
              </p>
            </BlockReveal>
          </div>
        </div>
      </SectionReveal>

      {/* FAQ */}
      <SectionReveal className="relative overflow-hidden pt-12 md:pt-16 pb-20 md:pb-28 bg-[#f5f0e4]/50">
        <BackgroundParticles className="opacity-[0.12]" />
        <div className="relative z-10 max-w-[720px] mx-auto px-6 lg:px-10">
          <BlockReveal className="text-center mb-12">
            <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">FAQ</span>
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] text-[#341701] mt-3">Common Questions</h2>
          </BlockReveal>
          <BlockReveal>
            {FAQS.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </BlockReveal>
        </div>
      </SectionReveal>

      {/* CTA BAND */}
      <SectionReveal className="py-20 md:py-24 bg-[#341701] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1563474369245-bb6cf001f72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBoYWxsd2F5JTIwcmVuYWlzc2FuY2UlMjBwYWludGluZ3N8ZW58MXx8fHwxNzc0ODA2OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="" className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-['Playfair_Display'] text-[28px] md:text-[42px] text-[#fbf9f4] mb-4">Ready to Transform the Museum Experience?</h2>
          <p className="font-['Manrope'] text-[15px] text-[#fbf9f4]/50 max-w-[480px] mx-auto mb-10">
            Whether you're a museum looking to modernize or a visitor eager to explore, MuseoVerse is built for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto font-['Manrope'] text-[14px] px-8 py-4 rounded-full bg-[#ffe088] text-[#341701] hover:bg-[#f5d56e] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(255,224,136,0.12)] transition-all text-center inline-flex items-center justify-center gap-2">
              <Presentation size={16} strokeWidth={2} />
              Book a Demo
            </Link>
            <Link to="/for-visitors" className="w-full sm:w-auto font-['Manrope'] text-[14px] px-8 py-4 rounded-full border border-[#ffe088]/30 text-[#ffe088] hover:bg-[#ffe088]/10 hover:-translate-y-0.5 transition-all text-center inline-flex items-center justify-center gap-2">
              <Download size={16} strokeWidth={2} />
              Download the App
            </Link>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
