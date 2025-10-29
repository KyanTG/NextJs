import { getPosts } from '@/lib/posts'
import { Post } from '@/ui/post'
 
export default async function Page() {
  const posts = await getPosts()
 
  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  )
}

function generateStaticParams() {}
 
export default function Page() {
  return <h1>Hello, Blog Post Page!</h1>
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params
    const post = await getPost(slug)
   
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    )
  }