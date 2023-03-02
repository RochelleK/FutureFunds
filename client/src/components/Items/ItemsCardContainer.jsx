import React, { useState } from "react";
import ItemCard from "./ItemCard";

const ItemsCardContainer = ({ items, user, yourBudget, setYourBudget }) => {
  const [fourItems, setFourItems] = useState(items.slice(0, 4));
  return (
    // <div>
      <section className="py-12 2xl:py-44 overflow-hidden">
        <div className="relative container px-4 mx-auto">
          <h2 className="mb-14 xl:mb-24 text-9xl xl:text-10xl font-heading font-medium">
            {/* <div contenteditable="false">what could these be worth?</div> */}
          </h2>
          <div className="relative px-4 md:px-0">
            <div className="flex -mx-3 mb-5 sm:mb-0">
              {fourItems?.map((item) => {
                return <ItemCard item={item} key={item.id} yourBudget={yourBudget} setYourBudget={setYourBudget} user={user}/>;
              })}

              
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
    // {/* </div> */}
  );
};

export default ItemsCardContainer;
