"use client";
import Link from "next/link";
import { XIcon, MenuIcon } from "lucide-react";
import {
  Cloud,
  Server,
  Lock,
  Database,
  HardDrive,
  Globe,
  ChevronDown,
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
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const navigation = [
    { name: "Member", href: "#" },
    { name: "Club", href: "#" },
    { name: "Docs", href: "#" },
    { name: "About", href: "#" },
  ];

  const products = [
    {
      name: "QimenIDC",
      description:
        "新一代高性能公有云平台，为企业提供弹性、安全、高效的云计算服务。",
      href: "/product/qimenidc",
      icon: Cloud,
    },
    {
      name: "LoadIDC",
      description:
        "企业级IDC业务管理系统，提供高效、稳定、安全的数据中心基础设施管理解决方案。",
      href: "/product/idc",
      icon: Server,
    },
    {
      name: "私有云系统",
      description:
        "为企业打造专属云环境，提供安全、可控、高效的私有云基础设施。",
      href: "/product/private-cloud",
      icon: Lock,
    },
    {
      name: "云数据库控制器",
      description:
        "一站式云数据库管理平台，简化数据库运维，提升数据库性能和可靠性。",
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

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white shadow-sm">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        {/* Logo on the left */}
        <div className="flex lg:w-1/4 justify-start">
          <Link href="/" className="-m-1.5 p-1.5">
            <span>Acme Cloud</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="-m-2.5 p-2.5 text-gray-700"
              >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span>初七云</span>
                </Link>
                <SheetClose className="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <XIcon className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </SheetClose>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {/* Mobile Product Dropdown */}
                    <div className="space-y-2">
                      <div className="-mx-3 flex items-center justify-between rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                        <span>Product</span>
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      </div>
                      <div className="pl-4 space-y-2">
                        {products.map((product) => (
                          <SheetClose asChild key={product.name}>
                            <Link
                              href={product.href}
                              className="-mx-3 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              <product.icon className="h-5 w-5 text-blue-600" />
                              {product.name}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </div>

                    {/* Regular Mobile Navigation Links */}
                    {navigation.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
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

        {/* Centered navigation */}
        <div className="hidden lg:flex lg:w-2/4 justify-center items-center">
          <div className="flex items-center gap-x-8">
            {/* Product Dropdown Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm/6 font-semibold text-gray-900 bg-transparent hover:bg-gray-50">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 md:w-[500px] lg:w-[600px]">
                      {products.map((product) => (
                        <NavigationMenuLink asChild key={product.name}>
                          <Link
                            href={product.href}
                            className="flex items-center gap-3 rounded-md p-3 hover:bg-gray-50"
                          >
                            {/* 修正后的正方形容器 */}
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                              <product.icon className="h-6 w-6" />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h3 className="text-sm font-medium">
                                {product.name}
                              </h3>
                              <p className="text-xs text-gray-500 line-clamp-2">
                                {product.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Regular Navigation Links */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side - empty space for balance */}
        <div className="hidden lg:flex lg:w-1/4 justify-end">
          {/* You can add buttons or other elements here if needed */}
        </div>
      </nav>
    </header>
  );
}
