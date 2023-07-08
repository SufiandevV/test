"use client"
import React, { useState,useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../components/Firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc ,getDoc,doc,setDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { BiLoaderAlt } from "react-icons/bi";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../components/Navbar.jsx"
import Footer from "../../components/Footer.jsx"
function BecomeHost() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "email") {
      // Validate email format
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(value)) {
        setEmailError("Email format is incorrect");
      } else {
        setEmailError("");
      }
    }
  };
  const firebaseConfig = {
    apiKey: "AIzaSyALNlsUKs4IHBg42BmZfgFZG8fF58IX0e0",
    authDomain: "olearn-402e9.firebaseapp.com",
    projectId: "olearn-402e9",
    storageBucket: "olearn-402e9.appspot.com",
    messagingSenderId: "1082899678294",
    appId: "1:1082899678294:web:2c923b0ec00f53361727f7",
    measurementId: "G-TEDRN3SR8K"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);



  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      console.log("User signed in with Google. User ID: ", user.uid);
    
      // const userDocRef = doc(db, "users", user.uid);
      // const userDocSnapshot = await getDoc(userDocRef);
      
      // if (!userDocSnapshot.exists()) {
      //   await setDoc(userDocRef, {
      //     name: user.displayName,
      //     email: user.email,
      //     id: user.uid,
      //     reservePlaces: [],
      //   });
      //   console.log("User added to the 'users' collection.");
      // } else {
      //   console.log("User already exists in the 'users' collection.");
      // }
      
      toast.success('User signed in with Google!', {
        position: toast.POSITION.TOP_CENTER
      });
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      console.log("Errrrrrrrrrrrror occur");
      toast.error('Error signing in with Google!', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  return (
    <>
    <Navbar/>
    <div className="bgg bg-cover overflow-x-hidden">
      <div className="flex my-6 md:w-[70%] flex-col lg:flex-row mx-auto">
        <div className="flex-1">
          <section className="">
            <div className="flex flex-col  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create Your Account
                  </h1>
                  <form
                    className="space-y-4 md:space-y-6"
                  >
                    <div>
                      <label
                        for="text"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your name"
                        required
                      />
                      {formData.name === "" && (
                        <p className="text-red-500 text-sm mt-[13px]">
                          Name is required
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email address
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                      />
                      {emailError && (
                        <p className="text-red-500 text-sm mt-[13px]">
                          {emailError}
                        </p>
                      )}
                      {formData.email === "" && (
                        <p className="text-red-500 text-sm mt-[13px]">
                          Email is required
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        for="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter the Password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                      {formData.password === "" && (
                        <p className="text-red-500 text-sm mt-[13px]">
                          Password is required
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            for="remember"
                            className="text-gray-500 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <p
                        className="text-sm font-medium text-white text-primary-600 hover:underline dark:text-primary-500"
                      >
                        {" "}
                        Forgot password?
                      </p>
                    </div>

                    <button
                      type="submit"
                      className={`w-full flex justify-center items-center text-white bg-[#89B374] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${
                        formData.name === "" ||
                        formData.email === "" ||
                        formData.password === ""
                          ? "border border-red-500"
                          : "border border-blue-500"
                      }`}
                      disabled={
                        formData.name === "" ||
                        formData.email === "" ||
                        formData.password === ""
                      }
                    >
                      {loading ? (
                        <BiLoaderAlt className="spinner h-6 w-8" />
                      ) : (
                        "Create an Account"
                      )}
                    </button>

                    <button
                      onClick={() => signInWithGoogle()}
                      type="button"
                      className="w-full flex justify-center items-center  gap-x-4 border border-black bg-white text-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      <img src="./google.png" alt="" srcset="" />
                      Sign in with Google
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account{" "}
                      <span
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Sign in
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
       
      </div>
    </div>
    
    <Footer/>

    </>
  );
}

export default BecomeHost;