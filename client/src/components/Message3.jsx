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
          Just a few finishing touches and you'll be on your way. See below how
          small tweaks to your spending habits can have a big effect.
        </p>
      </div>
    );
};

export default Message3;