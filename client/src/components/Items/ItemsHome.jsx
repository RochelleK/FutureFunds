import React, { useState, useEffect } from "react";
import ItemsCardContainer from "./ItemsCardContainer";
import NavBar from "../NavBar";
import Budget from "./Budget";

const ItemsHome = ({ user, yourBudget, setYourBudget }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        // console.log(data);
      });
  }, []);

  // useEffect(() => {
  //   fetch("/lists")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setYourBudget(data);
  //       console.log(data);
  //     });
  // }, []);

  if (!items[0]) return null;

  return (
    <div>
      <NavBar />
      <div className="container px-4 mx-auto">
        <div className="mb-2">
          <h2 className="font-heading font-medium text-4xl md:text-10xl xl:text-5xl leading-tight text-left">
            {user?.name}, are you borrowing from your future?
          </h2>
        </div>
      </div>
      <ItemsCardContainer
        items={items}
        yourBudget={yourBudget}
        setYourBudget={setYourBudget}
        user={user}
      />
      {user ? (
        <Budget
          user={user}
          yourBudget={yourBudget}
          setYourBudget={setYourBudget}
        />
      ) : null}
    </div>
  );
};

export default ItemsHome;
