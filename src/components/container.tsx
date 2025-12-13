import * as React from "react"
import { cn } from "@/lib/utils"

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { as?: React.ElementType }
>(({ className, as: Comp = "div", ...props }, ref) => (
  <Comp
    ref={ref}
    className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
    {...props}
  />
))
Container.displayName = "Container"

export { Container }
