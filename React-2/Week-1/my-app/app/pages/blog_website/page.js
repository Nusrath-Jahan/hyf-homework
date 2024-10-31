// pages/blogs/index.js
import Link from "next/link";

export default function Blogs() {
  const blogPosts = [
    { id: "my-first-post", title: "My First Post" },
    { id: "nasa-journey", title: "NASA Journey" },
    { id: "mars-exploration", title: "Mars Exploration" },
  ];

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/blogs/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
