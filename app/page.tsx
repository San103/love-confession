"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import heart from "@/public/heart.json";
import { useState } from "react";

const m = "Don't make me do this, Say YES or I'll use this!";
export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState(m);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1
        className="text-6xl pt-10 text-center font-bold font-[family-name:var(--font-dyna-puff)] uppercase drop-shadow-lg text-white
      "
      >
        Do you wanna go out
        <br /> with me?
      </h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="relative">
          <div className="relative top-5 bg-white uppercase max-w-48 font-[family-name:var(--font-rancho)] p-4 left-20 bg-red-10 text-slate-600 rounded-lg shadow-md text-center text-sm">
            {message}
            <div className="absolute right-4 -bottom-2 w-0 h-0 border-t-8 border-t-white border-x-8 border-x-transparent"></div>
          </div>
          <Image
            src="/knife.gif"
            alt="Next.js logo"
            width={450}
            height={420}
            priority
          />
          {isPlaying && (
            <Lottie
              animationData={heart}
              className="w-40 h-40 absolute top-0 right-32 -z-10"
              loop={false}
            />
          )}
          <div className="h-[50px] w-[300px] bg-slate-500 opacity-20 rounded-[50%] absolute -z-10 bottom-7 left-7"></div>
        </div>

        <ol className=" text-sm text-center font-[family-name:var(--font-geist-mono)] uppercase w-full">
          {/* <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li> */}
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row w-full justify-center">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] bg-red-500 text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => {
              setMessage("This knife is sharp enough to cut a throat😠");
            }}
            onMouseLeave={() => {
              setMessage(m);
            }}
          >
            <Image
              className="dark:invert"
              src="/close.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            NO
          </a>
          <div className=""></div>
          <a
            className="bg-white rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-red-300 hover:text-white text-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => {
              setIsPlaying(true);
              setMessage("But I might change my mind for you ❤️");
            }}
            onMouseLeave={() => {
              setIsPlaying(false);
              setMessage(m);
            }}
          >
            <Image
              className="mr-3"
              src="/heart.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            YES, IM IN
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm text-slate-800"
          href="https://github.com/San103"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          San103 - Feb 5, 2025
        </a>
      </footer>
    </div>
  );
}
