"use client";

import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div >
      <Navbar />
      <section id="home" className="relative w-full h-screen bg-emerald-800 overflow-hidden">
        {/* Blur elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-600 rounded-full blur-3xl opacity-50 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-700 rounded-full blur-3xl opacity-50 transform -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-emerald-600 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
      {/* Rest of your landing page content */}
      <main className=" absolute container mx-auto px-28 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 mt-40">
            <h1 className="text-5xl font-bold text-white">
              Welcome to{" "}
              <span className="inline-flex items-center">
                <Image
                  src="/assets/logo.png"
                  alt="New Star"
                  width={164}
                  height={64}
                />
              </span>
            </h1>

            <p className="text-white text-lg leading-relaxed">
              Since 1996, we&apos;ve been more than just a shop in Kinniya.
              we&apos;ve been a warm, welcoming part of your community. At New
              Star, every bite tells a story, from our savory snacks to our
              delightful sweets.
            </p>

            <div className="flex space-x-4">
              <button className="bg-yellow-400 text-emerald-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Our Products
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-900 transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="transform -rotate-6">
                {/* <img 
                  src="/api/placeholder/400/400"
                  alt="Spiced rice dish with cashews"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="transform rotate-6 mt-12">
                <img 
                  src="/api/placeholder/400/400"
                  alt="Colorful desserts"
                  className="rounded-lg shadow-xl"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </main>

      </section>
      
      <section id="snacks" className="min-h-screen bg-gradient-to-b from-emerald-900 to-emerald-800">...</section>
      <section id="sweets" className="min-h-screen bg-gradient-to-b from-emerald-900 to-emerald-800">...</section>
      <section id="about" className="min-h-screen bg-gradient-to-b from-emerald-900 to-emerald-800">...</section>
      <section id="contact" className="min-h-screen bg-gradient-to-b from-emerald-900 to-emerald-800">...</section>
    </div>
  );
};

export default LandingPage;
