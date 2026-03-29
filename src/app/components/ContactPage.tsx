import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Mail, MapPin, Phone, Send, ChevronDown, Presentation, Building2, Users, CircleHelp } from "lucide-react";
import { BlockReveal, SectionReveal, StaggerGroup, StaggerItem } from "./animations";

const FAQS = [
  { q: "How long does museum onboarding take?", a: "Typically 4-6 weeks depending on collection size. Our team handles most of the setup." },
  { q: "Is there a cost for visitors?", a: "The core app experience is free for visitors. Premium virtual tours and advanced features may have optional pricing." },
  { q: "What data do museums receive?", a: "Aggregated engagement metrics, exhibit performance data, storytelling usage stats, and social feed analytics. No personal visitor data is shared." },
  { q: "Do you support multiple languages?", a: "Yes. MuseoVerse's AI storytelling supports 30+ languages with natural-sounding narration." },
];

const INITIAL_FORM_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
  message: "",
};

type FormField = keyof typeof INITIAL_FORM_DATA;

export function ContactPage() {
  const [formType, setFormType] = useState("demo");
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Partial<Record<FormField, string>>>({});
  const contactTypes = [
    { id: "demo", label: "Book a Demo", icon: Presentation },
    { id: "museum", label: "Museum Partnership", icon: Building2 },
    { id: "visitor", label: "Visitor Inquiry", icon: Users },
    { id: "general", label: "General Question", icon: CircleHelp },
  ] as const;

  useEffect(() => {
    if (!submitted) return;

    const resetTimer = window.setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    return () => window.clearTimeout(resetTimer);
  }, [submitted]);

  useEffect(() => {
    if (formType === "demo" || formType === "museum") return;
    setErrors((current) => {
      if (!current.organization) return current;
      const { organization, ...rest } = current;
      return rest;
    });
  }, [formType]);

  function getFieldError(field: FormField, value: string) {
    const trimmedValue = value.trim();

    if (field === "lastName") return "";
    if (field === "organization" && !(formType === "demo" || formType === "museum")) return "";
    if (!trimmedValue) return "This field is required.";
    if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
      return "Please enter a valid email address.";
    }

    return "";
  }

  function validateForm() {
    const nextErrors: Partial<Record<FormField, string>> = {};

    (Object.keys(INITIAL_FORM_DATA) as FormField[]).forEach((field) => {
      const error = getFieldError(field, formData[field]);
      if (error) nextErrors[field] = error;
    });

    return nextErrors;
  }

  function handleFieldChange(field: FormField, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const nextError = getFieldError(field, value);
      return { ...current, [field]: nextError || undefined };
    });
  }

  function handleSubmit() {
    const nextErrors = validateForm();
    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setFormData(INITIAL_FORM_DATA);
  }

  function getInputClassName(field: FormField) {
    return `w-full font-['Manrope'] text-[14px] border rounded-xl px-4 py-3 focus:outline-none transition-colors ${
      errors[field]
        ? "bg-[#fff5f5] border-[#d35757]/45 text-[#7a1d1d] placeholder:text-[#c88f8f] focus:border-[#d35757]"
        : "bg-[#f5f0e4]/50 border-[#c9a84c]/15 text-[#341701] focus:border-[#c9a84c]/40"
    }`;
  }

  return (
    <div>
      {/* Hero */}
      <SectionReveal className="pt-[72px] pb-12 bg-gradient-to-b from-[#f5f0e4] to-[#fbf9f4]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 md:pt-24 text-center">
          <span className="font-['Manrope'] text-[11px] tracking-[2.5px] uppercase text-[#c9a84c]">Contact</span>
          <h1 className="font-['Playfair_Display'] text-[34px] md:text-[48px] text-[#341701] mt-3 mb-4 leading-[1.1]">
            Let's Start a Conversation
          </h1>
          <p className="font-['Manrope'] text-[16px] text-[#76593a]/70 max-w-[500px] mx-auto">
            Whether you represent a museum or you're a curious visitor, we'd love to hear from you.
          </p>
        </div>
      </SectionReveal>

      {/* Form + Info */}
      <SectionReveal className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <BlockReveal className="lg:col-span-3">
              <div className="flex min-h-[680px] flex-col bg-white rounded-2xl p-8 md:min-h-[640px] md:p-10 border border-[#c9a84c]/10 shadow-[0_8px_32px_rgba(52,23,1,0.04)] hover:shadow-[0_14px_36px_rgba(52,23,1,0.06)] transition-shadow duration-300">
                <AnimatePresence mode="wait" initial={false}>
                  {submitted ? (
                    <motion.div
                      key="contact-success"
                      initial={{ opacity: 0, y: 16, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.98 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-1 flex-col items-center justify-center text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mx-auto mb-5">
                        <Send size={28} className="text-[#c9a84c]" />
                      </div>
                      <h3 className="font-['Playfair_Display'] text-[24px] text-[#341701] mb-3">Message Sent</h3>
                      <p className="font-['Manrope'] text-[14px] text-[#76593a]/60">Thank you for reaching out. Our team will get back to you shortly.</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="contact-form"
                      initial={{ opacity: 0, y: 16, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.98 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-1 flex-col"
                    >
                    {/* Type Selection */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {contactTypes.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setFormType(t.id)}
                          className={`font-['Manrope'] text-[12px] px-3.5 py-1.5 rounded-full border transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5 ${
                            formType === t.id
                              ? "bg-[#341701] text-[#ffe088] border-[#341701]"
                              : "border-[#c9a84c]/20 text-[#76593a] hover:border-[#c9a84c]/40"
                          }`}
                        >
                          <t.icon size={15} strokeWidth={2} />
                          {t.label}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-['Manrope'] text-[13px] text-[#76593a] mb-1.5 block">
                            First Name <span className="text-[#d35757]">*</span>
                          </label>
                          <input
                            value={formData.firstName}
                            onChange={(event) => handleFieldChange("firstName", event.target.value)}
                            className={getInputClassName("firstName")}
                            placeholder="Your first name"
                          />
                          {errors.firstName && <p className="mt-2 font-['Manrope'] text-[12px] text-[#d35757]">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="font-['Manrope'] text-[13px] text-[#76593a] mb-1.5 block">Last Name</label>
                          <input
                            value={formData.lastName}
                            onChange={(event) => handleFieldChange("lastName", event.target.value)}
                            className={getInputClassName("lastName")}
                            placeholder="Your last name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="font-['Manrope'] text-[13px] text-[#76593a] mb-1.5 block">
                          Email <span className="text-[#d35757]">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(event) => handleFieldChange("email", event.target.value)}
                          className={getInputClassName("email")}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="mt-2 font-['Manrope'] text-[12px] text-[#d35757]">{errors.email}</p>}
                      </div>
                      {(formType === "demo" || formType === "museum") && (
                        <div>
                          <label className="font-['Manrope'] text-[13px] text-[#76593a] mb-1.5 block">
                            Organization <span className="text-[#d35757]">*</span>
                          </label>
                          <input
                            value={formData.organization}
                            onChange={(event) => handleFieldChange("organization", event.target.value)}
                            className={getInputClassName("organization")}
                            placeholder="Museum or institution name"
                          />
                          {errors.organization && <p className="mt-2 font-['Manrope'] text-[12px] text-[#d35757]">{errors.organization}</p>}
                        </div>
                      )}
                      <div>
                        <label className="font-['Manrope'] text-[13px] text-[#76593a] mb-1.5 block">
                          Message <span className="text-[#d35757]">*</span>
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(event) => handleFieldChange("message", event.target.value)}
                          className={`${getInputClassName("message")} resize-none`}
                          placeholder="Tell us about your interest in MuseoVerse..."
                        />
                        {errors.message && <p className="mt-2 font-['Manrope'] text-[12px] text-[#d35757]">{errors.message}</p>}
                      </div>
                      <button
                        onClick={handleSubmit}
                        className="w-full font-['Manrope'] text-[14px] bg-[#341701] text-[#ffe088] rounded-xl py-3.5 hover:bg-[#4a2508] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(52,23,1,0.14)] transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                      >
                        <Send size={16} strokeWidth={2} />
                        {formType === "demo" ? "Request Demo" : "Send Message"}
                      </button>
                    </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </BlockReveal>

            {/* Side Info */}
            <StaggerGroup className="lg:col-span-2 flex flex-col gap-6 lg:h-full" delayChildren={0.08} staggerChildren={0.12}>
              <StaggerItem>
                <div className="bg-[#f5f0e4]/50 rounded-2xl p-7 border border-[#c9a84c]/10 hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-['Manrope'] text-[16px] text-[#341701] mb-5">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/50">
                      <Mail size={18} className="text-[#c9a84c]" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="font-['Manrope'] text-[13px] text-[#76593a]/50">Email</div>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=mahmoud21%40itu.edu.tr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Manrope'] text-[14px] text-[#341701] hover:text-[#c9a84c] transition-colors"
                      >
                        mahmoud21@itu.edu.tr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/50">
                      <Phone size={18} className="text-[#c9a84c]" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="font-['Manrope'] text-[13px] text-[#76593a]/50">Phone</div>
                      <div className="font-['Manrope'] text-[14px] text-[#341701]">+90 552 872 13 69</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/50">
                      <MapPin size={18} className="text-[#c9a84c]" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="font-['Manrope'] text-[13px] text-[#76593a]/50">Location</div>
                      <div className="font-['Manrope'] text-[14px] text-[#341701]">Istanbul, Türkiye</div>
                    </div>
                  </div>
                </div>
                </div>
              </StaggerItem>

              {/* Quick FAQ */}
              <StaggerItem className="lg:flex-1">
                <div className="h-full bg-white rounded-2xl p-7 border border-[#c9a84c]/10 hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-['Manrope'] text-[16px] text-[#341701] mb-4">Quick Answers</h3>
                <div className="space-y-0">
                  {FAQS.map((f, i) => (
                    <div key={i} className="border-b border-[#c9a84c]/10 last:border-0">
                      <button
                        className="w-full flex items-center justify-between py-3.5 text-left cursor-pointer"
                        onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      >
                        <span className="font-['Manrope'] text-[13px] text-[#341701] pr-4">{f.q}</span>
                        <motion.span
                          animate={{ rotate: faqOpen === i ? 180 : 0 }}
                          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                          className="shrink-0"
                        >
                          <ChevronDown size={14} className={faqOpen === i ? "text-[#c9a84c]" : "text-[#76593a]/30"} />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {faqOpen === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="font-['Manrope'] text-[12px] text-[#76593a]/60 leading-[20px] pb-3.5">{f.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
