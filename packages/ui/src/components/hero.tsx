import * as React from "react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

interface HeroProps {
  className?: string
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-white via-violet-50 to-white pt-20",
          className
        )}
      >
        {/* Background decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-blob absolute left-[20%] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-200/30 blur-[100px]" />
          <div className="animate-blob animation-delay-2000 absolute right-[10%] top-[30%] h-[400px] w-[400px] rounded-full bg-fdpurple-200/20 blur-[100px]" />
          <div className="animate-blob animation-delay-4000 absolute bottom-[10%] left-[60%] h-[350px] w-[350px] rounded-full bg-pink-200/20 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[50rem] px-4 text-center sm:px-6 lg:px-8">
          {/* Callout badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
            🚀 All-in-one Customer Engagement
          </div>

          {/* Main headline */}
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            #1 AI Tool to{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fdpurple-600 bg-clip-text text-transparent">
              Attract More
            </span>{" "}
            Restaurant Customers
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">
            FineDine helps you impress more customers and increase revenue with 
            AI-powered Online QR Menus, Restaurant Websites and Enhanced Visuals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Start Your Free Trial
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Book a Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16">
            <p className="mb-4 text-sm font-medium text-gray-600">
              Powered by FineDine
            </p>
            {/* Logo cloud would go here */}
          </div>
        </div>
      </section>
    )
  }
)
Hero.displayName = "Hero"

export { Hero }
