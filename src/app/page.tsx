"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { LuChevronsDown } from "react-icons/lu";

export default function Home() {
  const [titleIsClicked, setTitleIsClicked] = useState(false);

  const pages = [
    ["sorting", "/sorting?splen=2"],
    ["pathfinding", "/pathfinding"],
  ];

  return (
    <main className="flex h-full flex-col justify-center">
      <div
        onClick={() => {
          setTitleIsClicked(true);
        }}
        tabIndex={0}
        className={clsx("collapse", titleIsClicked && "collapse-open")}
      >
        <div className="collapse-title flex justify-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            <span className="text-accent-focus">algorithm&nbsp;</span>
            visualizer
          </h1>
        </div>
        <div className="collapse-content flex justify-around">
          <nav tabIndex={0}>
            <ul className="flex gap-8 text-4xl">
              {pages.map((page, index) => (
                <li key={index}>
                  <Link href={page[1]} className="link hover:text-accent">
                    {page[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
