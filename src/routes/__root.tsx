import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-zinc-950">
      <Header />
      <main className="flex-1 flex flex-col justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
})
