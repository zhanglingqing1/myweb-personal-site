/**
 * 🃏 Card 卡片组件
 * 基于 Figma 设计稿的卡片样式
 */

import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { clsx } from 'clsx'

// 卡片样式变体配置
const cardVariants = tv({
  base: [
    // 基础样式
    'relative overflow-hidden',
    'transition-all duration-200 ease-out',
  ],
  variants: {
    // 卡片变体 (基于 Figma 设计)
    variant: {
      // 默认卡片 (深色主题)
      default: [
        'bg-neutral-900/50 backdrop-blur-sm',
        'border border-neutral-700',
        'hover:bg-neutral-900/70 hover:border-neutral-600',
      ],
      
      // 强调卡片
      elevated: [
        'bg-neutral-800/80 backdrop-blur-sm',
        'border border-neutral-600',
        'shadow-lg shadow-black/20',
        'hover:bg-neutral-800/90 hover:border-neutral-500',
        'hover:shadow-xl hover:shadow-black/30',
      ],
      
      // 透明卡片
      glass: [
        'bg-white/5 backdrop-blur-md',
        'border border-white/10',
        'hover:bg-white/10 hover:border-white/20',
      ],
      
      // 无边框卡片
      ghost: [
        'bg-transparent',
        'border border-transparent',
        'hover:bg-neutral-800/20',
      ],
      
      // Figma 设计中的内容卡片
      content: [
        'bg-transparent',
        'border border-[#433E38]',
        'hover:border-[#8B867F]',
      ],
      
      // 博客卡片样式 (Figma 中的文章卡片)
      article: [
        'bg-transparent',
        'border border-[#433E38]',
        'hover:border-[#8B867F]',
        'transition-all duration-300',
      ],
    },
    
    // 卡片大小
    size: {
      sm: 'p-4 rounded-lg',
      md: 'p-6 rounded-lg',     // Figma 默认大小
      lg: 'p-8 rounded-xl',
      xl: 'p-10 rounded-2xl',
    },
    
    // 是否可点击
    clickable: {
      true: 'cursor-pointer select-none',
    },
    
    // 是否有阴影
    shadow: {
      true: 'shadow-md shadow-black/10',
    },
  },
  
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

// 卡片组件
export const Card = forwardRef(({
  children,
  variant = 'default',
  size = 'md',
  clickable = false,
  shadow = false,
  className,
  onClick,
  animate = true,
  ...props
}, ref) => {
  // 处理点击事件
  const handleClick = (e) => {
    if (clickable && onClick) {
      onClick(e)
    }
  }

  // 基础卡片元素
  const cardElement = (
    <div
      ref={ref}
      onClick={handleClick}
      className={clsx(
        cardVariants({ 
          variant, 
          size, 
          clickable, 
          shadow 
        }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )

  // 如果启用动画，包装 motion 组件
  if (animate && clickable) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {cardElement}
      </motion.div>
    )
  }

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {cardElement}
      </motion.div>
    )
  }

  return cardElement
})

Card.displayName = 'Card'

// 卡片头部组件
export const CardHeader = ({ children, className, ...props }) => {
  return (
    <div 
      className={clsx(
        'flex items-start justify-between mb-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// 卡片标题组件
export const CardTitle = ({ children, className, ...props }) => {
  return (
    <h3 
      className={clsx(
        'text-xl font-light text-[#E9EBDF] leading-tight',
        'tracking-[-1.07%]',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

// 卡片描述组件
export const CardDescription = ({ children, className, ...props }) => {
  return (
    <p 
      className={clsx(
        'text-sm font-light text-[#CBCCC4] leading-relaxed',
        'tracking-[1.08%]',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

// 卡片内容组件
export const CardContent = ({ children, className, ...props }) => {
  return (
    <div 
      className={clsx(
        'flex-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// 卡片底部组件
export const CardFooter = ({ children, className, ...props }) => {
  return (
    <div 
      className={clsx(
        'flex items-center justify-between mt-4 pt-4',
        'border-t border-neutral-700/50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// 社区卡片组件 (基于 Figma 设计)
export const CommunityCard = ({ 
  title, 
  description, 
  label, 
  href,
  className,
  ...props 
}) => {
  return (
    <Card
      variant="content"
      clickable={!!href}
      onClick={href ? () => window.open(href, '_blank') : undefined}
      className={clsx('h-60', className)}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* 顶部标签 */}
        <div className="mb-4">
          <span className="text-xs font-normal text-[#CBCCC4] uppercase tracking-[1.08%] leading-tight">
            {label}
          </span>
        </div>
        
        {/* 标题 */}
        <div className="flex-1 flex items-center">
          <CardTitle className="text-lg font-light leading-tight tracking-[-1.07%]">
            {title}
          </CardTitle>
        </div>
        
        {/* 描述 */}
        {description && (
          <div className="mt-4">
            <CardDescription>
              {description}
            </CardDescription>
          </div>
        )}
      </div>
    </Card>
  )
}

// 文章卡片组件 (基于 Figma 博客设计)
export const ArticleCard = ({ 
  title, 
  author, 
  image,
  href,
  className,
  ...props 
}) => {
  return (
    <Card
      variant="article"
      clickable={!!href}
      onClick={href ? () => window.open(href, '_blank') : undefined}
      className={clsx('overflow-hidden', className)}
      {...props}
    >
      {/* 文章图片 */}
      {image && (
        <div className="aspect-video w-full bg-neutral-800 mb-4 rounded-md overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* 文章内容 */}
      <div className="p-6">
        {/* 标题 */}
        <CardTitle className="mb-4 text-lg font-light leading-tight">
          {title}
        </CardTitle>
        
        {/* 作者 */}
        {author && (
          <CardDescription className="text-xs uppercase tracking-[1.08%]">
            By {author}
          </CardDescription>
        )}
      </div>
    </Card>
  )
}

// 统计卡片组件 (基于 Figma 成功案例)
export const StatsCard = ({ 
  title, 
  company, 
  logo,
  href,
  className,
  ...props 
}) => {
  return (
    <Card
      variant="elevated"
      clickable={!!href}
      onClick={href ? () => window.open(href, '_blank') : undefined}
      className={clsx('bg-[#242424] h-64', className)}
      {...props}
    >
      <div className="flex flex-col h-full justify-between p-6">
        {/* 统计标题 */}
        <CardTitle className="text-lg font-light leading-tight mb-8">
          {title}
        </CardTitle>
        
        {/* 公司 Logo 区域 */}
        <div className="flex items-center justify-center bg-neutral-800/50 rounded p-4 h-12">
          {logo ? (
            <img src={logo} alt={company} className="h-6 object-contain" />
          ) : (
            <span className="text-[#E9EBDF] text-sm font-normal">{company}</span>
          )}
        </div>
      </div>
    </Card>
  )
}

// 特性卡片组件
export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  className,
  ...props 
}) => {
  return (
    <Card
      variant="ghost"
      className={clsx('text-center', className)}
      {...props}
    >
      {/* 图标 */}
      {Icon && (
        <div className="flex justify-center mb-4">
          <div className="w-9 h-9 flex items-center justify-center">
            <Icon className="w-6 h-6 text-[#8B867F]" />
          </div>
        </div>
      )}
      
      {/* 标题 */}
      <CardTitle className="mb-4 text-lg font-light">
        {title}
      </CardTitle>
      
      {/* 描述 */}
      <CardDescription className="text-sm font-light leading-relaxed">
        {description}
      </CardDescription>
    </Card>
  )
}

export default Card