import React from "react";
import BucketGirl from "../../assets/iamages/bucketgirl.png";

const Landing = () => {
  return (
    <div>
      <div class="hero h-screen lg:h-[60vh] bg-accent relative z-0 mt-16">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <p
              className="text-xl text-white"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              Best Quality
            </p>
            <h1
              class="text-5xl font-bold text-white"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              Professionaol Cleaning Service
            </h1>
            <p
              class="py-6 max-w-xl text-white"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              repudiandae sit aliquam sed voluptate fugiat.
            </p>
            <button
              class="btn btn-primary"
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="800"
            >
              Get Started
            </button>
          </div>
          <div className="h-[60vh] shrink-0">
            <img src={BucketGirl} class="h-full" alt="" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl mx-auto mt-[-50px] relative z-10 shadow-lg p-20 bg-base-100 w-5/6">
        <h1 className="text-2xl mb-5 text-primary">Get Free Estimate</h1>
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
        <button className="btn btn-primary mt-5">Get a Quote</button>
      </div>
    </div>
  );
};

export default Landing;
