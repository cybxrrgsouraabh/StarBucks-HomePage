import img1 from "../assets/img1.jpg";

export const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 bg-lightGold ">
      <div className="flex items-center md:justify-start flex-col m-auto">
        <div className="my-8">
          <div className="text-primary text-wrap text-2xl text-center md:text-4xl lg:text-5xl lg:text-left ">
            <p className="">It's great day for</p>
            <p className="">free coffee</p>
          </div>

          <div className="text-newGreen text-sm mt-6 font-medium text-wrap md:text-lg md:text-center lg:text-left">
            sign up and start enjoying the perks of Starbucks&#8482; Rewards
          </div>
        </div>
        <div className="flex flex-col items-center lg:self-start lg:items-start">
          <button className="lg:hidden  bg-newGreen rounded-2xl px-6 py-2 mb-6  text-white text-sm text-wrap cursor-pointer hover:opacity-70">
            Join in the app
          </button>
          <button className=" hidden lg:block bg-newGreen rounded-2xl px-6 py-2 mb-6  text-white text-sm text-wrap cursor-pointer hover:opacity-70">
            Join Now
          </button>
          <a href="#" className="lg:block text-primary text-sm mb-6 text-wrap hidden">
            It's even better <u>with the app</u>
          </a>
          <a
            href="#"
            className="lg:hidden text-primary text-sm mb-6 text-wrap underline"
          >
            or join online
          </a>
        </div>
      </div>
      <img src={img1} alt="" className="mx-auto  " />
    </div>
  );
};
