/**
 * 📝 BioHeader 个人简介头部组件
 * 展示姓名和一句话简介
 */

import React from 'react'
import { motion } from 'framer-motion'
import { useBreakpoint } from '../../design-system'

export const BioHeader = ({ 
  displayName = "Your Name",
  tagline = "Your tagline here",
  className = "",
  ...props 
}) => {
  const { isMobile } = useBreakpoint()

  return (
    <motion.section
      className={`w-full py-12 px-6 text-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1] 
      }}
      {...props}
    >
      <div className="max-w-4xl mx-auto space-y-4">
        {/* 显示名称 */}
        <motion.h1
          className={`display-name font-light text-[#E9EBDF] leading-tight tracking-tight ${
            isMobile ? 'text-3xl' : 'text-5xl'
          }`}
          style={{
            letterSpacing: '-1.04%',
            lineHeight: isMobile ? '1.2' : '1.1',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          {displayName}
        </motion.h1>

        {/* 一句话简介 */}
        <motion.p
          className={`tagline font-light text-[#CBCCC4] leading-relaxed max-w-2xl mx-auto ${
            isMobile ? 'text-base' : 'text-lg'
          }`}
          style={{
            letterSpacing: '1.08%',
            lineHeight: '1.6',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          {tagline}
        </motion.p>

        {/* 装饰性下划线 */}
        <motion.div
          className="flex justify-center pt-4"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ 
            duration: 0.4, 
            delay: 1.0,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#8B867F] to-transparent" />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default BioHeader