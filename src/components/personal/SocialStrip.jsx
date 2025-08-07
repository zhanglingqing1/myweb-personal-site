/**
 * 🔗 SocialStrip 社交媒体链接条组件
 * 展示社交媒体图标和链接
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  SiGithub, 
  SiX,
  SiSinaweibo,
  SiWechat,
  SiYoutube,
  SiDiscord,
  SiTelegram,
} from 'react-icons/si'
import { useBreakpoint, WeChatModal } from '../../design-system'

// 小红书图标组件 (react-icons中没有官方图标)
const XiaohongshuIcon = ({ className }) => (
  <svg 
    className={className}
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0z" fill="#ff2442"/>
    <path d="M17.5 8.5h-11c-.3 0-.5.2-.5.5v6c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5V9c0-.3-.2-.5-.5-.5zM16 13H8v-2h8v2zm0-3H8V9h8v1z" fill="white"/>
  </svg>
)

// 社交媒体图标映射
const SOCIAL_ICONS = {
  github: SiGithub,
  twitter: SiX,
  weibo: SiSinaweibo,
  xiaohongshu: XiaohongshuIcon,
  wechat: SiWechat,
  youtube: SiYoutube,
  discord: SiDiscord,
  telegram: SiTelegram,
}

export const SocialStrip = ({ 
  socialLinks = [],
  className = "",
  wechatId,
  ...props 
}) => {
  const { isMobile } = useBreakpoint()
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false)

  // 默认社交链接示例
  const defaultLinks = [
    { platform: 'github', url: '#', label: 'GitHub' },
    { platform: 'twitter', url: '#', label: 'Twitter' },
    { platform: 'weibo', url: '#', label: '微博' },
    { platform: 'xiaohongshu', url: '#', label: '小红书' },
    { platform: 'wechat', url: '#', label: '微信' },
  ]

  const links = socialLinks.length > 0 ? socialLinks : defaultLinks

  // 处理链接点击
  const handleLinkClick = (link, e) => {
    if (link.platform === 'wechat') {
      e.preventDefault()
      setIsWeChatModalOpen(true)
    }
    // 其他平台正常跳转，不需要特殊处理
  }

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
                  href={link.platform === 'wechat' ? '#' : link.url}
                  target={link.platform === 'wechat' ? '_self' : '_blank'}
                  rel={link.platform === 'wechat' ? '' : 'noopener noreferrer'}
                  aria-label={link.label}
                  onClick={(e) => handleLinkClick(link, e)}
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
                    ${link.platform === 'wechat' ? 'cursor-pointer' : ''}
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

      {/* 微信弹窗 */}
      <WeChatModal
        isOpen={isWeChatModalOpen}
        onClose={() => setIsWeChatModalOpen(false)}
        wechatId={wechatId}
      />
    </motion.section>
  )
}

export default SocialStrip