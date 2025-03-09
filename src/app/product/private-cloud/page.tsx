import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Lock,
  Shield,
  Zap,
  Server,
  Layers,
  Settings,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function PrivateCloudPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 主横幅 */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                私有云系统
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 ml-2">
                待规划
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                企业级私有云解决方案
              </h1>
              <p className="text-xl text-gray-600">
                为企业打造专属云环境，提供安全、可控、高效的私有云基础设施。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  预约咨询
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

      {/* 产品概述 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">产品概述</h2>
            <p className="text-xl text-gray-600">
              我们的私有云解决方案将为企业提供完全自主可控的云计算环境，满足企业对数据安全、合规和性能的严格要求。
              目前该产品正在规划阶段，我们将根据企业客户的需求，打造最适合的私有云解决方案。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lock className="h-8 w-8" />}
              title="数据主权"
              description="企业拥有完全的数据主权，数据存储在企业自有设施内，确保数据安全和合规。"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="安全可控"
              description="多层次安全架构，满足金融、政府等行业的严格安全要求。"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="高性能"
              description="专属硬件资源，无资源争抢，提供稳定、高性能的计算能力。"
            />
            <FeatureCard
              icon={<Server className="h-8 w-8" />}
              title="资源整合"
              description="整合企业IT资源，提高资源利用率，降低IT运维成本。"
            />
            <FeatureCard
              icon={<Layers className="h-8 w-8" />}
              title="灵活部署"
              description="支持多种部署模式，可根据企业需求进行定制化部署。"
            />
            <FeatureCard
              icon={<Settings className="h-8 w-8" />}
              title="自主管理"
              description="企业可完全自主管理云环境，灵活调整资源配置。"
            />
          </div>
        </div>
      </section>

      {/* 规划路线 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">产品规划路线</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 时间线 */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-200"></div>

              <RoadmapItem
                phase="研究阶段"
                status="进行中"
                description="深入研究企业私有云需求，分析行业痛点，确定产品定位和核心功能。"
                current={true}
              />

              <RoadmapItem
                phase="设计阶段"
                status="即将开始"
                description="系统架构设计，确定技术栈和实现方案，完成产品原型设计。"
                current={false}
              />

              <RoadmapItem
                phase="开发阶段"
                status="计划中"
                description="核心功能开发，包括资源管理、安全控制、监控系统等模块的实现。"
                current={false}
              />

              <RoadmapItem
                phase="测试阶段"
                status="计划中"
                description="系统测试和性能优化，确保系统稳定性和安全性。"
                current={false}
              />

              <RoadmapItem
                phase="发布阶段"
                status="计划中"
                description="产品正式发布，提供企业级私有云解决方案。"
                current={false}
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
              icon={<Users className="h-10 w-10" />}
              title="金融机构"
              description="满足金融机构对数据安全和合规的严格要求，提供安全可靠的私有云环境，保障关键业务系统和客户数据安全。"
            />
            <ScenarioCard
              icon={<Shield className="h-10 w-10" />}
              title="政府部门"
              description="为政府部门提供自主可控的IT基础设施，确保政务数据安全，支持电子政务系统高效运行。"
            />
            <ScenarioCard
              icon={<Server className="h-10 w-10" />}
              title="医疗机构"
              description="满足医疗行业对患者数据隐私保护的要求，提供安全合规的医疗信息系统基础设施。"
            />
            <ScenarioCard
              icon={<Layers className="h-10 w-10" />}
              title="大型企业"
              description="为大型企业提供统一的IT资源管理平台，整合分散的IT资源，提高资源利用率，降低运维成本。"
            />
          </div>
        </div>
      </section>

      {/* 预期优势 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">预期优势</h2>
              <div className="space-y-6">
                <AdvantageItem
                  title="降低TCO"
                  description="通过资源整合和自动化管理，降低企业IT总拥有成本。"
                />
                <AdvantageItem
                  title="提高安全性"
                  description="数据存储在企业内部，减少数据泄露风险，满足合规要求。"
                />
                <AdvantageItem
                  title="灵活扩展"
                  description="根据业务需求灵活扩展IT资源，支持业务快速发展。"
                />
                <AdvantageItem
                  title="简化管理"
                  description="统一的管理平台，简化IT运维工作，提高运维效率。"
                />
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="预期优势"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 需求调研 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">参与需求调研</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            我们正在收集企业对私有云的需求和建议，帮助我们打造更符合企业实际需求的私有云解决方案。
            欢迎填写需求调研问卷，您的反馈将对我们的产品规划产生重要影响。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              填写需求调研
            </Button>
            <Button size="lg" variant="outline">
              预约产品演示
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

// 路线图项组件
function RoadmapItem({
  phase,
  status,
  description,
  current,
}: {
  phase: string;
  status: string;
  description: string;
  current: boolean;
}) {
  return (
    <div className="relative pl-8 pb-12">
      {/* 时间点 */}
      <div
        className={`absolute left-0 top-0 transform -translate-x-1/2 w-5 h-5 rounded-full ${current ? "bg-blue-500" : "bg-gray-300"} border-4 border-white`}
      ></div>

      <div className="space-y-2">
        <div className="flex items-center">
          <h3 className="text-xl font-semibold">{phase}</h3>
          <span
            className={`ml-3 px-2 py-1 text-xs rounded-full ${current ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`}
          >
            {status}
          </span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

// 场景卡片组件
function ScenarioCard({
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
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
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
