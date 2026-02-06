import * as React from "react"
import { Card, CardTitle, CardDescription } from "./card"
import { cn } from "@/lib/utils"

interface Feature {
  title: string
  description: string
  image?: string
}

interface FeatureGridProps {
  className?: string
}

const features: Feature[] = [
  {
    title: "Menu Customization",
    description: "Tailor your menu's look and feel to perfectly match your restaurant's brand and ambiance.",
  },
  {
    title: "Smart Recommendations",
    description: "Leverage AI-driven suggestions to upsell and cross-sell, enhancing customer orders and boosting revenue.",
  },
  {
    title: "Customer Feedback",
    description: "Gather valuable insights directly from your guests to continuously enhance their dining experience.",
  },
  {
    title: "Data Collection",
    description: "Harness the power of data to understand customer preferences and optimize your offerings.",
  },
  {
    title: "Multiple Language & Currencies",
    description: "Cater to a global clientele with diverse language options and multi-currency payment support.",
  },
  {
    title: "Reservation Management",
    description: "Streamline table bookings with an intuitive system that maximizes seating and minimizes wait times.",
  },
]

const FeatureGrid = React.forwardRef<HTMLElement, FeatureGridProps>(
  ({ className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full bg-gray-900 py-20 lg:py-24",
          className
        )}
      >
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-radial-center" />

        <div className="relative z-10 mx-auto max-w-[77rem] px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <h2 className="mb-12 max-w-[50rem] text-center text-4xl font-bold text-white lg:text-5xl">
            Next-Gen Features to Elevate Your Restaurant
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col gap-8 rounded-[1.25rem] border-4 border-gray-800 bg-gray-900 p-6 shadow-lg transition-all duration-500 hover:scale-105",
                  index === 1 || index === 5 ? "lg:col-span-2" : "" // Smart Recommendations & Reservation span 2 cols
                )}
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-extrabold text-gray-50 lg:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-300 lg:text-lg">
                    {feature.description}
                  </p>
                </div>
                
                {/* Image placeholder - would be actual image */}
                <div className="relative h-[13rem] w-full overflow-hidden rounded-b-2xl lg:h-[16.25rem]">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-900/50 to-gray-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
)
FeatureGrid.displayName = "FeatureGrid"

export { FeatureGrid }
