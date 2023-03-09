import React from 'react';

const Features = () => {
    return (
      <div>
        <section>
          <div className="skew skew-top mr-for-radius">
            <svg
              className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
            </svg>
          </div>
          <div className="skew skew-top ml-for-radius">
            <svg
              className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
            </svg>
          </div>
          <div className="pt-20 bg-gray-50 radius-for-skewed">
            <div className="container mx-auto px-4">
              <div className="mb-16 mx-auto text-center w-max">
                <span className="text-purple-600 font-bold">Your guide to</span>
                <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                  Using this retirement calculator
                </h2>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="mb-6 w-full lg:w-1/2 px-3">
                  <div className="p-6 flex flex-wrap bg-white shadow rounded-lg">
                    <div>
                      <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded-lg bg-[#8bbd4b0f]">
                        <img
                          className="h-8 w-8 md:w-12 md:h-12 text-yellow-500"
                          //   xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          src="./noun-calculator-5577149-71D358.svg"
                        ></img>
                      </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                      <h3
                        className="mb-2 text-2xl font-bold font-heading"
                        contenteditable="false"
                      >
                        How we got here
                      </h3>
                      <p className="text-gray-500" contenteditable="false">
                        Our calculator predicts your retirement nest egg, and
                        then estimates how it would stretch over your
                        retirement.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-6 w-full lg:w-1/2 px-3">
                  <div className="p-6 flex flex-wrap bg-white shadow rounded-lg">
                    <div>
                      <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded-lg bg-pink-100">
                        <img
                          className="h-8 w-8 md:w-12 md:h-12 text-pink-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          src="./noun-percent-1058844-FC6F56.svg"
                        ></img>
                      </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                      <h3
                        className="mb-2 text-2xl font-bold font-heading"
                        contenteditable="false"
                      ></h3>
                      <h3 className="mb-2 text-2xl font-bold font-heading">
                        Rate of Return
                      </h3>
                      <p className="text-gray-500" contenteditable="false">
                        Our default assumptions include a 5% rate of return in
                        retirement (assuming a more conservative portfolio).{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-6 lg:mb-0 w-full lg:w-1/2 px-3">
                  <div className="p-6 flex flex-wrap bg-white shadow rounded-lg">
                    <div>
                      <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded bg-[#fdc9300f]">
                        <img
                          className="h-8 w-8 md:w-12 md:h-12 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          src="./noun-gear-5551224-FDC930.svg"
                        ></img>
                      </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                      <h3
                        className="mb-2 text-2xl font-bold font-heading"
                        contenteditable="false"
                      >
                        Customize
                      </h3>
                      <p className="text-gray-500">
                        Expanding the Optional settings lets you adjust your
                        spending level in retirement, change your expected
                        retirement age and more.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-3">
                  <div className="p-6 flex flex-wrap bg-white shadow rounded-lg">
                    <div>
                      <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded bg-[#4baccb1c]">
                        <img
                          className="h-8 w-8 md:w-12 md:h-12 text-[purple-500]"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          src="./noun-info-1126705-00BBC3.svg"
                        ></img>
                      </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                      <h3
                        className="mb-2 text-2xl font-bold font-heading"
                        contenteditable="false"
                      >
                        More Information
                      </h3>
                      <p className="text-gray-500" contenteditable="false"></p>
                      <ul data-currency="List" className="_33E9q6">
                        <li className="_2vhrLT vMzlLC _30uTzW">
                          <div className="_3GIOzA _1d4dVJ">
                            <p className="_2GMChG _3-to_p">
                              <span
                                className="_2GMChG _3-to_p"
                                // style="margin: 0px; padding: 0px; --webkit-font-smoothing:antialiased;"
                              >
                                Hover over or tap on the color bars in your
                                results panel to get further insight into where
                                you stand.
                              </span>
                            </p>
                          </div>
                        </li>
                        <li
                          className="_2vhrLT vMzlLC _30uTzW"
                          //   style="margin: 0px; padding: 0px; font-family: Gotham, system-ui, sans-serif; display: table-row; counter-increment: ordered-counter 1;"
                        ></li>
                        <li
                          className="_2vhrLT vMzlLC _30uTzW"
                          //   style="margin: 0px; padding: 0px; font-family: Gotham, system-ui, sans-serif; display: table-row; counter-increment: ordered-counter 1;"
                        >
                          <div
                            className="_3GIOzA _1d4dVJ"
                            // style="margin: 0px; padding: 0px;"
                          ></div>
                        </li>
                      </ul>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skew skew-bottom mr-for-radius">
            <svg
              className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
            </svg>
          </div>
          <div className="skew skew-bottom ml-for-radius">
            <svg
              className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
            </svg>
          </div>
        </section>
      </div>
    );
};

export default Features;