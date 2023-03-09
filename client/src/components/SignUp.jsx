import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const SignUp = ({ setUser }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {

    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      })
      .then(navigate("/calc"));
  };

  return (
    <div>
      <NavBar />
      <section
        className="relative pt-16 md:py-32 bg-white"
        //   style="background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;"
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-sm mx-auto border-2 border-[#8bbd4bff] px-10 rounded-md py-20">
            <div className="mb-6 text-center">
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
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange(e)}
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
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
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
                  name="password"
                  value={formData.password}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <a
                className="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-[#8bbd4bff] hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                href="#"
                onClick={handleSubmit}
              >
                Sign Up
              </a>

              <p className="text-center">
                <span className="text-xs font-medium">
                  Already have an account?
                </span>
                <Link to={"/signin"}>
                  <a
                    className="inline-block text-xs font-medium text-[#8bbd4bff] hover:text-green-600 hover:underline"
                    href="#"
                  >
                    Sign In
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
       
      </section>
    </div>
  );
};

export default SignUp;
