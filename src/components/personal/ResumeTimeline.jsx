/**
 * 📅 ResumeTimeline 个人履历时间线组件
 * 展示工作经历和教育背景
 */

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../../design-system'
import { useBreakpoint } from '../../design-system'
import { Calendar, MapPin, Buildings } from 'phosphor-react'

export const ResumeTimeline = ({ 
  timelineData = [],
  title = "Experience & Education",
  className = "",
  ...props 
}) => {
  const { isMobile } = useBreakpoint()

  // 默认时间线数据示例
  const defaultData = [
    {
      id: 1,
      type: 'work',
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading frontend development for modern web applications using React, TypeScript, and modern design systems.',
      skills: ['React', 'TypeScript', 'Design Systems', 'Team Leadership']
    },
    {
      id: 2,
      type: 'work',
      title: 'Frontend Developer',
      company: 'Startup Inc.',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and implemented modern UI/UX designs.',
      skills: ['JavaScript', 'Vue.js', 'CSS', 'UI/UX']
    },
    {
      id: 3,
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'University Name',
      location: 'City, State',
      period: '2016 - 2020',
      description: 'Focused on software engineering and web technologies.',
      skills: ['Computer Science', 'Software Engineering', 'Web Development']
    }
  ]

  const timeline = timelineData.length > 0 ? timelineData : defaultData

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
        <motion.h2
          className={`text-center font-light text-[#E9EBDF] mb-12 ${
            isMobile ? 'text-2xl' : 'text-3xl'
          }`}
          style={{
            letterSpacing: '-1.07%',
            lineHeight: '1.2',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          {title}
        </motion.h2>

        {/* 时间线 */}
        <ul className="timeline relative space-y-8">
          {/* 时间线主轴 */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#8B867F] via-[#433E38] to-transparent" />

          {timeline.map((item, index) => (
            <motion.li
              key={item.id}
              className="timeline-item relative pl-16"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6 + (index * 0.2),
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              {/* 时间线节点 */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-[#E9EBDF] rounded-full border-4 border-[#151515] z-10">
                <div className="absolute inset-1 bg-[#8B867F] rounded-full" />
              </div>

              {/* 内容卡片 */}
              <Card 
                variant="content" 
                className="hover:border-[#8B867F] transition-all duration-300"
              >
                <div className="p-6 space-y-4">
                  {/* 头部信息 */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-light text-[#E9EBDF] leading-tight">
                        {item.title}
                      </h3>
                      <span className={`
                        px-2 py-1 text-xs font-normal uppercase tracking-wide rounded
                        ${item.type === 'work' 
                          ? 'bg-[#E9EBDF]/10 text-[#E9EBDF]' 
                          : 'bg-[#8B867F]/10 text-[#8B867F]'
                        }
                      `}>
                        {item.type}
                      </span>
                    </div>

                    {/* 公司/学校信息 */}
                    <div className="flex items-center gap-4 text-sm text-[#CBCCC4]">
                      <div className="flex items-center gap-1">
                        <Buildings className="w-4 h-4" />
                        <span>{item.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* 时间期间 */}
                    <div className="flex items-center gap-1 text-sm text-[#8B867F]">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* 描述 */}
                  <p className="text-sm font-light text-[#CBCCC4] leading-relaxed">
                    {item.description}
                  </p>

                  {/* 技能标签 */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-xs font-normal bg-[#242424]/50 text-[#CBCCC4] rounded border border-[#433E38]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}

export default ResumeTimeline