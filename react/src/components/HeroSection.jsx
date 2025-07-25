import React from "react";

const HeroSection = () => {
  return (
    <div className="px-6 py-10 md:px-16 lg:px-24 bg-white text-gray-800">
      {/* Intro Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Silicon</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We’re a dedicated team of product managers, full stack developers,
          UX/UI designers, QA engineers, and marketing experts helping
          businesses of every size launch their projects using Silicon software.
        </p>
      </div>

      {/* Rating Section */}
      <div className="flex justify-center items-center mb-10">
        <span className="text-yellow-500 text-2xl">⭐️⭐️⭐️⭐️⭐️</span>
        <span className="ml-2 text-xl font-semibold">4.9 on Clutch</span>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-10">
        <div>
          <p className="text-3xl font-bold text-blue-600">2,480</p>
          <p className="text-sm text-gray-500">Remote Sales Experts</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">760</p>
          <p className="text-sm text-gray-500">New Clients per Month</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">1,200</p>
          <p className="text-sm text-gray-500">Requests per Week</p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <img
          src="https://silicon.createx.studio/assets/img/about/hero/01.jpg"
          alt="Team member 1"
          className="rounded-lg w-full h-auto object-cover"
        />
        <img
          src="https://silicon.createx.studio/assets/img/about/hero/02.jpg"
          alt="Team member 2"
          className="rounded-lg w-full h-auto object-cover"
        />
        <img
          src="https://silicon.createx.studio/assets/img/about/hero/03.jpg"
          alt="Team member 3"
          className="rounded-lg w-full h-auto object-cover"
        />
        <img
          src="https://silicon.createx.studio/assets/img/about/hero/04.jpg"
          alt="Team member 4"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
