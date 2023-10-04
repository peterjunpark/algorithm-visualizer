import React from "react";
import Link from "next/link";
import ThemeToggle from "./theme/toggle";
import { LuGithub, LuInfo } from "react-icons/lu";

export default function header({ home }: { home?: boolean }) {
  const titlePrefix = "sorting";

  return (
    <header className="navbar absolute bg-base-100">
      <div className="navbar-start">
        <a
          aria-label="Github repository this website's source code"
          href="https://github.com/qkrwns/algorithm-visualizer"
          target="_blank"
          className="btn btn-circle btn-ghost text-xl"
        >
          <LuGithub />
        </a>
      </div>
      {!home && (
        <div className="navbar-center">
          <Link href="/">
            <h1 className="btn btn-ghost text-2xl normal-case" tabIndex={0}>
              <span className="text-accent">{titlePrefix}</span>
              visualizer
            </h1>
          </Link>
        </div>
      )}
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </header>
  );
}
