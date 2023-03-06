import React from 'react';

const Message3 = () => {
    return (
      <div>
        <h2
          className="mt-5 mb-2 text-3xl text-black font-heading font-bold text-left"
          contenteditable="false"
        >
          You're close. Let's
          <span className="text-[#4baccb] font-extrabold">
            {" "}
            get you on track.
          </span>
        </h2>
        <p className="mb-5 text-lg text-black font-heading font-small text-left leading-9">
          There are a few steps you could take to jumpstart your retirement
          savings. See below how small tweaks to your spending habits can have a
          big effect.
        </p>
      </div>
    );
};

export default Message3;