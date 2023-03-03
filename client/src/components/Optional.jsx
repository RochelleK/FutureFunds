import React from "react";

const Optional = ({age,
                      income,
                      setAge,
                      setIncome,
                      savings,
                      setSavings,
                      monthly,
                      setMonthly, isOptional, setIsOptional, changeOption })=> {
  return (
    <div className="lg:max-w-md p-3">
      <div className="lg:max-w-md flex justify-between mt-6 mx-6">
        <div className="mb-8 font-bold text-xl">Optional</div>
        <div className="h-6 w-6">
          <img
            src="./noun-top-arrow-3012854.svg"
            onClick={changeOption}
          />
        </div>
      </div>
      <div className="mb-8 ">
        <label className="block mb-4 text-lg text-darkBlueGray-400 text-left">
          Your Age:&nbsp;
          {/* <Tooltip text="The younger the better!">
                  <span className="text-blue-500 cursor-pointer">
                    <img
                      src="./noun-question-mark-2660318.svg"
                      className="w-6 h-6 object-contain"
                    />
                  </span>
                </Tooltip> */}
        </label>
        <input
          className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-sm"
          type="number"
          placeholder="35"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value) || 0)}
        />
      </div>
      <div className="mb-8">
        <label className="block mb-4 text-lg text-blue-500 text-left">
          Pre-tax income
        </label>
        <div class="flex items-center">
          <button
            class="inline-flex items-center justify-center w-16 h-16 text-blue-500 hover:text-blue-600 border-2 border-blue-500 hover:border-blue-600 rounded-sm"
            onClick={() => setIncome(income - 1000)}
          >
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
            className="w-full h-16 px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 "
            type="number"
            value={`${income}`}
            onChange={(e) => setIncome(parseInt(e.target.value) || 0)}
          />

          <button
            class="inline-flex items-center justify-center w-16 h-16 text-blue-500 hover:text-blue-600 border-2 border-blue-500 hover:border-blue-600 rounded-sm"
            onClick={() => setIncome(income + 1000)}
          >
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
      </div>
      <div className="mb-8">
        <label className="block mb-4 text-lg text-blue-550 text-left">
          Current Savings:&nbsp;
        </label>
        <div class="flex items-center">
          <button
            class="inline-flex items-center justify-center w-16 h-16 text-blue-500 hover:text-blue-600 border-2 border-blue-500 hover:border-blue-600 rounded-sm"
            onClick={() => setSavings(savings - 1000)}
          >
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
            className="w-full h-16 px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-sm"
            type="number"
            value={savings}
            onChange={(e) => setSavings(parseInt(e.target.value) || 0)}
          />
          <button
            class="inline-flex items-center justify-center w-16 h-16 text-blue-500 hover:text-blue-600 border-2 border-blue-500 hover:border-blue-600 rounded-sm"
            onClick={() => setSavings(savings + 1000)}
          >
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
      </div>
      <div>
        <label className="block mb-4 text-lg text-darkBlueGray-400 text-left">
          Every month I save:&nbsp;
        </label>
        <div class="flex items-center">
          <button
            class="inline-flex items-center justify-center w-16 h-16 text-blue-500 hover:text-blue-600 border-2 border-blue-500 hover:border-blue-600 rounded-sm"
            onClick={() => setMonthly(monthly - 50)}
          >
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
            className="w-full h-16 px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-sm"
            type="number"
            value={monthly}
            onChange={(e) => setMonthly(parseInt(e.target.value) || 0)}
          />
          <button
            class="inline-flex items-center justify-center w-16 h-16 text-blue-500 hover:text-blue-600 border-2 border-blue-500 hover:border-blue-600 rounded-sm"
            onClick={() => setMonthly(monthly + 50)}
          >
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
      </div>
    </div>
  );
};

export default Optional;
