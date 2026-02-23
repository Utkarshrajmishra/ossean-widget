import Image from "next/image";
import { Button } from "../ui/button";
const Header = () => {
  return (
    <div className="flex mt-6 justify-between h-12 items-center px-10 ">
      <p className="font-fasthand text-3xl">catchup</p>
      <Image
        src="https://cdn.prod.website-files.com/684d582f1c52bdf38cbb5c8d/6853cb664f26aa121f574c6e_qatchup-logo.svg"
        alt="Logo"
        width={35}
        height={35}
      />
      <Button className="font-host h-10 rounded-3xl bg-neutral-800 text-sm flex items-center justify-center">Login / Signup</Button>
    </div>
  );
};

export default Header;
