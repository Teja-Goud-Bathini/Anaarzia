import { Link } from "react-router-dom";
import { restaurants } from "../data/restaurants";

export default function Restaurants() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Popular Restaurants</h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {restaurants.map((res) => (
          <Link
            key={res.id}
            to={`/restaurant/${res.id}`}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-3"
          >
            <img
              src={res.image}
              alt={res.name}
              className="rounded-xl w-full h-40 object-cover"
            />
            <div className="mt-3">
              <h3 className="font-semibold text-lg">{res.name}</h3>
              <p className="text-sm text-gray-500">{res.cuisine}</p>
              <p className="text-sm text-orange-500">⭐ {res.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
