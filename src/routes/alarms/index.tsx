import { createFileRoute } from '@tanstack/react-router'
import { loadingStore } from '@/stores/loadingStore'
import { useStore } from '@tanstack/react-store'

export const Route = createFileRoute('/alarms/')({
  component: RouteComponent,
})

function RouteComponent() {
  const isLoading = useStore(loadingStore)

  return <div>Hello "/alarms/"!</div>
}
