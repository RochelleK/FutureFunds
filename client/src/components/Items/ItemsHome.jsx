import React, { useState, useEffect } from "react";
import ItemsCardContainer from "./ItemsCardContainer";
import NavBar2 from "../NavBar2";
import Budget from "./Budget";
import { Link, useNavigate } from "react-router-dom";


const ItemsHome = ({ user, yourBudget, setYourBudget }) => {
  const [items, setItems] = useState([]);
  const [random, setRandom] = useState(true);

  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        // console.log(data);
      });
  }, [random]);

  if (!items[0]) return null;

  const handleClick = () => {
    setRandom(!random);
    this.forceUpdate();
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
    console.log(random);
    console.log("clicksdfsdfsfsf");
  };

  return (
    <div>
      <NavBar2 />
      <div className="flex justify-between">
        <h2 className="my-5 p-5 ml-5 font-heading font-medium text-4xl md:text-10xl xl:text-5xl leading-tight text-left bg-white text-[#8bbd4bff] rounded-md w-max">
          Opportunity Cost Calculator
        </h2>
        <Link to="/budgethome">
          <a
            className="inline-block mt-10 mr-16 py-3 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-[#8bbd4bff] hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
            href="#"
            onClick={console.log("click")}
          >
            See these add up!
          </a>
        </Link>
      </div>
      <ItemsCardContainer
        items={items}
        yourBudget={yourBudget}
        setYourBudget={setYourBudget}
        user={user}
      />
    </div>
  );
};

export default ItemsHome;
