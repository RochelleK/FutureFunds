import React, { useEffect } from "react";
import BudgetItem from "./BudgetItem";

const Budget = ({ yourBudget, setYourBudget, user }) => {
  useEffect(() => {
    fetch("/lists")
      .then((response) => response.json())
      .then((data) => {
        setYourBudget(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`/lists/${id}`, {
      method: "DELETE",
    });
    const updatedBudget = yourBudget.filter((item) => item.id !== id);
    setYourBudget(updatedBudget);
    console.log("updatedBudget")
    console.log(updatedBudget)
  };

  const filteredList = yourBudget.filter((item) => {
    if (user) return user?.id === item.user?.id;
    else return item;
  });
  if (!yourBudget[0]) return null 


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
                        {/* <div className="flex itmes-center min-w-max"> */}
                          {/* <div>
                            <input
                              className="mr-9 border-none form-checkbox h-5 w-5 border border-gray-300"
                              type="checkbox"
                            />
                          </div> */}
                          <p>ITEM</p>
                        {/* </div> */}
                      </th>
                      <th className="h-20 bg-indigo-700 px-12 text-lg font-semibold uppercase">
                        <p className="min-w-max">Value Now</p>
                      </th>
                      <th className="h-20 bg-indigo-700 px-12 text-lg font-semibold uppercase">
                        <p className="min-w-max">Compoud Interest @ 5% over 30 years</p>
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
            Hi there! Nothing to show yet. Sign In to see how you can save toward your future!
          </h3>
        </div>
      )}
    </div>
  );
};

export default Budget;
