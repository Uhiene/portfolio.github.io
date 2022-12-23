import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen p-5 py-10 sm:p-10">
      <div className="max-w-[1000px] mx-auto p-4 w-full h-full text-gray-300">
        <p className="text-4xl font-bold inline border-b-4 border-sky-300">
          Contact
        </p>
        <p className=" py-4">Reach out to me on the following</p>
        <div className="sm:flex justify-between">
          <div className="flex space-x-4 text-3xl">
            <a href="https://www.linkedin.com/in/uhiene-princess-399470198">
              <BsLinkedin className="hover:text-blue-500" />
            </a>
            <a href="https://github.com/Uhiene">
              <FaGithub className="hover:text-gray-500" />
            </a>
            <a href="mailto:princessuhiene.com">
              <HiOutlineMail className="hover:text-red-500" />
            </a>
            <a href="">
              <BsTwitter className="hover:text-sky-500" />
            </a>
          </div>
          <button className="text-white border-2 hover:bg-sky-300 my-8 sm:my-0 px-4 py-3">
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
