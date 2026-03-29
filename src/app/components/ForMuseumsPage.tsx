import { Link } from "react-router";
import {
  BarChart3, TrendingUp, Users, Eye, Target, Megaphone,
  Shield, HeartHandshake, ArrowRight, CheckCircle2
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BlockReveal, SectionReveal, StaggerGroup, StaggerItem } from "./animations";
import museumIntelligenceCenterImage from "../../assets/Gemini_Generated_Image_5xeie25xeie25xei.png";

const BENEFITS = [
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Monitor visitor engagement, scan activity, and storytelling usage with a live dashboard designed for cultural institutions." },
  { icon: Eye, title: "Exhibit Performance", desc: "Understand which exhibits attract the most attention, which artifacts are most scanned, and where visitors spend time." },
  { icon: Users, title: "Visitor Behavior Insights", desc: "Gain deep understanding of visitor patterns, preferences, dwell times, and journey flows through your museum." },
  { icon: TrendingUp, title: "Storytelling Impact", desc: "Track how AI-generated stories perform — listen rates, completion rates, language preferences, and depth choices." },
  { icon: Megaphone, title: "Campaigns & Promotions", desc: "Create featured exhibit placements, promotional recommendations, and targeted campaigns to drive engagement." },
  { icon: Target, title: "Digital Visibility", desc: "Increase your museum's reach through the MuseoVerse social feed, virtual tours, and cross-institutional recommendations." },
];

