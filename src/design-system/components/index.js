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
  FormField 
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
}

// 默认导出
export default Components