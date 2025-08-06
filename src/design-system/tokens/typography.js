/**
 * ✍️ 字体设计 Tokens
 * 基于 Figma 设计稿提取的字体系统
 */

export const typography = {
  // 字体族
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
    mono: ['Fira Code', 'Monaco', 'Cascadia Code', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono', 'Courier New', 'monospace'],
  },

  // 字体大小 (基于 Figma 设计稿)
  fontSize: {
    xs: ['10.875px', { lineHeight: '1.32' }],      // 小字
    sm: ['11.0625px', { lineHeight: '1.30' }],     // 小标签
    base: ['13.34375px', { lineHeight: '1.05' }],  // 基础文字
    lg: ['13.78125px', { lineHeight: '1.02' }],    // 稍大文字
    xl: ['14.75px', { lineHeight: '1.63' }],       // 正文
    '2xl': ['15px', { lineHeight: '1.60' }],       // 大正文
    '3xl': ['22.125px', { lineHeight: '1.30' }],   // 小标题
    '4xl': ['22.3125px', { lineHeight: '1.29' }],  // 标题
    '5xl': ['22.5px', { lineHeight: '1.28' }],     // 大标题
    '6xl': ['22.6875px', { lineHeight: '1.27' }],  // 超大标题
    '7xl': ['30px', { lineHeight: '1.12' }],       // 巨大标题
    '8xl': ['33.609375px', { lineHeight: '1.12' }], // 主标题
    '9xl': ['45.9375px', { lineHeight: '1.10' }],  // 超级标题
  },

  // 字体重量
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',        // Figma 中的主要轻字重
    normal: '400',       // Figma 中的主要常规字重
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // 行高
  lineHeight: {
    none: '1',
    tight: '1.1',
    snug: '1.2',
    normal: '1.3',
    relaxed: '1.4',
    loose: '1.6',
    
    // Figma 特定行高
    figma: {
      tight: '1.02',     // 紧密行高
      compact: '1.12',   // 紧凑行高
      normal: '1.30',    // 正常行高
      relaxed: '1.60',   // 宽松行高
    },
  },

  // 字母间距
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
    
    // Figma 特定字母间距
    figma: {
      tight: '-1.07%',    // 标题紧密间距
      normal: '1.07%',    // 正常间距
      wide: '1.10%',      // 宽间距
    },
  },

  // 文本变换
  textTransform: {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    normal: 'none',
  },

  // 文本对齐
  textAlign: {
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify',
  },

  // Figma 设计稿中的具体文字样式
  figma: {
    // 主标题样式
    hero: {
      fontSize: '45.9375px',
      fontWeight: '300',
      lineHeight: '1.10',
      letterSpacing: '-1.04%',
      fontFamily: 'Inter',
    },
    
    // 大标题样式
    heading1: {
      fontSize: '33.609375px',
      fontWeight: '300',
      lineHeight: '1.12',
      letterSpacing: '-1.07%',
      fontFamily: 'Inter',
    },
    
    // 中标题样式
    heading2: {
      fontSize: '30px',
      fontWeight: '300',
      lineHeight: '1.12',
      letterSpacing: '-1.07%',
      fontFamily: 'Inter',
    },
    
    // 小标题样式
    heading3: {
      fontSize: '22.5px',
      fontWeight: '300',
      lineHeight: '1.28',
      letterSpacing: '-1.07%',
      fontFamily: 'Inter',
    },
    
    // 正文样式
    body: {
      fontSize: '14.875px',
      fontWeight: '300',
      lineHeight: '1.61',
      letterSpacing: '1.08%',
      fontFamily: 'Inter',
    },
    
    // 小正文样式
    bodySmall: {
      fontSize: '13.34375px',
      fontWeight: '400',
      lineHeight: '1.05',
      letterSpacing: '0%',
      fontFamily: 'Inter',
    },
    
    // 标签样式 (大写)
    label: {
      fontSize: '11.0625px',
      fontWeight: '400',
      lineHeight: '1.30',
      letterSpacing: '1.08%',
      textTransform: 'uppercase',
      fontFamily: 'Inter',
    },
    
    // 按钮文字样式
    button: {
      fontSize: '13.34375px',
      fontWeight: '400',
      lineHeight: '1.05',
      letterSpacing: '0%',
      fontFamily: 'Inter',
    },
    
    // 链接样式
    link: {
      fontSize: '13.78125px',
      fontWeight: '400',
      lineHeight: '1.02',
      letterSpacing: '0%',
      fontFamily: 'Inter',
    },
  },
}

