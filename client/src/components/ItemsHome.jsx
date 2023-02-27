import React, {useState, useEffect} from 'react';
import ItemsCardContainer from './ItemsCardContainer';

const ItemsHome = () => {
const [items, setItems] = useState([])

useEffect(() => {
  fetch("/items")
    .then((res) => res.json())
    .then((data) => {
      setItems(data);
      console.log(items);
    });
  }, []);
  console.log("items");
  console.log(items);
  
    return (
        <div>
            Items Page 
            <ItemsCardContainer items={items}/>
            
        </div>
    );
};

export default ItemsHome;