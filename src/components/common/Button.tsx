
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  ...props 
}: ButtonProps) => {
  const baseStyles = 'rounded-md font-medium transition-all duration-300 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-real-900 text-white hover:bg-real-800 shadow-sm',
    secondary: 'bg-real-100 text-real-900 hover:bg-real-200 border border-real-200',
    outline: 'border border-real-300 hover:bg-real-50 text-real-900',
    ghost: 'text-real-900 hover:bg-real-100',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
