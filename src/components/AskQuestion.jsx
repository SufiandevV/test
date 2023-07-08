"use client"
import React from "react";

function AskQuestion() {
  return (
    <div class="my-8 mt-16 w-[89%] mx-auto" id="faqs">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="randi flex items-center gap-x-2 w-fit">
          <img className="ml-3" src="./Warning.png" alt="Options.png" />
          <p className="uppercasees uppercase pr-7 pl-2 font-black">got any questions?</p>
        </div>
        <p className="whypoint11 text-[22px] md:text-[36px] font-black">Frequently Asked Questions</p>
        <p className="paracanvasoo font-light">Have a question? We’ve got answers!</p>
      </div>

      <div class=" space-y-4 mt-4 mb-8 grid place-self-center place-content-center self-center items-baseline content-center md:grid-cols-2 gap-4">
        <div class="nftdiv p-12 space-y-2 h-full">
          <p class="nftp1 font-black">What is O-LEARN?</p>
          <p class="nftp2 font-light">
          O-LEARN is an online learning platform that offers a diverse range of courses to help individuals learn new skills, enhance their knowledge, and earn money by sharing their expertise. It provides a community-driven environment that connects learners and instructors worldwide.
          </p>
        </div>
        <div class="nftdiv p-12 space-y-2 h-full">
          <p class="nftp1 font-black">How does O-LEARN work?</p>
          <p class="nftp2 font-light">
          O-LEARN allows users to browse through a wide variety of courses across different categories. Learners can enroll in courses of their choice, learn at their own pace, and earn certifications upon completion. Instructors can create and publish their courses, monetizing their knowledge and earning money based on course enrollments.
          </p>
        </div>
        <div class="nftdiv p-12 space-y-2 h-full">
          <p class="nftp1 font-black">How do I enroll in a course on O-LEARN?</p>
          <p class="nftp2 font-light">
          Enrolling in a course on O-LEARN is simple. Just browse the course catalog, select the course you're interested in, and click on the "Enroll" button. Follow the prompts to complete the enrollment process, and you'll gain immediate access to the course materials.
          </p>
        </div>
        <div class="nftdiv p-12 space-y-2 h-full">
          <p class="nftp1 font-black">Can I earn money as a learner on O-LEARN?</p>
          <p class="nftp2 font-light">
          Yes! O-LEARN offers a unique earning model that allows learners to earn money. By completing courses and demonstrating proficiency, you can attract potential clients and showcase your skills. This opens up opportunities to earn income by offering your services or expertise to others.


          </p>
        </div>
        <div class="nftdiv p-12 space-y-2 h-full">
          <p class="nftp1 font-black">How can I become an instructor on O-LEARN?
</p>
          <p class="nftp2 font-light">
          If you have expertise in a particular subject or field and a passion for teaching, you can become an instructor on O-LEARN. Simply sign up as an instructor and add bank details to get money, create your course content using our intuitive course creation tools, and publish your course on the platform. You'll have the opportunity to earn money when learners enroll in your course.


          </p>
        </div>
        <div class="nftdiv p-12 space-y-2 h-full">
          <p class="nftp1 font-black">
          How are certifications awarded on O-LEARN?

          </p>
          <p class="nftp2 font-light">
          Upon successfully completing a course, you will receive an O-LEARN certification. These certifications are industry-recognized and can be shared on your professional profiles and resumes, showcasing your newly acquired skills to potential employers or clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AskQuestion;