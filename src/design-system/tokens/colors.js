/**
 * 🎨 颜色设计 Tokens
 * 基于 Figma 设计稿提取的颜色系统
 */

export const colors = {
  // 主色调系统
  primary: {
    50: '#F5F6F2',
    100: '#E9EBDF',
    200: '#D3D7CB',
    300: '#BDC3B7',
    400: '#A7AFA3',
    500: '#919B8F',
    600: '#7B877B',
    700: '#657367',
    800: '#4F5F53',
    900: '#394B3F',
  },

  // 中性色系统 (灰色调)
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },

  // 语义化颜色
  semantic: {
    // 成功状态
    success: {
      light: '#22C55E',
      DEFAULT: '#16A34A',
      dark: '#15803D',
    },
    // 警告状态
    warning: {
      light: '#F59E0B',
      DEFAULT: '#D97706',
      dark: '#B45309',
    },
    // 错误状态
    error: {
      light: '#EF4444',
      DEFAULT: '#DC2626',
      dark: '#B91C1C',
    },
    // 信息状态
    info: {
      light: '#3B82F6',
      DEFAULT: '#2563EB',
      dark: '#1D4ED8',
    },
  },

  // Figma 设计稿中的具体颜色
  figma: {
    // 主要文字颜色
    text: {
      primary: '#E9EBDF',
      secondary: '#CBCCC4',
      muted: '#8B867F',
    },
    
    // 背景颜色
    background: {
      primary: '#151515',
      secondary: '#242424',
      card: '#1A1A1A',
    },
    
    // 边框颜色
    border: {
      primary: '#433E38',
      secondary: '#8B867F',
      muted: 'rgba(233, 235, 223, 0.12)',
    },
    
    // 强调色
    accent: {
      primary: '#E9EBDF',
      secondary: '#CBCCC4',
    },
  },

  // 透明度变体
  alpha: {
    white: {
      5: 'rgba(255, 255, 255, 0.05)',
      10: 'rgba(255, 255, 255, 0.10)',
      20: 'rgba(255, 255, 255, 0.20)',
      30: 'rgba(255, 255, 255, 0.30)',
      40: 'rgba(255, 255, 255, 0.40)',
      50: 'rgba(255, 255, 255, 0.50)',
      60: 'rgba(255, 255, 255, 0.60)',
      70: 'rgba(255, 255, 255, 0.70)',
      80: 'rgba(255, 255, 255, 0.80)',
      90: 'rgba(255, 255, 255, 0.90)',
    },
    black: {
      5: 'rgba(0, 0, 0, 0.05)',
      10: 'rgba(0, 0, 0, 0.10)',
      20: 'rgba(0, 0, 0, 0.20)',
      30: 'rgba(0, 0, 0, 0.30)',
      40: 'rgba(0, 0, 0, 0.40)',
      50: 'rgba(0, 0, 0, 0.50)',
      60: 'rgba(0, 0, 0, 0.60)',
      70: 'rgba(0, 0, 0, 0.70)',
      80: 'rgba(0, 0, 0, 0.80)',
      90: 'rgba(0, 0, 0, 0.90)',
    },
  },
}

// CSS 变量导出 (用于 TailwindCSS 集成)
export const cssVariables = {
  ':root': {
    // 主色调
    '--color-primary-50': colors.primary[50],
    '--color-primary-100': colors.primary[100],
    '--color-primary-500': colors.primary[500],
    '--color-primary-900': colors.primary[900],
    
    // Figma 颜色
    '--color-text-primary': colors.figma.text.primary,
    '--color-text-secondary': colors.figma.text.secondary,
    '--color-text-muted': colors.figma.text.muted,
    
    '--color-bg-primary': colors.figma.background.primary,
    '--color-bg-secondary': colors.figma.background.secondary,
    '--color-bg-card': colors.figma.background.card,
    
    '--color-border-primary': colors.figma.border.primary,
    '--color-border-secondary': colors.figma.border.secondary,
    '--color-border-muted': colors.figma.border.muted,
  }
}

export default colors