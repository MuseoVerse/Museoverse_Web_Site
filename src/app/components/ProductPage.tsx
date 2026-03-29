import { Link } from "react-router";
import {
  ScanSearch, BookOpen, Sparkles, Users, Globe, BarChart3,
  Target, Megaphone, ArrowRight, Presentation, Smartphone
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BlockReveal, SectionReveal, StaggerGroup, StaggerItem } from "./animations";
import aiArtifactRecognitionImage from "../../assets/Gemini_Generated_Image_v43qxdv43qxdv43q.png";
import personalizedStorytellingImage from "../../assets/Gemini_Generated_Image_diflkmdiflkmdifl.png";
import interactiveArAnnotationsImage from "../../assets/Gemini_Generated_Image_1qqlrc1qqlrc1qql.png";
import geofencedSocialFeedImage from "../../assets/Gemini_Generated_Image_ib3cjwib3cjwib3c.png";
import virtualMuseumExperiencesImage from "../../assets/Gemini_Generated_Image_oxxbpxoxxbpxoxxb.png";
import museumAnalyticsDashboardImage from "../../assets/Gemini_Generated_Image_5xeie25xeie25xei.png";
import campaignsVisibilityToolsImage from "../../assets/Gemini_Generated_Image_s8geucs8geucs8ge.png";
import smartRecommendationsImage from "../../assets/Gemini_Generated_Image_f9xaxwf9xaxwf9xa.png";
import productCtaBackgroundImage from "../../assets/b1251c3f409e602de6136d88c4a209a7a9e93625.png";

const FEATURES = [
  {
    icon: ScanSearch,
    title: "AI Artifact Recognition",
    desc: "Point your camera at any artifact and our vision AI instantly identifies it, pulling from a vast cultural knowledge base to deliver accurate context, origin, and historical significance.",
    benefit: "Visitors understand what they're seeing without searching or reading small labels.",
    audience: "visitor",
    img: aiArtifactRecognitionImage,
  },
  {
    icon: BookOpen,
    title: "Personalized Storytelling",
    desc: "Each artifact comes alive through AI-narrated stories that adapt to your language, interests, and preferred depth. Choose between a quick overview or a deep scholarly exploration.",
    benefit: "Every visitor gets a unique, engaging narrative — from casual tourists to researchers.",
    audience: "visitor",
    img: personalizedStorytellingImage,
  },
  {
    icon: Sparkles,
    title: "Interactive AR Annotations",
    desc: "Through your device's camera, see real-time visual annotations layered on artifacts — highlighting materials, symbolic elements, construction techniques, and restoration history.",
    benefit: "Transforms passive viewing into active, layered discovery.",
    audience: "visitor",
    img: interactiveArAnnotationsImage,
  },
  {
    icon: Users,
    title: "Geofenced Social Feed",
    desc: "Share museum discoveries, react to posts from fellow visitors, and build a community around cultural exploration. Content is geofenced to create authentic, location-aware conversations.",
    benefit: "Museums become social spaces where shared experiences amplify engagement.",
    audience: "both",
    img: geofencedSocialFeedImage,
  },
  {
    icon: Globe,
    title: "Virtual Museum Experiences",
    desc: "Explore partner museums remotely through immersive virtual tours. Walk through galleries, interact with exhibits, and discover collections without physical travel.",
    benefit: "Culture becomes accessible to everyone, everywhere, anytime.",
    audience: "visitor",
    img: virtualMuseumExperiencesImage,
  },
  {
    icon: Target,
    title: "Smart Recommendations",
    desc: "Before, during, and after visits, MuseoVerse suggests exhibits, artifacts, and museums based on personal interests, visit history, and proximity.",
    benefit: "Visitors always know what to see next. Museums benefit from increased discovery.",
    audience: "both",
    img: smartRecommendationsImage,
  },
  {
    icon: BarChart3,
    title: "Museum Analytics Dashboard",
    desc: "A comprehensive real-time dashboard for museums to monitor visitor engagement, storytelling usage, scan activity, exhibit performance, and social feed metrics.",
    benefit: "Museums make data-driven decisions to improve experiences and allocate resources.",
    audience: "museum",
    img: museumAnalyticsDashboardImage,
  },
  {
    icon: Megaphone,
    title: "Campaigns & Visibility Tools",
    desc: "Museums can create promotional campaigns, featured exhibit placements, and targeted recommendations to increase visibility and drive foot traffic.",
    benefit: "Institutions grow their audience and promote special exhibitions effectively.",
    audience: "museum",
    img: campaignsVisibilityToolsImage,
  },
];

