import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";


const Home = () => {
  // rsc is shortcut to create
  return (
    <div>
      <NavBar />
      <section class="relative py-24 2xl:py-44 2xl:pb-48 font-heading font-medium bg-white rounded-t-10xl overflow-hidden">
        <div class="relative container px-4 mx-auto z-10">
          <div class="text-center max-w-2xl mx-auto">
            <h2 class="mb-9 font-heading text-9xl md:text-10xl xl:text-11xl leading-tight">
              Your Future Starts Now.
            </h2>
            <p class="mb-14 xl:mb-16 font-sans font-normal text-lg leading-6 text-gray-400">
              See Your Future Prosperity: Plan Your Retirement with Growth in
              Mind
            </p>
            <Link to="/signin">
              <a
                class="inline-block py-5 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                href="#"
              >
                Sign In
              </a>
            </Link>
          </div>
        </div>
        <img
          class="absolute top-64 md:top-0 left-1/2 transform -translate-x-1/2 px-6 h-full"
          src="https://shuffle.dev/uinel-assets/elements/call-to-action/elipse-bg-gray.svg"
          alt=""
        />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
