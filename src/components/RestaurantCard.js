import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //"https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photos/ac1ed5ec-bd66-4a85-a68a-cfce81e9cad9-retina-large-jpeg"
  //const data = props.info;
  const data = props?.card?.card?.info;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } =
    data;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 overflow-hidden flex-col h-[400px]">
      <img
        className="rounded-lg w-full h-48 object-cover"
        src={`${CDN_URL}${cloudinaryImageId}`}
      ></img>
      <h2 className="font-bold py-2 text-xl">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>Delivery Time: {sla.deliveryTime}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
