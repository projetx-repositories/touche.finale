import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-tf-purple hover:bg-[#5a2058] focus:ring-tf-purple shadow-lg shadow-purple-900/20",
    outline: "border-tf-purple text-tf-purple bg-transparent hover:bg-tf-purple hover:text-white focus:ring-tf-purple",
    white: "border-transparent text-tf-purple bg-white hover:bg-gray-100 focus:ring-white shadow-lg",
  };

  const widthClass = fullWidth ? 'w-full' : '';

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};