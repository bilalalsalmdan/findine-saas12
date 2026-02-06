import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "./button"

interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

const footerColumns: FooterColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "Dine-in QR Menu", href: "/solutions/dine-in-qr-menu" },
      { label: "FineDine POS Lite", href: "/solutions/pos-lite" },
      { label: "Reservations", href: "/solutions/reservations" },
      { label: "Tablet Menu", href: "/solutions/tablet-menu" },
      { label: "Delivery & Pickup", href: "/solutions/delivery" },
      { label: "Fast Checkout", href: "/solutions/checkout" },
      { label: "Order & Pay", href: "/solutions/order-pay" },
      { label: "CRM & Loyalty", href: "/solutions/crm" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Allergens & Nutrition", href: "/features/allergens" },
      { label: "Multiple Languages", href: "/features/languages" },
      { label: "Multiple Currencies", href: "/features/currencies" },
      { label: "Custom Design", href: "/features/design" },
      { label: "Tip Collection", href: "/features/tips" },
      { label: "Table Management", href: "/features/tables" },
      { label: "Feedback Collection", href: "/features/feedback" },
      { label: "Menu Management", href: "/features/menu" },
      { label: "Campaigns", href: "/features/campaigns" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Hotels", href: "/use-cases/hotels" },
      { label: "Café & Bakery", href: "/use-cases/cafe" },
      { label: "Coffee Shops", href: "/use-cases/coffee" },
      { label: "Bars & Nightclubs", href: "/use-cases/bars" },
      { label: "Enterprises", href: "/use-cases/enterprises" },
      { label: "Fine Dining", href: "/use-cases/fine-dining" },
      { label: "Casual Dining", href: "/use-cases/casual" },
      { label: "Ghost Kitchens", href: "/use-cases/ghost-kitchens" },
      { label: "Food Trucks", href: "/use-cases/food-trucks" },
    ],
  },
  {
    title: "Earn More",
    links: [
      { label: "Become an Affiliate", href: "/affiliate" },
      { label: "Become a Reseller", href: "/partner" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "info@finedinemenu.com", href: "mailto:info@finedinemenu.com" },
    ],
  },
]

interface FooterProps {
  className?: string
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "w-full bg-gray-900 pt-16 pb-8",
          className
        )}
      >
        <div className="mx-auto max-w-[80rem] px-4 sm:px-6 lg:px-8">
          {/* Main footer content */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {footerColumns.map((column, index) => (
              <div key={index}>
                <h3 className="mb-4 text-sm font-semibold text-white">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gray-800" />

          {/* Bottom section */}
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-white">
              FineDine
            </Link>

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} FineDine. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
)
Footer.displayName = "Footer"

export { Footer }
