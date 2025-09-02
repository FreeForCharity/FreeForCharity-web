"use client";

import { usePopups } from "./PopupProvider";

export default function VolunteerButton({
  children = "Volunteer",
  className = "inline-flex items-center justify-center rounded-[27px] bg-white text-[#113563] px-6 py-3 text-[20px] font-[var(--font-lato)] cursor-pointer hover:brightness-110 transition",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { openVolunteer } = usePopups();
  return (
    <button onClick={openVolunteer} className={className}>
      {children}
    </button>
  );
}


