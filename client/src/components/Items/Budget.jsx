import React, {useEffect} from "react";
import BudgetItem from "./BudgetItem";

const Budget = ({yourBudget, setYourBudget, user}) => {

  useEffect(() => {
    fetch("/lists")
      .then((response) => response.json())
      .then((data) => {
        setYourBudget(data);
        console.log(data);
      });
  }, []);
  console.log("user "+user)

  // const filteredBudget = yourBudget.filter((list) => {
  //   if (user) return user.id === list.user.id;
  //   else return list;
  // });


  return (
    <div>
      {user ? (
        <section class="font-normal bg-blueGray-100 py-24 2xl:py-44">
          <div class="container px-4 mx-auto">
            <div class="mb-28">
              <h2 class="font-heading font-medium text-9xl md:text-10xl xl:text-5xl leading-tight">
                How much could I be saving?
              </h2>
            </div>
            <div class="overflow-x-auto">
              <div class="inline-block min-w-full rounded-5xl overflow-hidden border border-gray-100">
                <table class="table-auto w-full">
                  <thead class="text-white">
                    <tr>
                      <th class="h-20 bg-indigo-700 pl-16 px-12 text-lg font-semibold uppercase">
                        <div class="flex itmes-center min-w-max">
                          <div>
                            <input
                              class="mr-9 border-none form-checkbox h-5 w-5 border border-gray-300"
                              type="checkbox"
                            />
                          </div>
                          <p>ITEM</p>
                        </div>
                      </th>
                      <th class="h-20 bg-indigo-700 px-12 text-lg font-semibold uppercase">
                        <p class="min-w-max">Now</p>
                      </th>
                      <th class="h-20 bg-indigo-700 px-12 text-lg font-semibold uppercase">
                        <p class="min-w-max">Later</p>
                      </th>
                      <th class="h-20 bg-indigo-700 px-12 text-lg font-semibold uppercase">
                        <p class="min-w-max">VALUE NOW</p>
                      </th>
                      <th class="h-20 bg-indigo-700 px-12 text-lg font-semibold uppercase">
                        <p class="min-w-max">REMOVE</p>
                      </th>
                      {/* <th class="h-20 bg-indigo-700 pr-16 px-12 text-lg font-semibold uppercase">
                <p class="min-w-max">Feature 5</p>
              </th> */}
                    </tr>
                  </thead>
                  <tbody class="bg-white">
                    {<BudgetItem />}
                    {<BudgetItem />}
                    {<BudgetItem />}
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
            Hi there! Nothing to show yet. Sign In to create some potential
            paths and jump start your future!
          </h3>
        </div>
      )}
    </div>
  );
};

export default Budget;
