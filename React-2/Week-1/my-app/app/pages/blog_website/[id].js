// pages/blogs/[id].js
import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  // Convert the URL parameter to title case
  const title = id
    ? id.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
    : "";

  return (
    <div>
      <h1>{title}</h1>
      <p>This is the blog post: {title}</p>
    </div>
  );
}
