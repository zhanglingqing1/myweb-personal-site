/**
 * 🌟 设计系统主入口
 * 统一导出所有设计系统资源
 */

// 先导入所有设计 Tokens
import {
  tokens,
  theme,
  breakpoints,
  animations,
  zIndex,
  cssVariables,
  colors,
  spacing,
  borderRadius,
  boxShadow,
  typography,
  textStyles,
} from './tokens/index.js'

// 导入所有组件
import {
  Button,
  ButtonGroup,
  IconButton,
  LinkButton,
  FigmaButtons,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CommunityCard,
  ArticleCard,
  StatsCard,
  FeatureCard,
  Input,
  Textarea,
  SearchInput,
  PasswordInput,
  InputGroup,
  FormField,
  Components,
} from './components/index.js'

// 导入所有 Hooks
import {
  useMediaQuery,
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  useIsLargeDesktop,
  useIsExtraLarge,
  useIsFigmaMobile,
  useIsFigmaTablet,
  useIsFigmaDesktop,
  useIsFigmaWide,
  useIsTouchDevice,
  useCanHover,
  usePrefersDark,
  usePrefersLight,
  usePrefersReducedMotion,
  usePrefersHighContrast,
  useResponsiveValue,
  useBreakpoint,
  Hooks,
} from './hooks/index.js'

// 然后重新导出所有内容
export {
  // 设计 Tokens
  tokens,
  theme,
  breakpoints,
  animations,
  zIndex,
  cssVariables,
  colors,
  spacing,
  borderRadius,
  boxShadow,
  typography,
  textStyles,
  // 组件
  Button,
  ButtonGroup,
  IconButton,
  LinkButton,
  FigmaButtons,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CommunityCard,
  ArticleCard,
  StatsCard,
  FeatureCard,
  Input,
  Textarea,
  SearchInput,
  PasswordInput,
  InputGroup,
  FormField,
  Components,
  // Hooks
  useMediaQuery,
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  useIsLargeDesktop,
  useIsExtraLarge,
  useIsFigmaMobile,
  useIsFigmaTablet,
  useIsFigmaDesktop,
  useIsFigmaWide,
  useIsTouchDevice,
  useCanHover,
  usePrefersDark,
  usePrefersLight,
  usePrefersReducedMotion,
  usePrefersHighContrast,
  useResponsiveValue,
  useBreakpoint,
  Hooks,
}

// 设计系统配置
export const designSystem = {
  name: 'MyWeb Design System',
  version: '1.0.0',
  description: 'A modern design system based on Figma designs',
  
  // 基于 Figma 设计的主题
  figmaTheme: {
    colors: {
      text: {
        primary: '#E9EBDF',
        secondary: '#CBCCC4',
        muted: '#8B867F',
      },
      background: {
        primary: '#151515',
        secondary: '#242424',
        card: '#1A1A1A',
      },
      border: {
        primary: '#433E38',
        secondary: '#8B867F',
        muted: 'rgba(233, 235, 223, 0.12)',
      },
    },
    
    typography: {
      fontFamily: 'Inter',
      weights: {
        light: 300,
        normal: 400,
      },
      sizes: {
        hero: '45.9375px',
        heading: '22.5px',
        body: '14.875px',
        label: '11.0625px',
      },
    },
    
    spacing: {
      button: {
        padding: '0px 20px',
        height: '40px',
      },
      card: {
        padding: '24px',
      },
      container: {
        padding: '32px',
      },
    },
    
    borderRadius: {
      button: '9999px',  // 完全圆形
      card: '4px',
      container: '8px',
    },
  },
  
  // 设计原则
  principles: {
    accessibility: 'Design for everyone, including users with disabilities',
    consistency: 'Maintain visual and behavioral consistency across all components',
    simplicity: 'Keep interfaces clean and focused on user goals',
    performance: 'Optimize for fast loading and smooth interactions',
    responsiveness: 'Ensure great experiences across all device sizes',
  },
  
  // 组件清单
  components: {
    primitive: [
      'Button',
      'Input',
      'Card',
    ],
    composite: [
      'CommunityCard',
      'ArticleCard',
      'StatsCard',
      'FeatureCard',
      'SearchInput',
      'PasswordInput',
    ],
    layout: [
      'ButtonGroup',
      'InputGroup',
      'CardHeader',
      'CardContent',
      'CardFooter',
    ],
  },
  
  // 使用指南
  usage: {
    installation: `
      import { Button, Card, Input } from '@/design-system'
      // 或者
      import { Components } from '@/design-system'
    `,
    
    theming: `
      import { theme, tokens } from '@/design-system'
      
      // 使用主题颜色
      const primaryColor = theme.dark.colors.text.primary
      
      // 使用设计 tokens
      const spacing = tokens.spacing.figma.padding.md
    `,
    
    responsive: `
      import { useBreakpoint, useIsMobile } from '@/design-system'
      
      const { current, isMobile } = useBreakpoint()
      const mobile = useIsMobile()
    `,
  },
}

// 工具函数
export const utils = {
  // 应用 CSS 变量
  applyCssVariables: () => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      Object.entries(cssVariables[':root']).forEach(([key, value]) => {
        root.style.setProperty(key, value)
      })
    }
  },
  
  // 获取响应式值
  getResponsiveValue: (values, breakpoint) => {
    return values[breakpoint] || values.default || Object.values(values)[0]
  },
  
  // 生成组件类名
  generateClassName: (base, variants = {}) => {
    const classes = [base]
    
    Object.entries(variants).forEach(([key, value]) => {
      if (value) {
        classes.push(`${base}--${key}`)
        if (typeof value === 'string' && value !== 'true') {
          classes.push(`${base}--${key}-${value}`)
        }
      }
    })
    
    return classes.join(' ')
  },
}

// 默认导出完整的设计系统
export default {
  ...designSystem,
  tokens,
  theme,
  breakpoints,
  animations,
  zIndex,
  cssVariables,
  Components,
  Hooks,
  utils,
}