// 预设文本样式类
export const textStyles = {
  // 标题系列
  'display-2xl': {
    fontSize: typography.fontSize['9xl'][0],
    lineHeight: typography.fontSize['9xl'][1].lineHeight,
    fontWeight: typography.fontWeight.light,
    letterSpacing: typography.figma.hero.letterSpacing,
  },
  
  'display-xl': {
    fontSize: typography.fontSize['8xl'][0],
    lineHeight: typography.fontSize['8xl'][1].lineHeight,
    fontWeight: typography.fontWeight.light,
    letterSpacing: typography.figma.heading1.letterSpacing,
  },
  
  'display-lg': {
    fontSize: typography.fontSize['7xl'][0],
    lineHeight: typography.fontSize['7xl'][1].lineHeight,
    fontWeight: typography.fontWeight.light,
    letterSpacing: typography.figma.heading2.letterSpacing,
  },
  
  'heading-xl': {
    fontSize: typography.fontSize['5xl'][0],
    lineHeight: typography.fontSize['5xl'][1].lineHeight,
    fontWeight: typography.fontWeight.light,
    letterSpacing: typography.figma.heading3.letterSpacing,
  },
  
  'heading-lg': {
    fontSize: typography.fontSize['4xl'][0],
    lineHeight: typography.fontSize['4xl'][1].lineHeight,
    fontWeight: typography.fontWeight.light,
  },
  
  'heading-md': {
    fontSize: typography.fontSize['3xl'][0],
    lineHeight: typography.fontSize['3xl'][1].lineHeight,
    fontWeight: typography.fontWeight.light,
  },
  
  // 正文系列
  'body-lg': {
    fontSize: typography.fontSize['2xl'][0],
    lineHeight: typography.fontSize['2xl'][1].lineHeight,
    fontWeight: typography.fontWeight.light,
    letterSpacing: typography.figma.body.letterSpacing,
  },
  
  'body-md': {
    fontSize: typography.fontSize.xl[0],
    lineHeight: typography.fontSize.xl[1].lineHeight,
    fontWeight: typography.fontWeight.light,
  },
  
  'body-sm': {
    fontSize: typography.fontSize.base[0],
    lineHeight: typography.fontSize.base[1].lineHeight,
    fontWeight: typography.fontWeight.normal,
  },
  
  // 辅助文字
  'label-lg': {
    fontSize: typography.fontSize.lg[0],
    lineHeight: typography.fontSize.lg[1].lineHeight,
    fontWeight: typography.fontWeight.normal,
  },
  
  'label-md': {
    fontSize: typography.fontSize.sm[0],
    lineHeight: typography.fontSize.sm[1].lineHeight,
    fontWeight: typography.fontWeight.normal,
    textTransform: 'uppercase',
    letterSpacing: typography.figma.label.letterSpacing,
  },
  
  'label-sm': {
    fontSize: typography.fontSize.xs[0],
    lineHeight: typography.fontSize.xs[1].lineHeight,
    fontWeight: typography.fontWeight.normal,
    textTransform: 'uppercase',
  },
}

// CSS 变量导出
export const cssVariables = {
  ':root': {
    // 字体族
    '--font-sans': typography.fontFamily.sans.join(', '),
    '--font-mono': typography.fontFamily.mono.join(', '),
    
    // 主要字体大小
    '--text-xs': typography.fontSize.xs[0],
    '--text-sm': typography.fontSize.sm[0],
    '--text-base': typography.fontSize.base[0],
    '--text-lg': typography.fontSize.lg[0],
    '--text-xl': typography.fontSize.xl[0],
    '--text-2xl': typography.fontSize['2xl'][0],
    '--text-3xl': typography.fontSize['3xl'][0],
    
    // Figma 特定样式
    '--text-hero-size': typography.figma.hero.fontSize,
    '--text-hero-weight': typography.figma.hero.fontWeight,
    '--text-hero-height': typography.figma.hero.lineHeight,
    
    '--text-heading-size': typography.figma.heading3.fontSize,
    '--text-heading-weight': typography.figma.heading3.fontWeight,
    '--text-heading-height': typography.figma.heading3.lineHeight,
    
    '--text-body-size': typography.figma.body.fontSize,
    '--text-body-weight': typography.figma.body.fontWeight,
    '--text-body-height': typography.figma.body.lineHeight,
  }
}

export default typography