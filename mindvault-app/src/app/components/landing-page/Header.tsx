"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/vercel.svg" alt="MindVault logo" width={32} height={32} />
          <span className="text-xl font-semibold text-gray-900 dark:text-white">
            MindVault
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link
            href="#features"
            className="hover:text-black dark:hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-black dark:hover:text-white"
          >
            Testimonials
          </Link>
          <Link href="#faq" className="hover:text-black dark:hover:text-white">
            FAQ
          </Link>
          <Link
            href="#contact"
            className="hover:text-black dark:hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center space-x-2">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium rounded-4xl text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 text-sm font-medium rounded-md bg-black text-white hover:bg-gray-800 transition"
          >
            Get started
          </Link>
        </div>

        {/* Mobile button */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link href="#features" className="block">
            Features
          </Link>
          <Link href="#testimonials" className="block">
            Testimonials
          </Link>
          <Link href="#faq" className="block">
            FAQ
          </Link>
          <Link href="#contact" className="block">
            Contact
          </Link>
          <Link href="/login" className="block mt-2">
            Log in
          </Link>
          <Link
            href="/signup"
            className="block bg-black text-white rounded-md px-3 py-2 w-fit"
          >
            Get started
          </Link>
        </div>
      )}
    </header>
  );
}
