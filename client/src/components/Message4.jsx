import React from 'react';

const Message4 = () => {
    return (
      <div>
        <h2
          className="mt-5 mb-2 text-3xl text-black font-heading font-bold text-left"
          contenteditable="false"
        >
          You're doing great. Let's
          <span className="text-[#8bbd4bff] font-extrabold">
            {" "}
            see some more ways to save.
          </span>
        </h2>
        <p className="mb-5 text-lg text-black font-heading font-small text-left leading-9">
          Could your future be any brighter? Let’s find out. See below how small
          tweaks to your spending habits can have a big effect.
        </p>
      </div>
    );
};

export default Message4;