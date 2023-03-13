import React, { ButtonHTMLAttributes } from 'react'
import { buttonColorStyles, buttonSizeStyles, buttonStyles } from '@/components/atoms/Button/style'

type Variant = keyof typeof buttonColorStyles
type Size = keyof typeof buttonSizeStyles

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'blue', size = 'md', ...props }) => {
  const colorClass = buttonColorStyles[variant]
  const sizeClass = buttonSizeStyles[size]
  return (
    <button className={`${buttonStyles.base} ${colorClass} ${sizeClass}`} {...props}>
      {children}
    </button>
  )
}
