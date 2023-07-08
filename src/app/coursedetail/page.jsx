"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar.jsx'
import ReactPlayer from 'react-player';
import LessonCard from "../../components/LessonCard.jsx"
import Enroll from "../../components/Enroll.jsx"


function page() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
    <Navbar/>
    <div class='flex flex-col gap-y-12 z-10'>
    <div class='w-[90%] h-[304px] mt-12 object-contain mx-auto'>
     { hasWindow&& <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        controls={true}
        width="100%"
        height="100%" 
      />}
      <p class='my-4 p-3 payoutbutton'>The Complete Mern Stack Course</p>
    </div>

    <div class='nftdiv mt-6 overflow-y-scroll h-[323px] space-y-2 w-[90%] mx-auto p-2'>
 
    <LessonCard/>
    <LessonCard/>

    <LessonCard/>

    <LessonCard/>

    <LessonCard/>
    <LessonCard/>

    <LessonCard/>
    <LessonCard/>

    <LessonCard/>

    </div>

  
<Enroll/>



    </div>
    </>
  )
}

export default page