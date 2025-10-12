import Wrapper from "./Wrapper"

const Hero=()=>{
    return(
        <>
          <main className="relative overflow-hidden">
        <div className="relative min-h-[80vh] w-full bg-neutral-950 border-b border-neutral-800">
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

          <div className="relative z-10 justify-center min-h-[80vh]">
            <div className="border-b border-neutral-800 flex justify-center">
                <Wrapper>
                    <div className="flex justify-center border-x border-neutral-800">
            <p className="text-[0.97rem] text-neutral-400 p-3 flex flex-col items-center border-x-1 border-neutral-800 w-fit">
         <img src="/client.png" alt="" width={80} height={80} className="w-10 h-8 md:w-18 md:h-10"/>  <span className="text-center"> Get happy customers</span>
            </p>
            </div>
            </Wrapper>
            </div>
            <div className="flex justify-center border-none   md:border-b-1 border-neutral-800">
                <Wrapper>
                    <div className="flex flex-col py-12 md:py-18 border-x border-neutral-800 items-center px-4">                <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-4xl lg:max-w-5xl font-[520] tracking-tight text-neutral-300"> <span className="bg-clip-text bg-gradient-to-r text-transparent from-neutral-600 to-neutral-300 to-80%"> Collect</span> and act on user <span className="bg-clip-text bg-gradient-to-l text-transparent from-neutral-600 to-neutral-300 to-80%">feedback</span>  <span className="bg-clip-text bg-gradient-to-r text-transparent from-neutral-600 to-neutral-300 to-80%"> 10x</span> <span className="bg-clip-text bg-gradient-to-l text-transparent from-neutral-600 to-neutral-300 to-80%">faster</span></p>
                <p className="text-lg md:text-xl mt-4 max-w-2xl md:max-w-4xl  text-center text-neutral-500">Product teams rely on us to collect actionable user feedback, so they can build better and keep customers happy.</p>

</div>
</Wrapper>
            </div>
            <div className="flex justify-center h-full">
            <Wrapper>
                <div className="flex flex-col border-x h-full border-t border-neutral-800 items-center justify-center   px-10 md:px-0">
                                        <button disabled={true} className="bg-none h-full border-x-1 border-neutral-800 py-4 hover:bg-purple-800/10 w-full sm:w-62 text-gray-300 px-6">How it works?</button>

                    <button className="bg-purple-600 h-14 w-full sm:w-62 text-white px-6">Get started for free</button>

                </div>
            </Wrapper>
            </div>
          </div>

        </div>
      </main>

        <section className="flex w-full justify-center">
            <Wrapper>
              <div className="flex flex-col items-center px-4">
                <p className="text-lg md:text-xl mt-10 max-w-2xl md:max-w-4xl text-center text-neutral-500">Most product teams struggle with vague feedback from their users.</p>
               
                </div>  
            </Wrapper>
        </section>
        </>
    )
}

export default Hero