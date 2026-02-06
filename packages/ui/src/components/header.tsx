import * as React from "react"
import Link from "next/link"
import { Button } from "./button"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

const NavLink = ({ href, children, className }: NavLinkProps) => (
  <Link
    href={href}
    className={cn(
      "text-base font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900",
      className
    )}
  >
    {children}
  </Link>
)

interface HeaderProps {
  className?: string
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-20 w-full transition-all duration-300",
          className
        )}
      >
        <div className="mx-auto flex h-full max-w-[80rem] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
              FineDine
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink href="/solutions">Solutions</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <Button variant="callout" size="callout">
              🚀 All-in-one Customer Engagement
            </Button>
            <Button>Start Free Trial</Button>
          </div>
        </div>
      </header>
    )
  }
)
Header.displayName = "Header"

export { Header, NavLink }
