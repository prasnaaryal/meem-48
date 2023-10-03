import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        white: "bg-white text-indigo hover:bg-white/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-lightBlue hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        blue: "bg-indigo text-white hover:bg-indigo/80 ",
        clean:
          "bg-transparent text-violet justify-start p-0  underline-on-hover",
        link: "bg-transparent justify-start p-0  underline-on-hover",
        service: "bg-white font-semibold text-head hover:bg-white/50",
        serviceLarge:
          "bg-lightBlue hover:bg-lightBlue/70 border-r-3 border-indigo",
        royalBlue: "bg-blue text-white hover:bg-blue/70",
      },
      size: {
        default: "h-7 w-44 rounded-none px-5 py-7",
        sm: "h-9 px-3 rounded-md",
        md: "h-20 w-48 rounded-none px-5 py-7",
        lg: "w-52 h-20 rounded-none",
        xl: "w-96 h-20 rounded-none font-semibold text-xl justify-start gap-3 ",
        xxl: "w-[350px] xl:w-[463px] h-64 rounded-none font-semibold text-xl justify-start gap-3 ",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
