import { useParams } from "react-router-dom";
import data from "../dumy/data";
import { useState } from "react";
import { toast } from "react-toastify";
const ProductId = ({ purchases, setPurchases }) => {
  const [products, seProducts] = useState(data);
  const { id } = useParams();
  console.log("here is id from params", id);

  const product = products.find((product) => product.id == id);

  const addToCard = () => {
    const product = data.find((product) => product.id == id);
    console.log(product);
    setPurchases((prevPurchases) => [...prevPurchases, product]);
    toast.success("Item added to Card!");
  };

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        {/* <p className="text-lg">The purchases array is empty or not provided.</p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button> */}
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center my-10 font-[bold] border w-fit mx-auto px-2">
      <img
        src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-80 md:w-96"
        alt=""
      />
      <h1 className="font-bold mt-4">Product Name</h1>
      <h1>{product.productName}</h1>
      <h1 className="font-bold ">Description</h1>
      <p className="text-sm text-justify">{product.Description}</p>
      <h1 className="font-bold ">Brand Name</h1>
      <p>{product.brand}</p>
      <h1 className="font-bold ">Brand Name</h1>
      <p>{product.price} RS</p>
      <h1 className="font-bold ">Other Details</h1>
      <table className="my-2">
        <thead className="border">
          <td>Mef.Date</td>
          <td>Ex.Date</td>
          <td>Sell %</td>
          <td>Size</td>
        </thead>
        <tbody className="border">
          <tr>
            <td>{product.createdDate}</td>
            <td>{product.expiry_Date}</td>
            <td>{product.sale}</td>
            <td>{product.bottlesize}</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={addToCard}
        className="bg-orange-500 cursor-pointer py-1 px-4 rounded-md mb-4"
      >
        add to card
      </button>
    </div>
  );
};

export default ProductId;
