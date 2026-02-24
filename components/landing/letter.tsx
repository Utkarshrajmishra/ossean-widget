import Wrapper from "../common/wrapper";

const Letter = () => {
  return (
    <section className="flex justify-center">
      <Wrapper className="mt-48">
         <p className="text-4xl font-fasthand text-neutral-400">
              Open Letter
            </p>
        <section className="flex mt-2">
          <div className="w-[50%]">
           
            <p className="text-5xl mt-2 font-light font-sans text-neutral-500">
              <span className="font-host text-neutral-800 font-[550]">
                {" "}
                Hey Startup Owner!{" "}
              </span>
              <br /> Your Startup’s Success <br /> Lives in Your Users’ Voices.
            </p>
          </div>
          <div className="w-[50%] text-3xl font-sans">
            <p className="text-lg md:text-2xl text-neutral-500 font-sans leading-relaxed">
  As a founder, you’ve poured your heart into this. 
  <span className="text-neutral-800 font-medium">
    {" "}Every late night, every tough decision{" "}
  </span>
  — it’s all for your vision to come alive.

  <br />

  But let’s face it: you’re not building your product for yourself.
  <span className="text-neutral-800 font-medium">
    {" "}You’re building it for your users.
  </span>

  <br />

  The truth is,
  <span className="text-neutral-800 font-medium">
    {" "}you don’t need to guess what they want.
  </span>
  They’re already telling you — through their feedback, ideas, and even frustrations.

  <br />

  <span className="text-neutral-800 font-semibold">
    All you have to do is listen.
  </span>

  <br />

  That’s where{" "}
  <span className="text-neutral-800 font-semibold font-fasthand">
    Catchup
  </span>{" "}
  comes in.
</p>
          </div>
        </section>
      </Wrapper>
    </section>
  );
};

export default Letter;
