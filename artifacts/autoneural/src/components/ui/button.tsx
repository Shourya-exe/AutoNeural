import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0' +
    ' hover-elevate active-elevate-2',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground border border-white/20 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.35),0_6px_18px_-4px_rgba(107,30,50,0.35)] hover:bg-[#8B3048] hover:shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.5),0_10px_24px_-4px_rgba(107,30,50,0.45)]',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm border border-destructive-border hover:bg-destructive/90',
        outline:
          'border border-[rgba(107,30,50,0.18)] bg-[rgba(248,245,240,0.7)] text-foreground backdrop-blur-sm shadow-xs hover:border-primary hover:text-primary hover:bg-[rgba(248,245,240,0.9)] active:shadow-none',
        secondary:
          'border border-[rgba(107,30,50,0.14)] bg-secondary/80 text-secondary-foreground backdrop-blur-sm hover:border-primary/40 hover:text-foreground',
        ghost: 'border border-transparent hover:bg-primary/5 hover:text-primary',
        link: 'text-primary underline-offset-4 hover:underline hover:text-[#8B3048]',
      },
      size: {
        // @replit changed sizes
        default: 'min-h-9 px-4 py-2',
        sm: 'min-h-8 rounded-md px-3 text-xs',
        lg: 'min-h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
