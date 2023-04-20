import React from 'react';

const Message1 = ({hello1}) => {
    return (
      <div>
        <h1
          className="mt-5 mb-2 text-3xl text-black font-heading font-bold text-left"
          contenteditable="false"
        >
          {hello1}Let's get Future You
          <span className="text-[#fc6f56] font-extrabold">
            {" "}
            out of the red.
          </span>
        </h1>
        <p className="mb-5 text-lg text-black font-heading font-small text-left leading-9">
          There are a few steps you could take to jumpstart your retirement
          savings. See below how small tweaks to your spending habits can have a
          big effect.
        </p>
      </div>
    );
};

export default Message1;