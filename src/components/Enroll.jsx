import React from 'react'

function Enroll() {
  return (
    <div class='nftdiv px-4 py-9 space-y-6 w-[90%] mx-auto p-2'>
        <div class='flex justify-between items-center'>
        <div>
        <p>
       Course Name
        </p>
        <p class='text-[#999FAA]'>
        React Native With Firebase
        </p>
        </div>
        <div class='bg-[#ff6637] p-2 rounded-md'>
            Free
        </div>
      </div>
      <div class='flex justify-between items-center'>
        <div>
        <p>
       Course Created by
        </p>
        <p class='text-[#999FAA]'>
       Muhammad Ahmad
        </p>
        </div>
      
      </div>
      <div class='flex justify-between items-center'>
        <div>
        <p>
       Is this paid or Free course
        </p>
        <p class='text-[#999FAA]'>
      Free
        </p>
        </div>
      
      </div>
      <div class='flex justify-between items-center'>
        <div>
        <p>
Last Update        </p>
        <p class='text-[#999FAA]'>
        7/28/2022
        </p>
        </div>
      
      </div>
      <button class="py-3 w-full payoutbutton uppercase">Enroll Now</button>

    </div>
  )
}

export default Enroll