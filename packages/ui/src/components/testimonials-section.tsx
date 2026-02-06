import * as React from "react"
import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  videoUrl?: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Since we started using FineDine, our sales and tips have increased by 20–30%. On some days, I honestly can't understand how I managed without FineDine.",
    author: "Chris Gia",
    role: "Manager",
    company: "Cafe Sanuki",
  },
  {
    quote: "FineDine boosted our café's sales and helped us introduce our breakfast menu. We update our menu from time to time using FineDine, and it's incredibly easy!",
    author: "Jay Carlo Rivera",
    role: "Marketing Director",
    company: "Godiva Chocolate",
  },
  {
    quote: "FineDine gave us the freedom to make changes to our menus whenever we want! Our staff loves FineDine, it's very easy to use and incredibly convenient for everyone.",
    author: "Matias Ess",
    role: "Operations Manager",
    company: "Sofitel Hotel & Resorts",
  },
]

interface TestimonialsSectionProps {
  className?: string
}

const TestimonialsSection = React.forwardRef<HTMLElement, TestimonialsSectionProps>(
  ({ className }, ref) => {
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
      <section
        ref={ref}
        className={cn(
          "w-full bg-gradient-to-b from-gray-50 to-white py-20 lg:py-24",
          className
        )}
      >
        <div className="mx-auto max-w-[80rem] px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 lg:text-5xl">
            Discover the FineDine Difference
          </h2>
          <p className="mb-12 text-center text-lg text-gray-700">
            Stories from Our Partners
          </p>

          {/* Main testimonial with video */}
          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            {/* Video placeholder */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
                  <svg className="h-6 w-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-sm text-white">
                Watch testimonial
              </div>
            </div>

            {/* Quote */}
            <div className="flex flex-col justify-center">
              <Quote className="mb-4 h-10 w-10 text-violet-200" />
              <blockquote className="mb-6 text-xl leading-relaxed text-gray-800 lg:text-2xl">
                "{testimonials[0].quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">{testimonials[0].author}</p>
                <p className="text-gray-600">{testimonials[0].role}</p>
                <p className="text-gray-500">{testimonials[0].company}</p>
              </div>
            </div>
          </div>

          {/* Slider testimonials */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex min-w-[300px] flex-col rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl md:min-w-[400px]"
                >
                  <Quote className="mb-4 h-8 w-8 text-violet-100" />
                  <p className="mb-4 flex-1 text-gray-700">
                    "{testimonial.quote.substring(0, 120)}..."
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
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
TestimonialsSection.displayName = "TestimonialsSection"

export { TestimonialsSection }
