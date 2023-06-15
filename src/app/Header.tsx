"use client";

import Image from "next/image";
import Link from "next/link";
import profile from "../../public/profile.jpeg";

export default function Header() {
  return (
    <>
      <header className="flex flex-col px-12 pt-12 gap-4">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <h1 className="text-3xl my-2">Jian Rong Loh</h1>
          <nav className="flex justify-between text-base">
            <Link href="/">About</Link>
            <span className="mx-2">/</span>
            <a href="/jianrong_loh_resume.pdf">Resume</a>
            <span className="mx-2">/</span>
            <a
              href="https://www.linkedin.com/in/jianrong7/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
            <span className="mx-2">/</span>
            <a
              href="https://github.com/jianrong7"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row-reverse sm:justify-between">
          <Image
            src={profile}
            width={150}
            height={150}
            alt="profile"
            className="rounded-full"
            quality={100}
            priority={true}
            title="Profile Picture"
          />
          <p>
            I am based in Singapore. You can reach out to me at{" "}
            <code
              className="cursor-pointer tooltip"
              onClick={() =>
                navigator.clipboard.writeText("lohjianrong7@gmail.com")
              }
            >
              lohjianrong7@gmail.com
            </code>
            .
          </p>
        </div>
      </header>
    </>
  );
}
