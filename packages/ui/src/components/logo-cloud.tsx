import * as React from "react"
import { cn } from "@/lib/utils"

interface Logo {
  name: string
  alt: string
}

const logos: Logo[] = [
  { name: "Godiva", alt: "Godiva Chocolate" },
  { name: "Grand Hyatt", alt: "Grand Hyatt Hotels" },
  { name: "Hilton", alt: "Hilton Hotels & Resorts" },
  { name: "Intercontinental", alt: "Intercontinental Hotels" },
  { name: "Nusr-Et", alt: "Nusr-Et" },
  { name: "Pizza Hut", alt: "Pizza Hut" },
  { name: "Raffles", alt: "Raffles Hotels" },
]

interface LogoCloudProps {
  className?: string
}

const LogoCloud = React.forwardRef<HTMLElement, LogoCloudProps>(
  ({ className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "w-full bg-white py-12",
          className
        )}
      >
        <div className="mx-auto max-w-[80rem] px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-sm font-medium text-gray-600">
            Powered by FineDine
          </p>

          {/* Infinite scroll container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-infinite-scroll gap-12">
              {/* First set */}
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex flex-none items-center justify-center grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100"
                >
                  <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-600">
                      {logo.name}
                    </span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex flex-none items-center justify-center grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100"
                >
                  <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-600">
                      {logo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
)
LogoCloud.displayName = "LogoCloud"

export { LogoCloud }
