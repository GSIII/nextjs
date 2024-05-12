import React from "react";

export default async function PostDetail(props) {
  const res = await fetch(`http://localhost:3001/posts/${props.params.id}`);
  const data = await res.json();
  return (
    <>
      <h2>{data.title}</h2>
      <div>{data.content}</div>
    </>
  );
}
