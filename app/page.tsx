
import Features from "@/components/landing/features";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Letter from "@/components/landing/letter";
import AddProjectDialog from "@/components/onboarding/create-project";

export default function Home() {
  return (
   <div className=" ">

  <Header/>
<Hero/>
<Letter/>
{/* <Tag/> */}
<AddProjectDialog/>

   </div>
  );
}
