import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="p-4">
      <h1 className="font-semibold text-2xl">Note</h1>
    </div>
  )
}
