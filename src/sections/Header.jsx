"use client";
import React, { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#0a0a0a] p-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-2xl flex items-center">
          <span className="text-[#ff2b2b]">TED</span>
          <sup className="text-sm text-[#ff2b2b] hidden sm:inline">x</sup>
          <span>Vssut</span>
        </div>

        {/* Hamburger menu button for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu items for desktop */}
        <ul className="hidden lg:flex space-x-6 text-[#999999] font-normal text-sm">
          <li>
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white transition-colors duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/speakers" className="hover:text-white transition-colors duration-200">
              Speakers
            </Link>
          </li>
          <li>
            <Link href="/venue" className="hover:text-white transition-colors duration-200">
              Venue
            </Link>
          </li>
          <li>
            <Link href="/crew" className="hover:text-white transition-colors duration-200">
              Crew
            </Link>
          </li>
          <li>
            <Link href="/sponsors" className="hover:text-white transition-colors duration-200">
              Sponsors
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-white transition-colors duration-200">
              Gallery
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="bg-[#8b0000] hover:bg-[#700000] text-white text-sm px-5 py-2 rounded transition-colors duration-200 hidden lg:inline-block"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-0 left-0 w-full bg-[#0a0a0a] p-4`}
      >
        <ul className="space-y-4 text-[#999999] text-sm">
          <li>
            <Link href="/" className="hover:text-white transition-colors duration-200" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white transition-colors duration-200" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/speakers" className="hover:text-white transition-colors duration-200" onClick={toggleMenu}>
              Speakers
            </Link>
          </li>
          <li>
            <Link href="/venue" className="hover:text-white transition-colors duration-200" onClick={toggleMenu}>
              Venue
            </Link>
          </li>
          <li>
            <Link href="/crew" className="hover:text-white transition-colors duration-200" onClick={toggleMenu}>
              Crew
            </Link>
          </li>
          <li>
            <Link href="/sponsors" className="hover:text-white transition-colors duration-200" onClick={toggleMenu}>
              Sponsors
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-white transition-colors duration-200" onClick={toggleMenu}>
              Gallery
            </Link>
          </li>
        </ul>

        <Link
          href="/contact"
          className="bg-[#8b0000] hover:bg-[#700000] text-white text-sm px-5 py-2 rounded transition-colors duration-200 block mt-4"
          onClick={toggleMenu}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};
