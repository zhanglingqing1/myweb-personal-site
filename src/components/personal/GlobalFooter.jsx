/**
 * 🦶 GlobalFooter 全局页脚组件
 * 展示版权信息和备案信息
 */

import React from 'react'
import { motion } from 'framer-motion'
import { useBreakpoint } from '../../design-system'
import { Heart, Code } from 'phosphor-react'

export const GlobalFooter = ({ 
  copyright = "© 2024 Your Name. All rights reserved.",
  madeWith = "Made with React & TailwindCSS",
  beianInfo = "", // 备案信息（中国用户）
  links = [],
  className = "",
  ...props 
}) => {
  const { isMobile } = useBreakpoint()

  // 默认链接
  const defaultLinks = [
    { label: 'Privacy Policy', url: '#' },
    { label: 'Terms of Service', url: '#' },
    { label: 'Sitemap', url: '#' },
  ]

  const footerLinks = links.length > 0 ? links : defaultLinks

  return (
    <motion.footer
      className={`w-full py-8 px-6 border-t border-[#433E38]/30 bg-[#151515]/80 backdrop-blur-sm ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1] 
      }}
      {...props}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`flex ${isMobile ? 'flex-col gap-6' : 'flex-row justify-between items-center'}`}>
          {/* 左侧：版权信息 */}
          <motion.div
            className="footer-meta space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1] 
            }}
          >
            <p className="text-sm text-[#CBCCC4]">
              {copyright}
            </p>
            
            {/* 制作信息 */}
            <div className="flex items-center gap-2 text-xs text-[#8B867F]">
              <span>{madeWith}</span>
              <Heart className="w-3 h-3 text-red-400" />
              <Code className="w-3 h-3" />
            </div>

            {/* 备案信息 */}
            {beianInfo && (
              <p className="text-xs text-[#8B867F]">
                {beianInfo}
              </p>
            )}
          </motion.div>

          {/* 右侧：页脚链接 */}
          <motion.nav
            className={`flex ${isMobile ? 'justify-center' : 'justify-end'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1] 
            }}
          >
            <ul className="flex items-center gap-6">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.6 + (index * 0.1),
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                >
                  <a
                    href={link.url}
                    className="text-sm text-[#8B867F] hover:text-[#E9EBDF] transition-colors duration-200"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </div>

        {/* 底部装饰线 */}
        <motion.div
          className="flex justify-center pt-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#433E38] to-transparent" />
        </motion.div>

        {/* 回到顶部按钮 */}
        <motion.div
          className="flex justify-center pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 1.0,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 bg-[#242424]/50 backdrop-blur-sm border border-[#433E38] rounded-full text-[#8B867F] hover:text-[#E9EBDF] hover:border-[#8B867F] transition-all duration-200"
            aria-label="Back to top"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default GlobalFooter