import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { BlockReveal, PageTransition, StaggerGroup, StaggerItem } from "./animations";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Product", path: "/product" },
  { label: "For Museums", path: "/for-museums" },
  { label: "For Visitors", path: "/for-visitors" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fbf9f4]/95 backdrop-blur-md shadow-[0_2px_24px_rgba(52,23,1,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-[#341701] flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="#ffe088" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M12 22V12M2 7l10 5 10-5" stroke="#ffe088" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-['Playfair_Display'] text-[#341701] text-[22px] tracking-[-0.5px]">
            MuseoVerse
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-['Manrope'] text-[14px] tracking-[0.2px] transition-colors duration-200 hover:-translate-y-0.5 ${
                location.pathname === item.path
                  ? "text-[#341701]"
                  : "text-[#76593a]/70 hover:text-[#341701]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="font-['Manrope'] text-[13px] tracking-[0.3px] px-5 py-2.5 rounded-full border border-[#c9a84c]/40 text-[#341701] hover:bg-[#341701] hover:text-[#fbf9f4] hover:border-[#341701] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(52,23,1,0.12)] transition-all duration-300"
          >
            Book a Demo
          </Link>
          <Link
            to="/for-visitors"
            className="font-['Manrope'] text-[13px] tracking-[0.3px] px-5 py-2.5 rounded-full bg-[#341701] text-[#ffe088] hover:bg-[#4a2508] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(52,23,1,0.18)] transition-all duration-300"
          >
            Download App
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#341701] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            className="overflow-hidden lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="bg-[#fbf9f4] border-t border-[#c9a84c]/20 px-6 pb-6 pt-4 space-y-1"
              initial={{ y: -12 }}
              animate={{ y: 0 }}
              exit={{ y: -12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, delay: index * 0.04 }}
                >
                  <Link
                    to={item.path}
                    className={`block font-['Manrope'] text-[15px] py-3 px-4 rounded-xl transition-colors ${
                      location.pathname === item.path
                        ? "bg-[#341701]/5 text-[#341701]"
                        : "text-[#76593a] hover:bg-[#341701]/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="flex flex-col gap-3 pt-4"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, delay: 0.2 }}
              >
                <Link
                  to="/contact"
                  className="font-['Manrope'] text-[14px] text-center py-3 rounded-full border border-[#c9a84c]/40 text-[#341701]"
                >
                  Book a Demo
                </Link>
                <Link
                  to="/for-visitors"
                  className="font-['Manrope'] text-[14px] text-center py-3 rounded-full bg-[#341701] text-[#ffe088]"
                >
                  Download App
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#341701] text-[#fbf9f4]/80">
      <BlockReveal className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <StaggerItem className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-full bg-[#ffe088]/20 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="#ffe088" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M12 22V12M2 7l10 5 10-5" stroke="#ffe088" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-['Playfair_Display'] text-[#ffe088] text-[20px]">MuseoVerse</span>
            </div>
            <p className="font-['Manrope'] text-[13px] leading-[22px] text-[#fbf9f4]/50 max-w-[260px]">
              AI-powered discovery for visitors. Measurable cultural impact for museums.
            </p>
          </StaggerItem>

          {/* Product */}
          <StaggerItem>
            <h4 className="font-['Manrope'] text-[11px] tracking-[2px] uppercase text-[#ffe088]/70 mb-5">Product</h4>
            <div className="space-y-3">
              {["AI Artifact Recognition", "Storytelling Engine", "Virtual Tours", "Museum Dashboard", "Social Feed"].map((t) => (
                <Link key={t} to="/product" className="block font-['Manrope'] text-[13px] text-[#fbf9f4]/50 hover:text-[#ffe088] transition-colors">{t}</Link>
              ))}
            </div>
          </StaggerItem>

          {/* Company */}
          <StaggerItem>
            <h4 className="font-['Manrope'] text-[11px] tracking-[2px] uppercase text-[#ffe088]/70 mb-5">Company</h4>
            <div className="space-y-3">
              <Link to="/about" className="block font-['Manrope'] text-[13px] text-[#fbf9f4]/50 hover:text-[#ffe088] transition-colors">About</Link>
              <Link to="/for-museums" className="block font-['Manrope'] text-[13px] text-[#fbf9f4]/50 hover:text-[#ffe088] transition-colors">For Museums</Link>
              <Link to="/for-visitors" className="block font-['Manrope'] text-[13px] text-[#fbf9f4]/50 hover:text-[#ffe088] transition-colors">For Visitors</Link>
              <Link to="/contact" className="block font-['Manrope'] text-[13px] text-[#fbf9f4]/50 hover:text-[#ffe088] transition-colors">Contact</Link>
            </div>
          </StaggerItem>

          {/* Download */}
          <StaggerItem>
            <h4 className="font-['Manrope'] text-[11px] tracking-[2px] uppercase text-[#ffe088]/70 mb-5">Download</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 bg-[#fbf9f4]/5 hover:bg-[#fbf9f4]/10 hover:-translate-y-0.5 rounded-xl px-4 py-3 transition-all group">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="#fbf9f4" opacity="0.6"><path d="M17.05 12.54c-.02-2.47 2.02-3.66 2.11-3.71a4.56 4.56 0 00-3.59-1.94c-1.52-.16-2.98.9-3.76.9s-1.97-.88-3.24-.86a4.78 4.78 0 00-4.03 2.45c-1.72 2.98-.44 7.4 1.24 9.82.82 1.18 1.79 2.52 3.07 2.47 1.23-.05 1.7-.8 3.19-.8s1.91.8 3.21.77c1.33-.02 2.16-1.21 2.97-2.4a10.7 10.7 0 001.34-2.76 4.39 4.39 0 01-2.66-4.04l.15.1zM14.28 4.94a4.48 4.48 0 001.03-3.22A4.56 4.56 0 0012.35 3a4.27 4.27 0 00-1.06 3.06 3.78 3.78 0 002.99-1.12z"/></svg>
                <div>
                  <div className="font-['Manrope'] text-[10px] text-[#fbf9f4]/40">Download on the</div>
                  <div className="font-['Manrope'] text-[13px] text-[#fbf9f4]/80">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-[#fbf9f4]/5 hover:bg-[#fbf9f4]/10 hover:-translate-y-0.5 rounded-xl px-4 py-3 transition-all group">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="#fbf9f4" opacity="0.6"><path d="M1 1.34l8.84 9.13L1 19.66c-.17-.36-.27-.77-.27-1.2V2.54c0-.43.1-.84.27-1.2zm1.15-1.27L12.32 9.4l-2.6 2.69L2.15.07zM12.32 11.6l-2.6-2.69L2.15 20.93l10.17-9.33zM17.9 9.54L14 11.5l-2.98-3.08 2.98-3.08 3.9 1.96c.7.35.7.93 0 1.28v-.04z"/></svg>
                <div>
                  <div className="font-['Manrope'] text-[10px] text-[#fbf9f4]/40">Get it on</div>
                  <div className="font-['Manrope'] text-[13px] text-[#fbf9f4]/80">Google Play</div>
                </div>
              </a>
            </div>
          </StaggerItem>
        </StaggerGroup>

        <div className="border-t border-[#fbf9f4]/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Manrope'] text-[12px] text-[#fbf9f4]/30">
            &copy; 2026 MuseoVerse. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((t) => (
              <a key={t} href="#" className="font-['Manrope'] text-[12px] text-[#fbf9f4]/30 hover:text-[#ffe088]/60 transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </BlockReveal>
    </footer>
  );
}

export function Layout() {
  const location = useLocation();

  return (
    <div className="bg-[#fbf9f4] min-h-screen font-['Manrope']">
      <Navbar />
      <main className="overflow-hidden">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
