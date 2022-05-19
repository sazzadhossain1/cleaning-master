import React from "react";
import BucketGirl from "../../assets/iamages/bucketgirl.png";

const Landing = () => {
  return (
    <>
      <div class="hero h-screen lg:h-[60vh] bg-accent relative z-0 mt-16">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <p className="text-xl text-white">Best Quality</p>
            <h1 class="text-5xl font-bold text-white">
              Professionaol Cleaning Service
            </h1>
            <p class="py-6 max-w-xl text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              repudiandae sit aliquam sed voluptate fugiat.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
          <div className="h-[60vh] shrink-0">
            <img src={BucketGirl} class="h-full" alt="" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl mx-auto mt-[-50px] relative z-10 shadow-lg p-20 w-5/6">
        <h1>Get Free Estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
