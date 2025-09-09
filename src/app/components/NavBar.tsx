"use client";

import { usePopups } from "./PopupProvider";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const { openDonation, openVolunteer } = usePopups();
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerBg = mobileOpen ? "bg-white" : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80";
  return (
    <header className={`sticky top-0 z-50 ${headerBg} border-b border-black/10`}>
      <div className="ffc-container h-[92px] flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3" aria-label="Free For Charity home">
          <img
            src="/web-app-manifest-512x512.png"
            alt="Free For Charity logo"
            width={70}
            height={46}
            className="w-[70px] h-[46px] object-contain"
            loading="eager"
          />
          <span className="font-[var(--font-faustina)] text-[24px] leading-[30px] text-black hidden sm:inline">Free For Charity</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-black">
          <Link className="font-[var(--font-lato)] text-[15px] leading-[18px] cursor-pointer hover:text-primary hover:underline underline-offset-4 transition-colors" href="/">Home</Link>

          <div className="flex items-center gap-1">
            <a className="font-[var(--font-lato)] text-[15px] leading-[18px] cursor-pointer hover:text-primary hover:underline underline-offset-4 transition-colors" href="#programs">Help for Charities</a>
            <ChevronDown />
          </div>

          <button onClick={openVolunteer} className="font-[var(--font-lato)] text-[15px] leading-[18px] cursor-pointer hover:text-primary hover:underline underline-offset-4 transition-colors">Volunteer</button>
          <button onClick={openDonation} className="font-[var(--font-lato)] text-[15px] leading-[18px] cursor-pointer hover:text-primary hover:underline underline-offset-4 transition-colors">Donate</button>

          <div className="flex items-center gap-1">
            <a className="font-[var(--font-lato)] text-[15px] leading-[18px] cursor-pointer hover:text-primary hover:underline underline-offset-4 transition-colors" href="#about">About Us</a>
            <ChevronDown />
          </div>

          <div className="flex items-center gap-1">
            <a className="font-[var(--font-lato)] text-[15px] leading-[18px] cursor-pointer hover:text-primary hover:underline underline-offset-4 transition-colors" href="#faq">Other</a>
            <ChevronDown />
          </div>
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={openDonation} className="rounded-[27px] bg-primary text-white px-4 py-2 text-sm font-[var(--font-lato)] cursor-pointer hover:brightness-110 transition">
            Donate
          </button>
          <button aria-label="Open menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(true)} className="p-2 -mr-2">
            <Hamburger />
          </button>
        </div>
      </div>

      {/* Mobile slide-out menu */}
      <div className={`md:hidden fixed inset-0 z-[100] overflow-hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity z-0 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
        {/* Panel */}
        <nav
          className={`absolute right-0 top-0 h-full w-[70%] max-w-[300px] bg-white ${mobileOpen ? "shadow-2xl" : "shadow-none"} border-l border-black/10 z-10
            transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-[120%]"}`}
          role="dialog"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between h-[72px] px-4 border-b">
            <span className="font-[var(--font-faustina)] text-[18px]">Menu</span>
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="p-2 rounded hover:bg-black/5">
              <CloseIcon />
            </button>
          </div>
          <div className="p-4 grid gap-2">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-3 rounded hover:bg-black/5 font-[var(--font-lato)] text-[16px]">Home</Link>
            <a href="#programs" onClick={() => setMobileOpen(false)} className="block px-3 py-3 rounded hover:bg-black/5 font-[var(--font-lato)] text-[16px]">Help for Charities</a>
            <button
              onClick={() => { setMobileOpen(false); openVolunteer(); }}
              className="text-left px-3 py-3 rounded hover:bg-black/5 font-[var(--font-lato)] text-[16px]"
            >
              Volunteer
            </button>
            <button
              onClick={() => { setMobileOpen(false); openDonation(); }}
              className="text-left px-3 py-3 rounded hover:bg-black/5 font-[var(--font-lato)] text-[16px]"
            >
              Donate
            </button>
            <a href="#about" onClick={() => setMobileOpen(false)} className="block px-3 py-3 rounded hover:bg-black/5 font-[var(--font-lato)] text-[16px]">About Us</a>
            <a href="#faq" onClick={() => setMobileOpen(false)} className="block px-3 py-3 rounded hover:bg-black/5 font-[var(--font-lato)] text-[16px]">Other</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function ChevronDown() {
  return (
    <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M1 1L4 3L7 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Hamburger() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}


