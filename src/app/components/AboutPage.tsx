import { Link } from "react-router";
import { Heart, Lightbulb, Globe, Shield, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BlockReveal, SectionReveal, StaggerGroup, StaggerItem } from "./animations";
import challengeImage from "../../assets/Gemini_Generated_Image_z4i4ulz4i4ulz4i4.png";
import teamImage from "../../assets/Team.png";
import missionVisionBackgroundImage from "../../assets/0af092a3d5699a92e61a30940518c6aaeeb0e428.png";
import joinTheJourneyBackgroundImage from "../../assets/07bc81a768f63fb90c646c2c895d4e10379d0f6e.png";

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <SectionReveal className="pt-[72px] pb-12 md:pb-16 bg-gradient-to-b from-[#f5f0e4] to-[#fbf9f4]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 md:pt-24">
          <div className="max-w-[680px] mx-auto text-center">
            <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">About MuseoVerse</span>
            <h1 className="font-['Playfair_Display'] text-[34px] md:text-[50px] text-[#341701] mt-3 mb-6 leading-[1.1]">
              Where Culture Meets<br/>
              <span className="text-[#c9a84c]">Intelligent Discovery</span>
            </h1>
            <p className="font-['Manrope'] text-[16px] text-[#76593a]/70 leading-[28px]">
              MuseoVerse was born from a simple observation: the world's greatest museums hold extraordinary stories, but too often those stories remain locked behind glass, unheard and unexplored by the people standing right in front of them.
            </p>
          </div>
        </div>
      </SectionReveal>

      {/* The Problem */}
      <SectionReveal className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <BlockReveal className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(52,23,1,0.1)] hover:-translate-y-1 transition-transform duration-300">
              <ImageWithFallback
                src={challengeImage}
                alt="Museum Gallery" className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </BlockReveal>
            <BlockReveal delay={0.08}>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] text-[#341701] mb-5">The Challenge We Saw</h2>
              <p className="font-['Manrope'] text-[15px] text-[#76593a]/70 leading-[26px] mb-5">
                Museums are among humanity's greatest achievements — vast collections of art, history, and science gathered over centuries. Yet the traditional museum experience often falls short of its potential.
              </p>
              <p className="font-['Manrope'] text-[15px] text-[#76593a]/70 leading-[26px] mb-5">
                Visitors walk past artifacts without understanding their significance. Small labels go unread. Audio guides feel impersonal. And museums themselves struggle to understand how visitors engage with their collections.
              </p>
              <p className="font-['Manrope'] text-[15px] text-[#76593a]/70 leading-[26px]">
                We believed there was a way to bridge this gap — to use intelligent technology not to replace the museum experience, but to deepen it.
              </p>
            </BlockReveal>
          </div>
        </div>
      </SectionReveal>

      {/* Mission & Vision */}
      <SectionReveal className="relative overflow-hidden py-16 md:py-20 bg-[#341701]">
        <div className="absolute inset-0 opacity-5">
          <ImageWithFallback
            src={missionVisionBackgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem className="h-full">
              <div className="flex h-full flex-col bg-[#fbf9f4]/5 rounded-2xl p-8 md:p-10 border border-[#ffe088]/10 hover:-translate-y-1 transition-transform duration-300">
              <Lightbulb size={28} className="text-[#ffe088] mb-5" />
              <h3 className="font-['Playfair_Display'] text-[24px] text-[#fbf9f4] mb-4">Our Mission</h3>
              <p className="font-['Manrope'] text-[15px] text-[#fbf9f4]/60 leading-[26px]">
                To make every museum visit a deeply personal, intelligent, and unforgettable experience — while giving institutions the tools to understand, engage, and inspire their audiences like never before.
              </p>
              </div>
            </StaggerItem>
            <StaggerItem className="h-full">
              <div className="flex h-full flex-col bg-[#fbf9f4]/5 rounded-2xl p-8 md:p-10 border border-[#ffe088]/10 hover:-translate-y-1 transition-transform duration-300">
              <Globe size={28} className="text-[#ffe088] mb-5" />
              <h3 className="font-['Playfair_Display'] text-[24px] text-[#fbf9f4] mb-4">Our Vision</h3>
              <p className="font-['Manrope'] text-[15px] text-[#fbf9f4]/60 leading-[26px]">
                A world where cultural heritage is accessible, alive, and understood by everyone — where technology amplifies the power of storytelling and every artifact can share its story with anyone who asks.
              </p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </SectionReveal>

      {/* Values */}
      <SectionReveal className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <BlockReveal>
            <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">Our Values</span>
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] text-[#341701] mt-3 mb-14">What Drives Us</h2>
          </BlockReveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Cultural Respect", desc: "Technology should serve heritage, not overshadow it. We build with deep respect for the stories museums preserve." },
              { icon: Lightbulb, title: "Intelligent Design", desc: "Every feature is thoughtfully crafted to enhance understanding, not distract from the experience." },
              { icon: Globe, title: "Universal Access", desc: "Culture belongs to everyone. We work to make museum experiences accessible regardless of location or ability." },
              { icon: Shield, title: "Institutional Trust", desc: "Museums trust us with their collections and data. We honor that trust with security, transparency, and care." },
            ].map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="flex h-full flex-col bg-[#f5f0e4] rounded-2xl p-7 border border-[#c9a84c]/10 text-center hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(52,23,1,0.08)] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#341701] flex items-center justify-center mx-auto mb-5">
                    <v.icon size={20} className="text-[#ffe088]" />
                  </div>
                  <h3 className="font-['Manrope'] text-[16px] text-[#341701] mb-3">{v.title}</h3>
                  <p className="font-['Manrope'] text-[13px] text-[#76593a]/60 leading-[22px]">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </SectionReveal>

      {/* Team */}
      <SectionReveal className="py-16 md:py-20 bg-[#f5f0e4]/50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <BlockReveal>
              <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">Our Story</span>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] text-[#341701] mt-3 mb-5">Built by People Who Love Museums</h2>
              <p className="font-['Manrope'] text-[15px] text-[#76593a]/70 leading-[26px] mb-5">
                MuseoVerse was founded by a team of technologists, cultural researchers, and museum professionals who shared a common frustration — and a common dream.
              </p>
              <p className="font-['Manrope'] text-[15px] text-[#76593a]/70 leading-[26px] mb-5">
                Our team combines expertise in artificial intelligence, computer vision, cultural heritage preservation, museum curation, and product design. We work closely with partner museums to ensure every feature respects the integrity of cultural storytelling.
              </p>
              <p className="font-['Manrope'] text-[15px] text-[#76593a]/70 leading-[26px]">
                We believe the best technology is the kind you don't notice — the kind that simply makes everything feel more alive.
              </p>
            </BlockReveal>
            <BlockReveal className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(52,23,1,0.1)] hover:-translate-y-1 transition-transform duration-300" delay={0.08}>
              <ImageWithFallback
                src={teamImage}
                alt="MuseoVerse Team" className="w-full h-[320px] md:h-[400px] object-cover"
              />
            </BlockReveal>
          </div>
        </div>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal className="relative overflow-hidden py-16 md:py-20 bg-[#341701]">
        <div className="absolute inset-0 opacity-8">
          <ImageWithFallback
            src={joinTheJourneyBackgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display'] text-[28px] md:text-[38px] text-[#fbf9f4] mb-4">Join the Journey</h2>
          <p className="font-['Manrope'] text-[15px] text-[#fbf9f4]/50 mb-10">Whether as a museum partner, a curious visitor, or a like-minded collaborator — we'd love to hear from you.</p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 font-['Manrope'] text-[14px] px-8 py-4 rounded-full bg-[#ffe088] text-[#341701] hover:bg-[#f5d56e] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(255,224,136,0.12)] transition-all">
            <Mail size={16} strokeWidth={2} />
            Get in Touch
          </Link>
        </div>
      </SectionReveal>
    </div>
  );
}
