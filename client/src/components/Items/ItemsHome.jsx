import React, { useState, useEffect } from "react";
import ItemsCardContainer from "./ItemsCardContainer";
import NavBar2 from "../NavBar2";
import Budget from "./Budget";

const ItemsHome = ({ user, yourBudget, setYourBudget }) => {
  const [items, setItems] = useState([]);
  const [random, setRandom] = useState(true)

  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        // console.log(data);
      });
  }, [random]);


  if (!items[0]) return null;

  const handleClick = ()=>{
   setRandom(!random)
    console.log(random)
  }

  return (
    <div>
      <NavBar2 />
      {/* <div className="container px-4 mx-auto">
        <div className="mb-2">
          <h2 className="font-heading font-medium text-4xl md:text-10xl xl:text-5xl leading-tight text-left">
            {user?.name}, are you borrowing from your future?
          </h2>
        </div>
      </div> */}

      <div className="flex justify-between">
        <div className="justify-between">
          <ItemsCardContainer
            items={items}
            yourBudget={yourBudget}
            setYourBudget={setYourBudget}
            user={user}
          />
        </div>
        <div className="h-40 w-40 justify-end">
          <img src="./noun-random-2278338-018254.svg" onClick={handleClick}/>
        </div>
      </div>
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
