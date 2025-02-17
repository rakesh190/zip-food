import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

//import { restaurantList as initialRestaurantList } from "../utils/mockData";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  let [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("Body Rendered");

  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  const { loggedInUser, setUserName } = useContext(UserContext);

  const fetchData = async () => {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const data = await response.json();
    const restaurants = data?.data?.cards;
    const restaurantWithNames = restaurants.filter(
      (res) => res?.card?.card?.info?.name
    );
    // const restaurants =
    //   data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants;
    setRestaurantList(restaurantWithNames);
    setFilteredList(restaurantWithNames);
  };

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>You are offline, please check your internet connection</h1>;
  }
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filterteredRestaurants = restaurantList.filter(
                (restaurant) =>
                  restaurant?.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredList(filterteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              filteredList = restaurantList.filter(
                (restaurant) => restaurant?.info?.avgRating > 4.4
              );
              setFilteredList(filteredList);
              //console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <div>
            <label>Username: </label>
            <input
              className="border border-solid border-black p-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.card?.card?.info?.id}
          >
            {restaurant?.card?.card?.info?.promoted ? (
              <RestaurantCardPromoted
                key={restaurant?.card?.card?.info?.id}
                {...restaurant}
              />
            ) : (
              <RestaurantCard
                key={restaurant?.card?.card?.info?.id}
                {...restaurant}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
