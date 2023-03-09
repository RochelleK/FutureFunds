import React, { useEffect, useState } from "react";
import BudgetItem from "./BudgetItem";

const Budget = ({ yourBudget, setYourBudget, user }) => {
  const [total, setTotal] = useState(0);
  const [itemsTotal, setItemsTotal] = useState(0);
  const [futureItemsTotal, setFutureItemsTotal] = useState(0);

  useEffect(() => {
    fetch("/lists")
      .then((response) => response.json())
      .then((data) => {
        setYourBudget(data);
      });
  }, []);
  
  // useEffect(() => {
    fetch(`users/${user.id}/sum_items`)
      .then((response) => response.json())
      .then((data) => {
        setItemsTotal(data);
        console.log("total");
        console.log(data);
      });
  // }, []);

  const handleDelete = (id) => {
    fetch(`/lists/${id}`, {
      method: "DELETE",
    });
    const updatedBudget = yourBudget.filter((item) => item.id !== id);
    setYourBudget(updatedBudget);
    console.log("deleted")
  };

  const filteredList = yourBudget.filter((item) => {
    if (user) return user?.id === item.user?.id;
    else return item;
  });

 const [principal, setPrincipal] = useState(10);
 const [rate, setRate] = useState(0.05);
 const [time, setTime] = useState(30);
 const [periods, setPeriods] = useState(1);
 
   function calculateCompoundInterest(principal, rate, time, periods) {
     let amount = principal * Math.pow(1 + rate / periods, periods * time);
     let interest = amount - principal;
     return amount.toFixed(0);
   }
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < filteredList.length; i++) {
      sum += filteredList[i].item.price;
    }
    setTotal(sum);
    setPrincipal(sum); 
  }, []);

  if (!yourBudget[0]) return null;

  return (
    <div>
      {user ? (
        <section className="font-normal bg-gray-100 2xl:py-10">
          <div className="container px-4 mx-auto">
            <div className="mb-8">
              <h2 className="font-heading font-medium text-4xl md:text-10xl xl:text-5xl leading-tight">
                {user.name}, your future starts now!
              </h2>
            </div>
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full rounded-5xl overflow-hidden border border-gray-100">
                <table className="table-auto w-full">
                  <thead className="text-white">
                    <tr>
                      <th className="h-20 bg-indigo-700 pl-16 px-12 text-lg font-semibold uppercase">
                        <p>ITEM</p>
                      </th>
                      <th className="h-20 bg-indigo-700 px-12 text-lg font-semibold uppercase">
                        <p className="min-w-max">Value Now</p>
                      </th>
                      <th className="h-20 bg-indigo-700 px-12 text-lg font-semibold uppercase">
                        <p className="min-w-max">Compound Interest</p>
                      </th>
                      <th className="h-20 bg-indigo-700 px-12 text-lg font-semibold uppercase">
                        <p className="min-w-max">Value Later</p>
                      </th>
                      <th className="h-20 bg-indigo-700 px-12 text-lg font-semibold uppercase">
                        <p className="min-w-max">REMOVE</p>
                      </th>
                      {/* <th className="h-20 bg-indigo-700 pr-16 px-12 text-lg font-semibold uppercase">
                <p className="min-w-max">Feature 5</p>
              </th> */}
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {filteredList.map((item) => {
                      return (
                        <BudgetItem
                          handleDelete={handleDelete}
                          setYourBudget={setYourBudget}
                          item={item}
                          id={item.id}
                          yourBudget={yourBudget}
                          key={item.id}
                        />
                      );
                    })}
                  </tbody>
                  <thead className="text-white">
                    <tr>
                      <th className="h-20 bg-indigo-700 pl-16 px-12 text-lg font-semibold uppercase">
                        <p></p>
                      </th>
                      <th className="h-20 bg-indigo-700 px-12 text-lg font-semibold uppercase">
                        <p className="min-w-max">
                          ${user ? (total):(7)}
                          </p>
                      </th>
                      <th className="h-20 bg-indigo-700 px-12 text-lg font-semibold uppercase">
                        <p className="min-w-max">
                          Potential Compounded Interest: $
                          {calculateCompoundInterest(
                            total,
                            rate,
                            time,
                            periods
                          )-total}
                        </p>
                      </th>
                      <th className="h-20 bg-indigo-700 px-12 text-lg font-semibold uppercase">
                        <p className="min-w-max">
                          $
                          {calculateCompoundInterest(
                            total,
                            rate,
                            time,
                            periods
                          )}
                        </p>
                      </th>
                      <th className="h-20 bg-indigo-700 px-12 text-lg font-semibold uppercase">
                        <p className="min-w-max"></p>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <h2 className="pb-5 mt-5 mb-4 text-4xl font-bold tracking-tighter text-center md:text-5xl text-coolGray-900">
            Ways to Save&nbsp;
          </h2>
          <h3 className="pb-48 pt-32 mt-5 mb-4 text-2xl font-bold tracking-tighter text-center md:text-3xl text-gray-500">
            Hi there! Nothing to show yet. Sign In to see how you can save
            toward your future!
          </h3>
        </div>
      )}
    </div>
  );
};

export default Budget;
