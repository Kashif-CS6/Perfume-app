import { useNavigate } from "react-router-dom";
import data from "../dumy/data";
import { toast } from "react-toastify";
const Card = ({ brand, name, price, id, setPurchases }) => {
  const navigate = useNavigate();

  const addToCard = () => {
    const product = data.find((product) => product.id == id);
    console.log(product);
    setPurchases(prevPurchases => [...prevPurchases, product]);
    toast.success("Item added to Card!")

  };
  return (
    <div className="border border-gray-200 h-[25rem] w-64 rounded-md shadow-sm my-4">
      <div className="h-60">
        <img
          src="https://saeedghani.pk/cdn/shop/files/Aqua_1024x1024.jpg?v=1696590880"
          className="rounded-t-md h-full w-full"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-[700] my-[1px] text-orange-400">{name}</h1>
        <h1 className="text-xl font-[700] underline">{brand}</h1>
        <h1 className="text-red-500 font-[600]">17% off</h1>
        <h1 className="text-lg font-[600]">
          Price: <span className="text-lg">{price} PKR</span>
        </h1>
      </div>
      <div className="text-sm flex justify-between mx-4 font-[bold] my-2">
        <button
          onClick={() => navigate(`/products/${id}`)}
          className="bg-black text-white px-2 rounded-md py-[2px]"
        >
          Details
        </button>
        <button
          className="bg-black text-white px-2 rounded-md py-[2px]"
          onClick={addToCard}
        >
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default Card;
