"use client";
import { useState } from "react";
import Link from "next/link";
import {
  MenuIcon,
  ShieldIcon,
  Cloud,
  Server,
  Lock,
  Database,
  HardDrive,
  Globe,
  Github,
  MessageSquare,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function NavBar() {
  // 原始导航配置（完整保留）
  const navigation = [
    { name: "Member", href: "#" },
    { name: "Club", href: "#" },
    { name: "Docs", href: "#" },
    { name: "About", href: "#" },
  ];

  const products = [
    {
      name: "QimenIDC",
      description: "新一代高性能公有云平台，为企业提供弹性、安全、高效的云计算服务。",
      href: "/product/qimenidc",
      icon: Cloud,
    },
    {
      name: "LoadIDC",
      description: "企业级IDC业务管理系统，提供高效、稳定、安全的数据中心基础设施管理解决方案。",
      href: "/product/idc",
      icon: Server,
    },
    {
      name: "私有云系统",
      description: "为企业打造专属云环境，提供安全、可控、高效的私有云基础设施。",
      href: "/product/private-cloud",
      icon: Lock,
    },
    {
      name: "云数据库控制器",
      description: "一站式云数据库管理平台，简化数据库运维，提升数据库性能和可靠性。",
      href: "/product/database",
      icon: Database,
    },
    {
      name: "云存储桶",
      description: "安全、可靠、高性能的云存储解决方案，满足各类数据存储需求。",
      href: "/product/storage",
      icon: HardDrive,
    },
    {
      name: "Acme Cloud Platform",
      description: "重新定义云计算基础设施，为您提供企业级云服务解决方案。",
      href: "/product/acp",
      icon: Globe,
    },
  ];

  const services = [
    {
      name: "初七云",
      description: "企业级云计算解决方案，提供安全可靠的云基础设施服务",
      href: "#",
      icon: Cloud,
    },
    {
      name: "初星边缘",
      description: "分布式边缘计算平台，实现低延迟数据处理",
      href: "#",
      icon: ShieldIcon,
    },
  ];

  const support = [
    {
      name: "GitHub",
      description: "访问我们的开源仓库",
      href: "https://github.com/your-org",
      icon: Github,
    },
    {
      name: "QQ群",
      description: "加入开发者交流社区",
      href: "#",
      icon: MessageSquare,
    },
    {
      name: "论坛",
      description: "参与技术讨论与问题解答",
      href: "#",
      icon: Users,
    },
  ];

  // 移动端菜单状态管理（改进后）
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMobileMenu = (menu: string) => {
    setActiveMenu(prev => prev === menu ? null : menu);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo 保持不变 */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Acme Cloud
            </span>
          </Link>
        </div>

        {/* 移动端菜单（改进后） */}
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:bg-gray-100"
              >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">打开主菜单</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full sm:max-w-sm flex flex-col">
              {/* 移动端菜单内容（完整保留交互逻辑） */}
              <VisuallyHidden>
                <SheetTitle>导航菜单</SheetTitle>
              </VisuallyHidden>
              <div className="flex-1 overflow-y-auto py-4">
                {/* 菜单项结构保持原始样式 */}
                <div className="space-y-6">
                  {/* 产品菜单 */}
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleMobileMenu('products')}
                      className="flex w-full items-center justify-between rounded-lg p-3 hover:bg-gray-100"
                    >
                      <span className="font-medium">产品</span>
                      {activeMenu === 'products' ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {activeMenu === 'products' && (
                      <div className="space-y-2 pl-4">
                        {products.map((product) => (
                          <SheetClose asChild key={product.name}>
                            {/* 保持原始链接样式 */}
                            <Link
                              href={product.href}
                              className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100"
                            >
                              <product.icon className="h-6 w-6 shrink-0 text-blue-600" />
                              <div>
                                <div className="font-medium">{product.name}</div>
                                <div className="text-sm text-gray-500">
                                  {product.description}
                                </div>
                              </div>
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 服务菜单（结构与产品菜单一致） */}
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleMobileMenu('services')}
                      className="flex w-full items-center justify-between rounded-lg p-3 hover:bg-gray-100"
                    >
                      <span className="font-medium">服务</span>
                      {activeMenu === 'services' ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {activeMenu === 'services' && (
                      <div className="space-y-2 pl-4">
                        {services.map((service) => (
                          <SheetClose asChild key={service.name}>
                            <Link
                              href={service.href}
                              className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100"
                            >
                              <service.icon className="h-6 w-6 shrink-0 text-blue-600" />
                              <div>
                                <div className="font-medium">{service.name}</div>
                                <div className="text-sm text-gray-500">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 支持菜单（结构与产品菜单一致） */}
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleMobileMenu('support')}
                      className="flex w-full items-center justify-between rounded-lg p-3 hover:bg-gray-100"
                    >
                      <span className="font-medium">支持</span>
                      {activeMenu === 'support' ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {activeMenu === 'support' && (
                      <div className="space-y-2 pl-4">
                        {support.map((item) => (
                          <SheetClose asChild key={item.name}>
                            <Link
                              href={item.href}
                              className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100"
                            >
                              <item.icon className="h-6 w-6 shrink-0 text-blue-600" />
                              <div>
                                <div className="font-medium">{item.name}</div>
                                <div className="text-sm text-gray-500">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 常规导航链接（保持原始结构） */}
                  <div className="space-y-2">
                    {navigation.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                          href={item.href}
                          className="block rounded-lg p-3 font-medium hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* 桌面端导航（100%保留原始结构） */}
        <div className="hidden lg:flex lg:gap-x-12">
          {/* 产品菜单 */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-semibold text-gray-900 hover:bg-gray-100">
                  产品
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4">
                  <div className="grid w-[600px] grid-cols-2 gap-4">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="flex h-full items-start gap-4 rounded-lg p-4 hover:bg-gray-50">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                            <product.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="font-medium">{product.name}</div>
                            <div className="text-sm text-gray-500">
                              {product.description}
                            </div>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* 服务菜单 */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-semibold text-gray-900 hover:bg-gray-100">
                  服务
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4">
                  <div className="grid w-[400px] gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="flex items-center gap-4 rounded-lg p-4 hover:bg-gray-50">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                            <service.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="font-medium">{service.name}</div>
                            <div className="text-sm text-gray-500">
                              {service.description}
                            </div>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* 支持菜单 */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-semibold text-gray-900 hover:bg-gray-100">
                  支持
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4">
                  <div className="grid w-[300px] gap-2">
                    {support.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="flex items-center gap-4 rounded-lg p-4 hover:bg-gray-50">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                            <item.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-gray-500">
                              {item.description}
                            </div>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* 常规导航链接 */}
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 右侧空白区域（保持原始布局） */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
      </nav>
    </header>
  );
}