import { Link } from "react-router";
import { Heart, Lightbulb, Globe, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-[72px] pb-16 md:pb-24 bg-gradient-to-b from-[#f5f0e4] to-[#fbf9f4]">
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
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(52,23,1,0.1)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1563474369245-bb6cf001f72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBoYWxsd2F5JTIwcmVuYWlzc2FuY2UlMjBwYWludGluZ3N8ZW58MXx8fHwxNzc0ODA2OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Museum Gallery" className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
            <div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-[#341701]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#fbf9f4]/5 rounded-2xl p-8 md:p-10 border border-[#ffe088]/10">
              <Lightbulb size={28} className="text-[#ffe088] mb-5" />
              <h3 className="font-['Playfair_Display'] text-[24px] text-[#fbf9f4] mb-4">Our Mission</h3>
              <p className="font-['Manrope'] text-[15px] text-[#fbf9f4]/60 leading-[26px]">
                To make every museum visit a deeply personal, intelligent, and unforgettable experience — while giving institutions the tools to understand, engage, and inspire their audiences like never before.
              </p>
            </div>
            <div className="bg-[#fbf9f4]/5 rounded-2xl p-8 md:p-10 border border-[#ffe088]/10">
              <Globe size={28} className="text-[#ffe088] mb-5" />
              <h3 className="font-['Playfair_Display'] text-[24px] text-[#fbf9f4] mb-4">Our Vision</h3>
              <p className="font-['Manrope'] text-[15px] text-[#fbf9f4]/60 leading-[26px]">
                A world where cultural heritage is accessible, alive, and understood by everyone — where technology amplifies the power of storytelling and every artifact can share its story with anyone who asks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">Our Values</span>
          <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] text-[#341701] mt-3 mb-14">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Cultural Respect", desc: "Technology should serve heritage, not overshadow it. We build with deep respect for the stories museums preserve." },
              { icon: Lightbulb, title: "Intelligent Design", desc: "Every feature is thoughtfully crafted to enhance understanding, not distract from the experience." },
              { icon: Globe, title: "Universal Access", desc: "Culture belongs to everyone. We work to make museum experiences accessible regardless of location or ability." },
              { icon: Shield, title: "Institutional Trust", desc: "Museums trust us with their collections and data. We honor that trust with security, transparency, and care." },
            ].map((v) => (
              <div key={v.title} className="bg-[#f5f0e4] rounded-2xl p-7 border border-[#c9a84c]/10 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#341701] flex items-center justify-center mx-auto mb-5">
                  <v.icon size={20} className="text-[#ffe088]" />
                </div>
                <h3 className="font-['Manrope'] text-[16px] text-[#341701] mb-3">{v.title}</h3>
                <p className="font-['Manrope'] text-[13px] text-[#76593a]/60 leading-[22px]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-[#f5f0e4]/50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>
            <div className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(52,23,1,0.1)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwZGl2ZXJzZSUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NzQ4MDY5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="MuseoVerse Team" className="w-full h-[320px] md:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#341701]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display'] text-[28px] md:text-[38px] text-[#fbf9f4] mb-4">Join the Journey</h2>
          <p className="font-['Manrope'] text-[15px] text-[#fbf9f4]/50 mb-10">Whether as a museum partner, a curious visitor, or a like-minded collaborator — we'd love to hear from you.</p>
          <Link to="/contact" className="inline-block font-['Manrope'] text-[14px] px-8 py-4 rounded-full bg-[#ffe088] text-[#341701] hover:bg-[#f5d56e] transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
