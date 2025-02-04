import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-48 animate-fade-up">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              这是一条通知{' '}
              <a href="#" className="font-semibold text-slate-600">
                <span aria-hidden="true" className="absolute inset-0" />
                阅读更多 <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              slogan
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Hurr durr, Im'a greate place holder
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button>按钮</Button>
              <Button variant="secondary">按钮的跟班</Button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
