import Image from "next/image";
import { ArrowRight } from "lucide-react";
import image from "@/app/favicon.ico";

export default function Cta() {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-800"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-[#6D66E7] blur-3xl opacity-50" />
          </div>

          {/* Background Illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform opacity-20"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={image}
              width={768}
              height={432}
              alt="Background pattern"
            />
          </div>

          {/* CTA Content */}
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y border-white/10 py-4 text-3xl font-bold text-white md:mb-12 md:text-4xl">
              Ready to build your second brain?
            </h2>

            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-tr from-[#D56434] to-[#6D66E7] px-6 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 sm:w-auto"
                href="#"
              >
                Start Free Trial
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
