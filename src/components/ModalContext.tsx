"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type ContributionType = "relawan" | "donasi" | "mitra";

interface ProgramDetail {
  title: string;
  tagline: string;
  description: string;
  activities: string[];
  schedule: string;
  image: string;
}

interface ModalContextType {
  isContributionOpen: boolean;
  selectedContributionType: ContributionType;
  openContributionModal: (type?: ContributionType) => void;
  closeContributionModal: () => void;
  activeProgram: ProgramDetail | null;
  openProgramModal: (program: ProgramDetail) => void;
  closeProgramModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isContributionOpen, setIsContributionOpen] = useState(false);
  const [selectedContributionType, setSelectedContributionType] = useState<ContributionType>("relawan");
  const [activeProgram, setActiveProgram] = useState<ProgramDetail | null>(null);

  const openContributionModal = (type: ContributionType = "relawan") => {
    setSelectedContributionType(type);
    setIsContributionOpen(true);
  };

  const closeContributionModal = () => {
    setIsContributionOpen(false);
  };

  const openProgramModal = (program: ProgramDetail) => {
    setActiveProgram(program);
  };

  const closeProgramModal = () => {
    setActiveProgram(null);
  };

  return (
    <ModalContext.Provider
      value={{
        isContributionOpen,
        selectedContributionType,
        openContributionModal,
        closeContributionModal,
        activeProgram,
        openProgramModal,
        closeProgramModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
