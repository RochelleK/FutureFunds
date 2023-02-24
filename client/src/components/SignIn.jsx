import React from 'react';

const SignIn = () => {
    return (
        <div>
            <section className="pb-24">
  <div className="pt-24 pb-64 xl:pt-52 lg:pb-80 bg-gray-100 text-center rounded-b-10xl">
    <div className="container px-4 mx-auto">
      <span className="inline-block py-3 px-7 mb-8 text-lg font-medium font-heading leading-5 text-indigo-500 border border-indigo-500 rounded-6xl">Create account</span>
      <h2 className="mb-12 text-9xl md:text-10xl xl:text-11xl leading-tight font-heading font-medium">Sign In</h2>
      <p className="text-xl text-gray-400">S</p>
    </div>
  </div>
  <div className="container px-4 mx-auto">
    <div className="-mt-52 max-w-4xl mx-auto py-10 px-8 bg-white rounded-4xl shadow-lg">

      <div className="mt-10 py-16 px-6 border-2 border-gray-50 rounded-4xl">
        <div className="max-w-md mx-auto">
          <input className="w-full mb-6 py-5 px-12 text-xl border-2 border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="email" placeholder="Your Email"/>
          <input className="w-full mb-6 py-5 px-12 text-xl border-2 border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="password" placeholder="Password"/>
          <input className="w-full mb-14 py-5 px-12 text-xl border-2 border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="password" placeholder="Confirm password"/>
          <a className="block py-5 px-10 mx-auto w-full md:max-w-max text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">Sign In</a>
        </div>
      </div>
    </div>
  </div>
</section>
            
        </div>
    );
};

export default SignIn;