/**
 * 🎨 PortfolioGallery 作品集网格组件
 * 展示个人作品和项目
 */

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '../../design-system'
import { useBreakpoint } from '../../design-system'
import { 
  ArrowSquareOut, 
  GithubLogo, 
  Eye,
  Star,
  Code 
} from 'phosphor-react'

export const PortfolioGallery = ({ 
  portfolioData = [],
  title = "Featured Projects",
  showAll = false,
  className = "",
  ...props 
}) => {
  const { isMobile, isTablet } = useBreakpoint()
  const [filter, setFilter] = useState('all')
  const [visibleCount, setVisibleCount] = useState(showAll ? 999 : 6)

  // 默认作品集数据示例
  const defaultData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'A modern e-commerce platform built with React and Node.js',
      image: null, // 占位符
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 124, views: '2.3k' }
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication',
      image: null,
      technologies: ['React Native', 'TypeScript', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 89, views: '1.8k' }
    },
    {
      id: 3,
      title: 'Design System',
      category: 'design',
      description: 'Comprehensive design system with components and tokens',
      image: null,
      technologies: ['React', 'Storybook', 'Figma', 'TailwindCSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 67, views: '1.2k' }
    },
    {
      id: 4,
      title: 'Data Visualization Dashboard',
      category: 'web',
      description: 'Interactive dashboard for business analytics and reporting',
      image: null,
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 45, views: '890' }
    },
    {
      id: 5,
      title: 'AI Chat Assistant',
      category: 'ai',
      description: 'Intelligent chat assistant powered by machine learning',
      image: null,
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 156, views: '3.1k' }
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'web',
      description: 'Personal portfolio website with modern design',
      image: null,
      technologies: ['React', 'Framer Motion', 'TailwindCSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 23, views: '567' }
    }
  ]

  const portfolio = portfolioData.length > 0 ? portfolioData : defaultData

  // 获取分类
  const categories = ['all', ...new Set(portfolio.map(item => item.category))]
  
  // 过滤项目
  const filteredProjects = filter === 'all' 
    ? portfolio 
    : portfolio.filter(item => item.category === filter)
  
  // 显示的项目
  const visibleProjects = filteredProjects.slice(0, visibleCount)

  // 网格列数
  const getGridCols = () => {
    if (isMobile) return 'grid-cols-1'
    if (isTablet) return 'grid-cols-2'
    return 'grid-cols-3'
  }

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
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <motion.h2
          className={`text-center font-light text-[#E9EBDF] mb-8 ${
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

        {/* 分类过滤器 */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          <div className="flex flex-wrap gap-2 p-1 bg-[#242424]/30 backdrop-blur-sm rounded-full border border-[#433E38]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`
                  px-4 py-2 text-sm font-normal rounded-full transition-all duration-200
                  ${filter === category
                    ? 'bg-[#E9EBDF] text-[#151515]'
                    : 'text-[#CBCCC4] hover:text-[#E9EBDF] hover:bg-[#242424]/50'
                  }
                `}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 作品网格 */}
        <div className={`grid ${getGridCols()} gap-6 mb-12`}>
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="portfolio-card"
              >
                <Card 
                  variant="content" 
                  className="h-full hover:border-[#8B867F] transition-all duration-300 group"
                >
                  <div className="p-0 space-y-0 h-full flex flex-col">
                    {/* 项目图片/占位符 */}
                    <div className="relative h-48 bg-gradient-to-br from-[#242424] via-[#1A1A1A] to-[#151515] overflow-hidden rounded-t-lg">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Code className="w-12 h-12 text-[#8B867F]/50" />
                        </div>
                      )}
                      
                      {/* 特色标签 */}
                      {project.featured && (
                        <div className="absolute top-3 left-3 px-2 py-1 bg-[#E9EBDF]/90 text-[#151515] text-xs font-normal rounded">
                          Featured
                        </div>
                      )}

                      {/* 悬停覆盖层 */}
                      <div className="absolute inset-0 bg-[#151515]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-[#E9EBDF] text-[#151515] rounded-full hover:scale-110 transition-transform"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Eye className="w-4 h-4" />
                        </motion.a>
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-[#E9EBDF] text-[#151515] rounded-full hover:scale-110 transition-transform"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <GithubLogo className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* 项目信息 */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-lg font-light text-[#E9EBDF] leading-tight">
                            {project.title}
                          </h3>
                          <ArrowSquareOut className="w-4 h-4 text-[#8B867F] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <p className="text-sm font-light text-[#CBCCC4] leading-relaxed">
                          {project.description}
                        </p>

                        {/* 技术栈 */}
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs font-normal bg-[#242424]/30 text-[#CBCCC4] rounded border border-[#433E38]/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 统计信息 */}
                      {project.stats && (
                        <div className="flex items-center gap-4 pt-4 mt-auto border-t border-[#433E38]/30">
                          <div className="flex items-center gap-1 text-xs text-[#8B867F]">
                            <Star className="w-3 h-3" />
                            <span>{project.stats.stars}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-[#8B867F]">
                            <Eye className="w-3 h-3" />
                            <span>{project.stats.views}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 加载更多按钮 */}
        {filteredProjects.length > visibleCount && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-6 py-3 bg-[#242424]/50 backdrop-blur-sm border border-[#433E38] text-[#E9EBDF] rounded-full hover:bg-[#E9EBDF]/10 hover:border-[#8B867F] transition-all duration-200"
            >
              Load More Projects
            </button>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default PortfolioGallery