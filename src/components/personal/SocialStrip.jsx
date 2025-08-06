/**
 * 🔗 SocialStrip 社交媒体链接条组件
 * 展示社交媒体图标和链接
 */

import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiGithub, 
  SiLinkedin, 
  SiX,
  SiInstagram,
  SiYoutube,
  SiDiscord,
  SiTelegram,
} from 'react-icons/si'
import { useBreakpoint } from '../../design-system'

// 社交媒体图标映射
const SOCIAL_ICONS = {
  github: SiGithub,
  linkedin: SiLinkedin,
  twitter: SiX,
  instagram: SiInstagram,
  youtube: SiYoutube,
  discord: SiDiscord,
  telegram: SiTelegram,
}

export const SocialStrip = ({ 
  socialLinks = [],
  className = "",
  ...props 
}) => {
  const { isMobile } = useBreakpoint()

  // 默认社交链接示例
  const defaultLinks = [
    { platform: 'github', url: '#', label: 'GitHub' },
    { platform: 'linkedin', url: '#', label: 'LinkedIn' },
    { platform: 'twitter', url: '#', label: 'Twitter' },
    { platform: 'instagram', url: '#', label: 'Instagram' },
  ]

  const links = socialLinks.length > 0 ? socialLinks : defaultLinks

  return (
    <motion.section
      className={`w-full py-8 px-6 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 1.2,
        ease: [0.16, 1, 0.3, 1] 
      }}
      {...props}
    >
      <div className="max-w-4xl mx-auto">
        {/* 社交媒体图标列表 */}
        <ul className="social-icons flex items-center justify-center gap-6">
          {links.map((link, index) => {
            const IconComponent = SOCIAL_ICONS[link.platform]
            
            if (!IconComponent) return null

            return (
              <motion.li
                key={link.platform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1.2 + (index * 0.1),
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`
                    inline-flex items-center justify-center
                    ${isMobile ? 'w-10 h-10' : 'w-12 h-12'}
                    rounded-full
                    bg-[#242424]/50 backdrop-blur-sm
                    border border-[#433E38]
                    text-[#CBCCC4]
                    transition-all duration-200 ease-out
                    hover:bg-[#E9EBDF]/10 hover:border-[#8B867F]
                    hover:text-[#E9EBDF] hover:scale-110
                    focus:outline-none focus:ring-2 focus:ring-[#E9EBDF]/20
                    active:scale-95
                  `}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className={isMobile ? 'w-4 h-4' : 'w-5 h-5'} />
                </motion.a>
              </motion.li>
            )
          })}
        </ul>

        {/* 装饰性分隔线 */}
        <motion.div
          className="flex justify-center pt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.6,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#433E38] to-transparent" />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default SocialStrip