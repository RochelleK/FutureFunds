import React, { useState } from "react";
import PieCharts from "./PieCharts";

const ItemCard = ({ item, yourBudget, setYourBudget, user }) => {
  const [monthly, setMonthly] = useState(0);
  const [principal, setPrincipal] = useState(item.price);
  const [rate, setRate] = useState(5);
  const [time, setTime] = useState(30);
  const [periods, setPeriods] = useState(1);

  function calculateCompoundInterest(principal, rate, time, periods) {
    let amount = principal * Math.pow(1 + rate / 100 / periods, periods * time);
    let interest = amount - principal;
    return amount.toFixed(0);
  }
  const [interest, setInterest] = useState(
    calculateCompoundInterest(principal, rate, time, periods)
  );

  const compoundedItem = parseInt(
    calculateCompoundInterest(principal, rate, time, periods)
  );
  const [itemCompounded, setItemCompounded] = useState(compoundedItem);

  const handleSubmit = () => {
    fetch("/lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBudgetItem),
    })
      .then((response) => response.json())
      .then(() => {
        setYourBudget([...yourBudget, newBudgetItem]);
        console.log("yourBudget2");
        console.log(yourBudget);
      })
      .then(
        //  useEffect(() => {
        fetch("/lists")
          .then((response) => response.json())
          .then((data) => {
            setYourBudget(data);
          })
        //  }, []);
      );
  };

  const newBudgetItem = {
    user_id: user?.id,
    item_id: item?.id,
  };

  return (
    <div className="flex-shrink-0 p-1 w-full">
      <div className="p-1 xl:px-9 xl:pt-10 xl:pb-12 h-full bg-gray-100 rounded-3xl w-11/12 overflow-auto text-left">
        <a href="#">
          <p className="mb-2 text-3xl leading-8 font-heading font-bold hover:underline text-[#018254ff]">
            {item?.name}
          </p>
        </a>

        <div className="flex flex-row items-center">
          {/* <div className="w-1/2 align-center"> */}
          <a
            className="block mx-auto border- border-black rounded-full"
            href="#"
          >
            <img className="h-40 object-cover" src={item.image} alt="" />
          </a>
          {/* </div> */}
          <div className="h-1/2 w-1/2 align-center">
            <div className="">
              <PieCharts
                num1={item.price}
                num2={parseInt(
                  calculateCompoundInterest(principal, rate, time, periods)
                )}
              />
            </div>
          </div>
        </div>
        <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter flex-row justify-between">
          <div>Price Today</div>
          <div className="text-[#fc6f56ff] font-extrabold">${item.price}</div>
        </p>

        {/* <div className="flex selection:flex-row flex-row py-2 justify-between"> */}
        <div className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter justify-between">
          <span>Compounded at a rate of &nbsp;</span>
          <input
            className="w-12 px-1 py-1 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-sm"
            type="number"
            placeholder="35"
            value={rate}
            onChange={(e) => setRate(parseInt(e.target.value) || 0)}
          />
          <span> &nbsp;percent over &nbsp;</span>
          <span>
            <input
              className="w-12 px-1 py-1 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-sm"
              type="number"
              placeholder="35"
              value={time}
              onChange={(e) => setTime(parseInt(e.target.value) || 0)}
            />
          </span>
          <span> &nbsp;years:</span>
          {/* In 30 Years */}
          <div className="text-right ml-4 text-[#fc6f56ff] font-extrabold">
            ${calculateCompoundInterest(principal, rate, time, periods)}
          </div>
        </div>
        {/* </div> */}
        <a
          className="inline-block py-5 mt-5 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
          href="#"
          onClick={handleSubmit}
        >
          See this in savings!
        </a>
      </div>
    </div>
  );
};

export default ItemCard;
