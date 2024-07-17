import piclogo from "../../assets/perfum.jpeg";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Modal from "react-modal";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CgMenuLeftAlt } from "react-icons/cg";

const Navbar = ({ purchases, setPurchases }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [shownav, setShownav] = useState(false);

  const navigate = useNavigate();

  const hanldeCheckout = () => {
    if (address === "") {
      return toast.error("Please Fill the address!");
    }
    navigate("/screen", { state: { address } });
    setIsOpen(false);
  };

  const removeItem = (id) => {
    setPurchases(purchases.filter((item) => item.id !== id));
    toast.success("Item Removed Successfully!");
  };

  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-300 bg-gray-50 ">
      {/* left side */}
      <div>
        <img src={piclogo} alt="" className="w-12 h-12 rounded-full" />
      </div>
      {/* middle */}
      <div className="hidden md:flex  items-center gap-8 text-lg font-[400] tracking-wider font-serif">
        <Link to={"/"} className="hover:text-red-600 hover:underline">
          Home
        </Link>
        <Link
          className="hover:text-red-600 hover:underline cursor-pointer"
          to={"/products"}
        >
          All products
        </Link>
        <HashLink to={"#about"} className="hover:text-red-600 hover:underline">
          About
        </HashLink>
        <HashLink
          to={"#contact"}
          className="hover:text-red-600 hover:underline"
        >
          Contact us
        </HashLink>
      </div>
      {/* right */}
      <div className="flex items-center gap-3">
        <button
          className="cursor-pointer"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {" "}
          <GiShoppingBag size={25} color="red" />
        </button>
        <button
          className="cursor-pointer md:hidden"
          onClick={() => {
            setShownav(!shownav);
          }}
        >
          {" "}
          <CgMenuLeftAlt size={30} color="red" />
        </button>
      </div>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <div className="relative">
          {purchases.length <= 0 ? (
            <h1>No Item Selected</h1>
          ) : (
            <div>
              <h1 className="py-4 md:py-0 md:my-3 font-bold text-center tracking-wider">
                Selected Items for Purchase
              </h1>
              {purchases.map((item, index) => {
                return (
                  <div className="flex flex-wrap my-1 justify-between border py-2 px-4 rounded-md border-orange-400">
                    <p>
                      <span className="font-bold">Name:</span>{" "}
                      {item.productName}
                    </p>
                    <p>
                      {" "}
                      <span className="font-bold">Brand Name:</span>{" "}
                      {item.brand}
                    </p>
                    <p>
                      {" "}
                      <span className="font-bold">Price:</span> {item.price} RS
                    </p>
                    <p>
                      <span className="font-bold">Product For:</span>
                      {item.usedFor}
                    </p>
                    <p>
                      <span className="font-bold">Category:</span>{" "}
                      {item.category}
                    </p>
                    <button
                      className="text-red-500 cursor-pointer"
                      onClick={() => removeItem(item.id)}
                    >
                      X
                    </button>
                  </div>
                );
              })}

              <div className="flex flex-col items-center">
                <div className="mt-10 mb-2 w-90 md:w-96 border rounded-md py-1">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="outline-none  px-2 w-full text-sm"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    placeholder="Enter your address for checkout!"
                  />
                </div>
                <button
                  onClick={hanldeCheckout}
                  className="bg-red-500 px-4 py-1 font-[600] rounded-xl text-white my-2"
                >
                  Check out
                </button>
              </div>
            </div>
          )}
          <button
            className="text-red-500 absolute right-0 -top-5 md:-top-2 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>

      {/* middle screen navbar */}
      <div
        className={`w-80 duration-300 md:hidden ${
          shownav ? "left-0 duration-300" : "left-[-100%] duration-300 "
        } bg-white shadow-md px-6 py-4 inset-0 z-50 fixed flex flex-col items-center  `}
      >
        <button
          className="absolute right-3 top-1"
          onClick={() => setShownav(false)}
        >
          X
        </button>

        <div className="flex flex-col gap-4 items-center justify-center my-44">
          <Link to={"/"} className="hover:text-red-600 hover:underline">
            Home
          </Link>
          <Link
            className="hover:text-red-600 hover:underline cursor-pointer"
            to={"/products"}
          >
            All products
          </Link>
          <HashLink
            to={"#about"}
            className="hover:text-red-600 hover:underline"
          >
            About
          </HashLink>
          <HashLink
            to={"#contact"}
            className="hover:text-red-600 hover:underline"
          >
            Contact us
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
