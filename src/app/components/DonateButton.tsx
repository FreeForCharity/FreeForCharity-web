"use client";

import { usePopups } from "./PopupProvider";

export default function DonateButton({
  children = "Donate",
  className = "inline-flex items-center justify-center rounded-[27px] bg-white text-[#113563] px-6 py-3 text-[20px] font-[var(--font-lato)] cursor-pointer hover:brightness-110 transition",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { openDonation } = usePopups();
  return (
    <button onClick={openDonation} className={className}>
      {children}
    </button>
  );
}


