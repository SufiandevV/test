"use client"
import Image from "next/image"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Head from 'next/head'
import { PlayIcon, UserIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import Link from "next/link";

import { Pagination, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import { useState,useEffect } from "react"
import AskQuestion from "../../components/AskQuestion.jsx"
import Footer from "../../components/Footer.jsx"
import Reviews from "../../components/Reviews.jsx"


export default function Home() {

  const [hydration,setHydration] = useState(false)

  useEffect(() => setHydration(true), [])

  return (
    <>
      <div className="lg:px-28">

        <Head>
          <title>O-Learn</title>
        </Head>
       
       
        <div className='bg-cover'>
        <section id="Hero Section container " className="container mx-auto">

          <div className="flex flex-col lg:flex-row pt-16 md:pt-24 px-5 ">

            <div className="heroText flex-1 mt-4 order-2 md:order-1 
          lg:mt-20  
          ">
              <h4 className="text-pink-dark lg:text-lg tracking-widest mb-2 mt-3 md:mt-0">Distance Learning easy</h4>

              <h1 className="lg:text-6xl font-bold text-blue-dark-title mb-3  ">

                Learn New Skill Gain More

                Education

              </h1>

              <p className="text-text-color lg:text-lg mt-0 md:mt-10">Take high quality online courses from the best online Take high quality online courses from the best online instrictors around the world & develop your skills.</p>

              <div className="flex flex-row mt-8 items-center">
                <button className="darkbutton ">Get Started</button>
                <div className="ml-5 flex items-center">
                  <div className="p-2 bg-pink-back rounded-full">
                    <PlayIcon className="h-6 w-6 text-[#FF8080]" />
                  </div>
                  <p className="ml-2 font-semibold">How it works</p>
                </div>
              </div>
            </div>

            <div className="heroimage flex-1 order-1 md:order-2 mx-auto">
              <Image alt="hero image" width='650' height='450' src="/heroimage.png" />
            </div>

          </div>
        </section>
        </div>
       

        <section id="Convenience" className="mt-16 py-10 bg-pink-back container mx-auto">

          <div className="flex flex-col md:flex-row">

            <div className="Conv Images flex flex-row justify-center space-x-5 md:w-1/2">

              <div className="space-y-5 ">
                <div className="rounded-full shadow-xl"><img src="/conv1.png" alt="Convenience Image 1" className="w-[150px] h-[180px]" /></div>
                <div className="rounded-full shadow-xl"><img src="/conv2.png" alt="Convenience Image 2" className="w-[150px] h-[180px]" /></div>
                {/* <Image alt="Convenience Image 1" width={200} height={250} src='/conv1.png' /> */}
                {/* <Image className="!w-[100px]" alt="Convenience Image 2" width={200} height={250} src='/conv2.png' /> */}
              </div>


              <div className="flex items-center ">
                <div className="shadow-xl rounded-full">
                  <img src="/conv3.png" alt="Convenience Image 3" className="w-[150px] h-[180px]" />
                </div>
              </div>

            </div>

            <div className="mt-10 px-5 md:w-1/2">
              <h1 className="text-2xl font-bold text-blue-dark">Find Convenient & Affordable Learning</h1>
              <p className="text-text-color mt-3">Here we guide you to the best online courses, e-learning advice,</p>

              <div className="flex mt-5 learningparagraphs space-x-5">
                <span className="flex justify-center text-4xl text-pink-dark ">01</span><p>Here we guide you to the best online courses, e-learning advice, and technology and resources for education and training. </p>
              </div>

              <div className="flex mt-5 learningparagraphs space-x-5">
                <span className="flex justify-center text-4xl text-pink-dark ">02</span><p>Here we guide you to the best online courses, e-learning advice, and technology. </p>
              </div>

              <div className="flex mt-5 learningparagraphs space-x-5">
                <span className="flex justify-center text-4xl text-pink-dark ">03</span><p>Here we guide you to the best online courses, e-learning advice, and technology education and training.  </p>
              </div>

              <div className="w-full mt-5">
                <h2 className="mx-auto w-fit font-bold underline md:ml-12">Learn More</h2>
              </div>

            </div>
          </div>

        </section>

        <section id="Services" className="px-5 container mx-auto">

          <div className=" mt-10" >
            <h1 className="text-3xl  font-bold text-center">Our Courses</h1>
            <p className="text-text-color mt-5 text-center">Take high quality online courses from the best online instructors
              around the world & develop your skills.</p>
          </div>

          <div className="flex flex-col mt-10 items-center  md:flex-row space-y-10 md:space-y-0 md:space-x-10">

            <div className="w-1/2 py-5 bg-[#FBD2D2] text-center rounded-br-3xl border border-[#FBD2D2]">
              <div className="bg-white shadow-2xl flex align-middle w-12 rounded-full mx-auto">
                <img className="mx-auto w-12 p-2 h-12" src="cicon1.png" alt="Design course" />
              </div><h2 className="text-xl font-bold mt-3 ">Design</h2>
              <button href="#" className="underline text-lg">View more</button>
            </div>



            <div className="w-1/2 py-5 hover:bg-[#FBD2D2] duration-150 bg-white text-center rounded-br-3xl border border-[#FBD2D2]">
              <div className="bg-white shadow-2xl flex align-middle w-12 rounded-full mx-auto">
                <img className="mx-auto w-12 p-2 h-12" src="cicon2.png" alt="Design course" />
              </div>
              <h2 className="text-xl font-bold mt-3 ">Development</h2>
              <button href="#" className="underline text-lg">View more</button>
            </div>

            <div className="w-1/2 py-5 hover:bg-[#FBD2D2] duration-150 bg-white text-center rounded-br-3xl border border-[#FBD2D2]">
              <div className="bg-white shadow-2xl flex align-middle w-12 rounded-full mx-auto">
                <img className="mx-auto w-12 p-2 h-12" src="cicon3.png" alt="Design course" />
              </div>              <h2 className="text-xl font-bold mt-3 ">Development</h2>
              <button href="#" className="underline text-lg">View more</button>
            </div>

            <div className="w-1/2 py-5 hover:bg-[#FBD2D2] duration-150 bg-white text-center rounded-br-3xl border border-[#FBD2D2]">
              <div className="bg-white shadow-2xl flex align-middle w-12 rounded-full mx-auto">
                <img className="mx-auto w-12 p-2 h-12" src="cicon4.png" alt="Design course" />
              </div>              <h2 className="text-xl font-bold mt-3 ">Development</h2>
              <button href="#" className="underline text-lg">View more</button>
            </div>

          </div>


        </section>

        <section id="LatestCourses" className="container mx-auto">

          <div className=" mt-16" >
            <h1 className="text-3xl  font-bold text-center">Latest Courses</h1>
            <p className="text-text-color mt-2 text-center">Take high quality online courses from the best online instructors
              around the world & develop your skills.</p>
          </div>

          <div className="md:py-8 pb-10 sm:pb-20 md:flex justify-between  ">

            {/* <div className='lg:flex flex-col justify-center hidden  '>
              <div id='prev_slide'

                className='flex flex-col justify-center cursor-pointer w-16 h-16 rounded-full shadow-2xl bg-pink-main active:bg-pink-dark mb-16 '>

                <AiOutlineArrowLeft className='mx-auto text-3xl' />

              </div>
            </div> */}

           { hydration&& <div className='w-10/12  lg:block mx-auto'>

              <Swiper
                breakpoints={{

                  300: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                   },

                  750: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },

                  820: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },

                }}
                slidesPerView={3}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={true}
                touchEventsTarget='container'
                grabCursor={true}
                loopFillGroupWithBlank={true}
                navigation={{
                  prevEl: '#prev_slide',
                  nextEl: "#next_slide",
                }}
                autoplay={{
                  delay: 3500,
                  // disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}

                className="mySwiper rounded-3xl h-[450px] xs:h-[441px] sm:h-[500px] md:h-[450px]">

                {/* 1 */}
                <SwiperSlide className='rounded-3xl    '>
 
                  <div className="bg-pink-back mx-8 md:mx-0 p-3  md:p-1 md:pb-3 mt-5 rounded-xl lg:w-full">
                    <Image width={500} height={350} alt="Web Design Course" src='/latestc1.png' />
                    <div className="px-2">

                      <div className="py-2 px-4 text-pink-dark mt-3 bg-pink-main md:text-xs w-fit rounded-xl font-semibold">Web Design</div>
                      <h1 className="mt-3 text-blue-dark font-semibold md:text-lg ">The Complete Web Design Course</h1>

                      <div className="flex flex-row mt-3 justify-between">
                        <div className="flex flex-row md:text-sm items-center text-blue-dark mt-1"> <UserIcon className="w-7 text-pink-dark bg-pink-main" /> <span>500k+</span></div>
                        <div className="flex items-center space md:text-sm"><p className="mr-3">$105.00</p> <img src='/latestprofile.png' /></div>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>

                <SwiperSlide className='rounded-3xl    '>

                  <div className="bg-pink-back mx-8 md:mx-0 p-3  md:p-1 md:pb-3 mt-5 rounded-xl lg:w-full">
                    <Image width={500} height={350} alt="Web Design Course" src='/latestc1.png' />
                    <div className="px-2">

                      <div className="py-2 px-4 text-pink-dark mt-3 bg-pink-main md:text-xs w-fit rounded-xl font-semibold">Web Design</div>
                      <h1 className="mt-3 text-blue-dark font-semibold md:text-lg ">The Complete Web Design Course</h1>

                      <div className="flex flex-row mt-3 justify-between">
                        <div className="flex flex-row md:text-sm items-center text-blue-dark mt-1"> <UserIcon className="w-7 text-pink-dark bg-pink-main" /> <span>500k+</span></div>
                        <div className="flex items-center space md:text-sm"><p className="mr-3">$105.00</p> <img src='/latestprofile.png' /></div>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>

                <SwiperSlide className='rounded-3xl    '>

                  <div className="bg-pink-back mx-8 md:mx-0 p-3  md:p-1 md:pb-3 mt-5 rounded-xl lg:w-full">
                    <Image width={500} height={350} alt="Web Design Course" src='/latestc1.png' />
                    <div className="px-2">

                      <div className="py-2 px-4 text-pink-dark mt-3 bg-pink-main md:text-xs w-fit rounded-xl font-semibold">Web Design</div>
                      <h1 className="mt-3 text-blue-dark font-semibold md:text-lg ">The Complete Web Design Course</h1>

                      <div className="flex flex-row mt-3 justify-between">
                        <div className="flex flex-row md:text-sm items-center text-blue-dark mt-1"> <UserIcon className="w-7 text-pink-dark bg-pink-main" /> <span>500k+</span></div>
                        <div className="flex items-center space md:text-sm"><p className="mr-3">$105.00</p> <img src='/latestprofile.png' /></div>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>

              </Swiper>


              {/* BUTTONS TO CONTROL THE SLIDER */}
              <div className="buttons flex w-full justify-center md:mt-0  mt-0 space-x-5">

                <div className='lg:flex flex-col justify-center   '>
                  <div id='prev_slide'
                    className='flex flex-col justify-center cursor-pointer w-16 h-16 rounded-full shadow-2xl bg-pink-main active:bg-pink-dark mb-1 md:mb-16'>
                    <AiOutlineArrowLeft className='mx-auto text-3xl' />
                  </div>
                </div>

                <div className='lg:flex   flex-col justify-center ml-2  '>
                  <div className='flex flex-col justify-center mb-1 md:mb-16 cursor-pointer w-16 h-16 rounded-full shadow-2xl  bg-pink-main active:bg-pink-dark' id='next_slide'  ><AiOutlineArrowRight className='mx-auto text-3xl' /></div>
                </div>

              </div>

            </div>}


          </div>

        </section>

        <section id="learning-center" className="container mx-auto">


          <div class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">

              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-20 items-center text-center lg:w-8/12">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to
                  e-Learning Centre

                </h1>
                <p class="mb-8 leading-relaxed">Here we guide you to the best online courses, e-learning advice, and technology and resources for education and training. </p>

                <div className="safe&expert mx-5 space-y-5 ">

                  <div className="flex flex-row space-x-6 ">
                    <div ><img className="mt-1" src="/Icons/secure1.png" alt="iconimage1" /></div>
                    <div className="text-left">
                      <h1 className="font-bold">Safe & Secured</h1>
                      <p>Safe and Secured our services and every step of process.</p>
                    </div>
                  </div>

                  <div className="flex flex-row space-x-6">
                    <div><img className="mt-1" src="/Icons/secure2.png" alt="iconimage1" /></div>
                    <div className="text-left">
                      <h1 className="font-bold">Highly Expert Instructors</h1>
                      <p>There are coffee shops, sports, restaurants and a multitude of great study.</p>
                    </div>
                  </div>

                </div>
              </div>

              <div class="lg:max-w-lg md:w-1/2 w-5/6 lg:w-8/12">
                <img class="object-cover object-center rounded" alt="hero" src="/centerimage.png" />
              </div>
            </div>
          </div>


        </section>

       

     

      

      </div>
      <Reviews/>
   <AskQuestion/>
   <Footer/>

    </>
  )
}