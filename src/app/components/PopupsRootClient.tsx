"use client";

import DonationPopup from "./DonationPopup";
import VolunteerPopup from "./VolunteerPopup";
import { usePopups } from "./PopupProvider";

export default function PopupsRootClient() {
  const { isDonationOpen, isVolunteerOpen, closeDonation, closeVolunteer } = usePopups();
  return (
    <>
      <DonationPopup isOpen={isDonationOpen} onClose={closeDonation} />
      <VolunteerPopup isOpen={isVolunteerOpen} onClose={closeVolunteer} />
    </>
  );
}


