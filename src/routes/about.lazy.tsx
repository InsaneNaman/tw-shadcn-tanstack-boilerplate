import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return <div className="p-2 text-red-500">Hello from About!</div>
}