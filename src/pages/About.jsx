import { Button } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import parent from "/src/assets/Parent.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import rig from "/src/assets/Right Image.svg";
import "../App.css";

// import required modules
import { Pagination } from "swiper/modules";

const About = () => {
  return (
    <>
      <section className="pl-[100px] pr-[100px] pt-[20px] pb-[20px] flex justify-between sm:p-[0px] sm:flex-wrap">
        <div className="w-[55%] bg-[#2A254B] p-[30px] sm:w-[100%]">
          <h1 className="text-[white] text-[30px] font-[400] w-[70%] sm:w-[90%] ">
            The furniture brand for the future, with timeless designs
          </h1>
          <button
            style={{ backgroundColor: "#F9F9F926", marginTop: "30px" }}
            className="w-[200px] h-[50px] sm:hidden"
          >
            View collection
          </button>
          <h1 className="text-[18px] font-[400] pt-[120px] text-[#FFFFFF] text-justify">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </h1>
          <button
            style={{
              backgroundColor: "#F9F9F926",
              marginTop: "30px",
              fontFamily: "sans-serif",
              fontSize: "20px",
              color: "white",
            }}
            className="w-[200px] h-[50px] hidden sm:block"
          >
            View collection
          </button>
        </div>
        <div className="w-[45%] sm:w-[100%]">
          <img src={rig} className="sm:hidden" alt="" />
        </div>
      </section>
      <section className="pl-[100px] pr-[100px] pt-[30px] pb-[30px] sm:p-[10px]">
        <h1 className="text-center text-[30px] font-[400]">
          What makes our brand different
        </h1>
        <div className="flex justify-between pt-[40px] pb-[20px] sm:flex-wrap">
          <div className="w-[23%] p-[10px] sm:w-[100%] sm:mt-[20px]">
            <img src="src/assets/Delivery.png" alt="" />
            <h1 className="text-[20px] font-[400] pt-[10px]">
              Made by true artisans
            </h1>
            <h1 className="text-[18px] font-[400] text-[#696767]">
              Handmade crafted goods made with real passion and craftmanship{" "}
            </h1>
          </div>
          <div className="w-[23%] p-[10px] sm:w-[100%] sm:mt-[20px]">
            <img src="src/assets/Checkmark--outline.png" alt="" />
            <h1 className="text-[20px] font-[400] pt-[10px]">
              Unbeatable prices
            </h1>
            <h1 className="text-[18px] font-[400] text-[#696767]">
              For our materials and quality you won’t find better prices
              anywhere{" "}
            </h1>
          </div>
          <div className="w-[23%] p-[10px] sm:w-[100%] sm:mt-[20px]">
            <img src="src/assets/Purchase.png" alt="" />
            <h1 className="text-[20px] font-[400] pt-[10px]">
              Recycled packaging
            </h1>
            <h1 className="text-[18px] font-[400] text-[#696767]">
              We use 100% recycled packaging to ensure our footprint is
              manageable{" "}
            </h1>
          </div>
          <div className="w-[23%] p-[10px] sm:w-[100%] sm:mt-[20px]">
            <img src="src/assets/Sprout.png" alt="" />
            <h1 className="text-[20px] font-[400] pt-[10px]">
              Next day as standard
            </h1>
            <h1 className="text-[18px] font-[400] text-[#696767]">
              Order before 3pm and get your order the next day as standard
            </h1>
          </div>
        </div>
      </section>
      <section className="pl-[100px] pr-[100px] pt-[50px] pb-[50px] sm:p-[10px]">
        <h1 className="text-[30px] font-[300] sm:text-center">New ceramics</h1>
        <div className="flex justify-between pt-[20px] sm:flex-wrap sm:grid sm:grid-cols-2">
          <div className="w-[24%] sm:w-[90%] sm:m-[auto] sm:mt-[10px]">
            <img className="w-[100%]" src={parent} alt="" />
            <h1 className="text-[20px] font-[300] pt-[10px]">
              The Dandy chair
            </h1>
            <h1 className="text-[20px] font-[300] pt-[0px]">£250</h1>
          </div>
          <div className="w-[24%] sm:w-[90%] sm:m-[auto] sm:mt-[10px]">
            <img className="w-[100%]" src="src/assets/Parent.jpg" alt="" />
            <h1 className="text-[20px] font-[300] pt-[10px]">
              Rustic Vase Set
            </h1>
            <h1 className="text-[20px] font-[300] pt-[0px]">£155</h1>
          </div>
          <div className="w-[24%] sm:w-[90%] sm:m-[auto] sm:mt-[10px]">
            <img className="w-[100%]" src="src/assets/Parent (1).png" alt="" />
            <h1 className="text-[20px] font-[300] pt-[10px]">The Silky Vase</h1>
            <h1 className="text-[20px] font-[300] pt-[0px]">£125</h1>
          </div>
          <div className="w-[24%] sm:w-[90%] sm:m-[auto] sm:mt-[10px]">
            <img className="w-[100%]" src="src/assets/Photo.png" alt="" />
            <h1 className="text-[20px] font-[300] pt-[10px]">The Lucy Lamp</h1>
            <h1 className="text-[20px] font-[300] pt-[0px]">£399</h1>
          </div>
        </div>
        <Button
          sx={{
            backgroundColor: "whitesmoke",
            color: "black",
            display: "block",
            margin: "auto",
            marginTop: "20px",
          }}
          variant="contained"
          className="w-[200px] h-[50px] sm:w-[200px] sm:h-[50px]"
        >
          View collection
        </Button>
      </section>
      <section className="pl-[100px] pr-[100px] pt-[30px] pb-[30px] sm:p-[10px]">
        <h1 className="text-[30px] font-[300] ">Our popular products</h1>
        <div className="flex justify-between mt-[20px] sm:flex-wrap">
          <div className="w-[48%] sm:w-[100%]">
            <img src="src/assets/Large.png" alt="" />
            <h1 className="text-[20px] font-[300] pt-[10px]">
              The Poplar suede sofa
            </h1>
            <h1 className="text-[18px] font-[300]">£980</h1>
          </div>
          <div className="w-[48%] flex justify-between sm:w-[100%]">
            <div className="w-[48%]">
              <img src="src/assets/Parent.png " alt="" />
              <h1 className="text-[20px] font-[300] pt-[10px]">
                The Dandy chair
              </h1>
              <h1 className="text-[18px] font-[300]">£250</h1>
            </div>
            <div className="w-[48%]">
              <img src="src/assets/Photo (1).png" alt="" />
              <h1 className="text-[20px] font-[300] pt-[10px]">
                The Dandy chair
              </h1>
              <h1 className="text-[18px] font-[300]">£250</h1>
            </div>
          </div>
        </div>
        <Button
          sx={{
            backgroundColor: "whitesmoke",
            color: "black",
            display: "block",
            margin: "auto",
            marginTop: "20px",
          }}
          variant="contained"
          className="w-[200px] h-[50px] sm:w-[200px] sm:h-[50px]"
        >
          View collection
        </Button>
      </section>
      <section className="pl-[100px] pr-[100px] pt-[50px] pb-[50px] bg-[whitesmoke] sm:p-[10px] dark:bg-[#525252] dark:text-white">
        <div className="bg-[white] p-[50px] sm:p-[10px] dark:bg-[#525252] dark:text-white">
          <h1 className="text-center text-[30px] font-[300]">
            Join the club and get the benefits
          </h1>
          <h1 className="text-center text-[18px] font-[400] text-[#c6b4b4] pt-[10px]">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </h1>
          <div className="mt-[40px] w-[500px] m-[auto] flex bg-[whitesmoke] sm:w-[100%]">
            <input
              className="w-[70%] bg-[#FFFFFF26] h-[50px] pl-[18px] text-[20px] text-[#133713] rounded-sm outline-none "
              placeholder="your@email.com"
              type="text"
            />
            <button className="w-[30%] h-[50px] bg-[#2A254B] text-[18px] text-[white]">
              Sign up
            </button>
          </div>
        </div>
      </section>
      <section className="pl-[100px] pr-[100px] pt-[20px] pb-[20px] flex justify-between sm:p-[10px] sm:flex-wrap">
        <div className="p-[50px] w-[48%] sm:w-[100%] sm:p-[10px]  ">
          <h1 className="text-[30px] font-[300]">
            From a studio in London to a global brand with over 400 outlets
          </h1>
          <h1 className="text-[17px] pt-[20px]">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.Handmade, and
            lovingly crafted furniture and homeware is what we live, breathe and
            design so our Chelsea boutique become the hotbed for the London
            interior design community.
          </h1>
          <Button
            sx={{
              backgroundColor: "whitesmoke",
              marginTop: "20px",
              color: "black",
            }}
            className="w-[150px] h-[40px] "
            variant="contained"
          >
            Get in touch
          </Button>
        </div>
        <div className="w-[48%] sm:w-[100%]">
          <img src="src/assets/Image.png" alt="" />
        </div>
      </section>
    </>
  );
};
export default About;
