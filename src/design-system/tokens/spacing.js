/**
 * 📏 间距设计 Tokens
 * 基于 Figma 设计稿提取的间距系统
 */

export const spacing = {
  // 基础间距单位 (4px 基数)
  0: '0px',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  2.5: '10px',
  3: '12px',
  3.5: '14px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  14: '56px',
  16: '64px',
  18: '72px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',

  // Figma 设计稿中的具体间距值
  figma: {
    // 内边距 (padding)
    padding: {
      xs: '6px',        // 小间距
      sm: '8px',        // 小间距
      md: '16px',       // 中等间距
      lg: '24px',       // 大间距
      xl: '32px',       // 超大间距
      '2xl': '40px',    // 超超大间距
      '3xl': '56px',    // 巨大间距
      '4xl': '64px',    // 超级大间距
    },
    
    // 外边距 (margin)
    margin: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      '2xl': '48px',
      '3xl': '64px',
      '4xl': '80px',
    },
    
    // 间隙 (gap)
    gap: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      '2xl': '40px',
    },
    
    // 组件特定间距
    component: {
      // 按钮内边距
      button: {
        sm: '8px 16px',
        md: '12px 20px',
        lg: '16px 24px',
      },
      
      // 卡片内边距
      card: {
        sm: '16px',
        md: '24px',
        lg: '32px',
      },
      
      // 容器内边距
      container: {
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '40px',
      },
    },
  },

  // 布局间距
  layout: {
    // 页面边距
    page: {
      mobile: '16px',
      tablet: '24px',
      desktop: '32px',
      wide: '40px',
    },
    
    // 栅格间距
    grid: {
      xs: '8px',
      sm: '12px',
      md: '16px',
      lg: '24px',
      xl: '32px',
    },
    
    // 区块间距
    section: {
      xs: '24px',
      sm: '32px',
      md: '48px',
      lg: '64px',
      xl: '96px',
    },
  },

  // 响应式间距
  responsive: {
    // 小屏幕 (mobile)
    sm: {
      container: '16px',
      section: '32px',
      component: '16px',
    },
    
    // 中等屏幕 (tablet)
    md: {
      container: '24px',
      section: '48px',
      component: '20px',
    },
    
    // 大屏幕 (desktop)
    lg: {
      container: '32px',
      section: '64px',
      component: '24px',
    },
    
    // 超大屏幕 (wide desktop)
    xl: {
      container: '40px',
      section: '96px',
      component: '32px',
    },
  },
}

// 边框半径 (Border Radius)
export const borderRadius = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '9999px',  // Figma 设计中的圆形按钮
  
  // Figma 特定圆角
  figma: {
    button: '9999px',      // 按钮圆角 (完全圆形)
    card: '4px',           // 卡片圆角
    input: '6px',          // 输入框圆角
    container: '8px',      // 容器圆角
  },
}

// 阴影 (Box Shadow)
export const boxShadow = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  
  // 深色主题阴影
  dark: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4)',
  },
}

// CSS 变量导出
export const cssVariables = {
  ':root': {
    // 间距
    '--spacing-xs': spacing.figma.padding.xs,
    '--spacing-sm': spacing.figma.padding.sm,
    '--spacing-md': spacing.figma.padding.md,
    '--spacing-lg': spacing.figma.padding.lg,
    '--spacing-xl': spacing.figma.padding.xl,
    
    // 圆角
    '--radius-sm': borderRadius.sm,
    '--radius-md': borderRadius.md,
    '--radius-lg': borderRadius.lg,
    '--radius-full': borderRadius.full,
    '--radius-button': borderRadius.figma.button,
    '--radius-card': borderRadius.figma.card,
    
    // 阴影
    '--shadow-sm': boxShadow.sm,
    '--shadow-md': boxShadow.md,
    '--shadow-lg': boxShadow.lg,
  }
}

export default spacing