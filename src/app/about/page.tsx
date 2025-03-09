import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Award, Globe, Users, Clock, Target, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 主横幅 */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                关于我们
              </h1>
              <p className="text-xl text-gray-600">
                Acme Cloud
                致力于为企业提供高性能、安全可靠的云计算服务，帮助企业实现数字化转型，提升业务效率。
              </p>
              <Button size="lg" className="mt-4">
                了解更多
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="关于我们"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 我们的使命 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">我们的使命</h2>
            <p className="text-xl text-gray-600">
              通过技术创新，为企业提供可靠、高效、安全的云计算服务，
              助力企业在数字化时代保持竞争力，实现业务增长。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">全球视野</h3>
              <p className="text-gray-600">
                我们的服务覆盖全球多个区域，为企业提供全球化的云计算解决方案。
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">技术卓越</h3>
              <p className="text-gray-600">
                我们不断追求技术创新，为客户提供最先进、最可靠的云计算服务。
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">客户至上</h3>
              <p className="text-gray-600">
                我们始终将客户需求放在首位，提供专业的技术支持和优质的服务体验。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            发展历程
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 时间线 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

              <TimelineItem
                year="2018"
                title="公司成立"
                description="Acme Cloud 正式成立，开始提供基础云服务。"
                isLeft={true}
              />

              <TimelineItem
                year="2020"
                title="业务扩展"
                description="推出多款云产品，服务客户超过100家。"
                isLeft={false}
              />

              <TimelineItem
                year="2022"
                title="技术突破"
                description="自主研发新一代云计算平台，性能提升300%。"
                isLeft={true}
              />

              <TimelineItem
                year="2024"
                title="全球化布局"
                description="服务范围扩展至全球多个区域，成为行业领先企业。"
                isLeft={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            核心价值观
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<Target className="h-10 w-10" />}
              title="创新"
              description="不断探索技术前沿，推动行业发展"
            />
            <ValueCard
              icon={<Clock className="h-10 w-10" />}
              title="可靠"
              description="提供稳定、高效、安全的云服务"
            />
            <ValueCard
              icon={<TrendingUp className="h-10 w-10" />}
              title="成长"
              description="与客户共同成长，实现双赢"
            />
            <ValueCard
              icon={<Users className="h-10 w-10" />}
              title="协作"
              description="团队协作，共创价值"
            />
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">与我们合作</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            无论您是初创企业还是大型集团，我们都能为您提供专业的云计算解决方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">联系我们</Button>
            <Button size="lg" variant="outline">
              查看解决方案
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// 时间线项组件
function TimelineItem({
  year,
  title,
  description,
  isLeft,
}: {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
}) {
  return (
    <div className="relative mb-16">
      <div
        className={`flex items-center ${isLeft ? "justify-end" : "justify-start"} w-1/2 ${isLeft ? "pr-8" : "pl-8"}`}
      >
        <div
          className={`bg-white p-6 rounded-xl shadow-md max-w-xs ${isLeft ? "text-right" : "text-left"}`}
        >
          <div className="text-blue-600 font-bold text-xl mb-2">{year}</div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {/* 时间点 */}
      <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white"></div>

      {/* 空白区域 */}
      <div
        className={`absolute top-0 ${isLeft ? "left-0" : "right-0"} w-1/2 h-full`}
      ></div>
    </div>
  );
}

// 价值观卡片组件
function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition-shadow">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
