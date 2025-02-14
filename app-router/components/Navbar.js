import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">홈페이지</Link>
        </li>
        <li>
          <Link href="/posts">글 목록</Link>
        </li>
        <li>
          <Link href="/create">글 생성</Link>
        </li>
      </ul>
    </>
  );
}
