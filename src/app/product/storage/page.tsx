import type React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  HardDrive,
  Shield,
  Zap,
  Lock,
  RefreshCw,
  Globe,
} from "lucide-react";
import Image from "next/image";

export default function StoragePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 主横幅 */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                云存储桶
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                高性能对象存储服务
              </h1>
              <p className="text-xl text-gray-600">
                安全、可靠、高性能的云存储解决方案，满足各类数据存储需求。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  立即体验
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  了解更多
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="云存储桶"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 产品特点 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">产品特点</h2>
            <p className="text-xl text-gray-600">
              我们的云存储桶服务采用先进的分布式架构，为您提供安全、可靠、高性能的对象存储服务，
              满足各类应用场景的数据存储需求。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<HardDrive className="h-8 w-8" />}
              title="无限容量"
              description="弹性扩展的存储空间，按需付费，无需担心容量限制。"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="数据可靠性"
              description="多重备份机制，99.999999999%的数据可靠性，确保数据安全。"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="高性能"
              description="低延迟、高吞吐量的存储服务，满足高性能应用需求。"
            />
            <FeatureCard
              icon={<Lock className="h-8 w-8" />}
              title="安全防护"
              description="多层次安全防护，包括访问控制、数据加密、防盗链等功能。"
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8" />}
              title="全球加速"
              description="全球分布式节点，就近访问，提供快速的数据传输体验。"
            />
            <FeatureCard
              icon={<RefreshCw className="h-8 w-8" />}
              title="生命周期管理"
              description="自动化数据生命周期管理，优化存储成本。"
            />
          </div>
        </div>
      </section>

      {/* 技术架构 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">先进的技术架构</h2>
              <p className="text-gray-600 mb-6">
                我们的云存储桶服务采用先进的分布式架构，结合多项创新技术，为您提供高性能、高可靠性的对象存储服务。
              </p>
              <div className="space-y-6">
                <ArchitectureItem
                  title="分布式存储"
                  description="数据分布在多个存储节点，提供高可靠性和高性能。"
                />
                <ArchitectureItem
                  title="多副本机制"
                  description="自动创建多个数据副本，确保数据安全，防止单点故障。"
                />
                <ArchitectureItem
                  title="智能调度"
                  description="智能数据调度算法，优化数据分布，提高访问效率。"
                />
                <ArchitectureItem
                  title="全局一致性"
                  description="强一致性保证，确保数据的准确性和完整性。"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="技术架构"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 应用场景 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">应用场景</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <ScenarioCard
              image="/placeholder.svg?height=300&width=500"
              title="网站与移动应用"
              description="存储网站和移动应用的静态资源，如图片、视频、JS、CSS等，提供快速的内容分发。"
            />
            <ScenarioCard
              image="/placeholder.svg?height=300&width=500"
              title="备份与归档"
              description="安全可靠的数据备份和归档解决方案，保护重要数据，满足合规要求。"
            />
            <ScenarioCard
              image="/placeholder.svg?height=300&width=500"
              title="大数据分析"
              description="存储和处理大规模数据集，支持大数据分析和机器学习应用。"
            />
            <ScenarioCard
              image="/placeholder.svg?height=300&width=500"
              title="内容分发"
              description="结合CDN服务，为全球用户提供快速、稳定的内容分发体验。"
            />
          </div>
        </div>
      </section>

      {/* 性能对比 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">性能对比</h2>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                我们的云存储桶 vs 传统存储
              </h3>
              <div className="space-y-4">
                <ComparisonItem
                  metric="读取延迟"
                  ours="10ms"
                  traditional="50ms"
                  better={true}
                />
                <ComparisonItem
                  metric="写入吞吐量"
                  ours="500MB/s"
                  traditional="100MB/s"
                  better={true}
                />
                <ComparisonItem
                  metric="数据可靠性"
                  ours="99.999999999%"
                  traditional="99.99%"
                  better={true}
                />
                <ComparisonItem
                  metric="可用性"
                  ours="99.99%"
                  traditional="99.9%"
                  better={true}
                />
                <ComparisonItem
                  metric="成本"
                  ours="降低40%"
                  traditional="基准"
                  better={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 功能特性 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">功能特性</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureDetailCard
              title="访问控制"
              description="精细的访问控制策略，支持基于身份的访问控制、IP限制、Referer防盗链等，保障数据安全。"
            />
            <FeatureDetailCard
              title="数据加密"
              description="支持服务端加密和客户端加密，保护数据隐私，满足合规要求。"
            />
            <FeatureDetailCard
              title="版本控制"
              description="自动保存文件的多个版本，防止意外删除或覆盖，方便数据恢复。"
            />
            <FeatureDetailCard
              title="生命周期管理"
              description="自动化数据生命周期管理，支持数据转储、归档和删除，优化存储成本。"
            />
            <FeatureDetailCard
              title="跨区域复制"
              description="自动将数据复制到不同区域，提高数据可用性和灾备能力。"
            />
            <FeatureDetailCard
              title="事件通知"
              description="支持对象创建、删除等事件的实时通知，便于与其他系统集成。"
            />
            <FeatureDetailCard
              title="静态网站托管"
              description="轻松托管静态网站，无需服务器，简化部署流程。"
            />
            <FeatureDetailCard
              title="图片处理"
              description="内置图片处理功能，支持裁剪、缩放、水印等操作，无需额外服务。"
            />
            <FeatureDetailCard
              title="多协议支持"
              description="支持HTTP、HTTPS、FTP等多种协议，满足不同应用场景需求。"
            />
          </div>
        </div>
      </section>

      {/* 价格方案 */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">价格方案</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="标准存储"
              price="¥0.15"
              unit="GB/月"
              description="适合频繁访问的热数据"
              features={[
                "低延迟、高吞吐量",
                "99.99%可用性",
                "全球加速",
                "免费数据传输",
              ]}
              buttonText="立即购买"
              highlighted={false}
            />
            <PricingCard
              title="低频存储"
              price="¥0.08"
              unit="GB/月"
              description="适合不常访问的温数据"
              features={[
                "较低的存储成本",
                "99.9%可用性",
                "数据取回费用",
                "最小存储时间30天",
              ]}
              buttonText="立即购买"
              highlighted={true}
            />
            <PricingCard
              title="归档存储"
              price="¥0.03"
              unit="GB/月"
              description="适合长期保存的冷数据"
              features={[
                "最低的存储成本",
                "99.9%可用性",
                "数据恢复需要时间",
                "最小存储时间90天",
              ]}
              buttonText="立即购买"
              highlighted={false}
            />
          </div>
          <p className="text-center text-gray-600 mt-8">
            所有方案均支持按需扩展，无需预付费，按实际使用量计费。
          </p>
        </div>
      </section>

      {/* 客户案例 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">客户案例</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <CaseStudyCard
              logo="/placeholder.svg?height=100&width=200"
              company="某电商平台"
              description="使用我们的云存储桶存储商品图片和视频，提供快速的内容分发，提升用户体验，降低40%的存储成本。"
            />
            <CaseStudyCard
              logo="/placeholder.svg?height=100&width=200"
              company="某视频平台"
              description="借助我们的云存储桶和CDN服务，为全球用户提供流畅的视频观看体验，支持高峰期每秒10万次请求。"
            />
            <CaseStudyCard
              logo="/placeholder.svg?height=100&width=200"
              company="某金融机构"
              description="采用我们的云存储桶进行数据备份和归档，满足合规要求，确保数据安全，简化IT运维工作。"
            />
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">开始使用云存储桶</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            立即体验高性能、安全可靠的云存储服务，满足您的各类数据存储需求。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              免费试用
            </Button>
            <Button size="lg" variant="outline">
              联系销售
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// 功能卡片组件
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 text-purple-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// 架构项组件
function ArchitectureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold flex items-center">
        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
        {title}
      </h3>
      <p className="text-gray-600 pl-5">{description}</p>
    </div>
  );
}

// 场景卡片组件
function ScenarioCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-md">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={500}
        height={300}
        className="object-cover w-full h-[200px] transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
}

// 对比项组件
function ComparisonItem({
  metric,
  ours,
  traditional,
  better,
}: {
  metric: string;
  ours: string;
  traditional: string;
  better: boolean;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100">
      <div className="font-medium">{metric}</div>
      <div
        className={`font-semibold ${better ? "text-green-600" : "text-red-600"}`}
      >
        {ours}
      </div>
      <div className="text-gray-500">{traditional}</div>
    </div>
  );
}

// 功能详情卡片组件
function FeatureDetailCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// 价格方案卡片组件
function PricingCard({
  title,
  price,
  unit,
  description,
  features,
  buttonText,
  highlighted,
}: {
  title: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden ${highlighted ? "bg-purple-600 text-white shadow-lg scale-105 z-10" : "bg-white border border-gray-200 shadow-sm"}`}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span
            className={`ml-1 text-sm ${highlighted ? "text-purple-100" : "text-gray-500"}`}
          >
            {unit}
          </span>
        </div>
        <p
          className={`mb-6 text-sm ${highlighted ? "text-purple-100" : "text-gray-600"}`}
        >
          {description}
        </p>
        <Button
          className={`w-full ${highlighted ? "bg-white text-purple-600 hover:bg-gray-100" : "bg-purple-600 text-white hover:bg-purple-700"}`}
        >
          {buttonText}
        </Button>
      </div>
      <div
        className={`px-6 pb-6 pt-2 ${highlighted ? "border-t border-purple-500" : "border-t border-gray-100"}`}
      >
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className={`w-4 h-4 mr-2 ${highlighted ? "text-purple-200" : "text-purple-600"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                className={`text-sm ${highlighted ? "text-purple-100" : "text-gray-600"}`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// 客户案例卡片组件
function CaseStudyCard({
  logo,
  company,
  description,
}: {
  logo: string;
  company: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-16 mb-4 flex items-center">
        <Image
          src={logo || "/placeholder.svg"}
          alt={company}
          width={150}
          height={50}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-3">{company}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
