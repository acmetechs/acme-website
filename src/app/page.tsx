import { BannerCarousel } from "@/components/banner-carousel"
import type { BannerItem } from "@/../types/banner"

const bannerItems: BannerItem[] = [
  {
    id: "1",
    title: "创新科技，引领未来",
    description: "我们致力于为您提供最前沿的技术解决方案，让科技改变生活。",
    notification: {
      text: "新产品发布会即将开始",
      link: "#",
      linkText: "立即预约",
    },
    buttons: {
      primary: "开始体验",
      secondary: "了解更多",
    },
    background: {
      imageUrl: "/placeholder.svg", // 替换为实际的图片URL
      overlay: "rgba(0, 0, 0, 0.4)", // 添加半透明遮罩确保文字可读
    },
  },
  {
    id: "2",
    title: "智能办公，效率倍增",
    description: "通过智能化办公系统，提升团队协作效率，实现业务增长。",
    notification: {
      text: "免费试用进行中",
      link: "#",
      linkText: "立即申请",
    },
    buttons: {
      primary: "免费试用",
      secondary: "查看案例",
    },
    background: {
      imageUrl: "/placeholder.svg",
      overlay: "rgba(0, 0, 0, 0.4)",
    },
  },
  {
    id: "3",
    title: "数据驱动，洞见未来",
    description: "利用大数据分析，助您做出更明智的商业决策。",
    notification: {
      text: "新功能上线公告",
      link: "#",
      linkText: "查看详情",
    },
    buttons: {
      primary: "预约演示",
      secondary: "技术文档",
    },
    background: {
      imageUrl: "/placeholder.svg",
      overlay: "rgba(0, 0, 0, 0.4)",
    },
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      <BannerCarousel items={bannerItems} />
    </div>
  )
}

