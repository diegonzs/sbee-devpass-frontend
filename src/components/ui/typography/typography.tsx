'use client'
import { cn } from '@/utils'
import { forwardRef, HTMLAttributes, LegacyRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const typographyVariants = tv(
  {
    base: 'font-urbanist text-left',
    variants: {
      color: {
        primary: 'text-co-gray-1',
        secondary: 'text-co-gray-2',
        light: 'text-co-gray-3',
        purple: 'text-co-purple-1',
      },
      size: {
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
        xl: 'text-xl',
        h1: 'text-h1 font-extrabold',
        h2: 'text-h2 font-extrabold',
        h3: 'text-h3 font-bold',
        body1: 'text-b1 font-bold',
        body2: 'text-b2 font-medium',
        body3: 'text-b3 font-medium',
        button: 'text-md font-semibold',
        subtitle: 'text-xs font-semibold',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'body3',
    },
  },
  { twMerge: false },
)

// type TextVariants = VariantProps<typeof typographyVariants>

interface TypographyProps
  extends Omit<HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3'
  children: React.ReactNode
}

export const Typography = forwardRef<
  HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>,
  TypographyProps
>(({ color, size, as = 'p', className, ...props }, ref) => {
  const Comp = as

  return (
    <Comp
      className={cn(typographyVariants({ color, size }), className)}
      ref={ref as LegacyRef<HTMLParagraphElement>}
      {...props}
    >
      {props.children}
    </Comp>
  )
})

Typography.displayName = 'Typograpgy'
export default Typography
