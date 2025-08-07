/**
 * 🪟 Modal 弹窗组件
 * 基于设计系统的模态框组件，支持微信等场景
 */

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { clsx } from 'clsx'
import { X, Check } from 'phosphor-react'

// 已删除modalVariants，直接使用固定的CSS类进行布局

// 遮罩层样式
const overlayVariants = tv({
  base: [
    'fixed inset-0',
    'bg-black/60 backdrop-blur-sm',
  ],
})

// 内容容器样式
const contentVariants = tv({
  base: [
    'relative',
    'bg-[#242424]/95 backdrop-blur-md',
    'border border-[#433E38]',
    'rounded-xl',
    'shadow-xl shadow-black/40',
  ],
})

export const Modal = ({
  isOpen = false,
  onClose,
  size = 'md',
  className,
  children,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  ...props
}) => {
  // ESC键关闭
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose?.()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeOnEscape, onClose])

  // 阻止滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // 动画配置
  const overlayAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
  }

  const contentAnimation = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20,
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 遮罩层 */}
          <motion.div
            className={overlayVariants()}
            onClick={closeOnOverlayClick ? onClose : undefined}
            {...overlayAnimation}
          />
          
          {/* 弹窗容器 */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* 内容容器 */}
            <motion.div
              className={clsx(contentVariants(), className)}
              onClick={(e) => e.stopPropagation()}
              {...contentAnimation}
              {...props}
              style={{ maxWidth: size === 'sm' ? '384px' : size === 'md' ? '448px' : size === 'lg' ? '512px' : '576px' }}
            >
              {/* 关闭按钮 */}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className={`
                    absolute top-4 right-4 z-10
                    w-8 h-8 rounded-full
                    bg-[#433E38]/50 backdrop-blur-sm
                    border border-[#8B867F]/30
                    text-[#CBCCC4]
                    flex items-center justify-center
                    transition-all duration-200 ease-out
                    hover:bg-[#8B867F]/20 hover:border-[#8B867F]
                    hover:text-[#E9EBDF] hover:scale-110
                    focus:outline-none focus:ring-2 focus:ring-[#E9EBDF]/20
                    active:scale-95
                  `}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              
              {/* 内容 */}
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

// 微信弹窗专用组件
export const WeChatModal = ({ 
  isOpen, 
  onClose, 
  wechatId = 'your_wechat_id_123',
  className,
  ...props 
}) => {
  // 复制状态管理
  const [copied, setCopied] = useState(false)

  // 复制到剪贴板的函数
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      // 2秒后恢复原始状态
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // 降级方案：使用传统的复制方法
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      size="sm" 
      className={clsx('text-center', className)}
      {...props}
    >
      <div className="p-8 space-y-6">
        {/* 标题 */}
        <div className="space-y-2">
          <div className="w-12 h-12 mx-auto bg-[#07C160] rounded-full flex items-center justify-center">
            <svg 
              className="w-6 h-6 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 4.882-1.881 7.277-.702-.907-3.486-4.878-6.091-9.275-6.091z"/>
              <path d="M23.759 11.336c0-3.676-3.151-6.688-7.021-6.688-3.938 0-7.018 3.018-7.018 6.688 0 3.675 3.08 6.69 7.018 6.69.808 0 1.589-.129 2.32-.37a.547.547 0 0 1 .456.063l1.521.882c.053.031.115.047.179.047.13 0 .232-.117.232-.262 0-.06-.024-.12-.038-.177l-.312-1.187a.463.463 0 0 1 .169-.526c1.47-1.123 2.494-2.834 2.494-4.76z"/>
            </svg>
          </div>
          <h3 className="text-xl font-light text-[#E9EBDF]">
            微信联系方式
          </h3>
          <p className="text-sm text-[#8B867F] leading-relaxed">
            扫描二维码或添加微信号联系我
          </p>
        </div>

        {/* 微信号 */}
        <div className="space-y-3">
          <div className="text-sm text-[#CBCCC4] font-normal">微信号</div>
          <div 
            className={`
              inline-flex items-center gap-2 px-4 py-2 
              bg-[#433E38]/30 border border-[#433E38]
              rounded-lg font-mono text-sm text-[#E9EBDF]
              cursor-pointer transition-all duration-200
              hover:bg-[#433E38]/50 hover:border-[#8B867F]
              active:scale-95
            `}
            onClick={() => copyToClipboard(wechatId)}
          >
            <span className="select-none">{wechatId}</span>
            {copied ? (
              <Check className="w-4 h-4 text-green-400" weight="bold" />
            ) : (
              <svg className="w-4 h-4 text-[#8B867F] transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </div>
        </div>

        {/* 二维码占位符 */}
        <div className="space-y-3">
          <div className="text-sm text-[#CBCCC4] font-normal">扫描二维码</div>
          <div className="mx-auto w-40 h-40 bg-[#433E38]/20 border border-[#433E38] rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <svg className="w-12 h-12 mx-auto text-[#8B867F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M12 12h-4.01M12 12h-0.01M8 21l4-4 4 4M3 4h6v6H3zM15 4h6v6h-6zM3 14h6v6H3z"/>
              </svg>
              <div className="text-xs text-[#8B867F]">微信二维码</div>
            </div>
          </div>
        </div>

        {/* 说明文字 */}
        <div className="text-xs text-[#8B867F] leading-relaxed">
          添加请注明来意，谢谢！
        </div>
      </div>
    </Modal>
  )
}

export default Modal