import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What is FineDine?",
    answer: "FineDine is the #1 AI Growth Platform for Restaurants. It helps restaurants attract more customers by automatically improving their menu, website, and marketing with AI, all in one place.",
  },
  {
    question: "Who is FineDine for?",
    answer: "FineDine is built for: Independent restaurants, Cafés & bistros, Multi-location restaurant groups, Hotels & food halls. If your restaurant wants more customers without hiring agencies, FineDine is for you.",
  },
  {
    question: "How does the AI Menu Builder work?",
    answer: "You upload your menu or edit your items inside FineDine. Our AI automatically: Improves dish names and descriptions, Generates or enhances dish photos, Suggests changes that increase item conversion. You can apply changes instantly or preview them first.",
  },
  {
    question: "Will the AI-generated photos look like real food?",
    answer: "Yes. FineDine's AI Food Photography engine is trained specifically on culinary arts. It generates appetizing, realistic, and high-resolution images that match your dish descriptions, maintaining a consistent and professional visual style across your menu.",
  },
  {
    question: "Does FineDine create a website for my restaurant?",
    answer: "Yes. FineDine automatically generates a branded, SEO-friendly restaurant website based on your menu and brand. Your website updates automatically whenever your menu changes — no manual work required.",
  },
  {
    question: "How long does it take to set up?",
    answer: "It takes just a few minutes. You simply upload your existing menu file (PDF or photo), and FineDine's AI automatically detects items, writes descriptions, generates photos, and builds your website instantly. No technical skills or coding are required.",
  },
]

interface FAQSectionProps {
  className?: string
}

const FAQSection = React.forwardRef<HTMLElement, FAQSectionProps>(
  ({ className }, ref) => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0)

    return (
      <section
        ref={ref}
        className={cn(
          "w-full bg-white py-20 lg:py-24",
          className
        )}
      >
        <div className="mx-auto max-w-[50rem] px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 lg:text-5xl">
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-gray-500 transition-transform duration-200",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    openIndex === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
)
FAQSection.displayName = "FAQSection"

export { FAQSection }
