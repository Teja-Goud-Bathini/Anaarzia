// import React from 'react';
import { useParams } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import { menuItems } from '../data/menuItems';
  

function RestaurantDetails() {
  const { id } = useParams();
  const restaurant = restaurants.find((res) => res.id === parseInt(id));
  const items = menuItems.filter((item) => item.restaurantId === restaurant.id);

  return (
    <div className="p-6">
      <div className="menu-items">  
      <h2 className="text-2xl font-bold mb-4 py-4 mr-4 mx-4">{restaurant.name} Menu</h2>
      {/* <p className="text-gray-600 mb-4">Explore our delicious offerings below:</p> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <img src={item.image} alt={item.name} className="rounded-xl w-full h-40 object-cover fit " />
            <p className="text-gray-600">₹{item.price}</p>
            {/* adding add to cart functionality   */}
            
            <button className="bg-blue-500 text-white rounded p-2 mt-2">Add to Cart</button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );  
}

export default RestaurantDetails;