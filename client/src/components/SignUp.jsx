import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const SignUp = () => {
  return (
    <div>
      <NavBar />
      <section
        className="relative pt-16 md:py-32 bg-white"
        //   style="background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;"
      >
        <div className="container px-4 mx-auto mb-16 md:mb-0">
          <div className="w-full md:w-1/2 md:pr-4">
            <div className="max-w-sm mx-auto">
              <div className="mb-6 text-center">
                <a className="inline-block mb-6" href="#">
                  <img
                    className="h-16"
                    src="flex-ui-assets/logos/flex-circle-green.svg"
                    alt=""
                  />
                </a>
                <h3
                  className="mb-4 text-2xl md:text-3xl font-bold"
                  contenteditable="false"
                >
                  Create an Account
                </h3>
                <p
                  className="text-lg text-coolGray-500 font-medium"
                  contenteditable="false"
                >
                  Start your journey to financial freedom
                </p>
              </div>
              <form action="">
                <div className="mb-6">
                  <label
                    className="block mb-2 text-coolGray-800 font-medium text-left"
                    for=""
                  >
                    Name*
                  </label>
                  <input
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="name"
                    placeholder="Name"
                    contenteditable="false"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block mb-2 text-coolGray-800 font-medium text-left"
                    for=""
                  >
                    Email*
                  </label>
                  <input
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="name"
                    placeholder="example@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-coolGray-800 font-medium text-left"
                    for=""
                  >
                    Password*
                  </label>
                  <input
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="password"
                    placeholder="************"
                  />
                </div>

                <a
                  className="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-[#8bbd4bff] hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                  href="#"
                >
                  Sign Up
                </a>

                <p className="text-center">
                  <span className="text-xs font-medium">
                    Already have an account?
                  </span>
                  <a
                    className="inline-block text-xs font-medium text-[#8bbd4bff] hover:text-green-600 hover:underline"
                    href="#"
                  >
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="md:absolute md:top-0 md:right-0 md:w-1/2 md:h-full md:pl-4">
          <div className="flex items-center justify-center h-full px-8 py-14 bg-coolGray-50">
            <div className="md:max-w-xl mx-auto text-center">
              {/* <span className="relative z-10 inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm">
                Quotes
              </span> */}
              <div className="relative mb-16">
                <img
                  className="absolute -top-10 left-0 2xl:-left-12"
                  src="flex-ui-assets/elements/sign-up/quotes-top.svg"
                  alt=""
                />
                <img
                  className="absolute -bottom-16 right-0"
                  src="flex-ui-assets/elements/sign-up/quotes-bottom.svg"
                  alt=""
                />
                <h3
                  className="relative text-2xl md:text-3xl leading-tight font-medium text-coolGray-800"
                  contenteditable="false"
                >
                  Plan Ahead for a Comfortable Retirement with Our Comprehensive
                  Financial Calculator, and Take Control of Your Future
                  Finances.
                </h3>
              </div>
              <div className="relative text-center">
                <img
                  className="w-24 h-24 mb-6 mx-auto rounded-full"
                  src="https://images.unsplash.com/photo-1610387849418-3ec12dc4b50b?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw0fHxtb25leXxlbnwwfDJ8fHwxNjc4MTM3ODk0&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920/"
                  alt=""
                />
                <h4
                  className="mb-2 text-lg text-coolGray-800 font-semibold"
                  contenteditable="false"
                >
                  Create an account and&nbsp;
                </h4>
                <span
                  className="block mb-8 text-lg text-coolGray-400"
                  contenteditable="false"
                >
                  start your tomorrow today.&nbsp;
                </span>
                <div className="flex items-center justify-center">
                  <a
                    className="w-3 h-3 mr-3 bg-coolGray-100 rounded-full"
                    href="#"
                  ></a>
                  <a
                    className="w-3 h-3 mr-3 bg-green-500 rounded-full"
                    href="#"
                  ></a>
                  <a
                    className="w-3 h-3 bg-coolGray-100 rounded-full"
                    href="#"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
