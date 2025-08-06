/**
 * 👤 个人网页组件统一导出
 * 所有个人网页相关组件
 */

// 导入所有个人组件
import AvatarHero from './AvatarHero.jsx'
import BioHeader from './BioHeader.jsx'
import SocialStrip from './SocialStrip.jsx'
import ResumeTimeline from './ResumeTimeline.jsx'
import PortfolioGallery from './PortfolioGallery.jsx'
import ContactSection from './ContactSection.jsx'
import GlobalFooter from './GlobalFooter.jsx'

// 重新导出所有组件
export {
  AvatarHero,
  BioHeader,
  SocialStrip,
  ResumeTimeline,
  PortfolioGallery,
  ContactSection,
  GlobalFooter,
}

// 组件集合 (便于批量导入)
export const PersonalComponents = {
  AvatarHero,
  BioHeader,
  SocialStrip,
  ResumeTimeline,
  PortfolioGallery,
  ContactSection,
  GlobalFooter,
}

// 默认导出
export default PersonalComponents