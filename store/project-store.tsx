import { create } from "zustand";
import { persist } from "zustand/middleware";

type OrganizationState = {
  project_id: string;
  setProjectId: (id: string) => void;
};

const useOrganization = create<OrganizationState>()(
  persist(
    (set) => ({
      project_id: "",

      setProjectId: (id: string) => set({ project_id: id }),
    }),
    {
      name: "project-storage",
    },
  ),
);

export default useOrganization;
