/**
 * 📱 useMediaQuery Hook
 * 响应式设计的媒体查询钩子
 */

import { useState, useEffect } from 'react'

/**
 * 媒体查询 Hook
 * @param {string} query - CSS 媒体查询字符串
 * @returns {boolean} 是否匹配查询条件
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // 检查是否在浏览器环境
    if (typeof window === 'undefined') {
      return
    }

    const media = window.matchMedia(query)
    
    // 设置初始值
    setMatches(media.matches)

    // 监听变化
    const listener = (event) => {
      setMatches(event.matches)
    }

    // 添加监听器
    if (media.addListener) {
      media.addListener(listener)
    } else {
      media.addEventListener('change', listener)
    }

    // 清理函数
    return () => {
      if (media.removeListener) {
        media.removeListener(listener)
      } else {
        media.removeEventListener('change', listener)
      }
    }
  }, [query])

  return matches
}

/**
 * 预设的断点 hooks
 */

// 移动设备 (小于 640px)
export function useIsMobile() {
  return useMediaQuery('(max-width: 639px)')
}

// 平板设备 (640px - 1023px)
export function useIsTablet() {
  return useMediaQuery('(min-width: 640px) and (max-width: 1023px)')
}

// 桌面设备 (大于等于 1024px)
export function useIsDesktop() {
  return useMediaQuery('(min-width: 1024px)')
}

// 大屏桌面 (大于等于 1280px)
export function useIsLargeDesktop() {
  return useMediaQuery('(min-width: 1280px)')
}

// 超大屏 (大于等于 1536px)
export function useIsExtraLarge() {
  return useMediaQuery('(min-width: 1536px)')
}

// Figma 设计稿特定断点
export function useIsFigmaMobile() {
  return useMediaQuery('(max-width: 374px)')
}

export function useIsFigmaTablet() {
  return useMediaQuery('(min-width: 375px) and (max-width: 767px)')
}

export function useIsFigmaDesktop() {
  return useMediaQuery('(min-width: 768px) and (max-width: 1439px)')
}

export function useIsFigmaWide() {
  return useMediaQuery('(min-width: 1440px)')
}

// 检查是否为触摸设备
export function useIsTouchDevice() {
  return useMediaQuery('(hover: none) and (pointer: coarse)')
}

// 检查是否支持 hover
export function useCanHover() {
  return useMediaQuery('(hover: hover)')
}

// 检查用户偏好的颜色方案
export function usePrefersDark() {
  return useMediaQuery('(prefers-color-scheme: dark)')
}

export function usePrefersLight() {
  return useMediaQuery('(prefers-color-scheme: light)')
}

// 检查是否偏好减少动画
export function usePrefersReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

// 检查是否偏好高对比度
export function usePrefersHighContrast() {
  return useMediaQuery('(prefers-contrast: high)')
}

/**
 * 响应式值 Hook
 * 根据不同断点返回不同的值
 * @param {Object} values - 断点值对象
 * @returns {any} 当前断点对应的值
 */
export function useResponsiveValue(values) {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isDesktop = useIsDesktop()
  const isLargeDesktop = useIsLargeDesktop()
  const isExtraLarge = useIsExtraLarge()

  if (isExtraLarge && values['2xl'] !== undefined) {
    return values['2xl']
  }
  if (isLargeDesktop && values.xl !== undefined) {
    return values.xl
  }
  if (isDesktop && values.lg !== undefined) {
    return values.lg
  }
  if (isTablet && values.md !== undefined) {
    return values.md
  }
  if (isMobile && values.sm !== undefined) {
    return values.sm
  }
  
  // 返回默认值或最小值
  return values.default || values.sm || Object.values(values)[0]
}

/**
 * 断点信息 Hook
 * 返回当前断点的详细信息
 * @returns {Object} 断点信息对象
 */
export function useBreakpoint() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isDesktop = useIsDesktop()
  const isLargeDesktop = useIsLargeDesktop()
  const isExtraLarge = useIsExtraLarge()

  let current = 'sm'
  if (isExtraLarge) current = '2xl'
  else if (isLargeDesktop) current = 'xl'
  else if (isDesktop) current = 'lg'
  else if (isTablet) current = 'md'

  return {
    current,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isExtraLarge,
    
    // 便捷方法
    is: (breakpoint) => current === breakpoint,
    isAtLeast: (breakpoint) => {
      const order = ['sm', 'md', 'lg', 'xl', '2xl']
      const currentIndex = order.indexOf(current)
      const targetIndex = order.indexOf(breakpoint)
      return currentIndex >= targetIndex
    },
    isAtMost: (breakpoint) => {
      const order = ['sm', 'md', 'lg', 'xl', '2xl']
      const currentIndex = order.indexOf(current)
      const targetIndex = order.indexOf(breakpoint)
      return currentIndex <= targetIndex
    },
  }
}

export default useMediaQuery