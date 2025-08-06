/**
 * 📧 ContactSection 联系我组件
 * 展示联系表单或邮箱按钮
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Input, 
  Textarea, 
  Button, 
  Card 
} from '../../design-system'
import { useBreakpoint } from '../../design-system'
import { 
  Envelope, 
  Phone, 
  MapPin, 
  PaperPlaneTilt,
  CheckCircle 
} from 'phosphor-react'

export const ContactSection = ({ 
  title = "Get In Touch",
  subtitle = "Let's work together on your next project",
  contactInfo = {},
  showForm = true,
  className = "",
  ...props 
}) => {
  const { isMobile } = useBreakpoint()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // 默认联系信息
  const defaultContactInfo = {
    email: 'hello@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
  }

  const contact = { ...defaultContactInfo, ...contactInfo }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // 重置表单
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const isFormValid = formData.name && formData.email && formData.message

  return (
    <motion.section
      className={`w-full py-16 px-6 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1] 
      }}
      {...props}
    >
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          <h2 
            className={`font-light text-[#E9EBDF] mb-4 ${
              isMobile ? 'text-2xl' : 'text-3xl'
            }`}
            style={{
              letterSpacing: '-1.07%',
              lineHeight: '1.2',
            }}
          >
            {title}
          </h2>
          <p className="text-lg font-light text-[#CBCCC4] leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
          {/* 联系信息 */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1] 
            }}
          >
            <h3 className="text-xl font-light text-[#E9EBDF] mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              {/* 邮箱 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#242424]/50 backdrop-blur-sm border border-[#433E38] rounded-full flex items-center justify-center">
                  <Envelope className="w-4 h-4 text-[#E9EBDF]" />
                </div>
                <div>
                  <p className="text-sm text-[#8B867F] uppercase tracking-wide">Email</p>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-[#E9EBDF] hover:text-[#CBCCC4] transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* 电话 */}
              {contact.phone && (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#242424]/50 backdrop-blur-sm border border-[#433E38] rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#E9EBDF]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8B867F] uppercase tracking-wide">Phone</p>
                    <a 
                      href={`tel:${contact.phone}`}
                      className="text-[#E9EBDF] hover:text-[#CBCCC4] transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* 位置 */}
              {contact.location && (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#242424]/50 backdrop-blur-sm border border-[#433E38] rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#E9EBDF]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8B867F] uppercase tracking-wide">Location</p>
                    <p className="text-[#E9EBDF]">{contact.location}</p>
                  </div>
                </div>
              )}
            </div>

            {/* 快速联系按钮 */}
            <div className="pt-6">
              <Button
                variant="accent"
                size="lg"
                className="w-full"
                onClick={() => window.location.href = `mailto:${contact.email}`}
              >
                <Envelope className="w-4 h-4 mr-2" />
                Send Quick Email
              </Button>
            </div>
          </motion.div>

          {/* 联系表单 */}
          {showForm && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              <Card variant="content" className="p-6">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="contact-form space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        label="Name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <Input
                      name="subject"
                      label="Subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />

                    <Textarea
                      name="message"
                      label="Message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full"
                      loading={isSubmitting}
                      disabled={!isFormValid || isSubmitting}
                    >
                      {!isSubmitting && <PaperPlaneTilt className="w-4 h-4 mr-2" />}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                ) : (
                  // 成功状态
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-light text-[#E9EBDF] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[#CBCCC4]">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default ContactSection