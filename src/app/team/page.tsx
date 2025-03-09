import type React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 主横幅 */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              我们的团队
            </h1>
            <p className="text-xl text-gray-600">
              由行业专家组成的团队，致力于为客户提供最优质的云计算服务。
              我们的专业知识和丰富经验是您业务成功的坚实后盾。
            </p>
          </div>
        </div>
      </section>

      {/* 领导团队 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">领导团队</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard
              image="/placeholder.svg?height=400&width=400"
              name="张明"
              position="首席执行官"
              bio="拥有15年云计算行业经验，曾在多家知名科技公司担任高管职位。"
            />
            <TeamMemberCard
              image="/placeholder.svg?height=400&width=400"
              name="李华"
              position="首席技术官"
              bio="技术专家，主导开发了多项云计算核心技术，拥有多项专利。"
            />
            <TeamMemberCard
              image="/placeholder.svg?height=400&width=400"
              name="王芳"
              position="首席运营官"
              bio="运营管理专家，曾成功带领多个大型项目，拥有丰富的团队管理经验。"
            />
          </div>
        </div>
      </section>

      {/* 技术团队 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">技术团队</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMemberSmallCard
              image="/placeholder.svg?height=300&width=300"
              name="赵强"
              position="高级架构师"
            />
            <TeamMemberSmallCard
              image="/placeholder.svg?height=300&width=300"
              name="钱伟"
              position="安全专家"
            />
            <TeamMemberSmallCard
              image="/placeholder.svg?height=300&width=300"
              name="孙丽"
              position="数据库专家"
            />
            <TeamMemberSmallCard
              image="/placeholder.svg?height=300&width=300"
              name="周杰"
              position="网络工程师"
            />
            <TeamMemberSmallCard
              image="/placeholder.svg?height=300&width=300"
              name="吴敏"
              position="前端开发主管"
            />
            <TeamMemberSmallCard
              image="/placeholder.svg?height=300&width=300"
              name="郑阳"
              position="后端开发主管"
            />
            <TeamMemberSmallCard
              image="/placeholder.svg?height=300&width=300"
              name="冯雪"
              position="DevOps工程师"
            />
            <TeamMemberSmallCard
              image="/placeholder.svg?height=300&width=300"
              name="陈亮"
              position="AI研究员"
            />
          </div>
        </div>
      </section>

      {/* 运营团队 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">运营团队</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard
              image="/placeholder.svg?height=400&width=400"
              name="杨光"
              position="市场总监"
              bio="市场营销专家，擅长品牌建设和市场策略制定。"
            />
            <TeamMemberCard
              image="/placeholder.svg?height=400&width=400"
              name="林雨"
              position="客户成功总监"
              bio="专注于提升客户满意度和忠诚度，拥有丰富的客户服务经验。"
            />
            <TeamMemberCard
              image="/placeholder.svg?height=400&width=400"
              name="黄河"
              position="销售总监"
              bio="销售专家，擅长建立和维护客户关系，推动业务增长。"
            />
          </div>
        </div>
      </section>

      {/* 加入我们 */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">加入我们</h2>
            <p className="text-xl text-gray-600 mb-8">
              我们始终在寻找优秀的人才加入团队。如果您热爱技术，追求卓越，欢迎加入我们，一起创造未来。
            </p>
            <Button size="lg">查看职位</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// 团队成员卡片组件
function TeamMemberCard({
  image,
  name,
  position,
  bio,
}: {
  image: string;
  name: string;
  position: string;
  bio: string;
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-80">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-blue-600 mb-4">{position}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="flex space-x-3">
          <SocialButton icon={<Linkedin className="h-4 w-4" />} />
          <SocialButton icon={<Twitter className="h-4 w-4" />} />
          <SocialButton icon={<Mail className="h-4 w-4" />} />
        </div>
      </div>
    </div>
  );
}

// 小型团队成员卡片组件
function TeamMemberSmallCard({
  image,
  name,
  position,
}: {
  image: string;
  name: string;
  position: string;
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-60">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-blue-600 text-sm">{position}</p>
      </div>
    </div>
  );
}

// 社交媒体按钮组件
function SocialButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
      {icon}
    </button>
  );
}