export function ForMuseumsPage() {
  return (
    <div>
      {/* Hero */}
      <SectionReveal className="pt-[72px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#341701]" />
        <div className="absolute inset-0 opacity-15">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1673672397869-580cea12b333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicml0aXNoJTIwbXVzZXVtJTIwaW50ZXJpb3IlMjBjb2x1bW5zfGVufDF8fHx8MTc3NDgwNjk4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="" className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 pt-20 md:pt-28 pb-14 md:pb-20">
          <div className="max-w-[600px]">
            <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#ffe088]/60">For Museums & Institutions</span>
            <h1 className="font-['Playfair_Display'] text-[34px] md:text-[50px] text-[#fbf9f4] mt-3 mb-5 leading-[1.1]">
              Modernize Engagement.<br/>
              <span className="text-[#ffe088]">Preserve Cultural Depth.</span>
            </h1>
            <p className="font-['Manrope'] text-[16px] text-[#fbf9f4]/60 leading-[28px] mb-8">
              MuseoVerse gives museums the tools to understand visitors, measure impact, and enhance the museum experience — without losing the soul of cultural storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="font-['Manrope'] text-[14px] px-7 py-3.5 rounded-full bg-[#ffe088] text-[#341701] hover:bg-[#f5d56e] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(255,224,136,0.12)] transition-all text-center">
                Book a Demo
              </Link>
              <Link to="/contact" className="font-['Manrope'] text-[14px] px-7 py-3.5 rounded-full border border-[#ffe088]/30 text-[#ffe088] hover:bg-[#ffe088]/10 hover:-translate-y-0.5 transition-all text-center">
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Why Museums Choose */}
      <SectionReveal className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <BlockReveal className="text-center mb-16">
            <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">Why MuseoVerse</span>
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[40px] text-[#341701] mt-3 mb-4">Why Museums Choose MuseoVerse</h2>
            <p className="font-['Manrope'] text-[15px] text-[#76593a]/60 max-w-[520px] mx-auto leading-[26px]">
              An intelligent partner platform that helps you understand, engage, and grow your museum's cultural impact.
            </p>
          </BlockReveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <StaggerItem key={b.title}>
                <div className="bg-white rounded-2xl p-7 border border-[#c9a84c]/10 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(52,23,1,0.06)] transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#341701] flex items-center justify-center mb-5">
                    <b.icon size={20} className="text-[#ffe088]" />
                  </div>
                  <h3 className="font-['Manrope'] text-[16px] text-[#341701] mb-2">{b.title}</h3>
                  <p className="font-['Manrope'] text-[13px] text-[#76593a]/60 leading-[22px]">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </SectionReveal>

      {/* Dashboard Preview */}
      <SectionReveal className="py-16 md:py-20 bg-[#f5f0e4]/50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <BlockReveal>
              <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">The Dashboard</span>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] text-[#341701] mt-3 mb-5">Your Museum's Intelligence Center</h2>
              <p className="font-['Manrope'] text-[15px] text-[#76593a]/70 leading-[26px] mb-8">
                The MuseoVerse partner dashboard gives you a complete view of how visitors interact with your museum through the platform.
              </p>
              <StaggerGroup className="space-y-4" delayChildren={0.1} staggerChildren={0.06}>
                {[
                  "Live visitor engagement metrics",
                  "Artifact scan and storytelling performance",
                  "Social feed activity and community monitoring",
                  "Virtual tour analytics and completion rates",
                  "Campaign performance and recommendation impact",
                  "Exportable reports for stakeholders",
                ].map((t) => (
                  <StaggerItem key={t}>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-[#c9a84c] shrink-0" />
                      <span className="font-['Manrope'] text-[14px] text-[#76593a]">{t}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </BlockReveal>
            <BlockReveal className="rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(52,23,1,0.12)] border border-[#c9a84c]/10 hover:-translate-y-1 transition-transform duration-300" delay={0.08}>
              <ImageWithFallback
                src={museumIntelligenceCenterImage}
                alt="MuseoVerse Dashboard"
                className="w-full h-[300px] md:h-[420px] object-cover"
              />
            </BlockReveal>
          </div>
        </div>
      </SectionReveal>

      {/* Partner Process */}
      <SectionReveal className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">Getting Started</span>
          <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] text-[#341701] mt-3 mb-14">How Partnership Works</h2>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Book a Demo", desc: "Schedule a personalized walkthrough of the MuseoVerse platform tailored to your institution's needs.", icon: HeartHandshake },
              { step: "02", title: "Onboard & Integrate", desc: "Our team works with you to set up your museum's profile, catalog artifacts, and configure analytics.", icon: Shield },
              { step: "03", title: "Launch & Grow", desc: "Go live with visitor-facing features and start tracking engagement from day one. Ongoing support included.", icon: TrendingUp },
            ].map((s) => (
              <StaggerItem key={s.step} className="h-full">
                <div className="h-full bg-[#f5f0e4] rounded-2xl p-8 border border-[#c9a84c]/10 text-center hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(52,23,1,0.08)] transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#341701] flex items-center justify-center mx-auto mb-5">
                    <s.icon size={20} className="text-[#ffe088]" />
                  </div>
                  <span className="font-['Manrope'] text-[11px] tracking-[2px] text-[#c9a84c]">STEP {s.step}</span>
                  <h3 className="font-['Manrope'] text-[18px] text-[#341701] mt-2 mb-3">{s.title}</h3>
                  <p className="font-['Manrope'] text-[13px] text-[#76593a]/60 leading-[22px]">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal className="py-16 md:py-20 bg-[#341701]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display'] text-[28px] md:text-[38px] text-[#fbf9f4] mb-4">Ready to Join the MuseoVerse Network?</h2>
          <p className="font-['Manrope'] text-[15px] text-[#fbf9f4]/50 mb-10">Discover how MuseoVerse can help your institution engage visitors, measure impact, and grow cultural reach.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto font-['Manrope'] text-[14px] px-8 py-4 rounded-full bg-[#ffe088] text-[#341701] hover:bg-[#f5d56e] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(255,224,136,0.12)] transition-all text-center">
              Book a Demo
            </Link>
            <Link to="/contact" className="w-full sm:w-auto font-['Manrope'] text-[14px] px-8 py-4 rounded-full border border-[#ffe088]/30 text-[#ffe088] hover:bg-[#ffe088]/10 hover:-translate-y-0.5 transition-all text-center">
              Contact the Team
            </Link>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
