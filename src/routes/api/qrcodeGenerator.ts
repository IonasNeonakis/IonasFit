import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/qrcodeGenerator')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/api/qrcodeGenerator"!</div>
}
