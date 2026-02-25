"use client";

import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const Login = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Link href="/api/auth" onClick={()=>setLoading(true)}>
      <Button disabled={loading} className="font-host h-10  rounded-3xl bg-neutral-800 text-sm flex items-center justify-center">
        Login / Signup {loading && <span className="animate-spin"><LoaderCircle className="size-4 "/></span>}
      </Button>
    </Link>
  );
};

export default Login