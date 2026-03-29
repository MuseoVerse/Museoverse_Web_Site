import { Link } from "react-router";
import { useState } from "react";
import {
  ScanSearch, BookOpen, Globe, Users, BarChart3, Sparkles,
  ChevronDown, ChevronUp, Building2, Smartphone, ArrowRight,
  Eye, MessageCircle, Map, TrendingUp, Palette, Layers
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-['Manrope'] text-[15px] md:text-[16px] text-[#341701] pr-4">{q}</span>
        {open ? <ChevronUp size={18} className="text-[#c9a84c] shrink-0" /> : <ChevronDown size={18} className="text-[#76593a]/40 shrink-0" />}
      </button>
      {open && (
        <p className="font-['Manrope'] text-[14px] text-[#76593a]/70 leading-[24px] pb-5 pr-8">{a}</p>
      )}
    </div>
  );
}

export function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf9f4] via-[#f5f0e4] to-[#fbf9f4]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#ffe088]/8 blur-[120px]" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 md:pt-24 pb-8 md:pb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left max-w-[560px]">
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
                  className="w-full sm:w-auto font-['Manrope'] text-[14px] tracking-[0.3px] px-7 py-3.5 rounded-full bg-[#341701] text-[#ffe088] hover:bg-[#4a2508] transition-all duration-300 text-center"
                >
                  Book a Demo
                </Link>
                <Link
                  to="/for-visitors"
                  className="w-full sm:w-auto font-['Manrope'] text-[14px] tracking-[0.3px] px-7 py-3.5 rounded-full border border-[#c9a84c]/40 text-[#341701] hover:bg-[#341701]/5 transition-all duration-300 text-center"
                >
                  Download App
                </Link>
              </div>
              {/* Store badges */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <a href="#" className="flex items-center gap-2 bg-[#341701] rounded-lg px-3 py-2 hover:bg-[#4a2508] transition-colors">
                  <svg width="14" height="16" viewBox="0 0 20 24" fill="#ffe088"><path d="M17.05 12.54c-.02-2.47 2.02-3.66 2.11-3.71a4.56 4.56 0 00-3.59-1.94c-1.52-.16-2.98.9-3.76.9s-1.97-.88-3.24-.86a4.78 4.78 0 00-4.03 2.45c-1.72 2.98-.44 7.4 1.24 9.82.82 1.18 1.79 2.52 3.07 2.47 1.23-.05 1.7-.8 3.19-.8s1.91.8 3.21.77c1.33-.02 2.16-1.21 2.97-2.4a10.7 10.7 0 001.34-2.76 4.39 4.39 0 01-2.66-4.04l.15.1zM14.28 4.94a4.48 4.48 0 001.03-3.22A4.56 4.56 0 0012.35 3a4.27 4.27 0 00-1.06 3.06 3.78 3.78 0 002.99-1.12z"/></svg>
                  <span className="font-['Manrope'] text-[11px] text-[#ffe088]">App Store</span>
                </a>
                <a href="#" className="flex items-center gap-2 bg-[#341701] rounded-lg px-3 py-2 hover:bg-[#4a2508] transition-colors">
                  <svg width="14" height="16" viewBox="0 0 20 22" fill="#ffe088"><path d="M1 1.34l8.84 9.13L1 19.66c-.17-.36-.27-.77-.27-1.2V2.54c0-.43.1-.84.27-1.2zm1.15-1.27L12.32 9.4l-2.6 2.69L2.15.07zM12.32 11.6l-2.6-2.69L2.15 20.93l10.17-9.33zM17.9 9.54L14 11.5l-2.98-3.08 2.98-3.08 3.9 1.96c.7.35.7.93 0 1.28v-.04z"/></svg>
                  <span className="font-['Manrope'] text-[11px] text-[#ffe088]">Google Play</span>
                </a>
              </div>
            </div>

            {/* Device Mockups */}
            <div className="flex-1 flex justify-center items-end gap-[-20px] relative">
              <PhoneMockup
                src="https://images.unsplash.com/photo-1769437598069-d5148d009769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzbWFydHBob25lJTIwbXVzZXVtJTIwdmlzaXRvcnxlbnwxfHx8fDE3NzQ4MDY5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="MuseoVerse Scan Feature"
                className="hidden md:block -mr-6 mb-8 opacity-70"
              />
              <PhoneMockup
                src="https://images.unsplash.com/photo-1765127959662-a7229fa51580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBnYWxsZXJ5JTIwYW5jaWVudCUyMGFydGlmYWN0c3xlbnwxfHx8fDE3NzQ4MDY5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="MuseoVerse App"
                className="z-10"
              />
              <PhoneMockup
                src="https://images.unsplash.com/photo-1774176105904-f3ed4b6323a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZ3JlZWslMjBzY3VscHR1cmUlMjBtYXJibGV8ZW58MXx8fHwxNzc0ODA2OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="MuseoVerse Virtual"
                className="hidden md:block -ml-6 mb-8 opacity-70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS MUSEOVERSE */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">The Platform</span>
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[40px] text-[#341701] mt-3 mb-4">One Ecosystem, Two Worlds</h2>
            <p className="font-['Manrope'] text-[15px] text-[#76593a]/70 max-w-[520px] mx-auto leading-[26px]">
              MuseoVerse bridges visitors and institutions through AI-powered storytelling, social discovery, and cultural analytics.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="group bg-white rounded-2xl p-7 border border-[#c9a84c]/10 hover:border-[#c9a84c]/30 hover:shadow-[0_12px_40px_rgba(52,23,1,0.06)] transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#341701]/5 flex items-center justify-center mb-5 group-hover:bg-[#341701] transition-colors duration-300">
                  <f.icon size={20} className="text-[#c9a84c] group-hover:text-[#ffe088] transition-colors duration-300" />
                </div>
                <h3 className="font-['Manrope'] text-[16px] text-[#341701] mb-2">{f.title}</h3>
                <p className="font-['Manrope'] text-[13px] text-[#76593a]/60 leading-[22px]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 bg-[#341701]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#ffe088]/60">How It Works</span>
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[40px] text-[#fbf9f4] mt-3">Four Steps to a Richer Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div key={s.num} className="relative bg-[#fbf9f4]/5 rounded-2xl p-7 border border-[#ffe088]/10 hover:border-[#ffe088]/25 transition-all duration-300">
                <span className="font-['Playfair_Display'] text-[48px] text-[#ffe088]/10 absolute top-4 right-6">{s.num}</span>
                <div className="relative z-10">
                  <h3 className="font-['Manrope'] text-[16px] text-[#ffe088] mb-3 mt-8">{s.title}</h3>
                  <p className="font-['Manrope'] text-[13px] text-[#fbf9f4]/50 leading-[22px]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR BOTH SIDES */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">Built for Both Sides</span>
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[40px] text-[#341701] mt-3">Two Audiences, One Platform</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* For Visitors */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f5f0e4] to-[#fbf9f4] p-8 md:p-10 border border-[#c9a84c]/15">
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

            {/* For Museums */}
            <div className="relative overflow-hidden rounded-3xl bg-[#341701] p-8 md:p-10">
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
          </div>
        </div>
      </section>

      {/* ECOSYSTEM PREVIEW */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#f5f0e4] to-[#fbf9f4]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
            <div>
              <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">The Connected Ecosystem</span>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[38px] text-[#341701] mt-3 mb-5">Visitor App Meets<br/>Museum Intelligence</h2>
              <p className="font-['Manrope'] text-[15px] text-[#76593a]/70 leading-[26px] mb-8">
                Every scan, story listened, and virtual tour explored feeds into a powerful analytics dashboard — giving museums the insights they need while visitors enjoy seamless cultural discovery.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Eye, label: "380K+", sub: "Artifacts Scanned" },
                  { icon: MessageCircle, label: "2.4M", sub: "Stories Delivered" },
                  { icon: Map, label: "120+", sub: "Partner Museums" },
                  { icon: TrendingUp, label: "94%", sub: "Engagement Rate" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-5 border border-[#c9a84c]/10">
                    <s.icon size={18} className="text-[#c9a84c] mb-2" />
                    <div className="font-['Playfair_Display'] text-[24px] text-[#341701]">{s.label}</div>
                    <div className="font-['Manrope'] text-[12px] text-[#76593a]/50">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(52,23,1,0.12)] border border-[#c9a84c]/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBjb21wdXRlciUyMHNjcmVlbnxlbnwxfHx8fDE3NzQ4MDY5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="MuseoVerse Dashboard"
                  className="w-full h-[320px] md:h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-[0_8px_32px_rgba(52,23,1,0.1)] border border-[#c9a84c]/10 hidden md:block">
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
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">Trusted by Institutions</span>
          <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] text-[#341701] mt-3 mb-4">Designed for Forward-Thinking Museums</h2>
          <p className="font-['Manrope'] text-[15px] text-[#76593a]/60 max-w-[500px] mx-auto leading-[26px] mb-14">
            Built for the next era of cultural engagement. Partnering with institutions that believe in the power of intelligent storytelling.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-30">
            {["Grand Egyptian Museum", "The Louvre", "British Museum", "Uffizi Gallery", "Met Museum", "Smithsonian"].map((name) => (
              <div key={name} className="font-['Playfair_Display'] text-[16px] md:text-[18px] text-[#341701] whitespace-nowrap">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[#f5f0e4]/50">
        <div className="max-w-[720px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">FAQ</span>
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] text-[#341701] mt-3">Common Questions</h2>
          </div>
          <div>
            {FAQS.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-20 md:py-24 bg-[#341701] relative overflow-hidden">
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
            <Link to="/contact" className="w-full sm:w-auto font-['Manrope'] text-[14px] px-8 py-4 rounded-full bg-[#ffe088] text-[#341701] hover:bg-[#f5d56e] transition-colors text-center">
              Book a Demo
            </Link>
            <Link to="/for-visitors" className="w-full sm:w-auto font-['Manrope'] text-[14px] px-8 py-4 rounded-full border border-[#ffe088]/30 text-[#ffe088] hover:bg-[#ffe088]/10 transition-colors text-center">
              Download the App
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
