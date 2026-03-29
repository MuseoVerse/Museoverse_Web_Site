import { Link } from "react-router";
import {
  ScanSearch, BookOpen, Sparkles, Users, Globe,
  Bookmark, Accessibility, ArrowRight
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  BlockReveal,
  FloatingElement,
  SectionReveal,
  StaggerGroup,
  StaggerItem,
} from "./animations";

const APP_FEATURES = [
  { icon: ScanSearch, title: "Scan Any Artifact", desc: "Point your phone at any artifact and instantly discover its story, origin, and cultural significance through AI." },
  { icon: BookOpen, title: "Listen to Stories", desc: "AI-narrated storytelling adapts to your language, interests, and curiosity level — from quick overviews to deep dives." },
  { icon: Sparkles, title: "See AR Annotations", desc: "Watch details appear on artifacts in real-time — materials, symbols, techniques, and hidden meanings." },
  { icon: Users, title: "Share Discoveries", desc: "Post your museum moments, react to others, and connect with a community of culture enthusiasts." },
  { icon: Globe, title: "Explore Virtually", desc: "Visit world-renowned museums from your couch. Walk through galleries and interact with collections remotely." },
  { icon: Bookmark, title: "Save & Revisit", desc: "Bookmark favorite artifacts and stories. Revisit your discoveries anytime, building a personal cultural collection." },
];

