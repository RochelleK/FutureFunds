import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Chart from "./Items/Chart";
import NavBar from "./NavBar";

const CaculatorContainer = ({ user }) => {
  const [age, setAge] = useState(35);
  const [income, setIncome] = useState(100000);
  const [savings, setSavings] = useState(30000);
  const [monthly, setMonthly] = useState(1200);
  const [retirementAge, setRetirementAge] = useState(67);
  const [deathAge, setDeathAge] = useState(95);
  const [rateOfReturn, setRateOfReturn] = useState(5);
  const [monthlyRetirement, setMonthlyRetirement] = useState(
    parseInt((income * 0.7) / 12)
  );
  const [retireFund, setRetireFund] = useState(0);
  const [retireFundNeeded, setRetireFundNeeded] = useState(income * 28);
  const [level, setLevel] = useState("red")

  const compound = () => {
    const k = 1 + rateOfReturn / 100;
    const l = retirementAge - age;

    return (
      savings * Math.pow(k, l) +
      ((monthly * 12 * (Math.pow(k, l) - 1)) / (k - 1)) * k
    );
  };

  const styles1 = (color) => {
    if (retireFund / retireFundNeeded < 0.33) 
    return `bg-${color}-500 border-8 border-red-300 `;
    else return`bg-${color}-200`;
  };
  const styles2 = (color) => {
    if (((retireFund / retireFundNeeded) > 0.33) && (retireFundNeeded < 0.66))
      return `bg-${color}-500 border-8 border-yellow-300 `;
    else return `bg-${color}-200`;
  };
  const styles3 = (color) => {
    if (retireFund / retireFundNeeded > 0.66)
      return `bg-${color}-500 border-8 border-green-300`;
    else return `bg-${color}-200`;
  };


  useEffect(() => {
    setRetireFund(compound);
    setRetireFundNeeded(income*28)
    console.log(retireFund);
  }, [age, income, savings, monthly]);
  console.log("user " + user);

  function convert(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
      : Math.abs(Number(labelValue));
  }

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <div>
      <NavBar />
      {/* <section className=" "> */}
      {/* <div className="container px-4 mx-auto" contenteditable="false"> */}
      {/* <div className="w-full md:w-auto px-4 mb-14 md:mb-0"> */}
      <section class="pt-12 overflow-hidden bg-gray-100">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -mx-4 mb-14 xl:mb-24">
            <div class="w-full px-4 mb-14 md:mb-0">
              <div class="py-12 bg-white rounded-3xl w-full">
                <div class="xl:px-10">
                  <h2 className="text-7xl md:text-5xl font-heading font-medium leading-relaxed text-left">
                    Retirement Calculator
                  </h2>
                  <p
                    className="text-darkBlueGray-400 leading-8 text-3xl text-left py-6"
                    contenteditable="false"
                  >
                    Using your age, current income and current retirement
                    savings rate, this retirement calculator will show whether
                    you're on track for the retirement you want.
                  </p>
                </div>
                <div className="flex px-8">
                  <section className="py-8 bg-blueGray-100">
                    <div className="container px-4 mx-auto">
                      {/* <div className="flex flex-wrap items-center justify-between -mx-4"> */}
                      <div className="w-full md:w-auto px-4">
                        <div className="flex items-center"></div>
                      </div>
                      {/* </div> */}
                    </div>
                  </section>
                </div>
                <div className="flex flex-wrap justify-end lg:justify-start -mx-4 pb-14 mb-14 xl:pb-28 xl:mb-24 border-b border-black border-opacity-10">
                  <div className="flex flex-wrap w-full lg:w-8/12 xl:w-full px-4 mb-10 lg:mb-0">
                    {/* <div className="flex flex-wrap -mx-4"> */}
                    <div className="w-full md:w-1/2 px-4 mb-6 pl-6">
                      <div className="lg:max-w-md">
                        <div className="mb-8">
                          <label className="block mb-4 text-lg text-darkBlueGray-400 text-left">
                            Your Age:&nbsp;
                          </label>
                          <input
                            className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                            type="number"
                            placeholder="35"
                            value={age}
                            onChange={(e) =>
                              setAge(parseInt(e.target.value) || 0)
                            }
                          />
                        </div>
                        <div className="mb-8">
                          <label className="block mb-4 text-lg text-blue-500 text-left">
                            Pre-tax income
                          </label>
                          <div class="flex items-center">
                            <button class="inline-flex items-center justify-center w-5 h-5 text-blue-500 hover:text-blue-600 border-2 border-blue-500 hover:border-blue-600 rounded-full" onClick={()=>setIncome(income-1000)}>
                              <svg
                                width="10"
                                height="2"
                                viewBox="0 0 10 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <line
                                  x1="10"
                                  y1="1.03564"
                                  y2="1.03564"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                ></line>
                              </svg>
                            </button>
                          
                            <input
                              className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                              type="number"
                              value={`${income}`}
                              onChange={(e) =>
                                setIncome(parseInt(e.target.value) || 0)
                              }
                            />

                            <button class="inline-flex items-center justify-center w-5 h-5 text-blue-500 hover:text-blue-600 border-2 border-blue-500 hover:border-blue-600 rounded-full" onClick={()=>setIncome(income+1000)}>
                              <svg
                                width="10"
                                height="11"
                                viewBox="0 0 10 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <line
                                  x1="5.03516"
                                  y1="0.285645"
                                  x2="5.03516"
                                  y2="10.9999"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                ></line>
                                <line
                                  x1="10"
                                  y1="6.03564"
                                  y2="6.03564"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                ></line>
                              </svg>
                            </button>
                          </div>
                          {/* <input
                            className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                            type="number"
                            value={`${income}`}
                            onChange={(e) =>
                              setIncome(parseInt(e.target.value) || 0)
                            }
                          /> */}
                        </div>
                        <div className="mb-8">
                          <label className="block mb-4 text-lg text-blue-550 text-left">
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
                          <label className="block mb-4 text-lg text-darkBlueGray-400 text-left">
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
                    {/* <div className="w-full md:w-1/2 lg:w-4/12 xl:w-1/2 px-4"> */}
                    <div className="pt-11 pb-11 bg-purple-50 rounded-3xl">
                      {/* <div className="border-b border-opacity-20"> */}
                      <div className="px-10 pb-7">
                        <h3
                          className="mb-5 text-3xl text-black font-heading font-medium text-left"
                          contenteditable="false"
                        >
                          How much will you need to retire at 67?
                        </h3>
                        {/* parent div */}
                        <div className="flex justify-around">
                          <div className="flex-row ">
                            <p
                              className="flex-col items-center justify-between leading-8 font-heading font-medium"
                              href="#"
                            >
                              <span className="flex-col items-center text-xl text-black">
                                <span className="mr-3 text-base">$</span>
                                <span>{convert(retireFund)}</span>
                              </span>
                              <div className="flex-row">
                                <Chart number={retireFund} />
                              </div>
                              <span
                                className="text-black text-opacity-70 flex-col"
                                contenteditable="false"
                              >
                                You will have about&nbsp;
                              </span>
                            </p>
                          </div>
                          <div className="flex-row">
                            <p
                              className="flex-col items-center justify-between leading-8 font-heading font-medium"
                              href="#"
                            >
                              <span className="flex-col items-center text-xl text-black">
                                <span className="mr-3 text-base">$</span>
                                <span>{convert(retireFundNeeded)}</span>
                              </span>
                              <div className="flex-row">
                                <Chart number={retireFundNeeded} />
                              </div>
                              <span
                                className="text-black text-opacity-70"
                                contenteditable="false"
                              >
                                You will need about&nbsp;
                              </span>
                            </p>
                          </div>
                        </div>
                        {/* end of parent div */}
                      </div>
                      {/* </div> */}
                      <div className="px-10 pb-1">
                        <h2
                          className="mb-5 text-2xl text-black font-heading font-medium text-left"
                          contenteditable="false"
                        >
                          Retirement savings score
                        </h2>
                      </div>
                      <div className="flex justify-center">
                        {/* <div className="flex-row"> */}

                        {/* <input
                            className="flex-row w-1/4 px-5 py-3 text-lg leading-9 bg-red-50 border-2 border-red-400 outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-xl my-2"
                            placeholder="Needs attention"
                            // value={"Needs attention"}
                          />
                         */}
                        <div
                          className={`${styles1(
                            "red"
                          )} flex-row w-1/4 px-5 py-3 text-sm leading-9 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-m my-2 text-white`}
                        >
                          Falling behind
                        </div>
                        <div className={`${styles2("yellow")}flex-row w-1/4 px-5 py-3 text-sm leading-9 bg-yellow-100 border-1 border-green-400 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-m my-2 mx-1 text-yellow-400`}>
                          on your way
                        </div>
                        <div className={`${styles3("green")}flex-row w-1/4 px-5 py-3 text-sm leading-9 bg-green-100 border-1 border-green-400 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-m my-2 text-green-400`}>
                          getting close
                        </div>
{(()=>{

  
  switch(level) {
    case "red":
    // code block
    return <p>hello red</p>
    break;
    case "yellow":
      // code block
      break;
      case "green":
        // code block
        break;
    default:
      // code block
          return <p>hello other</p>;

    }
  }
)
}

                        {/* </div> */}
                      </div>
                      <div className="px-10 mx-auto md:max-w-max">
                        <Link to="/items">
                          <a
                            className="block py-5 px-10 w-full text-xl leading-6 font-medium tracking-tighter font-heading text-center bg-blue-300 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                            href="#"
                            contenteditable="false"
                          >
                            Ways to Save!&nbsp;
                          </a>
                        </Link>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-96"></div>
        </div>
      </section>
      {/* </div> */}
      {/* </div> */}
      {/* </section> */}

      <Footer />
    </div>
  );
};

export default CaculatorContainer;
