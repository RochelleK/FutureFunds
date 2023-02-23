import React from "react";
import { useState, useEffect } from "react";

const CaculatorContainer = () => {
  const [age, setAge] = useState(35)
  const [income, setIncome] = useState(100000)
  const [savings, setSavings] = useState(30000)
  const [monthly, setMonthly] = useState(1200)
  const [retirementAge, setRetirementAge] = useState(67)
  const [deathAge, setDeathAge] = useState(95)
  const [rateOfReturn, setRateOfReturn] = useState(5)
  const [monthlyRetirement, setMonthlyRetirement] = useState(parseInt(income*.7/12));
  console.log(monthlyRetirement)

  return (
    <div>
      <div className="flex px-8">
        <section className="py-8 bg-blueGray-100">
          <div className="container px-4 mx-auto">
            {/* <div className="flex flex-wrap items-center justify-between -mx-4"> */}
            <div className="w-full md:w-auto px-4 mb-14 md:mb-0">
              <h2 className="text-7xl md:text-8xl font-heading font-bold leading-relaxed">
                Retirement Calculator
              </h2>
              <p
                className="text-darkBlueGray-400 leading-8"
                contenteditable="false"
              >
                Using your age, current income and current retirement savings
                rate, this retirement calculator will show whether you're on
                track for the retirement you want.
              </p>
            </div>
            <div className="w-full md:w-auto px-4">
              <div className="flex items-center"></div>
            </div>
            {/* </div> */}
          </div>
        </section>
      </div>

      <section className="pt-12 pb-24">
        <div className="container px-4 mx-auto" contenteditable="false">
          <div className="flex flex-wrap justify-end lg:justify-start -mx-4 pb-14 mb-14 xl:pb-28 xl:mb-24 border-b border-black border-opacity-10">
            <div className="w-full lg:w-8/12 xl:w-9/12 px-4 mb-10 lg:mb-0">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-6">
                  <div className="lg:max-w-sm">
                    <div className="mb-8">
                      <label className="block mb-4 text-lg text-darkBlueGray-400">
                        Your Age:&nbsp;
                      </label>
                      <input
                        className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                        type="number"
                        placeholder="35"
                        value={age}
                        onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                      />
                    </div>
                    <div className="mb-8">
                      <label className="block mb-4 text-lg text-darkBlueGray-400">
                        Pre-tax income
                      </label>
                      <input
                        className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                        type="number"
                        value={income}
                        onChange={(e) =>
                          setIncome(parseInt(e.target.value) || 0)
                        }
                      />
                    </div>
                    <div className="mb-8">
                      <label className="block mb-4 text-lg text-darkBlueGray-400">
                        Current Savings:&nbsp;
                      </label>
                      <input
                        className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                        type="number"
                        value={savings}
                        onChange={(e) =>
                          setSavings(parseInt(e.target.value) || 0)
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-4 text-lg text-darkBlueGray-400">
                        Every month I save:&nbsp;
                      </label>
                      <input
                        className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                        type="number"
                        value={monthly}
                        onChange={(e) =>
                          setMonthly(parseInt(e.target.value) || 0)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 px-4">
                  <div className="pt-11 pb-11 bg-purple-500 rounded-3xl">
                    <div className="border-b border-opacity-20">
                      <div className="px-10 pb-7">
                        <h3
                          className="mb-5 text-3xl text-white font-heading font-medium"
                          contenteditable="false"
                        >
                          How much will you need to retire at 67?
                        </h3>
                        <p
                          className="flex items-center justify-between leading-8 font-heading font-medium"
                          href="#"
                        >
                          <span
                            className="text-white text-opacity-70"
                            contenteditable="false"
                          >
                            You will have about:&nbsp;
                          </span>
                          <span className="flex items-center text-xl text-white">
                            <span className="mr-3 text-base">$</span>
                            <span>710,700</span>
                          </span>
                        </p>
                        <p
                          className="flex items-center justify-between leading-8 font-heading font-medium"
                          href="#"
                        >
                          <span
                            className="text-white text-opacity-70"
                            contenteditable="false"
                          >
                            You will need:&nbsp;
                          </span>
                          <span className="flex items-center text-xl text-white">
                            <span className="mr-3 text-base">$</span>
                            <span>1.7M</span>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="px-10 pt-5 mb-7">
                      <div className="pb-5 border-b border-opacity-30">
                        <p
                          className="flex items-center justify-between leading-8 font-heading font-medium"
                          href="#"
                        >
                          <span className="text-white">Total</span>
                          <span className="flex items-center text-xl text-white">
                            <span className="mr-3 text-base">$</span>
                            <span>720,70</span>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="px-10 mx-auto md:max-w-max">
                      <a
                        className="block py-5 px-10 w-full text-xl leading-6 font-medium tracking-tighter font-heading text-center bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                        href="#"
                        contenteditable="false"
                      >
                        Ways to Save!&nbsp;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaculatorContainer;
