# MyWeb - React + Vite + TailwindCSS 项目

这是一个使用现代前端技术栈构建的 React 项目，包含了丰富的 UI 增强库和动画效果。

## 🚀 技术栈

- **React 18** - 现代化的前端框架
- **Vite** - 快速的构建工具和开发服务器
- **TailwindCSS v4** - 现代化的 CSS 框架
- **Framer Motion** - 强大的 React 动画库
- **Lucide React** - 美观的图标库
- **Phosphor React** - 系统图标库
- **React Icons** - 社交媒体图标库
- **Clsx** - 条件类名工具
- **Tailwind Variants** - TailwindCSS 变体工具

## 📦 已安装的包

### 核心框架
- `react` - React 核心库
- `react-dom` - React DOM 渲染器
- `vite` - 构建工具
- `@vitejs/plugin-react` - Vite React 插件

### 样式和 UI
- `tailwindcss` - CSS 框架
- `@tailwindcss/vite` - TailwindCSS Vite 插件
- `clsx` - 类名条件合并工具
- `tailwind-variants` - TailwindCSS 变体工具

### 动画和交互
- `framer-motion` - React 动画库，用于制作滑入动效和复杂动画

### 图标库
- `lucide-react` - 现代化图标库
- `phosphor-react` - 系统级图标库
- `react-icons` - 包含社交媒体图标的综合图标库

## 🛠️ 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 代码检查
npm run lint
```

## 📁 项目结构

```
myweb/
├── public/          # 静态资源文件
├── src/             # 源代码目录
│   ├── assets/      # 项目资源文件
│   ├── components/  # React 组件
│   ├── App.jsx      # 主应用组件
│   ├── main.jsx     # 应用入口文件
│   └── index.css    # 全局样式文件 (仅包含 @import "tailwindcss")
├── dist/            # 构建输出目录
├── vite.config.js   # Vite 配置文件
├── jsconfig.json    # JavaScript 配置文件
└── package.json     # 项目依赖配置
```

## 🎨 样式系统

本项目使用 **TailwindCSS v4**，配置已经简化：

- `src/index.css` 文件只包含一行：`@import "tailwindcss";`
- 不再需要传统的 `@tailwind base/components/utilities` 导入
- 所有 Tailwind 功能都通过单一导入自动可用

## ✨ 功能特性

### 动画效果
- 使用 `framer-motion` 实现滑入动效
- 支持复杂的页面转场动画
- 响应式动画效果

### 图标系统
- **系统图标**: 使用 `phosphor-react`
- **社交媒体图标**: 使用 `react-icons/si`
- **通用图标**: 使用 `lucide-react`

### 开发体验
- 热模块替换 (HMR)
- 快速冷启动
- TypeScript 支持 (通过 jsconfig.json)
- 路径别名支持 (`@/*` 指向 `./src/*`)

## 🔧 配置说明

### Vite 配置 (vite.config.js)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### JavaScript 配置 (jsconfig.json)
- 配置了路径别名 `@/*` 指向 `src/*`
- 支持现代 JavaScript 特性
- 优化了开发体验

## 🚦 构建状态

✅ 项目构建成功，无错误
✅ 所有依赖安装完成
✅ TailwindCSS v4 配置正确
✅ 动画和图标库集成完成

## 📝 使用示例

### 基础组件示例
```jsx
import { motion } from 'framer-motion'
import { Heart } from 'phosphor-react'
import { SiGithub } from 'react-icons/si'

function ExampleComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 bg-blue-500 text-white rounded-lg"
    >
      <Heart size={24} />
      <SiGithub size={24} />
      <h1 className="text-xl font-bold">欢迎使用 MyWeb!</h1>
    </motion.div>
  )
}
```

## 🎨 设计系统

基于 Figma 设计稿创建的完整设计系统，包含：

### 📁 设计系统结构
```
├── design-system/              # 🌟 设计系统主目录
│   ├── components/             # 可复用 UI 组件
│   │   ├── Button.jsx          # 按钮组件 (多种变体)
│   │   ├── Input.jsx           # 输入框组件 (包含搜索、密码等)
│   │   ├── Card.jsx            # 卡片组件 (社区、文章、统计等)
│   │   └── index.js            # 统一导出所有组件
│   │
│   ├── tokens/                 # 🎨 设计 Tokens
│   │   ├── colors.js           # 颜色系统 (深色主题)
│   │   ├── spacing.js          # 间距、圆角、阴影
│   │   ├── typography.js       # 字体系统 (Inter)
│   │   └── index.js            # 统一导出和主题配置
│   │
│   ├── hooks/                  # 通用 UI hooks
│   │   ├── useMediaQuery.js    # 响应式媒体查询
│   │   └── index.js            # hooks 统一导出
│   │
│   └── index.js                # ✨ 顶层导出
```

### 🎯 设计特色

- **深色主题**: 基于 Figma 设计的专业深色界面
- **现代字体**: 使用 Inter 字体，支持多种字重和尺寸
- **响应式设计**: 完整的断点系统和媒体查询 hooks
- **动画效果**: 集成 Framer Motion 的滑入动效
- **图标系统**: 
  - Phosphor React (系统图标)
  - React Icons (社媒图标)
- **组件变体**: 使用 tailwind-variants 的灵活样式系统

### 🚀 使用方法

```jsx
// 导入单个组件
import { Button, Card, Input } from '@/design-system'

// 导入整个组件库
import { Components } from '@/design-system'

// 使用 Figma 预设按钮
import { FigmaButtons } from '@/design-system'

// 使用响应式 hooks
import { useBreakpoint, useIsMobile } from '@/design-system'

// 使用设计 tokens
import { theme, tokens } from '@/design-system'
```

### 📱 预览页面

项目包含完整的设计系统预览页面，展示：
- 所有组件的不同状态和变体
- 设计 tokens (颜色、字体、间距)
- Figma 设计稿的真实重现
- 响应式布局演示

### ✨ App.jsx 极简设计

```jsx
import DesignSystemPreview from './components/DesignSystemPreview'

function App() {
  return <DesignSystemPreview />
}

export default App
```

## 🎯 下一步

项目已经完全配置完成，您可以：

1. 访问 http://localhost:5173 查看设计系统预览
2. 使用现有组件快速构建界面
3. 基于设计 tokens 创建新组件
4. 利用 Framer Motion 添加更多动画效果
5. 扩展设计系统以满足更多需求

## 🛠️ 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

---

**项目创建时间**: ${new Date().toLocaleDateString('zh-CN')}
**设计系统版本**: 1.0.0
**基于**: Figma 设计稿 + 现代前端技术栈