/**
 * 🌟 PersonalWebsite 个人网站主页面
 * 组合所有个人网页组件
 */

import React from 'react'
import { motion } from 'framer-motion'
import {
  AvatarHero,
  BioHeader,
  SocialStrip,
  ResumeTimeline,
  PortfolioGallery,
  ContactSection,
  GlobalFooter,
} from './personal'

// 个人数据配置
const personalData = {
  // 基本信息
  profile: {
    displayName: "Alex Chen",
    tagline: "Full-Stack Developer & UI/UX Designer passionate about creating beautiful, functional digital experiences",
    avatarUrl: null, // 将使用占位符
    backgroundUrl: null, // 将使用渐变背景
  },

  // 社交媒体链接
  socialLinks: [
    { platform: 'github', url: 'https://github.com', label: 'GitHub' },
    { platform: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { platform: 'twitter', url: 'https://twitter.com', label: 'Twitter' },
    { platform: 'instagram', url: 'https://instagram.com', label: 'Instagram' },
  ],

  // 履历时间线
  timeline: [
    {
      id: 1,
      type: 'work',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading frontend development for enterprise web applications. Built and maintained design systems, mentored junior developers, and collaborated with product teams to deliver high-quality user experiences.',
      skills: ['React', 'TypeScript', 'Next.js', 'Design Systems', 'Team Leadership', 'Mentoring']
    },
    {
      id: 2,
      type: 'work',
      title: 'Full-Stack Developer',
      company: 'Digital Solutions LLC',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Developed full-stack web applications using modern technologies. Implemented responsive designs, optimized application performance, and integrated third-party APIs.',
      skills: ['JavaScript', 'Node.js', 'React', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      id: 3,
      type: 'work',
      title: 'Junior Frontend Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2019 - 2020',
      description: 'Built responsive web interfaces and collaborated with designers to implement pixel-perfect UI components. Learned modern development practices and contributed to code reviews.',
      skills: ['HTML/CSS', 'JavaScript', 'Vue.js', 'SASS', 'Git', 'Agile']
    },
    {
      id: 4,
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'University of California',
      location: 'Berkeley, CA',
      period: '2015 - 2019',
      description: 'Graduated Magna Cum Laude with a focus on software engineering and human-computer interaction. Participated in hackathons and contributed to open-source projects.',
      skills: ['Computer Science', 'Software Engineering', 'Data Structures', 'Algorithms', 'HCI']
    }
  ],

  // 作品集
  portfolio: [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'A modern, responsive e-commerce platform built with React and Node.js. Features include real-time inventory, payment processing, and admin dashboard.',
      image: null,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      stats: { stars: 245, views: '4.2k' }
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and analytics dashboard.',
      image: null,
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      stats: { stars: 189, views: '3.1k' }
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication, transaction history, and budget tracking features.',
      image: null,
      technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase Auth'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      stats: { stars: 156, views: '2.8k' }
    },
    {
      id: 4,
      title: 'Design System Library',
      category: 'design',
      description: 'Comprehensive design system with reusable components, design tokens, and documentation. Built for scalable product development.',
      image: null,
      technologies: ['React', 'Storybook', 'Figma', 'TailwindCSS', 'TypeScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      stats: { stars: 98, views: '1.9k' }
    },
    {
      id: 5,
      title: 'Data Visualization Dashboard',
      category: 'web',
      description: 'Interactive dashboard for business analytics with real-time charts, filtering capabilities, and export functionality.',
      image: null,
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      stats: { stars: 67, views: '1.4k' }
    },
    {
      id: 6,
      title: 'AI Chat Assistant',
      category: 'ai',
      description: 'Intelligent chat assistant powered by machine learning with natural language processing and context awareness.',
      image: null,
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'WebSocket', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      stats: { stars: 234, views: '5.1k' }
    }
  ],

  // 联系信息
  contact: {
    email: 'alex.chen@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
  },

  // 页脚信息
  footer: {
    copyright: '© 2024 Alex Chen. All rights reserved.',
    madeWith: 'Made with ❤️ using React & TailwindCSS',
    beianInfo: '', // 如果需要备案信息，在这里添加
    links: [
      { label: 'Privacy Policy', url: '#privacy' },
      { label: 'Terms of Service', url: '#terms' },
      { label: 'RSS Feed', url: '#rss', external: true },
    ]
  }
}

export const PersonalWebsite = ({ data = personalData, ...props }) => {
  // 页面容器动画
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      className="min-h-screen bg-[#151515] text-[#E9EBDF] overflow-x-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {/* 01 - 头像区 */}
      <AvatarHero
        avatarUrl={data.profile.avatarUrl}
        backgroundUrl={data.profile.backgroundUrl}
        alt={`${data.profile.displayName} Avatar`}
      />

      {/* 02 - 名称 + 简介 */}
      <BioHeader
        displayName={data.profile.displayName}
        tagline={data.profile.tagline}
      />

      {/* 03 - 社媒链接条 */}
      <SocialStrip
        socialLinks={data.socialLinks}
      />

      {/* 04 - 个人履历时间线 */}
      <ResumeTimeline
        timelineData={data.timeline}
        title="Experience & Education"
      />

      {/* 05 - 作品集网格 */}
      <PortfolioGallery
        portfolioData={data.portfolio}
        title="Featured Projects"
      />

      {/* 06 - 联系我表单 */}
      <ContactSection
        title="Let's Work Together"
        subtitle="Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life."
        contactInfo={data.contact}
        showForm={true}
      />

      {/* 07 - 全局页脚 */}
      <GlobalFooter
        copyright={data.footer.copyright}
        madeWith={data.footer.madeWith}
        beianInfo={data.footer.beianInfo}
        links={data.footer.links}
      />
    </motion.div>
  )
}

export default PersonalWebsite