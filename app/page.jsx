import React from "react"

export default function Home() {
  return (
    <main className="bg-redish flex min-h-screen flex-col items-center justify-center md:p-24 p-12">
      <div className="w-full flex flex-col items-center justify-center gap-6">
        <img src="/images/logo-dcc.svg" alt="Design Culture Company" className="w-[300px] md:w-[350px]" />
        <div className="flex flex-col items-center justify-center">
          <span className="text-white text-xl md:text-2xl roboto-thin">we&apos;ll be right back</span>
          <a href="mailto:contact@designculture.company" target="_blank" rel="noreferrer" className="text-white text-md md:text-xl roboto-thin">contact@designculture.company</a>
        </div>
      </div>
    </main>
  );
}
