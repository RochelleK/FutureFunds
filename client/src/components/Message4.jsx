import React from 'react';

const Message4 = () => {
    return (
      <div>
        <h2
          className="mt-5 mb-2 text-xl text-black font-heading font-medium text-left"
          contenteditable="false"
        >
          You're doing great. Let's
          <span className="text-[#4baccb] font-extrabold">
            {" "}
            see some more ways to save.
          </span>
        </h2>
        <p className="mb-5 text-sm text-black font-heading font-small text-left max-w-lg">
          There are a few steps you could take to jumpstart your retirement
          savings. See below how small tweaks to your spending habits can have a
          big effect.
        </p>
      </div>
    );
};

export default Message4;