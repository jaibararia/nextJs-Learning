import Link from "next/link"
import { addEntry } from "./actions"
import { getEntries } from "./lib/data"

import { SubmitButton } from "./components/submit-button"

export default function HomePage() {
  const items = getEntries()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to My Website</h1>
          <p className="text-xl text-gray-600 mb-8">A place where I share my thoughts, learnings, and projects</p>

          <div className="space-x-4">
            <Link
              href="/blog"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read My Blog
            </Link>
            <Link
              href="/about"
              className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
            <p className="text-gray-600 mb-4">
              Check out my latest blog posts about web development, TypeScript, and Next.js.
            </p>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
              View all posts →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">About This Site</h2>
            <p className="text-gray-600 mb-4">
              Built with Next.js 14, TypeScript, and Tailwind CSS. A perfect playground for learning modern web
              development.
            </p>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn more →
            </Link>
          </div>

          {/* Add new entry */}
          <form action={addEntry} className="flex gap-2">
            <input
              type="text"
              name="text"
              required
              placeholder="Write something..."
              className="flex-1 border rounded px-3 py-2"
            />
            <SubmitButton />
          </form>

          <section className="space-y-3">
            {items.length === 0 ? (
              <p className="text-gray-600">No entries yet. Add your first one above.</p>
            ) : (
              items.map((item) => (
                <article key={item.id} className="border rounded p-3">
                  <p className="font-medium">{item.text}</p>
                  <time className="text-xs text-gray-500">{new Date(item.createdAt).toLocaleString()}</time>
                </article>
              ))
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
