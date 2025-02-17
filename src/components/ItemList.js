import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div className="w-9/12">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between items-center"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span> - ₹{item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs text-gray-600">
              {item?.card?.info?.description}
            </p>
          </div>

          <div className="flex flex-col items-center relative w-3/12">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-30 h-24 object-cover rounded-lg"
            />
            <button
              className="p-1 mt-2 absolute top-0 bg-black text-white shadow-lg rounded-lg"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
