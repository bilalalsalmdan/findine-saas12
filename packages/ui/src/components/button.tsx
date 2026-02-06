import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary CTA - Pink/Red (FineDine style)
        primary:
          "bg-primary text-white hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg",
        
        // Secondary - Violet outline
        secondary:
          "border-2 border-violet-600 text-violet-600 bg-transparent hover:bg-violet-50 hover:border-violet-700 hover:text-violet-700",
        
        // Callout button - White with subtle border
        callout:
          "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm",
        
        // Ghost - Transparent
        ghost:
          "hover:bg-gray-100 text-gray-700 hover:text-gray-900",
        
        // Dark - For dark backgrounds
        dark:
          "bg-gray-900 text-white hover:bg-gray-800 border border-gray-700",
        
        // Link style
        link:
          "text-violet-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
        callout: "h-10 px-4 py-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
