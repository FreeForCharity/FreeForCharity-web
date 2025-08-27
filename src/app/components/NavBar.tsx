"use client";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-black/10">
      <div className="ffc-container h-[92px] flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="/" className="flex items-center gap-3" aria-label="Free For Charity home">
          <div className="w-[70px] h-[46px] bg-[url('/web-app-manifest-512x512.png')] bg-contain bg-left bg-no-repeat" aria-hidden />
          <span className="font-[var(--font-faustina)] text-[24px] leading-[30px] text-black hidden sm:inline">Free For Charity</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-black">
          <a className="font-[var(--font-fauna-one)] text-[15px] leading-[18px] cursor-pointer hover:text-primary hover:underline underline-offset-4 transition-colors" href="/">Home</a>

          <div className="flex items-center gap-1">
            <a className="font-[var(--font-fauna-one)] text-[15px] leading-[18px] cursor-pointer hover:text-primary hover:underline underline-offset-4 transition-colors" href="#">Help for Charities</a>
            <ChevronDown />
          </div>

          <a className="font-[var(--font-fauna-one)] text-[15px] leading-[18px] cursor-pointer hover:text-primary hover:underline underline-offset-4 transition-colors" href="#volunteer">Volunteer</a>
          <button onClick={() => window.dispatchEvent(new Event("open-donation-popup"))} className="font-[var(--font-fauna-one)] text-[15px] leading-[18px] cursor-pointer hover:text-primary hover:underline underline-offset-4 transition-colors">Donate</button>

          <div className="flex items-center gap-1">
            <a className="font-[var(--font-fauna-one)] text-[15px] leading-[18px] cursor-pointer hover:text-primary hover:underline underline-offset-4 transition-colors" href="#">About Us</a>
            <ChevronDown />
          </div>

          <div className="flex items-center gap-1">
            <a className="font-[var(--font-fauna-one)] text-[15px] leading-[18px] cursor-pointer hover:text-primary hover:underline underline-offset-4 transition-colors" href="#">Other</a>
            <ChevronDown />
          </div>
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => window.dispatchEvent(new Event("open-donation-popup"))} className="rounded-[27px] bg-primary text-white px-4 py-2 text-sm font-[var(--font-lato)] cursor-pointer hover:brightness-110 transition">
            Donate
          </button>
          <button aria-label="Open menu" className="p-2 -mr-2">
            <Hamburger />
          </button>
        </div>
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


