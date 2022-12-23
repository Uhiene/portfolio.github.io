import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full p-5 py-10 sm:p-10 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-sky-300'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi there! My name is <span className='text-[#8892b0]'>Princess</span>  and I am a frontend developer.</p>
            </div>
            <div>
              <p>I am passionate about creating visually appealing and user-friendly websites and applications, and I take pride in my attention to detail and ability to deliver high-quality work. In my free time, you can find me tinkering with new technologies and keeping up with the latest industry news. Thank you for taking the time to read a little bit about me.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
