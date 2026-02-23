import Wrapper from "../common/wrapper";
import Image from "next/image";
import Arrow1 from "../svg/arrow-1";
import Arrow2 from "../svg/arrow-2";

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] relative mt-18 flex flex-col items-center justify-end">
      <div
        className="absolute inset-0 -z-10 h-full w-full 
        bg-white 
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
        bg-[size:6rem_4rem]
        [mask-image:radial-gradient(ellipse_160%_140%_at_50%_100%,black_35%,transparent_75%)]
        [-webkit-mask-image:radial-gradient(ellipse_160%_140%_at_50%_100%,black_35%,transparent_75%)]"
      />

      <Wrapper className="w-full  relative flex flex-col items-center text-center">

        <p className="text-4xl font-fasthand text-neutral-400">Listen!</p>

        <h1 className="font-jakarta mt-6 tracking-tight  font-[550] text-neutral-800 text-6xl">
          Your Customers Have Opinions. <br />
          Do You Hear Them?
        </h1>

        <p className="text-neutral-500 font-sans text-2xl max-w-4xl mt-6">
          Your Startup&apos;s Success Lives in Your Users&apos; Voices. Make a
          product that your users can&apos;t live without—powered by{" "}
          <span className="font-fasthand">Catchup</span>.
        </p>
      </Wrapper>
          <Arrow2 className="absolute bottom-0 size-26 text-neutral-400 left-2 rotate-76" />

      <div className="-mt-10 px-10 relative z-10 w-full flex justify-center">
        <Image
          src="/hero-2.png"
          alt="Hero"
          width={900}
          height={500}
          className="w-full relative overflow-hidden  h-auto"
          priority
        />
        <Image
          src="/image.png"
          alt="Hero overlay"
          width={350}
          height={400}
          className="rotate-10 top-26 z-20 left-1/2  rounded-md -translate-x-1/2 md:left-150 md:-translate-x-0 absolute"
          priority
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-60 
  bg-gradient-to-b from-transparent to-white z-20"
      />
                <Arrow1 className="absolute size-32 top-0  text-neutral-400 left-26 rotate-76" />

                <Arrow2 className="absolute right-26  size-36 text-neutral-400 top-40 rotate-200" />

    </section>
  );
};

export default Hero;
