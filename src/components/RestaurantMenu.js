import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  function togglePanel(index) {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle logic
  }
  const params = useParams();
  const { resId } = params;

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  //console.log(resInfo);

  return (
    <div className="text-center">
      {/* <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}></img> */}
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>
      <p className="font-bold text-md">{costForTwoMessage}</p>
      <h2>Menu</h2>
      {categories.map((category, index) => {
        return (
          // Controlled component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => togglePanel(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
/*
 <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
*/
