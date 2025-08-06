/**
 * 🎣 Hooks 统一导出
 * 设计系统中的通用 UI hooks
 */

// 先导入所有 hooks
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
} from './useMediaQuery.js'

// 然后重新导出
export {
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
}

// Hooks 集合 (便于批量导入)
export const Hooks = {
  // 媒体查询
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
}

// 默认导出
export default Hooks