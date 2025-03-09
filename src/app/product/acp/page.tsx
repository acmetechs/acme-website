import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cloud,
  Shield,
  Zap,
  Server,
  Globe,
  Lock,
} from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* 主横幅 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-purple-600/20" />
        <div className="container relative z-10 mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-8 animate-fade-up">
            重新定义云计算基础设施
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 mb-12 animate-fade-up animation-delay-200">
            Acme Cloud Platform
            提供企业级云服务解决方案，让您的业务在数字时代保持领先
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-300">
            <Button
              size="lg"
              className="bg-purple-500 text-black hover:bg-purple-600"
            >
              开始使用
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-black hover:bg-gray-200"
            >
              预约演示
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px] opacity-10" />
      </section>

      {/* 特性部分 */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            为未来而构建的云平台
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="极致性能"
              description="采用最新的硬件架构和优化技术，提供毫秒级响应时间和超高吞吐量"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="安全可靠"
              description="多重安全防护，99.99% 可用性保证，让您的业务永不停歇"
            />
            <FeatureCard
              icon={<Server className="h-8 w-8" />}
              title="弹性伸缩"
              description="智能负载均衡，自动扩缩容，轻松应对业务高峰"
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8" />}
              title="全球部署"
              description="多区域数据中心，就近接入，全球化业务轻松拓展"
            />
            <FeatureCard
              icon={<Lock className="h-8 w-8" />}
              title="数据加密"
              description="全链路加密，多重认证，保护您的数据安全"
            />
            <FeatureCard
              icon={<Cloud className="h-8 w-8" />}
              title="智能运维"
              description="AI 驱动的智能监控和故障预测，提前发现并解决问题"
            />
          </div>
        </div>
      </section>

      {/* 解决方案展示 */}
      <section id="solutions" className="py-24 bg-black">
        <div className="container px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            为各行业打造的解决方案
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <SolutionCard
              image="/placeholder.svg?height=400&width=600"
              title="金融科技"
              description="为金融机构提供高性能、安全可靠的云计算服务，支持海量交易处理和实时风控"
            />
            <SolutionCard
              image="/placeholder.svg?height=400&width=600"
              title="电子商务"
              description="弹性伸缩的架构设计，轻松应对大促活动，提供流畅的购物体验"
            />
            <SolutionCard
              image="/placeholder.svg?height=400&width=600"
              title="人工智能"
              description="强大的计算能力和优化的深度学习框架，加速AI模型训练和推理"
            />
            <SolutionCard
              image="/placeholder.svg?height=400&width=600"
              title="物联网"
              description="支持海量设备接入和实时数据处理，打造智能物联网平台"
            />
          </div>
        </div>
      </section>

      {/* 客户评价 */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            受到全球客户信赖
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="我是一个人，一个虚假人物，被redish拉过来随便讲两句占位"
              author="张三"
              title="某科技公司 CTO"
            />
            <TestimonialCard
              quote="jason的ACME Cloud平台为我们提供了高性能的云计算服务，让我们的业务更上一层楼。"
              author="李四"
              title="某电商平台 技术总监"
            />
            <TestimonialCard
              quote="啊啊啊啊啊啊啊啊。啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
              author="jason"
              title="jason"
            />
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="py-24 bg-black">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            开启您的云端之旅
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            我们的专业团队随时为您提供支持，帮助您实现业务数字化转型
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-500 text-black hover:bg-purple-600"
            >
              立即咨询
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-black hover:bg-gray-200"
            >
              预约演示
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// 特性卡片组件
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
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
      <div className="mb-4 text-blue-400">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function SolutionCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={600}
        height={400}
        className="object-cover w-full h-[300px] transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

// 客户评价卡片组件
function TestimonialCard({
  quote,
  author,
  title,
}: {
  quote: string;
  author: string;
  title: string;
}) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <p className="text-lg mb-6 text-gray-300">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
    </div>
  );
}
