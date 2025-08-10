import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="px-6 py-8 h-svh max-w-7xl mx-auto">
      <h1 className="font-semibold text-2xl">Note</h1>
    </div>
  )
}
