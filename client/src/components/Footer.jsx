import React from "react";

const Footer = () => {
  return (
    <section class="py-8 2xl:py-2 bg-white bottom-0 w-full shadow-2xl shadow-black border-t-4 border-gray-200">
      {/* <div class="container px-4 mx-auto"> */}
        <div class="md:flex m-8 mx-auto max-w-7xl md:justify-between lg:justify-start md:items-center">
          <div class="sm:flex sm:justify-between sm:items-center mb-12  md:mb-0">
            <a href="#">
              <img
                class="h-12"
                src="https://static.shuffle.dev/uploads/files/60/602e8bd4323643e060e504d93a6853a827e98be6/FullLogo-Transparent-NoBuffer.png"
                alt=""
              />
            </a>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Footer;
