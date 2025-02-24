const Hero = () => {
  return (
    <div>
      <div className="hero-bg-image w-full h-[150px] md:h-[350px] relative">
        <button className=" absolute top-[15px] left-[15px] bg-white px-3 py-2 rounded-md">
          Back to Neora.com
        </button>
        <div className="hidden md:block absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px]">
          <h1 className="font-bold text-4xl mb-2">
            Welcome to the <br></br>Neora Family
          </h1>
          <p>
            Join our mission to Make People Better™ inside and out! Our products
            bring real results you’ll love, and the business opportunity puts
            you in control of your destiny. Now let’s get started!
          </p>
        </div>
      </div>

      {/* mobile copy */}
      <div className="p-5 md:hidden">
        <h1 className="font-bold text-2xl mb-2">Welcome to the Neora Family</h1>
        <p className="text-sm">
          Join our mission to Make People Better™ inside and out! Our products
          bring real results you’ll love, and the business opportunity puts you
          in control of your destiny. Now let’s get started!
        </p>
      </div>
    </div>
  );
};
export default Hero;
