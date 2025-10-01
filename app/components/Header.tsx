import Wrapper from "./Wrapper";

const Header = () => {
  return (
    <>
      {/* Navigation */}
<nav className="w-full border-b sticky top-0 left-0 z-50 border-neutral-800 flex bg-transparent backdrop-blur-md h-fit justify-center">
        <Wrapper>
          <header className="py-4 flex justify-between items-center">
            {/* Logo */}
            <img
              src="https://assets.basehub.com/fa068a12/eh1OPrcw6Btwjs67edvOj/logo-white.svg"
              alt="Logo"
              width={121}
              height={12}
            />

            {/* Menu */}
            <div className="flex gap-6 text-zinc-200">
              {["Features", "Pricing", "Blog", "Changelog"].map((item) => (
                <p
                  key={item}
                  className="hover:bg-neutral-800 cursor-pointer text-zinc-300 font-light py-1 px-3 rounded-full text-[0.9rem]"
                >
                  {item}
                </p>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-neutral-800 text-zinc-200 font-light py-1 px-3 rounded-full border border-neutral-700 text-[0.9rem]">
                Log In
              </button>
              <button className="bg-purple-800 py-1 px-3 font-light text-zinc-200 rounded-full border border-neutral-800 text-[0.9rem]">
                Get Started Today
              </button>
            </div>
          </header>
        </Wrapper>
      </nav>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        <div className="relative min-h-[80vh] w-full bg-neutral-950 border-b border-neutral-800">
          {/* Smooth bottom-centered glow */}
<div
  className="absolute inset-0 z-0"
  style={{
    backgroundImage: `
      radial-gradient(ellipse at 50% 100%, rgba(139, 92, 246, 0.25) 0%, rgba(139, 92, 246, 0.05) 25%, rgba(139, 92, 246, 0.02) 80%, transparent 90%),
      radial-gradient(ellipse at 50% 100%, rgba(195, 160, 255, 0.05) 10%, transparent 45%)
    `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  }}
/>

          {/* Hero content centered vertically */}
          <div className="relative z-10  justify-center min-h-[80vh] ">
            <div className="border-b border-neutral-800  flex justify-center">
                <Wrapper>
                    <div className="flex justify-center border-x-1 border-neutral-800">
            <p className="text-[0.97rem] text-neutral-400 p-3 flex flex-col items-center   border-x-1 border-neutral-800 w-fit">
         <img src="/client.png" alt="" width={80} height={80}/>  <span> Get happy customers</span>
            </p>
            </div>
            </Wrapper>
            </div>
            <div className="flex justify-center  border-b-1 border-neutral-800 ">
                <Wrapper>
                    <div className="flex flex-col py-24 border-x border-neutral-800 items-center">                <p className="text-7xl text-center w-5xl font-[520] tracking-tight text-neutral-300"> <span className="bg-clip-text bg-gradient-to-r text-transparent from-neutral-600 to-neutral-300 to-80%"> Collect</span> and act on user <span className="bg-clip-text bg-gradient-to-l text-transparent from-neutral-600 to-neutral-300 to-80%">feedback</span>  <span className="bg-clip-text bg-gradient-to-r text-transparent from-neutral-600 to-neutral-300 to-80%"> 10x</span> <span className="bg-clip-text bg-gradient-to-l text-transparent from-neutral-600 to-neutral-300 to-80%">faster</span></p>
                <p className="text-xl mt-4 w-4xl text-center text-neutral-500">Product teams rely on us to collect actionable user feedback, so they can build better and keep customers happy.</p>

</div>
</Wrapper>
            </div>
            <div className="flex justify-center   ">
            <Wrapper>
                <div className="flex flex-col items-center">
                                        <button disabled={true} className="bg-none h-12 border-x-1 border-neutral-800 py-4 hover:bg-purple-800/10  w-62 text-gray-300">How it works?</button>

                    <button className="bg-purple-600 h-14 w-62 text-white">Get started for free</button>

                </div>
            </Wrapper>
            </div>
          </div>

        </div>
      </main>

        <section className="flex w-full justify-center">
            <Wrapper>
              <div className="flex flex-col items-center">
                <p className="text-xl  mt-10 w-4xl text-center text-neutral-500">Most product teams struggle with vague feedback from their users.</p>
               
                </div>  
            </Wrapper>
        </section>
    </>
  );
};

export default Header;
