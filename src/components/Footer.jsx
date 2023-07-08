"use client"
import Link from "next/link";
import React from "react";
 
function Footer() {
  return (
      <div class="py-16 px-2 w-[100%] font-light bg-[#0F0D33]">
        <div className="w-[94%] mx-auto">
          <div class="flex flex-col md:flex-row md:justify-between  gap-y-4 mx-auto">
            <div className="flex flex-col gap-y-3">
              <div>
                <img class='ml-[-35px]' src="/E-Learning Logo (4) 1.png" alt="FooterLogo.png" />
              </div>
              <div className="flex1 md:gap-x-8">
                <Link
                  className="navlinks1 font-light whitespace-nowrap"
                  href="/signup"
                >
                  Sign Up
                </Link>
                
                <p
                className="navlinks1 cursor-pointer 2xl:text-[12px] xl:text-[12px] md:text-[12px] lg:text-[12px] text-[8px] whitespace-nowrap"
                // href="/#faqs"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("faqs")
                    ? document
                        .getElementById("faqs")
                        ?.scrollIntoView({ behavior: "smooth" })
                    : "";
                }}
              >
                FAQs
              </p>
                <Link
                  className="navlinks1 whitespace-nowrap"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div class="md:mt-8">
              <div>
                <p class="followus"> Follow us on Twitter!</p>
                <p class="followus1">@O-LEARN</p>
              </div>
            </div>
          </div>
          <div class="border border-t-[0.2px] opacity-10 border-gray-300 my-6"></div>
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="pb-4">
              <p class="navlinks1">© 2023 O-LEARN PLATEFORM, Inc.</p>
            </div>
            <div class="flex justify-between items-center space-y-6 gap-x-6">
              <p className="navlinks1 whitespace-nowrap mt-[26px]">
                cookie policy
              </p>
              <p className="navlinks1 whitespace-nowrap">privacy policy</p>
              <p className="navlinks1 whitespace-nowrap">terms of use</p>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Footer;