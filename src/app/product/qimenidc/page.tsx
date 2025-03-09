import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cloud,
  Shield,
  Zap,
  Cpu,
  Database,
  Globe,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";

export default function QimenIDCPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 主横幅 */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                新一代公有云系统
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                QimenIDC
              </h1>
              <p className="text-xl text-gray-600">
                新一代高性能公有云平台，为企业提供弹性、安全、高效的云计算服务。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
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
                alt="QimenIDC"
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
              QimenIDC采用创新技术架构，为企业提供更高效、更安全、更灵活的公有云服务。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="极致性能"
              description="采用最新的硬件架构和优化技术，提供毫秒级响应时间和超高吞吐量。"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="安全可靠"
              description="多重安全防护，99.99% 可用性保证，让您的业务永不停歇。"
            />
            <FeatureCard
              icon={<RefreshCw className="h-8 w-8" />}
              title="弹性伸缩"
              description="智能负载均衡，自动扩缩容，轻松应对业务高峰。"
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8" />}
              title="全球部署"
              description="多区域数据中心，就近接入，全球化业务轻松拓展。"
            />
            <FeatureCard
              icon={<Cpu className="h-8 w-8" />}
              title="智能运维"
              description="AI 驱动的智能监控和故障预测，提前发现并解决问题。"
            />
            <FeatureCard
              icon={<Database className="h-8 w-8" />}
              title="数据安全"
              description="全链路加密，多重认证，保护您的数据安全。"
            />
          </div>
        </div>
      </section>

      {/* 技术架构 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="技术架构"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">创新技术架构</h2>
              <div className="space-y-6">
                <ArchitectureItem
                  title="微服务架构"
                  description="采用微服务架构，提高系统可扩展性和可维护性，快速响应业务需求变化。"
                />
                <ArchitectureItem
                  title="容器化技术"
                  description="基于Kubernetes的容器编排平台，提供高效的资源调度和管理能力。"
                />
                <ArchitectureItem
                  title="软件定义网络"
                  description="采用SDN技术，实现网络资源的灵活调度和管理，提高网络性能和安全性。"
                />
                <ArchitectureItem
                  title="分布式存储"
                  description="高性能分布式存储系统，提供可靠、高效的数据存储服务。"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心服务 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">核心服务</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Cloud className="h-10 w-10" />}
              title="云服务器"
              description="高性能云服务器，支持多种规格和操作系统，满足不同业务需求。"
            />
            <ServiceCard
              icon={<Database className="h-10 w-10" />}
              title="云数据库"
              description="支持MySQL、PostgreSQL、MongoDB等多种数据库类型，提供高可用、高性能的数据库服务。"
            />
            <ServiceCard
              icon={<RefreshCw className="h-10 w-10" />}
              title="负载均衡"
              description="智能负载均衡服务，自动分配流量，提高应用可用性和性能。"
            />
            <ServiceCard
              icon={<Shield className="h-10 w-10" />}
              title="安全服务"
              description="DDoS防护、WAF、SSL证书等安全服务，全方位保障业务安全。"
            />
            <ServiceCard
              icon={<Cpu className="h-10 w-10" />}
              title="AI计算平台"
              description="为AI应用提供高性能计算资源，加速AI模型训练和推理。"
            />
            <ServiceCard
              icon={<Globe className="h-10 w-10" />}
              title="CDN加速"
              description="全球分布式内容分发网络，提供快速、稳定的内容分发服务。"
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
                QimenIDC vs 传统公有云
              </h3>
              <div className="space-y-4">
                <ComparisonItem
                  metric="计算性能"
                  qimenidc="200%"
                  traditional="100%"
                  better={true}
                />
                <ComparisonItem
                  metric="网络延迟"
                  qimenidc="20ms"
                  traditional="50ms"
                  better={true}
                />
                <ComparisonItem
                  metric="存储IOPS"
                  qimenidc="100K"
                  traditional="30K"
                  better={true}
                />
                <ComparisonItem
                  metric="弹性扩展时间"
                  qimenidc="30秒"
                  traditional="3分钟"
                  better={true}
                />
                <ComparisonItem
                  metric="成本"
                  qimenidc="降低30%"
                  traditional="基准"
                  better={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 客户案例 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">客户案例</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <CaseStudyCard
              image="/placeholder.svg?height=300&width=500"
              title="某电商平台"
              description="借助QimenIDC，成功应对双11购物节流量高峰，交易系统零宕机，用户体验大幅提升。"
            />
            <CaseStudyCard
              image="/placeholder.svg?height=300&width=500"
              title="某金融科技公司"
              description="通过QimenIDC的高性能计算服务，风控系统响应时间从秒级降至毫秒级，大幅提升业务效率。"
            />
            <CaseStudyCard
              image="/placeholder.svg?height=300&width=500"
              title="某游戏公司"
              description="利用QimenIDC的全球部署能力，为全球玩家提供低延迟、高稳定性的游戏体验。"
            />
          </div>
        </div>
      </section>

      {/* 价格方案 */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">价格方案</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="基础版"
              price="¥99"
              period="每月"
              description="适合小型企业和个人开发者"
              features={[
                "2核CPU",
                "4GB内存",
                "100GB存储",
                "1TB流量",
                "基础技术支持",
              ]}
              buttonText="立即购买"
              highlighted={false}
            />
            <PricingCard
              title="专业版"
              price="¥299"
              period="每月"
              description="适合中型企业和团队"
              features={[
                "4核CPU",
                "8GB内存",
                "200GB存储",
                "2TB流量",
                "7x24小时技术支持",
                "负载均衡服务",
              ]}
              buttonText="立即购买"
              highlighted={true}
            />
            <PricingCard
              title="企业版"
              price="¥999"
              period="每月"
              description="适合大型企业和关键业务"
              features={[
                "8核CPU",
                "16GB内存",
                "500GB存储",
                "5TB流量",
                "专属技术支持",
                "高级安全防护",
                "数据备份服务",
              ]}
              buttonText="联系销售"
              highlighted={false}
            />
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">开始使用QimenIDC</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            立即体验新一代公有云服务，享受卓越性能和稳定可靠的云计算体验。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              免费试用
            </Button>
            <Button size="lg" variant="outline">
              联系我们
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
      <div className="mb-4 text-indigo-600">{icon}</div>
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
        <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
        {title}
      </h3>
      <p className="text-gray-600 pl-5">{description}</p>
    </div>
  );
}

