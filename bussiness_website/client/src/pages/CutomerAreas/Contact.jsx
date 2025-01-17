import React from "react";

const Contact = () => {
  return (
    <>
      <div className="h-[400px] flex flex-col items-center px-[5.5%] bg-gray-800 text-white py-12">
        <div className="w-full p-5">
          <div className="text-left text-white px-4 py-2">
            <h1 className="text-4xl font-bold sm:text-xl md:text-2xl lg:text-3xl">
              Expert Advice
            </h1>
            <h1 className="text-4xl font-bold sm:text-lg md:text-xl lg:text-2xl">
              Exceptional Service
            </h1>
          </div>
        </div>
        {/* Logo with margin-top */}
        <div className="flex justify-center items-center mt-10 sm:mt-6 md:mt-8 lg:mt-10">
          <img
            src="https://via.placeholder.com/150"
            alt="Logo"
            className="w-32 h-32 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
        </div>
      </div>
      <div className="w-full p-6 bg-basedark text-white">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-center mb-10">
          Contact <span className="text-Green">Us</span>
        </h1>

        {/* Flex Container */}
        <div className="flex flex-wrap justify-between gap-10">
          {/* First Div - Form */}
          <div className="flex-1 bg-darkgray shadow-lg p-6 rounded-lg">
            <form className="space-y-4">
              {/* Name Field */}
              <div className="mt-4">
                <label className="block font-semibold mb-1">Your Name*</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-500 rounded-md bg-basedark text-white"
                />
              </div>

              {/* Phone Number Field */}
              <div className="mt-4">
                <label className="block font-semibold mb-1">Phone No*</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-500 rounded-md bg-basedark text-white"
                />
              </div>
              {/* Email Field */}
              <div className="mt-4">
                <label className="block font-semibold mb-1">Your Email*</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-500 rounded-md bg-basedark text-white"
                />
              </div>
              {/* Subject Field */}
              <div className="mt-4">
                <label className="block font-semibold mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-500 rounded-md bg-basedark text-white"
                />
              </div>
              {/* Message Field */}
              <div className="mt-4">
                <label className="block font-semibold mb-1">Message</label>
                <textarea className="w-full p-3 border border-gray-500 rounded-md h-32 bg-basedark text-white"></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-Green text-white font-bold py-2 px-4 rounded-full mt-4 hover:bg-green-400 transition-colors duration-300"> Send</button>
            </form>
          </div>
          {/* Second Div - Content */}
          <div className="flex-1 bg-darkgray shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">ADDRESS</h2>
            <p>Express Evictions</p>
            <p className=" mt-0">City Tower </p>
            <p className="mt-0">Manchester</p>
            <p className=" mt-0">M1 4BT</p>
            <p className="mt-3">
            Please note visits to our offices are <span className="underline">strictly by appointment.</span>
            </p>

            <h2 className="text-2xl font-bold mt-5 text-Green">CONTACT</h2>
            <p className="mt-2">Email: <span className="text-Green hover:text-black cursor-pointer font-bold">info@expressevictions.co.uk</span></p>
            <p>Telephone: <span className="text-Green hover:text-black cursor-pointer font-bold">0800 118 4 118</span></p>
            <p>*Calls are free from landlines and mobiles</p>
            <p className="mt-3">Staffed Helpline: 8am – 8pm</p>
            <p className="mt-3">Out of Hours Call Answering: 24/7</p>
            <p className="mt-3">Eviction Experts Available 365 Days a Year</p>
            <button className="bg-Green text-white font-bold py-2 px-4 rounded-full hover:bg-green-400 transition-colors duration-300 sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 mt-10">
            Click Here To Book A Consultation
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
