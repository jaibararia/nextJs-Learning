// Blog post type definition
export interface BlogPost {
    slug: string
    title: string
    date: string
    excerpt: string
    content: string
    tags: string[]
  }
  
  // Sample blog posts data
  // In a real app, you might load this from markdown files, a CMS, or database
  const posts: BlogPost[] = [

// Add this new post to your posts array
{
    slug: "my-new-awesome-post",
    title: "My New Awesome Post",
    date: "2024-01-30",
    excerpt: "This is a brief description of my new blog post that will appear on the main blog page.",
    content: `
      <h2>This is My New Post</h2>
      <p>Here I can write anything I want about my new topic.</p>
      
      <h3>Some Key Points</h3>
      <ul>
        <li>Point number one</li>
        <li>Point number two</li>
        <li>Point number three</li>
      </ul>
      
      <p>And I can continue writing more content here...</p>
    `,
    tags: ["new", "awesome", "blog"]
  }
]

// Get all posts, sorted by date (newest first)
export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
  return posts.filter((post) => post.tags.includes(tag))
}