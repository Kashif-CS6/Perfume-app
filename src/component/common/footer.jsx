import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-gray-100 md:h-44 ">
      <div className="flex justify-between items-center flex-wrap py-4 px-6">
        <div className="my-3 flex flex-col text-sm text-gray-500">
          <h1 className="text-xl font-[600] text-black">Company Info</h1>
          <h1>CEO: ABC</h1>
          <h1>Email: abc@gmail.com</h1>
          <h1>mobile:898987783</h1>
        </div>
        <div>
          <h1 className="text-xl font-[600]">Follow us</h1>
          <div className="flex items-center gap-3 my-3">
            <a className="cursor-pointer" href="#">
              <FaFacebook color="blue" size={25} />
            </a>
            <a className="cursor-pointer" href="#">
              <BsTwitterX color="black" size={25} />
            </a>
            <a className="cursor-pointer" href="#">
              <FaInstagramSquare color="purple" size={25} />
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-[600]">Available</h1>
          <p className="text-sm text-gray-500">Timing 24 hourse</p>
          <p className="text-sm text-gray-500">
            Friday: 12-2:00 pm response late(expected)
          </p>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm">
        Privacy. Terms Condition &copy;Right Reserved 2024
      </p>
    </div>
  );
};

export default Footer;
