import React from 'react';
import ItemCard from './ItemCard';

const ItemsCardContainer = ({items}) => {
    return (
        <div>
            Items Card Container
            {items.map((item)=>{
                return <ItemCard item={item} key={item.id}/>
            })}

        </div>
    );
};

export default ItemsCardContainer;