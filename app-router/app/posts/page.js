import React from "react";
import Link from "next/link";

export default async function PostLists() {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" });
  const posts = await res.json();
  console.log(posts);
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
