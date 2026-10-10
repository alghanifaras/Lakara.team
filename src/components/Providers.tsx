"use client";

import React, { ReactNode } from "react";
import { ModalProvider } from "./ModalContext";
import ContributionModal from "./ContributionModal";
import ProgramDetailModal from "./ProgramDetailModal";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      {children}
      <ContributionModal />
      <ProgramDetailModal />
    </ModalProvider>
  );
}
