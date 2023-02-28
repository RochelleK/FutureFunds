import React, { useState } from "react";
import ItemCard from "./ItemCard";

const ItemsCardContainer = ({ items }) => {
  const [fourItems, setFourItems] = useState(items.slice(0, 4));
  return (
    <div>
      <section className="py-24 2xl:py-44 overflow-hidden">
        <div className="relative container px-4 mx-auto">
          <h2 className="mb-14 xl:mb-24 text-9xl xl:text-10xl font-heading font-medium">
            {/* <div contenteditable="false">what could these be worth?</div> */}
          </h2> 
          <div className="relative px-4 md:px-0">
            <div className="flex -mx-3 mb-5 sm:mb-0">
              {fourItems?.map((item) => {
                return <ItemCard item={item} key={item.id} />;
              })}

              {/* <div className="flex-shrink-0 p-3 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="p-10 xl:px-9 xl:pt-24 xl:pb-12 h-full bg-gray-100 rounded-3xl">
                  <a className="block mx-auto mb-8 xl:mb-20 max-w-max" href="#">
                    <img
                      className="h-40 object-cover"
                      src="https://shuffle.dev/uinel-assets/images/ecommerce-product-list/phone-background-none.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                      Apple iPhone 12 Pro (128GB) Silver
                    </p>
                  </a>
                  <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
                    <span className="mr-2 text-xs">$</span>
                    <span>544.90</span>
                  </p>
                </div>
              </div> */}

              {/* <div className="flex-shrink-0 p-3 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="p-10 xl:px-9 xl:pt-24 xl:pb-12 h-full bg-gray-100 rounded-3xl">
                  <a className="block mx-auto mb-8 xl:mb-20 max-w-max" href="#">
                    <img
                      className="h-40 object-cover"
                      src="https://shuffle.dev/uinel-assets/images/ecommerce-product-list/headphones-background-none.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                      Headphones SONY 1l X-O
                    </p>
                  </a>
                  <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
                    <span className="mr-2 text-xs">$</span>
                    <span>44.90</span>
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 p-3 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="p-10 xl:px-9 xl:pt-24 xl:pb-12 h-full bg-gray-100 rounded-3xl">
                  <a className="block mx-auto mb-8 xl:mb-20 max-w-max" href="#">
                    <img
                      className="h-40 object-cover"
                      src="https://shuffle.dev/uinel-assets/images/ecommerce-product-list/laptop-background-none.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                      MacBook Pro 17’’
                    </p>
                  </a>
                  <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
                    <span className="mr-2 text-xs">$</span>
                    <span>2090.59</span>
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 p-3 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="p-10 xl:px-9 xl:pt-24 xl:pb-12 bg-gray-100 h-full rounded-3xl">
                  <a className="block mx-auto mb-8 xl:mb-20 max-w-max" href="#">
                    <img
                      className="h-40 object-cover"
                      src="https://shuffle.dev/uinel-assets/images/ecommerce-product-list/smartwatch-green.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                      Smartwatch Uistore Homme Watch 19
                    </p>
                  </a>
                  <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
                    <span className="mr-2 text-xs">$</span>
                    <span>120.90</span>
                  </p>
                </div>
              </div> */}
              {/* <div className="flex-shrink-0 p-3 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="p-10 xl:px-9 xl:pt-24 xl:pb-12 bg-gray-100 h-full rounded-3xl">
                  <a className="block mx-auto mb-8 xl:mb-20 max-w-max" href="#">
                    <img
                      className="h-40 object-cover"
                      src="uinel-assets/images/ecommerce-product-list/smartwatch-green.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                      Smartwatch Uistore Homme Watch 19
                    </p>
                  </a>
                  <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
                    <span className="mr-2 text-xs">$</span>
                    <span>120.90</span>
                  </p>
                </div>
              </div> */}
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 xl:translate-x-1/2 md:-mr-6 xl:-mr-0">
              <a
                className="w-18 h-14 flex justify-center items-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                href="#"
              >
                <svg
                  className="my-px"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.289849 1.54064C-0.0966146 1.18719 -0.0966145 0.615928 0.28985 0.265087C0.676314 -0.087058 1.30071 -0.0896662 1.68718 0.265087L7.21015 5.36206C7.59662 5.71421 7.59662 6.28416 7.21015 6.63892L1.68718 11.7359C1.30215 12.088 0.676312 12.088 0.289848 11.7359C-0.0966159 11.3824 -0.0966159 10.8112 0.289848 10.4603L4.81927 5.99853L0.289849 1.54064Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemsCardContainer;
