import * as React from "react"
import { Button } from "./button"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface PricingTier {
  name: string
  price: string
  priceUsd: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

const tiers: PricingTier[] = [
  {
    name: "Base",
    price: "$59",
    priceUsd: "$59",
    description: "Small restaurants",
    features: [
      "QR Menu",
      "Basic Analytics",
      "Email Support",
      "Up to 50 dishes",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Premium",
    price: "$189",
    priceUsd: "$189",
    description: "Growing restaurants",
    features: [
      "Everything in Base",
      "AI Image Generation",
      "Advanced Analytics",
      "Priority Support",
      "Up to 200 dishes",
      "Multi-language",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceUsd: "Custom",
    description: "Large chains",
    features: [
      "Everything in Premium",
      "Dedicated Support",
      "Custom Integrations",
      "SLA Guarantee",
      "Unlimited dishes",
      "White-label",
    ],
    cta: "Contact Sales",
  },
]

interface PricingSectionProps {
  className?: string
}

const PricingSection = React.forwardRef<HTMLElement, PricingSectionProps>(
  ({ className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "w-full bg-gray-50 py-20 lg:py-24",
          className
        )}
      >
        <div className="mx-auto max-w-[80rem] px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Choose the plan that fits your restaurant
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col rounded-[1.25rem] p-8 lg:p-12",
                  tier.popular
                    ? "border-4 border-violet-600 bg-white shadow-xl"
                    : "border border-gray-200 bg-white shadow-lg"
                )}
              >
                {/* Header */}
                <div className="mb-6">
                  {tier.popular && (
                    <span className="mb-2 inline-block rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                  <p className="text-sm text-gray-600">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-gray-900">{tier.price}</span>
                  {tier.price !== "Custom" && (
                    <span className="text-gray-600">/month</span>
                  )}
                </div>

                {/* Features */}
                <ul className="mb-8 flex-1 space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-violet-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={tier.popular ? "primary" : "secondary"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* Enterprise note */}
          <p className="mt-8 text-center text-sm text-gray-600">
            All plans include SSL security, automatic updates, and 99.9% uptime guarantee.
          </p>
        </div>
      </section>
    )
  }
)
PricingSection.displayName = "PricingSection"

export { PricingSection }
