import React from "react";
import Message1 from "./Message1";
import Message2 from "./Message2";
import Message3 from "./Message3";
import Message4 from "./Message4";

const OptionComponent = ({
  option,
  setTriangle,
  textPadding,
  setTextPadding,
}) => {
  switch (true) {
    case option <= 0.1999:
      setTriangle(`left-[40px]`);
      setTextPadding(`pl-[40px]`);
      return (
        <div>
          <Message1 />
        </div>
      );
    case option > 0.2 && option <= 0.2999:
      setTriangle(`right-[810px]`);
      setTextPadding(`pl-[150px]`);

      return (
        <div>
          <Message1 />
        </div>
      );
    case option > 0.3 && option <= 0.399999:
      setTriangle(`right-[710px]`);
      setTextPadding(`pl-[250px]`);

      return (
        <div>
          <Message1 />
        </div>
      );
    case option > 0.4 && option <= 0.499999:
      setTriangle(`right-[580px]`);
      setTextPadding(`pl-[380px]`);

      return (
        <div>
          <Message2 />
        </div>
      );
    case option > 0.5 && option <= 0.599999:
      setTriangle(`right-[500px]`);
      setTextPadding(`pl-[460px]`);

      return (
        <div>
          <Message2 />
        </div>
      );
    case option > 0.6 && option <= 0.699999:
      setTriangle(`right-[460px]`);
      setTextPadding(`pl-[500px]`);

      return (
        <div>
          <Message2 />
        </div>
      );
    case option > 0.7 && option <= 0.799999:
      setTriangle(`right-[360px]`);
      setTextPadding(`pl-[600px]`);

      return (
        <div>
          <Message3 />
        </div>
      );
    case option > 0.8 && option <= 0.899999:
      setTriangle(`right-[300px]`);
      setTextPadding(`pl-[650px]`);
      return (
        <div>
          <Message3 />
        </div>
      );
    case option > 0.9 && option <= 0.999999:
      setTriangle(`right-[120px]`);
      setTextPadding(`pl-[750px]`);

      return (
        <div>
          <Message3 />
        </div>
      );
    case option > 1:
      setTriangle(`right-[40px]`);
      setTextPadding(`pl-[750px]`);
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
