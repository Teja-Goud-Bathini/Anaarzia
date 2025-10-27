import { Link } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-3">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="rounded-xl w-full h-40 object-cover"
        />
        <div className="mt-3">
          <h3 className="font-semibold text-lg">{restaurant.name}</h3>
          <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
          <p className="text-sm text-orange-500">⭐ {restaurant.rating}</p>
        </div>
      </div>
    </Link>
  );
}
