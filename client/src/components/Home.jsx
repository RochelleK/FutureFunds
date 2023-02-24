import React from "react";

const Home = () => {
  // rsc is shortcut to create
  return <div>Home


    <div>
  <div className="text-gray-700 font-heading font-medium relative bg-gray-50 bg-opacity-50">
    <nav className="flex justify-between px-6 lg:px-12 py-8">
      <div className="flex w-full items-center">
        <a href="#">
          <img className="h-12" src="https://static.shuffle.dev/uploads/files/60/602e8bd4323643e060e504d93a6853a827e98be6/Screen-Shot-2023-02-23-at-11-25-24-PM.png" alt=""/>
        </a>
        <ul className="hidden xl:flex px-4 ml-32">
          <li className="mr-16"></li>
          <li className="mr-16">
            <a className="flex items-center text-gray-400 hover:text-gray-500" href="#">

              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">

              </svg>
            </a>
          </li>
          <li></li>
        </ul>
        <div className="hidden xl:flex items-center ml-auto">
          <a className="text-gray-400 hover:text-gray-500" href="#">
            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5219 18.016H2.70312V8.5933C2.70313 6.719 3.48375 4.92147 4.87328 3.59614C6.2628 2.27081 8.1474 1.52625 10.1125 1.52625C12.0776 1.52625 13.9622 2.27081 15.3517 3.59614C16.7412 4.92147 17.5219 6.719 17.5219 8.5933V18.016Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M1 18.0121H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M8.87891 22H10.8789" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
          <div className="w-px h-12 bg-gray-200 bg-opacity-50 ml-9 mr-11"></div>
          <a className="flex items-center mr-12" href="#">
            <span>Login</span>
            <img className="ml-6" src="uinel-assets/elements/navigations/avatar-online.png" alt=""/>
            <img className="ml-6" src="uinel-assets/elements/navigations/arrow-down-gray.svg" alt=""/>
          </a>
          <button className="uppercase text-sm font-bold font-body border-2 border-gray-200 border-opacity-50 rounded-full py-3 px-5 tracking-wide hover:border-gray-300">
            <span className="block mt-px">Sign Up</span>
          </button>
        </div>
      </div>
      <button className="navbar-burger self-center xl:hidden text-gray-400 hover:text-gray-500 focus:outline-none">
        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="25" height="2" fill="currentColor"></rect><rect y="14" width="25" height="2" fill="currentColor"></rect></svg>
      </button>
    </nav>
    <div className="navbar-menu hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
      <nav className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
        <div className="flex items-center pl-16 mb-8">
          <a className="text-2xl text-gray-800 font-bold" href="#">
            <img className="h-12" src="uinel-assets/logos/uinel-gray-black.svg" alt=""/>
          </a>
        </div>
        <div className="flex items-center mb-10 px-10">
          <a className="flex items-center ml-1" href="#">
            <img className="ml-6" src="uinel-assets/elements/navigations/avatar-online.png" alt=""/>
            <img className="ml-6" src="uinel-assets/elements/navigations/arrow-down-gray.svg" alt=""/>
          </a>
          <a className="text-gray-400 hover:text-gray-500 ml-auto" href="#">
            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5219 18.016H2.70312V8.5933C2.70313 6.719 3.48375 4.92147 4.87328 3.59614C6.2628 2.27081 8.1474 1.52625 10.1125 1.52625C12.0776 1.52625 13.9622 2.27081 15.3517 3.59614C16.7412 4.92147 17.5219 6.719 17.5219 8.5933V18.016Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M1 18.0121H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M8.87891 22H10.8789" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>
        <div>
          <ul>
            <li className="mb-1 px-10"><a className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl" href="#">New tools</a></li>
            <li className="mb-1 px-10">
              <a className="flex items-center pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl" href="#">
                <span>Products</span>
                <svg className="ml-4" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z" fill="currentColor"></path>
                </svg>
              </a>
            </li>
            <li className="mb-1 px-10"><a className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl" href="#">Pricing</a></li>
          </ul>
        </div>
        <div className="mt-auto px-10">
          <button className="py-3 px-5 mt-6 w-full text-body font-body font-bold uppercase tracking-wide text-sm border-2 border-gray-200 hover:border-gray-300 border-opacity-50 rounded-full">
            <span className="block mt-px">New project</span>
          </button>
          <p className="mt-6 mb-4 text-center">
            <span className="text-sm text-darkBlueGray-400">2021 © Uinel. All rights reserved.</span>
          </p>
        </div>
      </nav>
      <button className="navbar-close absolute top-5 p-6 right-5">
        <div className="absolute top-3">
          <span className="absolute w-px h-6 bg-black transform -rotate-45"></span>
          <span className="absolute w-px h-6 bg-black transform rotate-45"></span>
        </div>
      </button>
    </div>
  </div>
  <section className="pb-16 2xl:pb-20 overflow-hidden">
    <div className="relative bg-blueGray-100 rounded-b-10xl">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4 pt-16 pb-20">
          <div className="w-full lg:w-1/2 px-4 mb-24 lg:mb-0">
            <span className="block mb-9 font-medium tracking-widest uppercase text-sm text-gray-300">See Your Future Prosperity: </span>
            <h1 className="max-w-xl mb-16 font-heading font-medium text-9xl md:text-10xl xl:text-13xl leading-none">
              <span>Your future starts&nbsp; &nbsp;&nbsp;</span>
              <span className="relative inline-block">
                <span className="absolute inset-0 xl:-left-8 xl:-right-8">
                  <img className="absolute inset-0 w-full max-w-non" src="uinel-assets/elements/heroes/lines-blue1.svg" alt=""/>
                  <img className="absolute inset-0 mt-1 lg:mt-2 xl:ml-4 w-full max-w-none" src="uinel-assets/elements/heroes/lines-blue2.svg" alt=""/>
                </span>
                <span className="relative z-10">now.&nbsp; &nbsp; &nbsp;</span>
              </span>
            </h1>
            <p className="mb-16 lg:mb-24 text-darkBlueGray-400 leading-snug text-3xl">See Your Future Prosperity: Plan Your Retirement with Growth in Mind</p>
            <div className="flex flex-col sm:flex-row">
              <input className="py-5 px-10 text-xl text-darkBlueGray-400 placeholder-darkBlueGray-400 outline-none rounded-xl" type="text" placeholder="Enter email"/>
              <button className="py-5 px-10 mt-3 sm:mt-0 sm:-ml-4 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl">Get started</button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative max-w-sm xl:max-w-none mx-auto">
              <img className="relative xl:max-w-max z-10 object-left" src="https://images.unsplash.com/photo-1592495981488-073153776d9a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw2M3x8bW9uZXl8ZW58MHwwfHx8MTY3NzEwMjYzOQ&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920" alt=""/>
              <img className="absolute -top-3 -left-24 xl:max-w-max" src="uinel-assets/images/heroes/elipse.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  </div>;
};

export default Home;