// 服务卡片组件
function ServiceCard({
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
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// 对比项组件
function ComparisonItem({
  metric,
  qimenidc,
  traditional,
  better,
}: {
  metric: string;
  qimenidc: string;
  traditional: string;
  better: boolean;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100">
      <div className="font-medium">{metric}</div>
      <div
        className={`font-semibold ${better ? "text-green-600" : "text-red-600"}`}
      >
        {qimenidc}
      </div>
      <div className="text-gray-500">{traditional}</div>
    </div>
  );
}

// 客户案例卡片组件
function CaseStudyCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

// 价格方案卡片组件
function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  highlighted,
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden ${highlighted ? "bg-indigo-600 text-white shadow-lg scale-105 z-10" : "bg-white border border-gray-200 shadow-sm"}`}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span
            className={`ml-1 text-sm ${highlighted ? "text-indigo-100" : "text-gray-500"}`}
          >
            {period}
          </span>
        </div>
        <p
          className={`mb-6 text-sm ${highlighted ? "text-indigo-100" : "text-gray-600"}`}
        >
          {description}
        </p>
        <Button
          className={`w-full ${highlighted ? "bg-white text-indigo-600 hover:bg-gray-100" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}
        >
          {buttonText}
        </Button>
      </div>
      <div
        className={`px-6 pb-6 pt-2 ${highlighted ? "border-t border-indigo-500" : "border-t border-gray-100"}`}
      >
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className={`w-4 h-4 mr-2 ${highlighted ? "text-indigo-200" : "text-indigo-600"}`}
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
                className={`text-sm ${highlighted ? "text-indigo-100" : "text-gray-600"}`}
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
