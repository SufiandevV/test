"use client"
import AskQuestion from "../../components/AskQuestion.jsx";
import Footer from "../../components/Footer.jsx";
import React from "react";
import Navbar from "../../components/Navbar.jsx"
function contactus() {
  return (
    <>
    <Navbar/>
      <div className="mt-5 ">
        <div class=" bg-cover1 w-[89%] mx-auto flex flex-col  items-center">
          <div class="contactformdiv  w-fit flex flex-col justify-center md:p-11">
            <div class="flex items-center justify-center">
              <div className="randi w-fit flex items-center justify-center gap-x-2">
                <img
                  className="ml-3 w-[30px] h-[30] object-contain"
                  src="./Send.png"
                  alt="send.png"
                />
                <p className="uppercasees uppercase pr-7 pl-2 font-black">
                  Contact US
                </p>
              </div>
            </div>
            <p class="font-black getintouch flex items-center justify-center py-2">
              Get in Touch
            </p>

            <p class="paracanvas px-2 py-3 font-light">
              Send us a message and we’ll get back to you within 24 hours.
            </p>

            <div>
              <div class="mb-6">
                <input
                  type="text"
                  id="name"
                  class="inputinput border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div class="mb-6">
                <input
                  type="email"
                  id="email"
                  class="inputinput border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div class="mb-6">
                <textarea
                  type="textarea"
                  id="message"
                  class="inputinput w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message"
                  required
                />
              </div>
              <button class="py-3 w-full payoutbutton uppercase">Submit</button>
            </div>
          </div>
        </div>
        <AskQuestion />
        <Footer />
      </div>
    </>
  );
}

export default contactus;