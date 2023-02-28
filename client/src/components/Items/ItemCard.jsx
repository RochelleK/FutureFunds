import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="flex-shrink-0 p-3 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="p-10 xl:px-9 xl:pt-24 xl:pb-12 h-full bg-gray-100 rounded-3xl">
        <a className="block mx-auto mb-8 xl:mb-20 max-w-max" href="#">
          <img
            className="h-40 object-cover"
            src="https://shuffle.dev/uinel-assets/images/ecommerce-product-list/phone-background-none.png"
            alt=""
          />
        </a>
        <a href="#">
          <p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
            {/* Apple iPhone 12 Pro (128GB) Silver */}
            {item?.name}
          </p>
        </a>
        <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
          <span>Price Today:</span>
          <span className="mr-2 text-xs">$</span>
          <span>{item.price}price</span>
        </p>
        <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
          <span>In 20 Years:</span>
          <span className="mr-2 text-xs">$</span>
          <span>544.90</span>
        </p>
        <a
          class="inline-block py-5 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
          href="#"
        >
          See this in savings!
        </a>
      </div>
    </div>
  );
};

export default ItemCard;
