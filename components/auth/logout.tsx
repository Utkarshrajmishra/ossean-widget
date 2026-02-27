"use client";

import Link from "next/link";

const Logout = () => {
  return (
    <Link href="/api/auth/logout">
      
      <div className="h-10 w-10 rounded-full bg-neutral-900"></div>
    </Link>
  );
};

export default Logout;
