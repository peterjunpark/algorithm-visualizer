import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-4xl text-error-content">404 | page not found</h1>
      <Link href="/" className="link-error link m-3 text-3xl">
        go back home
      </Link>
    </div>
  );
}
