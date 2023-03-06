import React, {useState} from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";


const SignIn = ({user, setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const signIn = (e) => {
  e.preventDefault();

  fetch(`/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      setUser(data);
      console.log(user);
      // navigate("/calc");
    });
};

  return (
    <div>
      <NavBar />
      {/* <section className="pb-24">
        <div class=" px-4 mx-auto h-80 w-max">
          <div className="pt-24 pb-64 xl:pt-52 lg:pb-80 bg-gray-100 text-center rounded-b-10xl">
            <div className="container px-4 mx-auto">
              <span className="inline-block py-3 px-7 mb-8 text-lg font-medium font-heading leading-5 text-indigo-500 border border-indigo-500 rounded-6xl">
                Create account
              </span>
              <h2 className="mb-12 text-9xl md:text-10xl xl:text-11xl leading-tight font-heading font-medium">
                Sign In
              </h2>
              <p className="text-xl text-gray-400">S</p>
            </div>
          </div>
          <div className="container px-4 mx-auto">
            <div className="-mt-52 max-w-4xl mx-auto py-10 px-8 bg-white rounded-4xl shadow-lg">
              <div className="mt-10 py-16 px-6 border-2 border-gray-50 rounded-4xl">
                <div className="max-w-md mx-auto">
                  <input
                    className="w-full mb-6 py-5 px-12 text-xl border-2 border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full mb-6 py-5 px-12 text-xl border-2 border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    className="w-full mb-14 py-5 px-12 text-xl border-2 border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    type="password"
                    placeholder="Confirm password"
                  />
                  <a
                    className="block py-5 px-10 mx-auto w-full md:max-w-max text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                    href="#"
                    onClick={signIn}
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section
        className="py-24 md:py-32 bg-white "
        // style={"background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;"}
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-sm mx-auto border-2 border-[#8bbd4bff] p-6 rounded-md">
            <div className="mb-6 text-center">
              <a className="inline-block mb-6" href="#">
                <img
                  className="h-16"
                  src="flex-ui-assets/logos/flex-circle-green.svg"
                  alt=""
                />
              </a>
              <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                Sign in to your account
              </h3>
              <p className="text-lg text-coolGray-500 font-medium"></p>
            </div>
            <form action="">
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium text-left"
                  for=""
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="email"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-coolGray-800 font-medium text-left"
                  for=""
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="password"
                  placeholder="************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap items-center justify-between mb-6"></div>
              <a
                className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-[#8bbd4bff] hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                href="#"
                onClick={signIn}
              >
                Sign In
              </a>
              <p className="text-center">
                <span className="text-xs font-medium">
                  Don’t have an account?
                </span>
                <Link to={ "/signup"}>
                <a
                  className="inline-block text-xs font-medium text-[#8bbd4bff] hover:text-green-600 hover:underline"
                  href="#"
                  >
                  Sign up
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

export default SignIn;
