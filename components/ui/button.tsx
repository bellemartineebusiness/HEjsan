"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(196,160,106,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0A] disabled:pointer-events-none disabled:opacity-40 cursor-pointer shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#C4A06A] text-[#0B0B0A] font-semibold hover:bg-[#CCA870] active:bg-[#B89060]",
        outline:
          "border border-[rgba(196,160,106,0.3)] bg-[rgba(196,160,106,0.07)] text-[#C4A06A] font-semibold hover:bg-[rgba(196,160,106,0.13)] hover:border-[rgba(196,160,106,0.5)]",
        secondary:
          "border border-[rgba(255,255,255,0.08)] bg-transparent text-[rgba(240,237,232,0.42)] hover:text-[rgba(240,237,232,0.7)] hover:border-[rgba(255,255,255,0.14)]",
        ghost:
          "text-[rgba(240,237,232,0.35)] hover:text-[rgba(240,237,232,0.65)] hover:bg-[rgba(255,255,255,0.04)]",
        destructive:
          "bg-red-500 text-white font-semibold hover:bg-red-600",
        link:
          "text-[#C4A06A] underline-offset-4 hover:underline h-auto p-0 rounded-none",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-lg px-3.5 text-[12px]",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
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
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
