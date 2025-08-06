/**
 * 📝 Input 输入框组件
 * 基于 Figma 设计稿的输入框样式
 */

import React, { forwardRef, useState } from 'react'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { clsx } from 'clsx'

// 输入框样式变体配置
const inputVariants = tv({
  base: [
    // 基础样式
    'w-full transition-all duration-200 ease-out',
    'font-normal text-sm leading-tight',
    'placeholder:text-neutral-500',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'bg-neutral-800/50 backdrop-blur-sm',
  ],
  variants: {
    // 输入框变体
    variant: {
      // 默认样式 (深色主题)
      default: [
        'border border-neutral-600 text-[#E9EBDF]',
        'hover:border-neutral-500',
        'focus:border-[#E9EBDF] focus:ring-[#E9EBDF]/20',
      ],
      
      // 幽灵样式
      ghost: [
        'border border-transparent text-[#E9EBDF]',
        'hover:border-neutral-600',
        'focus:border-[#E9EBDF] focus:ring-[#E9EBDF]/20',
      ],
      
      // 错误状态
      error: [
        'border border-red-500 text-[#E9EBDF]',
        'hover:border-red-400',
        'focus:border-red-500 focus:ring-red-500/20',
      ],
      
      // 成功状态
      success: [
        'border border-green-500 text-[#E9EBDF]',
        'hover:border-green-400',
        'focus:border-green-500 focus:ring-green-500/20',
      ],
    },
    
    // 输入框大小
    size: {
      sm: 'h-8 px-3 text-xs rounded-md',
      md: 'h-10 px-4 text-sm rounded-md',    // 默认大小
      lg: 'h-12 px-5 text-base rounded-lg',
    },
  },
  
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

// 标签样式
const labelVariants = tv({
  base: [
    'block text-sm font-normal mb-2',
    'text-[#CBCCC4]',
  ],
  variants: {
    required: {
      true: 'after:content-["*"] after:text-red-400 after:ml-1',
    },
    disabled: {
      true: 'opacity-50',
    },
  },
})

// 帮助文本样式
const helperTextVariants = tv({
  base: [
    'mt-2 text-xs',
  ],
  variants: {
    variant: {
      default: 'text-[#8B867F]',
      error: 'text-red-400',
      success: 'text-green-400',
    },
  },
})

// 输入框组件
export const Input = forwardRef(({
  label,
  helperText,
  error,
  success,
  required = false,
  disabled = false,
  variant = 'default',
  size = 'md',
  className,
  animate = true,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false)
  
  // 确定当前状态
  const currentVariant = error ? 'error' : success ? 'success' : variant
  
  const inputElement = (
    <div className="relative">
      {/* 标签 */}
      {label && (
        <label 
          className={labelVariants({ required, disabled })}
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      
      {/* 输入框 */}
      <input
        ref={ref}
        disabled={disabled}
        className={clsx(
          inputVariants({ variant: currentVariant, size }),
          className
        )}
        onFocus={(e) => {
          setFocused(true)
          props.onFocus?.(e)
        }}
        onBlur={(e) => {
          setFocused(false)
          props.onBlur?.(e)
        }}
        {...props}
      />
      
      {/* 帮助文本或错误信息 */}
      {(helperText || error) && (
        <p className={helperTextVariants({ 
          variant: error ? 'error' : success ? 'success' : 'default' 
        })}>
          {error || helperText}
        </p>
      )}
    </div>
  )

  // 如果启用动画
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {inputElement}
      </motion.div>
    )
  }

  return inputElement
})

Input.displayName = 'Input'

// 文本域组件
export const Textarea = forwardRef(({
  label,
  helperText,
  error,
  success,
  required = false,
  disabled = false,
  variant = 'default',
  rows = 4,
  className,
  animate = true,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false)
  
  // 确定当前状态
  const currentVariant = error ? 'error' : success ? 'success' : variant
  
  const textareaElement = (
    <div className="relative">
      {/* 标签 */}
      {label && (
        <label 
          className={labelVariants({ required, disabled })}
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      
      {/* 文本域 */}
      <textarea
        ref={ref}
        rows={rows}
        disabled={disabled}
        className={clsx(
          inputVariants({ variant: currentVariant, size: 'md' }),
          'resize-vertical min-h-[80px]',
          className
        )}
        onFocus={(e) => {
          setFocused(true)
          props.onFocus?.(e)
        }}
        onBlur={(e) => {
          setFocused(false)
          props.onBlur?.(e)
        }}
        {...props}
      />
      
      {/* 帮助文本或错误信息 */}
      {(helperText || error) && (
        <p className={helperTextVariants({ 
          variant: error ? 'error' : success ? 'success' : 'default' 
        })}>
          {error || helperText}
        </p>
      )}
    </div>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {textareaElement}
      </motion.div>
    )
  }

  return textareaElement
})

Textarea.displayName = 'Textarea'

// 搜索框组件
export const SearchInput = forwardRef(({
  placeholder = 'Search...',
  onSearch,
  className,
  ...props
}, ref) => {
  const [value, setValue] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch?.(value)
  }
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
    props.onKeyDown?.(e)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Input
        ref={ref}
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className={clsx('pr-10', className)}
        {...props}
      />
      
      {/* 搜索图标 */}
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-300 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  )
})

SearchInput.displayName = 'SearchInput'

// 密码输入框组件
export const PasswordInput = forwardRef(({
  className,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false)
  
  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="relative">
      <Input
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        className={clsx('pr-10', className)}
        {...props}
      />
      
      {/* 显示/隐藏密码按钮 */}
      <button
        type="button"
        onClick={togglePassword}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-300 transition-colors"
      >
        {showPassword ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.275 4.057-5.065 7-9.543 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        )}
      </button>
    </div>
  )
})

PasswordInput.displayName = 'PasswordInput'

// 输入框组
export const InputGroup = ({ children, className, ...props }) => {
  return (
    <div 
      className={clsx(
        'space-y-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// 表单组件
export const FormField = ({ 
  children, 
  className, 
  error,
  ...props 
}) => {
  return (
    <div 
      className={clsx(
        'space-y-2',
        error && 'animate-shake',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Input