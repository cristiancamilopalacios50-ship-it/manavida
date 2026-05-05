"use client";
import { createContext, useContext, useState } from "react";
import { Product } from "@/types/home";
import { StrapiResponse } from "@/types/strapi";
import { Category } from "@/types/categories";
import { GlobalSiteResponse } from "@/types/global";
import ModalClientModule from "@/components/UI/modal/modal";
import { ModalState } from "@/types/modal";

type AppContextType = {
  products: StrapiResponse<Product[]> | null;
  categories: StrapiResponse<Category[]> | null;
  globalSite?: StrapiResponse<GlobalSiteResponse> | null;
  modal: ModalState;
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }

  return context;
};

export function AppProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Omit<AppContextType, "modal" | "setModal">;
}) {
  const [modal, setModal] = useState<ModalState>({
    open: false,
    title: "",
    description: "",
  });
  return (
    <AppContext.Provider value={{
      ...value,
      modal,
      setModal,
    }}>
      {children}
      <ModalClientModule
        open={modal.open}
        title={modal.title}
        description={modal.description}
        onClose={() => setModal({ ...modal, open: false })}
      />
    </AppContext.Provider>
  );
}