export function ProductPage() {
  return (
    <div>
      {/* Hero */}
      <SectionReveal className="pt-[72px] pb-8 md:pb-12 bg-gradient-to-b from-[#f5f0e4] to-[#fbf9f4]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 md:pt-24 text-center">
          <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">Product</span>
          <h1 className="font-['Playfair_Display'] text-[34px] md:text-[52px] text-[#341701] mt-3 mb-5 leading-[1.1]">
            The Complete MuseoVerse<br/>Ecosystem
          </h1>
          <p className="font-['Manrope'] text-[16px] text-[#76593a]/70 max-w-[560px] mx-auto leading-[28px]">
            A visitor companion app powered by AI and a museum partner platform powered by data — working together to transform cultural engagement.
          </p>
        </div>
      </SectionReveal>

      {/* Features */}
      <SectionReveal className="pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <StaggerGroup className="space-y-20 md:space-y-28" staggerChildren={0.16}>
            {FEATURES.map((f, i) => (
              <StaggerItem key={f.title}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <BlockReveal className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="inline-flex items-center gap-2 bg-[#341701]/5 rounded-full px-3 py-1 mb-4">
                    <f.icon size={14} className="text-[#c9a84c]" />
                    <span className="font-['Manrope'] text-[11px] tracking-[1px] uppercase text-[#76593a]">
                      {f.audience === "museum" ? "For Museums" : f.audience === "visitor" ? "For Visitors" : "For Both"}
                    </span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-[24px] md:text-[32px] text-[#341701] mb-4">{f.title}</h3>
                  <p className="font-['Manrope'] text-[15px] text-[#76593a]/70 leading-[26px] mb-5">{f.desc}</p>
                  <div className="bg-[#f5f0e4] rounded-xl p-5 border border-[#c9a84c]/10 hover:-translate-y-0.5 transition-transform duration-300">
                    <p className="font-['Manrope'] text-[13px] text-[#76593a] leading-[22px]">
                      <span className="text-[#c9a84c]">Impact:</span> {f.benefit}
                    </p>
                  </div>
                </BlockReveal>
                <BlockReveal className={`${i % 2 === 1 ? "lg:order-1" : ""}`} delay={0.08}>
                  <div className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(52,23,1,0.1)] border border-[#c9a84c]/10 hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(52,23,1,0.12)] transition-all duration-300">
                    <ImageWithFallback src={f.img} alt={f.title} className="w-full h-[260px] md:h-[360px] object-cover" />
                  </div>
                </BlockReveal>
              </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal className="relative overflow-hidden py-20 bg-[#341701]">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src={productCtaBackgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display'] text-[28px] md:text-[38px] text-[#fbf9f4] mb-4">Explore What MuseoVerse Can Do</h2>
          <p className="font-['Manrope'] text-[15px] text-[#fbf9f4]/50 mb-10">See the full platform in action. Book a demo or download the app today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto font-['Manrope'] text-[14px] px-8 py-4 rounded-full bg-[#ffe088] text-[#341701] hover:bg-[#f5d56e] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(255,224,136,0.12)] transition-all text-center inline-flex items-center justify-center gap-2">
              <Presentation size={16} strokeWidth={2} />
              Book a Demo
            </Link>
            <Link to="/for-visitors" className="w-full sm:w-auto font-['Manrope'] text-[14px] px-8 py-4 rounded-full border border-[#ffe088]/30 text-[#ffe088] hover:bg-[#ffe088]/10 hover:-translate-y-0.5 transition-all text-center inline-flex items-center justify-center gap-2">
              <Smartphone size={16} strokeWidth={2} />
              Download the App
            </Link>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
