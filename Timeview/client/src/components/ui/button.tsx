import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    //rounded-full select-none  px-4 text-2xl bg-white text-chasBlue border-2 border-chasBlue
    // hover:bg-chasBlue hover:text-white
    //  focus-visible:outline-none
    // data-[state=open]:bg-chasBlue data-[state=open]:text-white
    variants: {
      variant: {
        default: 'bg-chasBlue text-white hover:bg-chasBlueHover min-w-[111px] min-h-[41px] uppercase',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 border border-negative hover:bg-negative hover:text-white min-h-[41px] uppercase',
        outline:
          'border-chasBlue hover:bg-chasBlueHover  border border-input bg-background hover:bg-chasBlue  hover:border-chasBlue hover:whiteforeground min-h-[41px] uppercase',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'min-w-[102px]  uppercase ',// hover:bg-white hover:text-black hover:underline-offset-2 hover:underline //linksDropdown in header
        link: 'bg-black text-white  underline-offset-2 underline',//hover:bg-white hover:text-black pagination button
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
