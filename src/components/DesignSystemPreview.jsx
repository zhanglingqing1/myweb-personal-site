/**
 * 🎨 设计系统预览页面
 * 展示所有设计组件和样式
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Button,
  ButtonGroup,
  FigmaButtons,
  Card,
  CommunityCard,
  ArticleCard,
  StatsCard,
  FeatureCard,
  Input,
  SearchInput,
  PasswordInput,
  useBreakpoint,
  useIsMobile,
} from '../design-system'

// Phosphor React 图标
import { 
  Heart, 
  Star, 
  Lightning, 
  Shield, 
  Code, 
  Database,
  Palette,
  Layout,
  TextT as Type,
  ArrowsOut as Spacing,
} from 'phosphor-react'

// React Icons 社媒图标
import { 
  SiGithub, 
  SiLinkedin, 
  SiDiscord,
  SiFigma,
  SiReact,
} from 'react-icons/si'

// 预览页面组件
export const DesignSystemPreview = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const { isMobile } = useBreakpoint()
  
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
  
  // 子元素动画
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.div
      className="min-h-screen bg-[#151515] text-[#E9EBDF]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 顶部导航 */}
      <motion.nav 
        className="border-b border-[#433E38] bg-[#151515]/80 backdrop-blur-sm sticky top-0 z-50"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#E9EBDF] rounded-full flex items-center justify-center">
                <Palette className="w-4 h-4 text-[#151515]" />
              </div>
              <h1 className="text-lg font-light tracking-tight">
                MyWeb Design System
              </h1>
            </div>
            
            {/* 导航链接 */}
            <div className="hidden md:flex items-center gap-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'tokens', label: 'Tokens' },
                { id: 'components', label: 'Components' },
                { id: 'examples', label: 'Examples' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-sm font-normal transition-colors ${
                    activeTab === tab.id
                      ? 'text-[#E9EBDF]'
                      : 'text-[#CBCCC4] hover:text-[#E9EBDF]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* GitHub 链接 */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <SiGithub className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <SiFigma className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* 概览页面 */}
        {activeTab === 'overview' && (
          <OverviewSection variants={itemVariants} />
        )}
        
        {/* Tokens 页面 */}
        {activeTab === 'tokens' && (
          <TokensSection variants={itemVariants} />
        )}
        
        {/* 组件页面 */}
        {activeTab === 'components' && (
          <ComponentsSection variants={itemVariants} />
        )}
        
        {/* 示例页面 */}
        {activeTab === 'examples' && (
          <ExamplesSection variants={itemVariants} />
        )}
      </main>
    </motion.div>
  )
}

