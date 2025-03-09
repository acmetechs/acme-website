import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Database,
  Shield,
  Zap,
  RefreshCw,
  BarChart,
  Clock,
  Settings,
} from "lucide-react";
import Image from "next/image";

export default function DatabasePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 主横幅 */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                云数据库控制器
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 ml-2">
                待排期
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                智能云数据库控制系统
              </h1>
              <p className="text-xl text-gray-600">
                一站式云数据库管理平台，简化数据库运维，提升数据库性能和可靠性。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  加入内测
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
          </div>
        </div>
      </section>

      {/* 产品概述 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">产品概述</h2>
            <p className="text-xl text-gray-600">
              云数据库控制器是一款专为企业打造的数据库管理平台，支持多种主流数据库，提供自动化运维、性能优化、数据安全等功能，
              帮助企业简化数据库管理，提高数据库性能和可靠性。目前该产品正在开发中，即将推出。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Database className="h-8 w-8" />}
              title="多数据库支持"
              description="支持MySQL、PostgreSQL、MongoDB、Redis等主流数据库，统一管理界面。"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="数据安全"
              description="自动备份、数据加密、访问控制等多重安全机制，保障数据安全。"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="性能优化"
              description="智能索引推荐、SQL优化、资源监控，提升数据库性能。"
            />
            <FeatureCard
              icon={<RefreshCw className="h-8 w-8" />}
              title="高可用保障"
              description="自动故障检测和恢复，主从切换，确保数据库高可用。"
            />
            <FeatureCard
              icon={<BarChart className="h-8 w-8" />}
              title="监控分析"
              description="全面的监控指标和分析报告，帮助您了解数据库运行状况。"
            />
            <FeatureCard
              icon={<Settings className="h-8 w-8" />}
              title="自动化运维"
              description="自动化部署、配置和维护，减少人工干预，提高运维效率。"
            />
          </div>
        </div>
      </section>

      {/* 开发进度 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">开发进度</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 进度条 */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-200"></div>

              <ProgressItem
                phase="需求分析"
                progress={100}
                description="收集用户需求，分析市场痛点，确定产品定位和核心功能。"
              />

              <ProgressItem
                phase="架构设计"
                progress={100}
                description="系统架构设计，确定技术栈和实现方案，完成产品原型设计。"
              />

              <ProgressItem
                phase="核心功能开发"
                progress={70}
                description="核心功能开发，包括数据库连接、监控、备份等基础功能。"
              />

              <ProgressItem
                phase="高级功能开发"
                progress={30}
                description="高级功能开发，包括性能优化、自动化运维、智能分析等功能。"
              />

              <ProgressItem
                phase="测试与优化"
                progress={10}
                description="系统测试和性能优化，确保系统稳定性和安全性。"
              />

              <ProgressItem
                phase="产品发布"
                progress={0}
                description="产品正式发布，提供企业级云数据库管理解决方案。"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 核心功能预览 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">核心功能预览</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="数据库监控"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">实时监控</h3>
              <p className="text-gray-600 mb-6">
                全面的数据库监控功能，包括CPU、内存、磁盘IO、连接数、查询性能等指标的实时监控，
                帮助您及时发现潜在问题，确保数据库稳定运行。
              </p>
              <ul className="space-y-2">
                <FeatureListItem text="多维度监控指标，全面了解数据库状态" />
                <FeatureListItem text="自定义告警规则，及时发现异常" />
                <FeatureListItem text="历史数据分析，掌握性能变化趋势" />
                <FeatureListItem text="直观的可视化界面，简化监控工作" />
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">智能优化</h3>
              <p className="text-gray-600 mb-6">
                基于AI的智能优化引擎，自动分析数据库性能瓶颈，提供优化建议，
                包括索引优化、SQL优化、参数调优等，帮助您提升数据库性能。
              </p>
              <ul className="space-y-2">
                <FeatureListItem text="智能索引推荐，优化查询性能" />
                <FeatureListItem text="SQL语句分析，发现低效查询" />
                <FeatureListItem text="参数自动调优，提升系统性能" />
                <FeatureListItem text="性能诊断报告，全面了解优化空间" />
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="智能优化"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="数据安全"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">数据安全</h3>
              <p className="text-gray-600 mb-6">
                全方位的数据安全保障，包括自动备份、数据加密、访问控制等功能，
                确保企业数据安全，防止数据丢失和未授权访问。
              </p>
              <ul className="space-y-2">
                <FeatureListItem text="自动备份计划，定期备份重要数据" />
                <FeatureListItem text="数据加密存储，保护敏感信息" />
                <FeatureListItem text="细粒度访问控制，防止未授权访问" />
                <FeatureListItem text="审计日志，记录所有操作行为" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 适用场景 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">适用场景</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScenarioCard
              icon={<Clock className="h-10 w-10" />}
              title="DevOps团队"
              description="简化数据库运维工作，提高团队效率，专注于业务创新。"
            />
            <ScenarioCard
              icon={<Database className="h-10 w-10" />}
              title="大规模数据库集群"
              description="统一管理大规模数据库集群，降低管理复杂度，提高资源利用率。"
            />
            <ScenarioCard
              icon={<Shield className="h-10 w-10" />}
              title="关键业务系统"
              description="为关键业务系统提供高可用、高性能的数据库支持，确保业务连续性。"
            />
            <ScenarioCard
              icon={<BarChart className="h-10 w-10" />}
              title="数据分析平台"
              description="优化数据分析平台的数据库性能，加速数据处理和分析。"
            />
          </div>
        </div>
      </section>

      {/* 内测申请 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">加入内测计划</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            我们正在招募内测用户，帮助我们完善产品功能和用户体验。
            作为内测用户，您将优先体验最新功能，并获得专属技术支持。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              申请内测资格
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
      <div className="mb-4 text-green-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// 进度项组件
function ProgressItem({
  phase,
  progress,
  description,
}: {
  phase: string;
  progress: number;
  description: string;
}) {
  return (
    <div className="relative pl-8 pb-12">
      {/* 进度点 */}
      <div
        className={`absolute left-0 top-0 transform -translate-x-1/2 w-5 h-5 rounded-full ${progress > 0 ? "bg-green-500" : "bg-gray-300"} border-4 border-white`}
      ></div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{phase}</h3>
          <span
            className={`px-2 py-1 text-xs rounded-full ${progress === 100 ? "bg-green-100 text-green-800" : progress > 0 ? "bg-amber-100 text-amber-800" : "bg-gray-100 text-gray-800"}`}
          >
            {progress === 100
              ? "已完成"
              : progress > 0
                ? `进行中 ${progress}%`
                : "未开始"}
          </span>
        </div>
        <p className="text-gray-600">{description}</p>
        {progress > 0 && progress < 100 && (
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

// 功能列表项组件
function FeatureListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <svg
        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
      <span className="text-gray-600">{text}</span>
    </li>
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
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
