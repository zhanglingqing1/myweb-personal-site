/**
 * 🔘 Button 按钮组件
 * 基于 Figma 设计稿的按钮样式
 */

import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { clsx } from 'clsx'

// 按钮样式变体配置
const buttonVariants = tv({
  base: [
    // 基础样式
    'inline-flex items-center justify-center',
    'font-normal text-sm leading-tight',
    'transition-all duration-200 ease-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'relative overflow-hidden',
  ],
  variants: {
    // 按钮类型 (基于 Figma 设计)
    variant: {
      // 主要按钮 (深色背景)
      primary: [
        'bg-neutral-900 text-neutral-100',
        'border border-neutral-700',
        'hover:bg-neutral-800 hover:border-neutral-600',
        'focus:ring-neutral-500',
        'active:bg-neutral-950',
      ],
      
      // 次要按钮 (透明背景，边框)
      secondary: [
        'bg-transparent text-neutral-100',
        'border border-neutral-600',
        'hover:bg-neutral-800/20 hover:border-neutral-500',
        'focus:ring-neutral-500',
        'active:bg-neutral-800/40',
      ],
      
      // 幽灵按钮 (无边框)
      ghost: [
        'bg-transparent text-neutral-100',
        'border border-transparent',
        'hover:bg-neutral-800/20',
        'focus:ring-neutral-500',
        'active:bg-neutral-800/40',
      ],
      
      // 链接按钮
      link: [
        'bg-transparent text-neutral-100',
        'border border-transparent',
        'hover:text-neutral-200 hover:underline',
        'focus:ring-neutral-500',
        'p-0 h-auto font-normal',
      ],
      
      // 强调按钮 (Figma 中的主色调)
      accent: [
        'bg-[#E9EBDF] text-neutral-900',
        'border border-[#E9EBDF]',
        'hover:bg-[#D3D7CB] hover:border-[#D3D7CB]',
        'focus:ring-[#E9EBDF]',
        'active:bg-[#BDC3B7]',
      ],
    },
    
    // 按钮大小
    size: {
      sm: 'h-8 px-3 text-xs rounded-full',
      md: 'h-10 px-5 text-sm rounded-full',  // Figma 默认大小
      lg: 'h-12 px-6 text-base rounded-full',
      xl: 'h-14 px-8 text-lg rounded-full',
      
      // 图标按钮
      icon: 'h-10 w-10 rounded-full p-0',
    },
    
    // 按钮状态
    loading: {
      true: 'cursor-wait',
    },
    
    // 全宽按钮
    fullWidth: {
      true: 'w-full',
    },
  },
  
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

// 按钮组件
export const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  disabled = false,
  className,
  onClick,
  type = 'button',
  animate = true,
  ...props
}, ref) => {
  // 处理点击事件
  const handleClick = (e) => {
    if (loading || disabled) {
      e.preventDefault()
      return
    }
    onClick?.(e)
  }

  // 基础按钮元素
  const buttonElement = (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      onClick={handleClick}
      className={clsx(
        buttonVariants({ 
          variant, 
          size, 
          loading, 
          fullWidth 
        }),
        className
      )}
      {...props}
    >
      {/* 加载状态 */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* 按钮内容 */}
      <span className={clsx(
        'flex items-center justify-center gap-2',
        loading && 'opacity-0'
      )}>
        {children}
      </span>
    </button>
  )

  // 如果启用动画，包装 motion 组件
  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        transition={{ duration: 0.15 }}
      >
        {buttonElement}
      </motion.div>
    )
  }

  return buttonElement
})

Button.displayName = 'Button'

// 按钮组组件
export const ButtonGroup = ({ children, className, ...props }) => {
  return (
    <div 
      className={clsx(
        'inline-flex items-center gap-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// 图标按钮组件
export const IconButton = forwardRef(({
  icon: Icon,
  children,
  'aria-label': ariaLabel,
  size = 'icon',
  ...props
}, ref) => {
  return (
    <Button
      ref={ref}
      size={size}
      aria-label={ariaLabel || children}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children && <span className="sr-only">{children}</span>}
    </Button>
  )
})

IconButton.displayName = 'IconButton'

// 链接按钮组件 (用于导航)
export const LinkButton = forwardRef(({
  href,
  children,
  external = false,
  ...props
}, ref) => {
  const linkProps = external 
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Button
      ref={ref}
      as="a"
      href={href}
      variant="link"
      {...linkProps}
      {...props}
    >
      {children}
      {external && (
        <svg 
          className="w-3 h-3 ml-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
          />
        </svg>
      )}
    </Button>
  )
})

LinkButton.displayName = 'LinkButton'

// 预设按钮样式 (基于 Figma 设计)
export const FigmaButtons = {
  // "Start for free" 按钮
  StartForFree: (props) => (
    <Button 
      variant="accent" 
      size="md"
      {...props}
    >
      Start for free
    </Button>
  ),
  
  // "Book a demo" 按钮
  BookDemo: (props) => (
    <Button 
      variant="secondary" 
      size="md"
      {...props}
    >
      Book a demo
    </Button>
  ),
  
  // "Sign in" 链接
  SignIn: (props) => (
    <Button 
      variant="link" 
      size="sm"
      {...props}
    >
      Sign in
    </Button>
  ),
}

export default Button