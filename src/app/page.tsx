import type React from "react";
import { BannerCarousel } from "@/components/banner-carousel";
import type { BannerItem } from "@/../types/banner";
import {
  Server,
  Cloud,
  Lock,
  Database,
  HardDrive,
  Shield,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
];

export default function Home() {
  return (
    <div className="bg-white">
      <BannerCarousel items={bannerItems} />

      {/* LoadIDC 产品部分 */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                IDC业务系统
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                LoadIDC
              </h2>
              <p className="text-xl text-gray-600">
                企业级IDC业务管理系统，为您提供高效、稳定、安全的数据中心基础设施管理解决方案。
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <FeaturePoint
                  icon={<Server className="h-5 w-5" />}
                  text="资源管理"
                />
                <FeaturePoint
                  icon={<Shield className="h-5 w-5" />}
                  text="安全防护"
                />
                <FeaturePoint
                  icon={<Zap className="h-5 w-5" />}
                  text="高性能"
                />
                <FeaturePoint
                  icon={<Globe className="h-5 w-5" />}
                  text="多区域管理"
                />
              </div>

              <div className="pt-6">
                <Link href="/product/idc">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    了解详情
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="LoadIDC"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QimenIDC 产品部分 */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="QimenIDC"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                新一代公有云系统
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                QimenIDC
              </h2>
              <p className="text-xl text-gray-600">
                新一代高性能公有云平台，为企业提供弹性、安全、高效的云计算服务。
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <FeaturePoint
                  icon={<Zap className="h-5 w-5" />}
                  text="极致性能"
                />
                <FeaturePoint
                  icon={<Shield className="h-5 w-5" />}
                  text="安全可靠"
                />
                <FeaturePoint
                  icon={<Cloud className="h-5 w-5" />}
                  text="弹性伸缩"
                />
                <FeaturePoint
                  icon={<Globe className="h-5 w-5" />}
                  text="全球部署"
                />
              </div>

              <div className="pt-6">
                <Link href="/product/qimenidc">
                  <Button
                    size="lg"
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    了解详情
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 私有云系统 产品部分 */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  私有云系统
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                  待规划
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                企业级私有云解决方案
              </h2>
              <p className="text-xl text-gray-600">
                为企业打造专属云环境，提供安全、可控、高效的私有云基础设施。
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <FeaturePoint
                  icon={<Lock className="h-5 w-5" />}
                  text="数据主权"
                />
                <FeaturePoint
                  icon={<Shield className="h-5 w-5" />}
                  text="安全可控"
                />
                <FeaturePoint
                  icon={<Server className="h-5 w-5" />}
                  text="资源整合"
                />
                <FeaturePoint
                  icon={<Zap className="h-5 w-5" />}
                  text="高性能"
                />
              </div>

              <div className="pt-6">
                <Link href="/product/private-cloud">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    了解详情
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="私有云系统"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-md font-semibold">
                  产品规划中
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 云数据库控制器 产品部分 */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="云数据库控制器"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-md font-semibold">
                  产品开发中
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  云数据库控制器
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                  待排期
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                智能云数据库控制系统
              </h2>
              <p className="text-xl text-gray-600">
                一站式云数据库管理平台，简化数据库运维，提升数据库性能和可靠性。
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <FeaturePoint
                  icon={<Database className="h-5 w-5" />}
                  text="多数据库支持"
                />
                <FeaturePoint
                  icon={<Shield className="h-5 w-5" />}
                  text="数据安全"
                />
                <FeaturePoint
                  icon={<Zap className="h-5 w-5" />}
                  text="性能优化"
                />
                <FeaturePoint
                  icon={<Cloud className="h-5 w-5" />}
                  text="高可用保障"
                />
              </div>

              <div className="pt-6">
                <Link href="/product/database">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    了解详情
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 云存储桶 产品部分 */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                云存储桶
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                高性能对象存储服务
              </h2>
              <p className="text-xl text-gray-600">
                安全、可靠、高性能的云存储解决方案，满足各类数据存储需求。
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <FeaturePoint
                  icon={<HardDrive className="h-5 w-5" />}
                  text="无限容量"
                />
                <FeaturePoint
                  icon={<Shield className="h-5 w-5" />}
                  text="数据可靠性"
                />
                <FeaturePoint
                  icon={<Zap className="h-5 w-5" />}
                  text="高性能"
                />
                <FeaturePoint
                  icon={<Lock className="h-5 w-5" />}
                  text="安全防护"
                />
              </div>

              <div className="pt-6">
                <Link href="/product/storage">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    了解详情
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="云存储桶"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Acme Cloud Platform 产品部分 */}
      <section className="min-h-screen flex items-center py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="Acme Cloud Platform"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900 text-blue-100">
                云平台
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Acme Cloud Platform
              </h2>
              <p className="text-xl text-gray-300">
                重新定义云计算基础设施，为您提供企业级云服务解决方案，让您的业务在数字时代保持领先。
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <FeaturePoint
                  icon={<Zap className="h-5 w-5" />}
                  text="极致性能"
                  light={true}
                />
                <FeaturePoint
                  icon={<Shield className="h-5 w-5" />}
                  text="安全可靠"
                  light={true}
                />
                <FeaturePoint
                  icon={<Server className="h-5 w-5" />}
                  text="弹性伸缩"
                  light={true}
                />
                <FeaturePoint
                  icon={<Globe className="h-5 w-5" />}
                  text="全球部署"
                  light={true}
                />
              </div>

              <div className="pt-6">
                <Link href="/product/acp">
                  <Button
                    size="lg"
                    className="bg-purple-500 text-white hover:bg-purple-600"
                  >
                    了解详情
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// 特点项组件
function FeaturePoint({
  icon,
  text,
  light = false,
}: {
  icon: React.ReactNode;
  text: string;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 ${light ? "text-gray-300" : "text-gray-700"}`}
    >
      <div className={`${light ? "text-blue-400" : "text-blue-600"}`}>
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
}
