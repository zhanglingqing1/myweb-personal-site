/**
 * 🧩 组件统一导出
 * 设计系统中的所有可复用 UI 组件
 */

// 先导入所有组件
import { 
  Button, 
  ButtonGroup, 
  IconButton, 
  LinkButton,
  FigmaButtons 
} from './Button.jsx'

import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  CommunityCard,
  ArticleCard,
  StatsCard,
  FeatureCard
} from './Card.jsx'

import { 
  Input, 
  Textarea, 
  SearchInput, 
  PasswordInput, 
  InputGroup, 
  FormField 
} from './Input.jsx'

import { 
  Modal, 
  WeChatModal 
} from './Modal.jsx'

// 然后重新导出
export { 
  Button, 
  ButtonGroup, 
  IconButton, 
  LinkButton,
  FigmaButtons,
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  CommunityCard,
  ArticleCard,
  StatsCard,
  FeatureCard,
  Input, 
  Textarea, 
  SearchInput, 
  PasswordInput, 
  InputGroup, 
  FormField,
  Modal,
  WeChatModal
}

// 组件集合 (便于批量导入)
export const Components = {
  // 按钮组件
  Button,
  ButtonGroup,
  IconButton,
  LinkButton,
  FigmaButtons,
  
  // 卡片组件
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CommunityCard,
  ArticleCard,
  StatsCard,
  FeatureCard,
  
  // 输入组件
  Input,
  Textarea,
  SearchInput,
  PasswordInput,
  InputGroup,
  FormField,
  
  // 弹窗组件
  Modal,
  WeChatModal,
}

// 默认导出
export default Components