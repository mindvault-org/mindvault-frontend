import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-zinc-900">
      <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:grid-cols-12 lg:gap-8 xl:gap-0">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6">
            Capture, connect and retrieve your thoughts - instantly.
          </h1>
          <p className="text-lg md:text-xl font-light text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
            MindVault is your second brain: AI-powered, context-aware, and
            beautifully simple.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-white text-base font-medium bg-[#45d8ac] rounded-lg hover:bg-[#3cc39b] focus:ring-4 focus:ring-[#45d8ac]/40 transition"
            >
              Get Started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-zinc-900 border border-zinc-300 rounded-lg hover:bg-zinc-100 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-800 transition"
            >
              Speak to Sales
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:flex lg:col-span-5 lg:justify-center">
          <Image
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="MindVault app mockup"
            width={500}
            height={500}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
