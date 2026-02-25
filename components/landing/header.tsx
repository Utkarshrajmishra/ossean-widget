import Image from "next/image";
import Login from "../auth/login";

const Header = () => {
  return (
    <div className="flex mt-6 justify-between h-12 items-center px-10 ">
      <p className="font-fasthand text-3xl">Catchup</p>
      <Image
        src="https://cdn.prod.website-files.com/684d582f1c52bdf38cbb5c8d/6853cb664f26aa121f574c6e_qatchup-logo.svg"
        alt="Logo"
        width={35}
        height={35}
      />
      <Login />
    </div>
  );
};

export default Header;
