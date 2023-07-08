import React, { useState, useEffect } from "react";
import { PlayIcon, UserIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

function SimpleCard() {
  return (
    <div>
      <div className="w-fit h-fit borderofcard p-2 border border-[#BFBABA] rounded-lg shadow-outer shadow-[#BFBABA]">
        <div className="relative">
          <div>
            <img
              className="w-[290px] h-[190px] object-contain"
              src='/latestc1.png'
              alt=""
              srcset=""
            />
          </div>
          <div className="bg-[#F3F7FF] absolute top-4 right-4 py-1 flex items-center justify-center gap-x-2 px-1 rounded">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            <p className="rating">5</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <div className="flex justify-between items-center px-1 mt-3">
            <p className="cardp1">Web design</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="w-6 h-6 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>

          <p className="cardp2 w-[285px] px-1">
            The Complete Web Design course with projects
          </p>


          <div className="flex flex-row mt-3 justify-between">
            <div className="flex flex-row md:text-sm items-center text-blue-dark mt-1"> <UserIcon className="w-7 text-pink-dark bg-pink-main" /> <span>500k+</span></div>
            <div className="flex items-center space md:text-sm"><p className="mr-3">$105.00</p> </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default SimpleCard