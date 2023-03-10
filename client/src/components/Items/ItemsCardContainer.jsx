import React, { useState } from "react";
import ItemCard from "./ItemCard";

const ItemsCardContainer = ({ items, user, yourBudget, setYourBudget }) => {
  const [fourItems, setFourItems] = useState(items.slice(0, 9));
  return (
    <section className="overflow-hidden">
      {/* <div className="relative container px-4 mx-auto"> */}
      {/* <h2 className="mb-14 xl:mb-24 text-9xl xl:text-10xl font-heading font-medium"></h2> */}
      {/* <div className="relative px-4 md:px-0"> */}
      <div className=" sm:mb-0 grid grid-cols-3 gap-1 ml-10">
        {/* <div className="flex sm:mb-0"> */}
        {fourItems?.map((item) => {
          return (
            <ItemCard
              item={item}
              key={item.id}
              yourBudget={yourBudget}
              setYourBudget={setYourBudget}
              user={user}
            />
          );
        })}
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default ItemsCardContainer;