export function ForVisitorsPage() {
  return (
    <div>
      {/* Hero */}
      <SectionReveal className="pt-[72px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0e4] via-[#fbf9f4] to-[#f5f0e4]" />
        <FloatingElement className="absolute top-20 right-0" distance={16} duration={9}>
          <div className="w-[400px] h-[400px] rounded-full bg-[#ffe088]/10 blur-[100px]" />
        </FloatingElement>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 md:pt-24 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <BlockReveal>
              <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">For Visitors</span>
              <h1 className="font-['Playfair_Display'] text-[34px] md:text-[50px] text-[#341701] mt-3 mb-5 leading-[1.1]">
                Every Artifact Has a<br/>
                <span className="text-[#c9a84c]">Story to Tell</span>
              </h1>
              <p className="font-['Manrope'] text-[16px] text-[#76593a]/80 leading-[28px] mb-8">
                Your intelligent museum companion. Scan artifacts, hear their stories, share your journey, and explore museums around the world — all from one beautiful app.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                <a href="#" className="flex items-center gap-3 bg-[#341701] rounded-xl px-5 py-3.5 hover:bg-[#4a2508] hover:-translate-y-0.5 transition-all">
                  <svg width="18" height="22" viewBox="0 0 20 24" fill="#ffe088"><path d="M17.05 12.54c-.02-2.47 2.02-3.66 2.11-3.71a4.56 4.56 0 00-3.59-1.94c-1.52-.16-2.98.9-3.76.9s-1.97-.88-3.24-.86a4.78 4.78 0 00-4.03 2.45c-1.72 2.98-.44 7.4 1.24 9.82.82 1.18 1.79 2.52 3.07 2.47 1.23-.05 1.7-.8 3.19-.8s1.91.8 3.21.77c1.33-.02 2.16-1.21 2.97-2.4a10.7 10.7 0 001.34-2.76 4.39 4.39 0 01-2.66-4.04l.15.1zM14.28 4.94a4.48 4.48 0 001.03-3.22A4.56 4.56 0 0012.35 3a4.27 4.27 0 00-1.06 3.06 3.78 3.78 0 002.99-1.12z"/></svg>
                  <div>
                    <div className="font-['Manrope'] text-[10px] text-[#ffe088]/60">Download on the</div>
                    <div className="font-['Manrope'] text-[15px] text-[#ffe088]">App Store</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 bg-[#341701] rounded-xl px-5 py-3.5 hover:bg-[#4a2508] hover:-translate-y-0.5 transition-all">
                  <svg width="18" height="20" viewBox="0 0 20 22" fill="#ffe088"><path d="M1 1.34l8.84 9.13L1 19.66c-.17-.36-.27-.77-.27-1.2V2.54c0-.43.1-.84.27-1.2zm1.15-1.27L12.32 9.4l-2.6 2.69L2.15.07zM12.32 11.6l-2.6-2.69L2.15 20.93l10.17-9.33zM17.9 9.54L14 11.5l-2.98-3.08 2.98-3.08 3.9 1.96c.7.35.7.93 0 1.28v-.04z"/></svg>
                  <div>
                    <div className="font-['Manrope'] text-[10px] text-[#ffe088]/60">Get it on</div>
                    <div className="font-['Manrope'] text-[15px] text-[#ffe088]">Google Play</div>
                  </div>
                </a>
              </div>
            </BlockReveal>
            <BlockReveal className="flex justify-center" delay={0.12}>
              <div className="relative">
                <div className="bg-[#1a1a1a] rounded-[36px] p-[7px] shadow-[0_32px_80px_rgba(52,23,1,0.2)]">
                  <div className="bg-black rounded-[30px] overflow-hidden w-[260px] h-[520px] md:w-[300px] md:h-[600px]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1765127959662-a7229fa51580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBnYWxsZXJ5JTIwYW5jaWVudCUyMGFydGlmYWN0c3xlbnwxfHx8fDE3NzQ4MDY5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="MuseoVerse App" className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Floating card */}
                <FloatingElement className="absolute -left-8 bottom-24 hidden md:block" delay={0.16} distance={8} duration={5.6}>
                  <div className="bg-white rounded-xl p-4 shadow-[0_8px_32px_rgba(52,23,1,0.12)] border border-[#c9a84c]/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#ffe088]/20 flex items-center justify-center">
                        <ScanSearch size={18} className="text-[#c9a84c]" />
                      </div>
                      <div>
                        <div className="font-['Manrope'] text-[12px] text-[#341701]">Artifact Identified</div>
                        <div className="font-['Manrope'] text-[11px] text-[#76593a]/50">Egyptian Funerary Mask</div>
                      </div>
                    </div>
                  </div>
                </FloatingElement>
              </div>
            </BlockReveal>
          </div>
        </div>
      </SectionReveal>

      {/* Features Grid */}
      <SectionReveal className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <BlockReveal className="text-center mb-16">
            <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">App Features</span>
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[40px] text-[#341701] mt-3 mb-4">Your Museum Companion</h2>
            <p className="font-['Manrope'] text-[15px] text-[#76593a]/60 max-w-[480px] mx-auto">Everything you need for a richer, more meaningful museum experience.</p>
          </BlockReveal>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {APP_FEATURES.map((f) => (
              <StaggerItem key={f.title}>
                <div className="group bg-white rounded-2xl p-7 border border-[#c9a84c]/10 hover:border-[#c9a84c]/25 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(52,23,1,0.06)] transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#f5f0e4] flex items-center justify-center mb-5 group-hover:bg-[#341701] transition-colors duration-300">
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

      {/* Experience Section */}
      <SectionReveal className="py-20 md:py-28 bg-[#f5f0e4]/50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <BlockReveal className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(52,23,1,0.1)] hover:-translate-y-1 transition-transform duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1697599211453-4d9ada19c72b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3V2cmUlMjBtdXNldW0lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc0ODA2OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Virtual Museum" className="w-full h-[300px] md:h-[420px] object-cover"
              />
            </BlockReveal>
            <BlockReveal delay={0.08}>
              <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">Beyond the Walls</span>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] text-[#341701] mt-3 mb-5">Explore Museums From Anywhere</h2>
              <p className="font-['Manrope'] text-[15px] text-[#76593a]/70 leading-[26px] mb-6">
                Can't visit in person? MuseoVerse's virtual tours let you walk through world-class galleries, interact with collections, and experience cultural heritage from wherever you are. Perfect for students, remote learners, and curious minds.
              </p>
              <div className="flex items-center gap-3">
                <Accessibility size={18} className="text-[#c9a84c]" />
                <span className="font-['Manrope'] text-[14px] text-[#76593a]">Accessible to everyone, everywhere</span>
              </div>
            </BlockReveal>
          </div>
        </div>
      </SectionReveal>

      {/* Download CTA */}
      <SectionReveal className="py-20 md:py-24 bg-[#341701] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1774176105904-f3ed4b6323a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZ3JlZWslMjBzY3VscHR1cmUlMjBtYXJibGV8ZW58MXx8fHwxNzc0ODA2OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="" className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display'] text-[28px] md:text-[42px] text-[#fbf9f4] mb-4">Start Your Discovery</h2>
          <p className="font-['Manrope'] text-[15px] text-[#fbf9f4]/50 mb-10">Download MuseoVerse and transform your next museum visit into an unforgettable journey.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="flex items-center gap-3 bg-[#ffe088] rounded-xl px-6 py-4 hover:bg-[#f5d56e] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(255,224,136,0.12)] transition-all">
              <svg width="18" height="22" viewBox="0 0 20 24" fill="#341701"><path d="M17.05 12.54c-.02-2.47 2.02-3.66 2.11-3.71a4.56 4.56 0 00-3.59-1.94c-1.52-.16-2.98.9-3.76.9s-1.97-.88-3.24-.86a4.78 4.78 0 00-4.03 2.45c-1.72 2.98-.44 7.4 1.24 9.82.82 1.18 1.79 2.52 3.07 2.47 1.23-.05 1.7-.8 3.19-.8s1.91.8 3.21.77c1.33-.02 2.16-1.21 2.97-2.4a10.7 10.7 0 001.34-2.76 4.39 4.39 0 01-2.66-4.04l.15.1zM14.28 4.94a4.48 4.48 0 001.03-3.22A4.56 4.56 0 0012.35 3a4.27 4.27 0 00-1.06 3.06 3.78 3.78 0 002.99-1.12z"/></svg>
              <div className="text-left">
                <div className="font-['Manrope'] text-[10px] text-[#341701]/60">Download on the</div>
                <div className="font-['Manrope'] text-[15px] text-[#341701]">App Store</div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 bg-[#ffe088] rounded-xl px-6 py-4 hover:bg-[#f5d56e] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(255,224,136,0.12)] transition-all">
              <svg width="18" height="20" viewBox="0 0 20 22" fill="#341701"><path d="M1 1.34l8.84 9.13L1 19.66c-.17-.36-.27-.77-.27-1.2V2.54c0-.43.1-.84.27-1.2zm1.15-1.27L12.32 9.4l-2.6 2.69L2.15.07zM12.32 11.6l-2.6-2.69L2.15 20.93l10.17-9.33zM17.9 9.54L14 11.5l-2.98-3.08 2.98-3.08 3.9 1.96c.7.35.7.93 0 1.28v-.04z"/></svg>
              <div className="text-left">
                <div className="font-['Manrope'] text-[10px] text-[#341701]/60">Get it on</div>
                <div className="font-['Manrope'] text-[15px] text-[#341701]">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
