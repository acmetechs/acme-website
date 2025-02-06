"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCarousel } from "../hooks/useCarousel"
import type { BannerItem } from "@/../types/banner"
import Image from "next/image"

interface BannerCarouselProps {
  items: BannerItem[]
  interval?: number
}

export function BannerCarousel({ items, interval = 5000 }: BannerCarouselProps) {
  const { current, next, previous, goTo, setIsPlaying } = useCarousel(items.length, interval)
  const [direction, setDirection] = useState(0)

  // 文字动画变体
  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.15, // 每个元素依次延迟
      },
    }),
    exit: (custom: number) => ({
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        delay: custom * 0.1,
      },
    }),
  }

  // 内容容器动画变体
  const contentVariants = {
    enter: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    center: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // 背景动画变体
  const backgroundVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  }

  const handleNext = () => {
    setDirection(1)
    next()
  }

  const handlePrevious = () => {
    setDirection(-1)
    previous()
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <AnimatePresence mode="wait">
        {/* Background */}
        <motion.div
          key={`bg-${items[current].id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={items[current].background.imageUrl || "/placeholder.svg"}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          key={`content-${items[current].id}`}
          variants={contentVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="relative z-10 mx-auto max-w-2xl py-32 sm:py-48 lg:py-48"
        >
          <motion.div variants={textVariants} custom={0} className="hidden sm:mb-8 sm:flex sm:justify-center">
            {items[current].notification && (
              <div className="relative rounded-full px-3 py-1 text-sm/6 bg-white/80 backdrop-blur-sm text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {items[current].notification.text}{" "}
                <a href={items[current].notification.link} className="font-semibold text-gray-900">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {items[current].notification.linkText} <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            )}
          </motion.div>
          <div className="text-center space-y-8">
            <motion.h1
              variants={textVariants}
              custom={1}
              className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl drop-shadow-md"
            >
              {items[current].title}
            </motion.h1>
            <motion.p
              variants={textVariants}
              custom={2}
              className="text-pretty text-lg font-medium text-white/90 sm:text-xl/8 drop-shadow"
            >
              {items[current].description}
            </motion.p>
            <motion.div variants={textVariants} custom={3} className="flex items-center justify-center gap-x-6">
              <Button size="lg" className="text-lg">
                {items[current].buttons.primary}
              </Button>
              <Button size="lg" variant="secondary" className="text-lg bg-white/20 backdrop-blur-sm hover:bg-white/30">
                {items[current].buttons.secondary}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${index === current ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            onClick={() => {
              setDirection(index > current ? 1 : -1)
              goTo(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}

