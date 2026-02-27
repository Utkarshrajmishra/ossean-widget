import Features from "@/components/landing/features";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Letter from "@/components/landing/letter";
import AddProjectDialog from "@/components/onboarding/create-project";
import { getUserSession } from "@/lib/isAuthorized";
import { redirect } from "next/navigation";

export default async function Home() {
  

  return (
    <div className=" ">
      <Header />
      <Hero />
      <Letter />
      {/* <Tag/> */}
      <AddProjectDialog />
    </div>
  );
}