// 概览部分
const OverviewSection = ({ variants }) => (
  <motion.section variants={variants} className="space-y-16">
    {/* Hero 部分 */}
    <motion.div variants={variants} className="text-center space-y-6">
      <h1 className="text-5xl font-light leading-tight tracking-tight">
        Build and run modern
        <br />
        internal software
      </h1>
      <p className="text-lg font-light text-[#CBCCC4] max-w-2xl mx-auto leading-relaxed">
        A comprehensive design system based on modern Figma designs, 
        featuring dark theme, clean typography, and smooth animations.
      </p>
      <div className="flex items-center justify-center gap-4 pt-4">
        <FigmaButtons.StartForFree />
        <FigmaButtons.BookDemo />
      </div>
    </motion.div>

    {/* 特性网格 */}
    <motion.div variants={variants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        icon={Lightning}
        title="Death to boilerplate"
        description="LLMs generate mountains of code and multiply complexity, not reduce it. Our composable blocks create the perfect abstraction layer."
      />
      <FeatureCard
        icon={Database}
        title="Connect to everything"
        description="Connect to the data and tools your business depends on —whether a database, API, or the LLM you choose."
      />
      <FeatureCard
        icon={Shield}
        title="Secure by default"
        description="Enterprise-grade security features and granular permissions protect your sensitive data and ensure compliance."
      />
    </motion.div>

    {/* 统计卡片 */}
    <motion.div variants={variants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatsCard
        title="$6M and 36,000+ hours saved"
        company="DoorDash"
      />
      <StatsCard
        title="$8M and 20,000+ hours saved"
        company="Ramp"
      />
      <StatsCard
        title="10x increase in patients treated"
        company="UTMB Health"
      />
    </motion.div>
  </motion.section>
)

// Tokens 部分
const TokensSection = ({ variants }) => (
  <motion.section variants={variants} className="space-y-12">
    <motion.div variants={variants}>
      <h2 className="text-3xl font-light mb-8">Design Tokens</h2>
      
      {/* 颜色 */}
      <div className="mb-12">
        <h3 className="text-xl font-light mb-6 flex items-center gap-2">
          <Palette className="w-5 h-5" />
          Colors
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Text Primary', color: '#E9EBDF' },
            { name: 'Text Secondary', color: '#CBCCC4' },
            { name: 'Text Muted', color: '#8B867F' },
            { name: 'Background Primary', color: '#151515' },
            { name: 'Background Secondary', color: '#242424' },
            { name: 'Border Primary', color: '#433E38' },
            { name: 'Border Secondary', color: '#8B867F' },
            { name: 'Accent', color: '#E9EBDF' },
          ].map((item) => (
            <Card key={item.name} size="sm" className="p-4">
              <div 
                className="w-full h-16 rounded-md mb-3"
                style={{ backgroundColor: item.color }}
              />
              <div className="text-sm font-normal">{item.name}</div>
              <div className="text-xs text-[#8B867F] font-mono">{item.color}</div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* 字体 */}
      <div className="mb-12">
        <h3 className="text-xl font-light mb-6 flex items-center gap-2">
          <Type className="w-5 h-5" />
          Typography
        </h3>
        <Card className="p-8 space-y-6">
          <div className="text-5xl font-light">Hero Title</div>
          <div className="text-3xl font-light">Large Heading</div>
          <div className="text-xl font-light">Medium Heading</div>
          <div className="text-base font-light">Body Text - The quick brown fox jumps over the lazy dog</div>
          <div className="text-sm font-normal text-[#CBCCC4]">Secondary Text</div>
          <div className="text-xs font-normal text-[#8B867F] uppercase tracking-wide">Label Text</div>
        </Card>
      </div>
      
      {/* 间距 */}
      <div>
        <h3 className="text-xl font-light mb-6 flex items-center gap-2">
          <Spacing className="w-5 h-5" />
          Spacing
        </h3>
        <Card className="p-8">
          <div className="space-y-4">
            {[
              { name: 'XS', size: '8px' },
              { name: 'SM', size: '16px' },
              { name: 'MD', size: '24px' },
              { name: 'LG', size: '32px' },
              { name: 'XL', size: '40px' },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-4">
                <div className="w-16 text-sm">{item.name}</div>
                <div 
                  className="bg-[#E9EBDF] h-4"
                  style={{ width: item.size }}
                />
                <div className="text-sm text-[#8B867F] font-mono">{item.size}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </motion.div>
  </motion.section>
)

// 组件部分
const ComponentsSection = ({ variants }) => (
  <motion.section variants={variants} className="space-y-12">
    <motion.div variants={variants}>
      <h2 className="text-3xl font-light mb-8">Components</h2>
      
      {/* 按钮 */}
      <div className="mb-12">
        <h3 className="text-xl font-light mb-6">Buttons</h3>
        <Card className="p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm text-[#CBCCC4] mb-3">Variants</h4>
              <ButtonGroup>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="accent">Accent</Button>
              </ButtonGroup>
            </div>
            <div>
              <h4 className="text-sm text-[#CBCCC4] mb-3">Sizes</h4>
              <ButtonGroup>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </ButtonGroup>
            </div>
            <div>
              <h4 className="text-sm text-[#CBCCC4] mb-3">States</h4>
              <ButtonGroup>
                <Button>Normal</Button>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
              </ButtonGroup>
            </div>
          </div>
        </Card>
      </div>
      
      {/* 输入框 */}
      <div className="mb-12">
        <h3 className="text-xl font-light mb-6">Inputs</h3>
        <Card className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input 
              label="Email Address" 
              placeholder="Enter your email"
              helperText="We'll never share your email"
            />
            <Input 
              label="Full Name" 
              placeholder="Enter your name"
              required
            />
            <SearchInput placeholder="Search components..." />
            <PasswordInput 
              label="Password" 
              placeholder="Enter password"
            />
          </div>
        </Card>
      </div>
      
      {/* 卡片 */}
      <div>
        <h3 className="text-xl font-light mb-6">Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CommunityCard
            label="Community Forum"
            title="Engage, respond, and get support"
            description="Connect with other developers and get help with your projects"
          />
          <CommunityCard
            label="Discord"
            title="Meet, discuss, and chat with others"
            description="Join our active Discord community"
          />
          <CommunityCard
            label="Documentation"
            title="Read, explore, and get API specs"
            description="Comprehensive guides and API references"
          />
        </div>
      </div>
    </motion.div>
  </motion.section>
)

// 示例部分
const ExamplesSection = ({ variants }) => (
  <motion.section variants={variants} className="space-y-12">
    <motion.div variants={variants}>
      <h2 className="text-3xl font-light mb-8">Real-world Examples</h2>
      
      {/* Figma 设计重现 */}
      <div className="space-y-8">
        <h3 className="text-xl font-light">Community Section Recreation</h3>
        <Card className="p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4 leading-tight tracking-tight">
              Join a community of
              <br />
              thousands of developers
              <br />
              building apps on Retool
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CommunityCard
              label="Community Forum"
              title="Engage, respond, and get support"
            />
            <CommunityCard
              label="Discord"
              title="Meet, discuss, and chat with others"
            />
            <CommunityCard
              label="Docs"
              title="Read, explore, and get API specs"
            />
          </div>
        </Card>
        
        {/* 博客部分 */}
        <h3 className="text-xl font-light">Blog Section</h3>
        <Card className="p-8">
          <h2 className="text-3xl font-light mb-8 leading-tight">
            The latest Cache
            <br />
            from Retool's blog
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ArticleCard
              title="Software developers still matter in the age of AI. Here's why."
              author="Taylor Singletary"
              image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop"
            />
            <div className="space-y-6">
              <ArticleCard
                title="Agent architecture: How AI decision-making drives business impact"
                author="Kent Walters"
                image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=150&fit=crop"
              />
              <ArticleCard
                title="The true cost of AI agents: a case for hourly pricing"
                author="Todd Paoletti"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=150&fit=crop"
              />
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  </motion.section>
)

export default DesignSystemPreview