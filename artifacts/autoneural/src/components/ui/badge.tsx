import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  // @replit
  // Whitespace-nowrap: Badges should never wrap.
  'whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2' +
    ' hover-elevate ',
  {
    variants: {
      variant: {
        default:
          'border border-white/20 bg-primary text-primary-foreground shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.3)]',
        secondary:
          'border border-[rgba(107,30,50,0.14)] bg-primary/10 text-primary backdrop-blur-sm',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow-xs',
        outline: 'text-foreground border border-[rgba(107,30,50,0.18)] bg-[rgba(248,245,240,0.7)] backdrop-blur-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
