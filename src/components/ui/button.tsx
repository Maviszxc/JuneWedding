import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={twMerge(
          clsx(
            'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-700 disabled:pointer-events-none disabled:opacity-50',
            {
              'bg-navy-600 text-white hover:bg-navy-700': variant === 'primary',
              'border border-navy-600 text-navy-600 hover:bg-navy-50': variant === 'outline',
              'text-navy-600 hover:bg-navy-50': variant === 'ghost',
              'h-9 px-4 text-sm': size === 'sm',
              'h-10 px-6 text-base': size === 'md',
              'h-11 px-8 text-lg': size === 'lg',
            },
            className
          )
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };