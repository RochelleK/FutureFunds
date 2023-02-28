import React from "react";

const BudgetItem = ({
  handleDelete,
  setYourBudget,
  item,
  key,
  id,
  yourBudget,
}) => {
  return (
    // <div>
    <tr>
      <td className="text-lg h-40 px-16">
        <div className="flex items-start">
          <div>
            <input
              className="mr-9 form-checkbox h-5 w-5 border border-gray-300"
              type="checkbox"
            />
          </div>
          <div className="w-96">
            <h3 className="font-medium leading-6 mb-4">{item?.name}</h3>
            {/* <p className="text-base font-sans text-gray-400 font-normal leading-6">
                  Proin nec nibh vel odio dapibus molestie eu id ipsum. Fusce
                  sodales vitae lorem vitae tempus.
                </p> */}
          </div>
        </div>
      </td>
      {/* <td className="relative"> */}
      {/* <div className="relative max-w-max mx-auto">
              <img src="uinel-assets/elements/tables/circle1.svg" alt="" />
              <div className="absolute text-3xl text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                3
              </div>
            </div>
            <img
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              src="uinel-assets/elements/tables/dotted-line-top.svg"
              alt=""
            /> */}
      {/* </td> */}
      <td className="relative text-center h-40">
        <div className="bg-green-200 text-green-700 text-sm font-bold rounded-full px-3 py-1 flex items-center max-w-max mx-auto">
          <div className="mr-1">
            <img src="uinel-assets/elements/tables/arrow-up-green.svg" alt="" />
          </div>
          <p>9%</p>
        </div>
        <img
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
          src="uinel-assets/elements/tables/dotted-line-top.svg"
          alt=""
        />
      </td>
      <td className="relative text-center h-40">
        <div className="bg-green-200 text-green-700 text-sm font-bold rounded-full px-3 py-1 flex items-center max-w-max mx-auto">
          <div className="mr-1">
            <img src="uinel-assets/elements/tables/arrow-up-green.svg" alt="" />
          </div>
          <p>9%</p>
        </div>
        <img
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
          src="uinel-assets/elements/tables/dotted-line-top.svg"
          alt=""
        />
      </td>
      <td className="relative text-center h-40">
        <div className="bg-green-200 text-green-700 text-sm font-bold rounded-full px-3 py-1 flex items-center max-w-max mx-auto">
          <div className="mr-1">
            <img src="uinel-assets/elements/tables/arrow-up-green.svg" alt="" />
          </div>
          <p>9%</p>
        </div>
        <img
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
          src="uinel-assets/elements/tables/dotted-line-top.svg"
          alt=""
        />
      </td>
      <td className="relative text-center h-40">
        <div className="text-sm font-bold rounded-full px-3 py-1 flex items-center max-w-max mx-auto">
        <div className="mr-1 h-10 w-10">
          <img src="./noun-trash-70641.svg" alt="" />
        </div>
        </div>
        
      </td>
      {/* <td className="relative text-center text-lg text-gray-400 h-40">
        <img
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
          src="./noun-trash-70641.svg"
          alt=""
        />
      </td> */}
      {/* <td className="relative text-center text-lg text-gray-400 h-40">
            <span>Unlimited</span>
            <img
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              src="uinel-assets/elements/tables/dotted-line-top.svg"
              alt=""
            />
          </td>
          <td className="text-center text-lg text-gray-400 h-40">
            <span>Unlimited</span>
          </td> */}
    </tr>
    // </div>
  );
};

export default BudgetItem;
