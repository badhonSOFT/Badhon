import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 apple-button",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-medium hover:shadow-large",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-medium hover:shadow-large",
        outline:
          "border-2 border-border bg-background/80 backdrop-blur-xl hover:bg-accent hover:text-accent-foreground shadow-soft hover:shadow-medium",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-soft hover:shadow-medium",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "hero-gradient text-white hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 font-semibold shadow-large backdrop-blur-xl",
        "hero-outline": "glass-card border-2 border-primary/20 bg-background/10 text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 font-semibold shadow-large backdrop-blur-xl",
        cta: "bg-portfolio-accent text-portfolio-accent-foreground hover:bg-portfolio-accent/90 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-semibold shadow-large",
        glass: "glass-card text-foreground hover:bg-background/20 shadow-medium hover:shadow-large backdrop-blur-xl",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-xl px-4",
        lg: "h-14 rounded-2xl px-8 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
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
