"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/marketing/home", label: "الرئيسية" },
    { href: "/marketing/solutions", label: "الحلول" },
    { href: "/marketing/pricing", label: "الأسعار" },
    { href: "/marketing/features", label: "المميزات" },
    { href: "/marketing/blog", label: "المدونة" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/marketing/home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E6034B] to-[#7c3aed] flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className={`font-bold text-xl ${isScrolled ? "text-gray-900" : "text-white"}`}>
              FineDine
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#E6034B] ${
                  isScrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/auth/login" className={`text-sm font-medium ${isScrolled ? "text-gray-700" : "text-white"}`}>
              تسجيل الدخول
            </Link>
            <Link
              href="/auth/register"
              className="bg-[#E6034B] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#c80340] transition-colors"
            >
              ابدأ مجاناً
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-gray-900" : "text-white"}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-[#E6034B]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-3">
                <Link href="/auth/login" className="block py-2 text-gray-700">تسجيل الدخول</Link>
                <Link href="/auth/register" className="block w-full bg-[#E6034B] text-white py-3 rounded-full font-medium text-center">
                  ابدأ مجاناً
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
