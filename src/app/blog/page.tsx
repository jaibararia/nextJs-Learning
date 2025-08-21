import Link from "next/link"
import { getAllPosts } from "./posts"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-6">
            <Link href={`/blog/${post.slug}`} className="group block hover:bg-gray-50 p-4 rounded-lg transition-colors">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600">{post.title}</h2>

              <p className="text-gray-600 mb-3">{post.excerpt}</p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>

                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3 text-blue-600 group-hover:text-blue-800">Read more →</div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-xl text-gray-600 mb-4">No blog posts yet</h2>
          <p className="text-gray-500">Check back soon for new content!</p>
        </div>
      )}
    </div>
  )
}