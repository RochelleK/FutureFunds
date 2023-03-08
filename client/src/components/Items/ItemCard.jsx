import React, { useState } from "react";
import PieCharts from "./PieCharts";

const ItemCard = ({ item, yourBudget, setYourBudget, user }) => {
  const [monthly, setMonthly] = useState(0);
  const [principal, setPrincipal] = useState(item.price);
  const [rate, setRate] = useState(0.05);
  const [time, setTime] = useState(30);
  const [periods, setPeriods] = useState(1);
  
  function calculateCompoundInterest(principal, rate, time, periods) {
    let amount = principal * Math.pow(1 + rate / periods, periods * time);
    let interest = amount - principal;
    return amount.toFixed(0);
  }
  const [interest, setInterest] = useState(
    calculateCompoundInterest(principal, rate, time, periods)
  );

  const compoundedItem = parseInt(calculateCompoundInterest(
    principal,
    rate,
    time,
    periods
    ));
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
      });

      //  useEffect(() => {
         fetch("/lists")
           .then((response) => response.json())
           .then((data) => {
             setYourBudget(data);
           });
      //  }, []);
  };




  const newBudgetItem = {
    user_id: user?.id,
    item_id: item?.id,
  };

  return (
    <div className="flex-shrink-0 p-3 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="p-10 xl:px-9 xl:pt-24 xl:pb-12 h-full bg-gray-100 rounded-3xl">
        <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter flex-col">
          <div>Price Today</div>
          <div>${item.price}</div>
        </p>
        <a className="block mx-auto mb-2 max-w-max" href="#">
          <img
            className="h-40 object-cover"
            // src="https://shuffle.dev/uinel-assets/images/ecommerce-product-list/phone-background-none.png"
            src={item.image}
            alt=""
          />
        </a>

        <a href="#">
          <p className="mb-2 text-xl leading-8 font-heading font-medium hover:underline">
            {item?.name}
          </p>
        </a>
        <div className="flex items-center h-1/2">
          <div className="items-center">
            <PieCharts
              num1={item.price}
              num2={parseInt(
                calculateCompoundInterest(principal, rate, time, periods)
              )}
            />
          </div>
        </div>

        <div className="flex selection:flex-row justify-between">
          <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter flex-col">
            <div>
              <span>In </span>
              <span>
                <input
                  className="w-20 px-1 py-1 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-sm"
                  type="number"
                  placeholder="35"
                  value={time}
                  onChange={(e) => setTime(parseInt(e.target.value) || 0)}
                />
              </span>
              <span> Years</span>
              {/* In 30 Years */}
              <div>
                ${calculateCompoundInterest(principal, rate, time, periods)}
              </div>
            </div>
          </p>
        </div>
        <a
          className="inline-block py-5 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
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
