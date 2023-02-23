import React from "react";


const CaculatorContainer = () => {
  return (
    <div>
      calc
      <section className="py-8 bg-blueGray-100">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaculatorContainer;
