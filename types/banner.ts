export interface BannerItem {
    id: string
    title: string
    description: string
    notification?: {
      text: string
      link: string
      linkText: string
    }
    buttons: {
      primary: string
      secondary: string
    }
    background: {
      imageUrl: string
      overlay?: string // 可选的叠加颜色，用于确保文字可读性
    }
  }
  
  