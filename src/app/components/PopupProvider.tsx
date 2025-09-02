"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type PopupContextValue = {
  isDonationOpen: boolean;
  isVolunteerOpen: boolean;
  openDonation: () => void;
  closeDonation: () => void;
  openVolunteer: () => void;
  closeVolunteer: () => void;
};

const PopupContext = createContext<PopupContextValue | undefined>(undefined);

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [isDonationOpen, setDonationOpen] = useState(false);
  const [isVolunteerOpen, setVolunteerOpen] = useState(false);

  const openDonation = useCallback(() => setDonationOpen(true), []);
  const closeDonation = useCallback(() => setDonationOpen(false), []);
  const openVolunteer = useCallback(() => setVolunteerOpen(true), []);
  const closeVolunteer = useCallback(() => setVolunteerOpen(false), []);

  const value = useMemo(
    () => ({ isDonationOpen, isVolunteerOpen, openDonation, closeDonation, openVolunteer, closeVolunteer }),
    [isDonationOpen, isVolunteerOpen, openDonation, closeDonation, openVolunteer, closeVolunteer]
  );

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
}

export function usePopups() {
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error("usePopups must be used within PopupProvider");
  return ctx;
}


