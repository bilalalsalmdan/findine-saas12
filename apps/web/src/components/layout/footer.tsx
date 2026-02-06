import Link from "next/link";

export function Footer() {
  const footerLinks = {
    product: [
      { label: "المميزات", href: "/marketing/features" },
      { label: "الأسعار", href: "/marketing/pricing" },
      { label: "الحلول", href: "/marketing/solutions" },
      { label: "المدونة", href: "/marketing/blog" },
    ],
    company: [
      { label: "من نحن", href: "/marketing/about" },
      { label: "التوظيف", href: "/marketing/careers" },
      { label: "اتصل بنا", href: "/marketing/contact" },
      { label: "الشركاء", href: "/marketing/partners" },
    ],
    resources: [
      { label: "مركز المساعدة", href: "/marketing/help" },
      { label: "الوثائق", href: "/marketing/docs" },
      { label: "API", href: "/marketing/api" },
      { label: "الحالة", href: "/marketing/status" },
    ],
    legal: [
      { label: "الخصوصية", href: "/marketing/privacy" },
      { label: "الشروط", href: "/marketing/terms" },
      { label: "الكوكيز", href: "/marketing/cookies" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/marketing/home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E6034B] to-[#7c3aed] flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="font-bold text-xl">FineDine</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              منصة إدارة المطاعم المتكاملة مع قوائم رقمية، طلبات، وتحليلات مدعومة بالذكاء الاصطناعي.
            </p>
            <div className="flex gap-4">
              {["twitter", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">المنتج</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">الشركة</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">الموارد</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 FineDine. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
