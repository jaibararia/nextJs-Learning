import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllPosts, getPostBySlug } from "../posts"

// This generates static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// This generates metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back to blog link */}
      <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
        ← Back to Blog
      </Link>

      {/* Article header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center justify-between text-gray-600 mb-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>

          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="text-xl text-gray-700 leading-relaxed">{post.excerpt}</p>
      </header>

      {/* Article content */}
      <article className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} className="space-y-6" />
      </article>

      {/* Navigation to other posts */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          ← View all posts
        </Link>
      </footer>
    </div>
  )
}