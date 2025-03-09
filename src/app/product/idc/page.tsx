import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Server,
  Shield,
  Zap,
  Clock,
  BarChart,
  Globe,
} from "lucide-react";
import Image from "next/image";

export default function IDCPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 主横幅 */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                IDC业务系统
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                LoadIDC
              </h1>
              <p className="text-xl text-gray-600">
                企业级IDC业务管理系统，为您提供高效、稳定、安全的数据中心基础设施管理解决方案。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  开始使用
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  预约演示
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="LoadIDC"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 核心功能 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">核心功能</h2>
            <p className="text-xl text-gray-600">
              LoadIDC提供全面的数据中心基础设施管理功能，帮助您高效管理IDC业务。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Server className="h-8 w-8" />}
              title="资源管理"
              description="全面管理服务器、网络设备、存储设备等IDC资源，实时监控资源使用情况。"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="安全防护"
              description="多层次安全防护体系，包括DDoS防护、WAF、入侵检测等，保障业务安全。"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="高性能"
              description="优化的系统架构，提供高性能、低延迟的服务体验，满足企业关键业务需求。"
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8" />}
              title="自动化运维"
              description="自动化部署、配置和监控，减少人工干预，提高运维效率。"
            />
            <FeatureCard
              icon={<BarChart className="h-8 w-8" />}
              title="数据分析"
              description="强大的数据分析功能，帮助您了解资源使用情况，优化资源配置。"
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8" />}
              title="多区域管理"
              description="支持多区域、多数据中心统一管理，满足全球化业务需求。"
            />
          </div>
        </div>
      </section>

      {/* 技术优势 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">技术优势</h2>
              <div className="space-y-6">
                <AdvantageItem
                  title="高可用架构"
                  description="采用分布式架构，确保系统7x24小时稳定运行，可用性达99.99%。"
                />
                <AdvantageItem
                  title="智能调度"
                  description="基于AI的智能资源调度算法，优化资源分配，提高资源利用率。"
                />
                <AdvantageItem
                  title="开放API"
                  description="提供丰富的API接口，便于与第三方系统集成，构建完整的IT生态。"
                />
                <AdvantageItem
                  title="可视化管理"
                  description="直观的可视化界面，让复杂的IDC管理变得简单高效。"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="技术优势"
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
              title="大型企业IDC"
              description="为大型企业提供专业的IDC基础设施管理，满足高可用、高安全性需求。"
            />
            <ScenarioCard
              image="/placeholder.svg?height=300&width=500"
              title="云服务提供商"
              description="帮助云服务提供商高效管理数据中心资源，提供稳定可靠的云服务。"
            />
            <ScenarioCard
              image="/placeholder.svg?height=300&width=500"
              title="金融机构"
              description="满足金融机构对高安全性、高可靠性的严格要求，保障关键业务稳定运行。"
            />
            <ScenarioCard
              image="/placeholder.svg?height=300&width=500"
              title="政府机构"
              description="为政府机构提供安全合规的IDC管理解决方案，保障数据安全。"
            />
          </div>
        </div>
      </section>

      {/* 客户案例 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">客户案例</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <CaseStudyCard
              logo="/placeholder.svg?height=100&width=200"
              company="某大型金融机构"
              description="通过LoadIDC系统，实现了多数据中心统一管理，资源利用率提升30%，运维效率提升50%。"
            />
            <CaseStudyCard
              logo="/placeholder.svg?height=100&width=200"
              company="某云服务提供商"
              description="借助LoadIDC系统，成功管理超过10万台服务器，支持每日百万级业务请求，系统可用性达99.99%。"
            />
            <CaseStudyCard
              logo="/placeholder.svg?height=100&width=200"
              company="某政府部门"
              description="采用LoadIDC系统，构建了安全合规的政务云平台，满足了严格的安全合规要求。"
            />
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">开始使用LoadIDC</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            无论您是需要管理单个数据中心还是全球多个数据中心，LoadIDC都能满足您的需求。
            立即联系我们，了解更多详情。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              联系销售
            </Button>
            <Button size="lg" variant="outline">
              申请试用
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
      <div className="mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// 优势项组件
function AdvantageItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold flex items-center">
        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
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
