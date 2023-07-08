"use client"
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

function LessonCard() {
  const [hasWindow, setHasWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
          setHasWindow(true);
        }
      }, []);
  return (
    <div class='flex gap-x-6 z-10 items-center'>
    <div class='rounded-md'>
    { hasWindow&& <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        controls={true}
        width="80px"
        height="80px"
  
      />}
       </div>
      <div>
        <p>
        React Native With Firebase
        </p>
        <p class='text-[#999FAA]'>
       Lesson No: 1
        </p>
      </div>
    </div>
  )
}

export default LessonCard