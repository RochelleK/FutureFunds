import React from 'react';
import Message1 from './Message1';
import Message3 from './Message3';
import Message4 from './Message4';

const OptionComponent = ({option, setTriangle, textPadding, setTextPadding}) => {

  switch (true) {
    case option <= 0.33:
      setTriangle(200);
      return (
        <div>
            <Message1/>
           </div>
      );
    case option > 0.33 && option <= 0.66:
      setTriangle(350);
      return (
        <div>
          <Message3/>
        </div>
      );
    case option > 0.66 && option <= 0.99999:
      setTriangle(450);
      return (
        <div>
          <Message3 />
        </div>
      );
    case option > 1:
      setTriangle(610);
      return (
        <div>
          <Message4 />
        </div>
      );
    default:
      return <p>Please select an option.</p>;
  }

};

export default OptionComponent;