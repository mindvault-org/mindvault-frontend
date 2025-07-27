import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="text-sm text-gray-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
            border ? "border-t border-white/10" : ""
          }`}
        >
          {/* Logo & copyright */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <Image
              src="/favicon.ico"
              alt="Mindvault Logo"
              width={32}
              height={32}
            />
            <div>
              &copy; {new Date().getFullYear()} Mindvault - All rights reserved.
            </div>
          </div>

          {/* Product */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-black font-medium">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-black transition" href="#">
                  Features
                </Link>
              </li>
              <li>
                <Link className="hover:text-black transition" href="#">
                  Integrations
                </Link>
              </li>
              <li>
                <Link className="hover:text-black transition" href="#">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="hover:text-black transition" href="#">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-black font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-black transition" href="#">
                  About Mindvault
                </Link>
              </li>
              <li>
                <Link className="hover:text-black transition" href="#">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="hover:text-black transition" href="#">
                  Privacy & Terms
                </Link>
              </li>
              <li>
                <Link className="hover:text-black transition" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-black font-medium">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-black transition" href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-black transition" href="#">
                  Support
                </Link>
              </li>
              <li>
                <Link className="hover:text-black transition" href="#">
                  API Docs
                </Link>
              </li>
              <li>
                <Link className="hover:text-black transition" href="#">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-black font-medium">Follow us</h3>
            <div className="flex gap-3">
              <Link
                href="#"
                className="hover:text-[#D56434]"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-[#6D66E7]"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-[#00d5ff]" aria-label="Blog">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Glow + Text Background */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute -mt-6 left-1/2 -translate-x-1/2 text-[256px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#D56434] via-[#6D66E7] to-[#00d5ff] opacity-10">
          Mindvault
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 translate-y-2/3">
          <div className="h-256 w-512 rounded-full bg-gradient-to-br from-[#D56434] via-[#6D66E7] to-[#00d5ff] blur-[120px] opacity-40"></div>
        </div>
      </div>
    </footer>
  );
}
