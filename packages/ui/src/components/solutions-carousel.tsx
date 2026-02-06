import * as React from "react"
import { cn } from "@/lib/utils"

interface Solution {
  title: string
  description: string
  href: string
  image?: string
}

const solutions: Solution[] = [
  {
    title: "Hotels",
    description: "Enhance your Hotel's Guest Experience with Digital Restaurant Menus",
    href: "/use-cases/hotels",
  },
  {
    title: "Cafe & Bakery",
    description: "Solutions for Cafe & Bakery",
    href: "/use-cases/cafe-and-bakery",
  },
  {
    title: "Bars & Night Clubs",
    description: "An Improved Order and Service Experience",
    href: "/use-cases/bars-and-nightclubs",
  },
  {
    title: "Ghost Kitchens",
    description: "Create New Business Opportunities",
    href: "/use-cases/ghost-kitchens",
  },
  {
    title: "Fine Dining",
    description: "Provide A+ Quality Experience to Your Guests",
    href: "/use-cases/fine-dining",
  },
]

interface SolutionsCarouselProps {
  className?: string
}

const SolutionsCarousel = React.forwardRef<HTMLElement, SolutionsCarouselProps>(
  ({ className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "w-full bg-white py-20 lg:py-24",
          className
        )}
      >
        <div className="mx-auto max-w-[80rem] px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
              Designed for Every Type of Business
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Solutions tailored to your specific restaurant needs
            </p>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
              {solutions.map((solution, index) => (
                <a
                  key={index}
                  href={solution.href}
                  className="group relative flex h-[26rem] w-[15rem] flex-none flex-col items-start justify-start overflow-hidden rounded-[1.25rem] border-4 border-white bg-white shadow-md transition-all duration-300 hover:cursor-pointer hover:bg-fdpurple-700 md:h-[28.75rem] md:w-[21rem] lg:w-[24rem]"
                >
                  {/* Image placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                  <div className="absolute inset-0 bg-gray-200 group-hover:opacity-70 transition-opacity" />
                  
                  {/* Content overlay */}
                  <div className="relative z-10 flex flex-col gap-2 px-4 pt-8 md:px-6">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg md:text-3xl md:font-extrabold">
                      {solution.title}
                    </h3>
                    <p className="text-base font-semibold text-white drop-shadow-md md:text-lg">
                      {solution.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
)
SolutionsCarousel.displayName = "SolutionsCarousel"

export { SolutionsCarousel }
