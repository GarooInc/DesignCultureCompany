import React from "react"

export default function Home() {
  return (
    <main className="bg-redish flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <img src="/images/logo-dcc.svg" alt="Design Culture Company" className="w-72" />
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-white text-2xl roboto-thin">we&apos;ll be right back</span>
          <a href="mailto:contact@designculture.company" target="_blank" rel="noreferrer" className="text-white text-xl roboto-thin">contact@designculture.company</a>
        </div>
      </div>
    </main>
  );
}
