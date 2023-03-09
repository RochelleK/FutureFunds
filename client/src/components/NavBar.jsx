import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <section className="text-white text-lg font-sans font-bold relative bg-white shadow-md shadow-gray-300 border-t-4 border-gray-200">
        <nav className="flex justify-between px-6 lg:px-12 py-8">
          <div className="flex w-full items-center justify-between">
            <Link to="/home">
              <a href="#">
                <img
                  className="h-12"
                  src="https://static.shuffle.dev/uploads/files/60/602e8bd4323643e060e504d93a6853a827e98be6/FullLogo-Transparent-NoBuffer.png"
                  alt=""
                />
              </a>
            </Link>
            <div className="flex items-center">
              <ul className="hidden xl:flex px-4 mx-auto tracking-tight">
                <li className="mr-11 border-b border-[#8bbd4bff] border-opacity-40 text-[#018254ff] pb-px">
                  <Link to="/calc">
                    <a className="hover:opacity-80" href="#">
                      Calculator
                    </a>
                  </Link>
                </li>
                <li className="mr-11 border-b border-[#8bbd4bff] border-opacity-40 text-[#018254ff] pb-px">
                  <Link to="/items">
                    <a className="hover:opacity-80" href="#">
                      Ways To Save
                    </a>
                  </Link>
                </li>
                <li className="mr-11 border-b border-blue-500 border-opacity-40 pb-px"></li>
                <li className="inline-block py-3 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-[#018254ff] hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-sm">
                  <Link to="/signin">
                    <a className="hover:opacity-80" href="#">
                      Login
                    </a>
                  </Link>
                </li>
                <li className="inline-block py-3 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-[#018254ff] hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-sm ml-3">
                  <Link to="/signup">
                    <a className="hover:opacity-80" href="#">
                      SignUp
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
