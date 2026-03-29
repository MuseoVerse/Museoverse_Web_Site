import { useState } from "react";
import { Link } from "react-router";
import { Mail, MapPin, Phone, Send, ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
  { q: "How long does museum onboarding take?", a: "Typically 4-6 weeks depending on collection size. Our team handles most of the setup." },
  { q: "Is there a cost for visitors?", a: "The core app experience is free for visitors. Premium virtual tours and advanced features may have optional pricing." },
  { q: "What data do museums receive?", a: "Aggregated engagement metrics, exhibit performance data, storytelling usage stats, and social feed analytics. No personal visitor data is shared." },
  { q: "Do you support multiple languages?", a: "Yes. MuseoVerse's AI storytelling supports 30+ languages with natural-sounding narration." },
];

export function ContactPage() {
  const [formType, setFormType] = useState("demo");
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="pt-[72px] pb-12 bg-gradient-to-b from-[#f5f0e4] to-[#fbf9f4]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 md:pt-24 text-center">
          <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">Contact</span>
          <h1 className="font-['Playfair_Display'] text-[34px] md:text-[48px] text-[#341701] mt-3 mb-4 leading-[1.1]">
            Let's Start a Conversation
          </h1>
          <p className="font-['Manrope'] text-[16px] text-[#76593a]/70 max-w-[500px] mx-auto">
            Whether you represent a museum or you're a curious visitor, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#c9a84c]/10 shadow-[0_8px_32px_rgba(52,23,1,0.04)]">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mx-auto mb-5">
                      <Send size={28} className="text-[#c9a84c]" />
                    </div>
                    <h3 className="font-['Playfair_Display'] text-[24px] text-[#341701] mb-3">Message Sent</h3>
                    <p className="font-['Manrope'] text-[14px] text-[#76593a]/60">Thank you for reaching out. Our team will get back to you shortly.</p>
                  </div>
                ) : (
                  <>
                    {/* Type Selection */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {[
                        { id: "demo", label: "Book a Demo" },
                        { id: "museum", label: "Museum Partnership" },
                        { id: "visitor", label: "Visitor Inquiry" },
                        { id: "general", label: "General Question" },
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setFormType(t.id)}
                          className={`font-['Manrope'] text-[13px] px-4 py-2 rounded-full border transition-all duration-200 ${
                            formType === t.id
                              ? "bg-[#341701] text-[#ffe088] border-[#341701]"
                              : "border-[#c9a84c]/20 text-[#76593a] hover:border-[#c9a84c]/40"
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-['Manrope'] text-[13px] text-[#76593a] mb-1.5 block">First Name</label>
                          <input className="w-full font-['Manrope'] text-[14px] bg-[#f5f0e4]/50 border border-[#c9a84c]/15 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c9a84c]/40 transition-colors" placeholder="Your first name" />
                        </div>
                        <div>
                          <label className="font-['Manrope'] text-[13px] text-[#76593a] mb-1.5 block">Last Name</label>
                          <input className="w-full font-['Manrope'] text-[14px] bg-[#f5f0e4]/50 border border-[#c9a84c]/15 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c9a84c]/40 transition-colors" placeholder="Your last name" />
                        </div>
                      </div>
                      <div>
                        <label className="font-['Manrope'] text-[13px] text-[#76593a] mb-1.5 block">Email</label>
                        <input type="email" className="w-full font-['Manrope'] text-[14px] bg-[#f5f0e4]/50 border border-[#c9a84c]/15 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c9a84c]/40 transition-colors" placeholder="your@email.com" />
                      </div>
                      {(formType === "demo" || formType === "museum") && (
                        <div>
                          <label className="font-['Manrope'] text-[13px] text-[#76593a] mb-1.5 block">Organization</label>
                          <input className="w-full font-['Manrope'] text-[14px] bg-[#f5f0e4]/50 border border-[#c9a84c]/15 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c9a84c]/40 transition-colors" placeholder="Museum or institution name" />
                        </div>
                      )}
                      <div>
                        <label className="font-['Manrope'] text-[13px] text-[#76593a] mb-1.5 block">Message</label>
                        <textarea rows={4} className="w-full font-['Manrope'] text-[14px] bg-[#f5f0e4]/50 border border-[#c9a84c]/15 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c9a84c]/40 transition-colors resize-none" placeholder="Tell us about your interest in MuseoVerse..." />
                      </div>
                      <button
                        onClick={() => setSubmitted(true)}
                        className="w-full font-['Manrope'] text-[14px] bg-[#341701] text-[#ffe088] rounded-xl py-3.5 hover:bg-[#4a2508] transition-colors"
                      >
                        {formType === "demo" ? "Request Demo" : "Send Message"}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Side Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#f5f0e4] rounded-2xl p-7 border border-[#c9a84c]/10">
                <h3 className="font-['Manrope'] text-[16px] text-[#341701] mb-5">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-[#c9a84c] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-['Manrope'] text-[13px] text-[#76593a]/50">Email</div>
                      <div className="font-['Manrope'] text-[14px] text-[#341701]">hello@museoverse.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-[#c9a84c] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-['Manrope'] text-[13px] text-[#76593a]/50">Phone</div>
                      <div className="font-['Manrope'] text-[14px] text-[#341701]">+1 (555) 012-3456</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#c9a84c] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-['Manrope'] text-[13px] text-[#76593a]/50">Location</div>
                      <div className="font-['Manrope'] text-[14px] text-[#341701]">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="bg-white rounded-2xl p-7 border border-[#c9a84c]/10">
                <h3 className="font-['Manrope'] text-[16px] text-[#341701] mb-4">Quick Answers</h3>
                <div className="space-y-0">
                  {FAQS.map((f, i) => (
                    <div key={i} className="border-b border-[#c9a84c]/10 last:border-0">
                      <button
                        className="w-full flex items-center justify-between py-3.5 text-left"
                        onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      >
                        <span className="font-['Manrope'] text-[13px] text-[#341701] pr-4">{f.q}</span>
                        {faqOpen === i ? <ChevronUp size={14} className="text-[#c9a84c] shrink-0" /> : <ChevronDown size={14} className="text-[#76593a]/30 shrink-0" />}
                      </button>
                      {faqOpen === i && (
                        <p className="font-['Manrope'] text-[12px] text-[#76593a]/60 leading-[20px] pb-3.5">{f.a}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
