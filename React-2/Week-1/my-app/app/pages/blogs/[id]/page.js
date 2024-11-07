"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function BlogPost() {
  const pathname = usePathname();
  const post = pathname.split("/").slice(3).join("").replace(/-/g, " ");

  return <p>Current pathname: {post}</p>;
}
