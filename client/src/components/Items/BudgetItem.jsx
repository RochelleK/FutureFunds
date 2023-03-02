import React, { useState } from "react";

const BudgetItem = ({
  handleDelete,
  setYourBudget,
  item,
  key,
  id,
  yourBudget,
}) => {

const [rateOfReturn, setRateOfReturn] = useState(5)
const [monthly, setMonthly] = useState(0)
 const [principal, setPrincipal] = useState(item?.item?.price);
 const [rate, setRate] = useState(0.05);
 const [time, setTime] = useState(30);
 const [periods, setPeriods] = useState(1);

 function calculateCompoundInterest(principal, rate, time, periods) {
   let amount = principal * Math.pow(1 + rate / periods, periods * time);
   let interest = amount - principal;
   return amount.toFixed(0);
 }

  return (
    // <div>
    <tr>
      <td className="text-lg h-6 px-16">
        
  <h3 className="font-medium leading-6 mb-2">{item?.item?.name}</h3>
          
      </td>
      
      <td className="relative text-center h-20">
        <div className="bg-green-200 text-green-700 text-sm font-bold rounded-full px-3 py-1 flex items-center max-w-max mx-auto">
          <div className="mr-1">
          </div>
          <p>${item?.item?.price}</p>
        </div>
      
      </td>
      <td className="relative text-center h-40">
        <div className="bg-green-200 text-green-700 text-sm font-bold rounded-full px-3 py-1 flex items-center max-w-max mx-auto">
          <div className="mr-1">
            {/* <img src="uinel-assets/elements/tables/arrow-up-green.svg" alt="" /> */}
          </div>
          <p>
            $
            {calculateCompoundInterest(principal, rate, time, periods) -
              (item?.item?.price)}
          </p>
        </div>
      </td>
      <td className="relative text-center h-40">
        <div className="bg-green-200 text-green-700 text-sm font-bold rounded-full px-3 py-1 flex items-center max-w-max mx-auto">
          <div className="mr-1">
            {/* <img src="uinel-assets/elements/tables/arrow-up-green.svg" alt="" /> */}
          </div>
          <p>${calculateCompoundInterest(principal, rate, time, periods)}</p>
        </div>
        <img
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
          src="uinel-assets/elements/tables/dotted-line-top.svg"
          alt=""
        />
      </td>
      <td className="relative text-center h-40">
        <div className="text-sm font-bold rounded-full px-3 py-1 flex items-center max-w-max mx-auto">
          <div className="mr-1 h-4 w-10">
            <img src="./noun-trash-70641.svg" alt="" onClick={handleDelete} />
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
