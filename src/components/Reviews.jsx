import React, { useState } from "react";
import StarRatings from "react-star-ratings";

function Reviews() {
  const reviews = [
    {
      rating: 5,
      text: "Incredible communication, service and quality.",
      text1:
        "Clear communication, service and quality for my custom NFT. Do not hesitate, this is the seller you are looking for. I own a 1/1 photo print and was looking for a way to display it with the NFT properties, and the artist worked with me to format and display things perfectly.",
      reviewer: {
        name: "Dan H.",
        position: "Managing Director",
        image: "./reviewman.png",
      },
      posterimage: "https://res.cloudinary.com/practicaldev/image/fetch/s--X9Ev7eRd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png",
    },
    {
      rating: 4,
      text: "Amazing communication, service and quality.",
      text1:
        "Amazing communication, service and quality for my custom NFT. Do not hesitate, this is the seller you are looking for. I own a 1/1 photo print and was looking for a way to display it with the NFT properties, and the artist worked with me to format and display things perfectly.",

      reviewer: {
        name: "Dan H.",
        position: "Managing Director",
        image: "./reviewman.png",
      },
      posterimage: "https://visme.co/blog/wp-content/uploads/2021/10/what-is-graphic-design-header.png",
    },
    {
      rating: 2,
      text: "Great Work, service and quality.",
      text1:
        "Great communication, service and quality for my custom NFT. Do not hesitate, this is the seller you are looking for. I own a 1/1 photo print and was looking for a way to display it with the NFT properties, and the artist worked with me to format and display things perfectly.",

      reviewer: {
        name: "Dan H.",
        position: "Managing Director",
        image: "./reviewman.png",
      },
      posterimage: "https://instituteofcoding.org/wp-content/uploads/2019/05/IoC_Logo_OnBlue_AW.jpg",
    },

  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const currentReview = reviews[currentReviewIndex];

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePreviousReview = () => {
    setCurrentReviewIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex >= 0 ? newIndex : reviews.length - 1;
    });
  };

  return (
    <div className="mt-16 py-4 w-[89%] mx-auto">
      <div className="space-y-3 items-center md:flex gap-x-16">
        <div className="flex-1 w-full h-full">
          <img
            className="w-full h-full"
            src={currentReview.posterimage}
            alt="poster.png"
          />
        </div>
        <div className="flex-1 px-6 space-y-3">
          <div className="randi flex items-center gap-x-2 w-fit">
            <img className="ml-3" src="./Options.png" alt="Options.png" />
            <p className="uppercasees uppercase pr-7 pl-2 font-black">OUR reviews</p>
          </div>
          <p className="bring1 text-[32px] font-black">
            <span className="text-[#2B2592] md:text-[32px] text-[22px]">“</span>{" "}
            {currentReview.text}{" "}
            <span className="text-[#2B2592] text-[32px]">”</span>{" "}
          </p>
          <div className="py-2">
            <StarRatings
              rating={5}
              starRatedColor="#6B43FB"
              numberOfStars={5}
              name="rating"
              isSelectable={false}
              starDimension="20px"
              starSpacing="4px"
              className="text-sm py-4"
            />
          </div>
          <p className="paracanvasreview font-light">{currentReview.text1}</p>
          <div className="flex justify-between mt-[31px]">
            <div className="flex items-center gap-x-3 mt-8">
              <img
                className="ml-3"
                src={currentReview.reviewer.image}
                alt="reviewman.png"
              />
              <div>
                <p className="Dan font-black">{currentReview.reviewer.name}</p>
                <p className="paracanvas font-light">{currentReview.reviewer.position}</p>
              </div>
            </div>
            <div className="flex gap-x-1 mt-8">
              <img
                className="ml-3 object-contain"
                src="./arrow_circle_left.png"
                alt="left"
                onClick={handlePreviousReview}
              />
              <img
                className="ml-3 object-contain"
                src="./arrow_circle_right.png"
                alt="arrow_circle_right.png"
                onClick={handleNextReview}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;