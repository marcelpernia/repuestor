import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-brand-950 dark:focus-visible:ring-brand-300',
  {
    variants: {
      variant: {
        default: 'bg-brand-700 text-brand-50 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-50 dark:text-brand-900 dark:hover:bg-brand-50/90',
        destructive:
          'bg-red-500 text-brand-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-brand-50 dark:hover:bg-red-900/90',
        outline:
          'border border-brand-200 bg-white hover:bg-brand-100 hover:text-brand-900 dark:border-brand-800 dark:bg-brand-950 dark:hover:bg-brand-800 dark:hover:text-brand-50',
        secondary:
          'bg-brand-100 text-brand-900 hover:bg-brand-100/80 dark:bg-brand-800 dark:text-brand-50 dark:hover:bg-brand-800/80',
        ghost: 'hover:bg-brand-100 hover:text-brand-900 dark:hover:bg-brand-800 dark:hover:text-brand-50',
        link: 'text-brand-700 underline-offset-4 hover:underline dark:text-brand-50'
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-6 rounded-md px-2 text-xs',
        sm: 'h-9 rounded-md px-3',
        smIcon: 'h-9 w-9',
        lg: 'h-12 rounded-md px-8 text-md',
        lgIcon: 'h-12 w-12',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
