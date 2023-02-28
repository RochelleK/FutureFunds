import React from 'react';

const BudgetItem = () => {
    return (
      // <div>
        <tr>
          <td class="text-lg h-40 px-16">
            <div class="flex items-start">
              <div>
                <input
                  class="mr-9 form-checkbox h-5 w-5 border border-gray-300"
                  type="checkbox"
                />
              </div>
              <div class="w-96">
                <h3 class="font-medium leading-6 mb-4">Car</h3>
                {/* <p class="text-base font-sans text-gray-400 font-normal leading-6">
                  Proin nec nibh vel odio dapibus molestie eu id ipsum. Fusce
                  sodales vitae lorem vitae tempus.
                </p> */}
              </div>
            </div>
          </td>
          {/* <td class="relative"> */}
            {/* <div class="relative max-w-max mx-auto">
              <img src="uinel-assets/elements/tables/circle1.svg" alt="" />
              <div class="absolute text-3xl text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                3
              </div>
            </div>
            <img
              class="absolute right-0 top-1/2 transform -translate-y-1/2"
              src="uinel-assets/elements/tables/dotted-line-top.svg"
              alt=""
            /> */}
          {/* </td> */}
          <td class="relative text-center h-40">
            <div class="bg-green-200 text-green-700 text-sm font-bold rounded-full px-3 py-1 flex items-center max-w-max mx-auto">
              <div class="mr-1">
                <img
                  src="uinel-assets/elements/tables/arrow-up-green.svg"
                  alt=""
                />
              </div>
              <p>9%</p>
            </div>
            <img
              class="absolute right-0 top-1/2 transform -translate-y-1/2"
              src="uinel-assets/elements/tables/dotted-line-top.svg"
              alt=""
            />
          </td>
          <td class="relative text-center h-40">
            <div class="bg-green-200 text-green-700 text-sm font-bold rounded-full px-3 py-1 flex items-center max-w-max mx-auto">
              <div class="mr-1">
                <img
                  src="uinel-assets/elements/tables/arrow-up-green.svg"
                  alt=""
                />
              </div>
              <p>9%</p>
            </div>
            <img
              class="absolute right-0 top-1/2 transform -translate-y-1/2"
              src="uinel-assets/elements/tables/dotted-line-top.svg"
              alt=""
            />
          </td>
          <td class="relative text-center h-40">
            <div class="bg-green-200 text-green-700 text-sm font-bold rounded-full px-3 py-1 flex items-center max-w-max mx-auto">
              <div class="mr-1">
                <img
                  src="uinel-assets/elements/tables/arrow-up-green.svg"
                  alt=""
                />
              </div>
              <p>9%</p>
            </div>
            <img
              class="absolute right-0 top-1/2 transform -translate-y-1/2"
              src="uinel-assets/elements/tables/dotted-line-top.svg"
              alt=""
            />
          </td>
          {/* <td class="relative text-center text-lg text-gray-400 h-40">
            <span>200+</span>
            <img
              class="absolute right-0 top-1/2 transform -translate-y-1/2"
              src="uinel-assets/elements/tables/dotted-line-top.svg"
              alt=""
            />
          </td>
          <td class="relative text-center text-lg text-gray-400 h-40">
            <span>Unlimited</span>
            <img
              class="absolute right-0 top-1/2 transform -translate-y-1/2"
              src="uinel-assets/elements/tables/dotted-line-top.svg"
              alt=""
            />
          </td>
          <td class="text-center text-lg text-gray-400 h-40">
            <span>Unlimited</span>
          </td> */}
        </tr>
        // {" "}
      // </div>
    );
};

export default BudgetItem;