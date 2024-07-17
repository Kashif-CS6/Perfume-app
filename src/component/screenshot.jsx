import React from "react";
import { useLocation } from "react-router-dom";

const Screenshot = ({ purchases }) => {
  const location = useLocation();
  const { address } = location.state || {};

  const totalPrice = purchases.reduce((total, item) => total + item.price, 0);
  if (!purchases || purchases.length === 0) {
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
    <div>
      <p className="text-red-500 font-[400] text-sm text-center my-4">
        Screenshot this and send to 0333-------- <br />
        For online Payment Do payment on 0333------ <br />
        using Easy Paisa, Jazz Cash and also send Screenshot of <br />
        Recepient list
      </p>
      <h1 className="text-center my-2 text-lg font-[700]">Purchase Details</h1>
      <div className="flex flex-col items-center justify-center">
        {purchases.map((item, index) => {
          return (
            <div className="border w-80 flex flex-wrap flex-col items-center justify-center my-2">
              <p>Prouduct Name:{item.productName} </p>
              <p>Product Number:{item.id}</p>
              <p>Product Category:{item.category}</p>
              <p>Prouduct Brand:{item.brand}</p>
              <p>Product Price: {item.price}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 my-4 items-center">
        <hr className="w-80 border-[1px] border-red-500" />
        <h1 className="font-[600]">Total Purchase x {purchases.length}</h1>
        <hr className="w-80 border-[1px] border-red-500" />
        <h1 className="font-[600]">Total Amount: {totalPrice} RS/only</h1>
        <hr className="w-80 border-[1px] border-red-500" />
        <h1 className="font-[600]">Delivery Address {address}</h1>
        <hr className="w-80 border-[1px] border-red-500" />
      </div>
    </div>
  );
};

export default Screenshot;
