/**
 * 🎭 AvatarHero 头像区组件
 * 展示个人头像和背景
 */

import React from 'react'
import { motion } from 'framer-motion'
import { useBreakpoint } from '../../design-system'

export const AvatarHero = ({ 
  avatarUrl, 
  backgroundUrl, 
  alt = "Profile Avatar",
  className = "",
  ...props 
}) => {
  const { isMobile } = useBreakpoint()

  return (
    <motion.section
      className={`relative w-full ${isMobile ? 'h-64' : 'h-80'} overflow-hidden bg-gradient-to-b from-[#242424] to-[#151515] ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {/* 背景图片或占位 */}
      <div className="absolute inset-0 bg-[#1A1A1A]">
        {backgroundUrl ? (
          <img 
            src={backgroundUrl} 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#242424] via-[#1A1A1A] to-[#151515]" />
        )}
      </div>

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/80 via-transparent to-transparent" />

      {/* 头像容器 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          {/* 头像外圈光晕 */}
          <div className="absolute inset-0 bg-[#E9EBDF]/20 rounded-full blur-xl scale-110" />
          
          {/* 头像 */}
          <div className={`relative ${isMobile ? 'w-24 h-24' : 'w-32 h-32'} rounded-full overflow-hidden border-2 border-[#E9EBDF]/30 bg-[#242424]`}>
            {avatarUrl ? (
              <img 
                src={avatarUrl} 
                alt={alt}
                className="w-full h-full object-cover"
              />
            ) : (
              // 头像占位符
              <div className="w-full h-full bg-gradient-to-br from-[#8B867F] to-[#433E38] flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#E9EBDF]/20" />
              </div>
            )}
          </div>

          {/* 在线状态指示器 */}
          <motion.div
            className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#151515]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </div>

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#151515] to-transparent" />
    </motion.section>
  )
}

export default AvatarHero