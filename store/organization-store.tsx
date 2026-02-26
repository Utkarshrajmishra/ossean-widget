import { create } from "zustand";
import { persist } from "zustand/middleware";

type OrganizationState = {
  organization_id: string;
  project_id: string;
  setOrganization: (id: string) => void;
  setProjectId: (id: string) => void;
  removeAll: () => void;
};

const useOrganization = create<OrganizationState>()(
  persist(
    (set) => ({
      organization_id: "",
      project_id: "",

      setOrganization: (id) =>
        set({ organization_id: id }),

      setProjectId: (id) =>
        set({ project_id: id }),

      removeAll: () =>
        set({ organization_id: "", project_id: "" }),
    }),
    {
      name: "organization-storage", 
    }
  )
);

export default useOrganization;