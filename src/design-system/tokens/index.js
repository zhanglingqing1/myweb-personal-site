/**
 * 🎨 设计 Tokens 统一导出
 * 包含颜色、间距、字体等所有设计 tokens
 */

import { colors, cssVariables as colorVariables } from './colors.js'
import { spacing, borderRadius, boxShadow, cssVariables as spacingVariables } from './spacing.js'
import { typography, textStyles, cssVariables as typographyVariables } from './typography.js'

// 统一导出所有 tokens
export const tokens = {
  colors,
  spacing,
  borderRadius,
  boxShadow,
  typography,
  textStyles,
}

// 合并所有 CSS 变量
export const cssVariables = {
  ':root': {
    ...colorVariables[':root'],
    ...spacingVariables[':root'],
    ...typographyVariables[':root'],
  }
}

// 主题配置 (基于 Figma 设计)
export const theme = {
  // 深色主题 (Figma 设计稿的主题)
  dark: {
    colors: {
      background: {
        primary: colors.figma.background.primary,
        secondary: colors.figma.background.secondary,
        card: colors.figma.background.card,
      },
      text: {
        primary: colors.figma.text.primary,
        secondary: colors.figma.text.secondary,
        muted: colors.figma.text.muted,
      },
      border: {
        primary: colors.figma.border.primary,
        secondary: colors.figma.border.secondary,
        muted: colors.figma.border.muted,
      },
      accent: {
        primary: colors.figma.accent.primary,
        secondary: colors.figma.accent.secondary,
      },
    },
    
    typography: {
      fontFamily: typography.fontFamily.sans,
      sizes: typography.figma,
    },
    
    spacing: {
      component: spacing.figma.component,
      layout: spacing.layout,
    },
    
    borderRadius: {
      button: borderRadius.figma.button,
      card: borderRadius.figma.card,
      container: borderRadius.figma.container,
    },
    
    shadows: boxShadow.dark,
  },
  
  // 浅色主题 (可选，未来扩展用)
  light: {
    colors: {
      background: {
        primary: '#FFFFFF',
        secondary: '#F8F9FA',
        card: '#FFFFFF',
      },
      text: {
        primary: '#1A1A1A',
        secondary: '#6B7280',
        muted: '#9CA3AF',
      },
      border: {
        primary: '#E5E7EB',
        secondary: '#D1D5DB',
        muted: '#F3F4F6',
      },
      accent: {
        primary: colors.primary[500],
        secondary: colors.primary[300],
      },
    },
    
    typography: typography.figma,
    spacing: spacing.figma,
    borderRadius: borderRadius.figma,
    shadows: boxShadow,
  },
}

// 断点配置 (响应式设计)
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  
  // Figma 设计稿中的特定断点
  figma: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
    wide: '1920px',   // Figma 设计稿宽度
  },
}

// 动画配置
export const animations = {
  // 缓动函数
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    
    // 自定义缓动 (适合滑入动效)
    slideIn: 'cubic-bezier(0.16, 1, 0.3, 1)',
    slideOut: 'cubic-bezier(0.7, 0, 0.84, 0)',
  },
  
  // 持续时间
  duration: {
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms',
    
    // Framer Motion 推荐值
    spring: {
      fast: 0.3,
      normal: 0.5,
      slow: 0.8,
    },
  },
  
  // 预设动画
  presets: {
    // 滑入动效 (基于 Figma 设计需求)
    slideInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    
    slideInDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    
    slideInLeft: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    
    slideInRight: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    
    // 淡入淡出
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 },
    },
    
    fadeOut: {
      initial: { opacity: 1 },
      animate: { opacity: 0 },
      transition: { duration: 0.3 },
    },
    
    // 缩放动效
    scaleIn: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  },
}

// Z-index 层级
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
}

// 默认导出
export default {
  tokens,
  theme,
  breakpoints,
  animations,
  zIndex,
  cssVariables,
}

// 单独导出各个模块
export {
  colors,
  spacing,
  borderRadius,
  boxShadow,
  typography,
  textStyles,
}