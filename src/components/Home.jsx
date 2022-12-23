import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import princess from "../assets/princess.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] flex items-center flex-col-reverse sm:flex-row  p-5 md:p-10">
      {/* Container */}
      <div className="w-full sm:w-3/5 py-10">
        <p className="text-sky-300 text-lg">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-300">
          Princess Uhiene
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-gray-300 text-center sm:text-start py-4 max-w-[700px]">
          I’m a Frontend Developer with a passion for content writing,
          exceptional digital experiences. I specialize in designing and
          building the visual elements of websites and applications.
        </p>
        <div className=" flex justify-center sm:justify-start">
          <Link
            to={"work"}
            className="text-white group border-2 px-6 py-3 my-2 flex w-fit items-center hover:bg-sky-300 hover:border-sky-300"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full sm:w-2/5 flex items-center justify-end">
        <img
          src={princess}
          alt=""
          className="rounded-full shadow-md shadow-sky-500 border-4 border-black object-cover object-left-top overflow-hidden w-80 h-80 "
        />
      </div>
    </div>
  );
};

export default Home;
