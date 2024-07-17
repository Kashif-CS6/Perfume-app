import { BsFire } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";

const About = () => {
  return (
    <div className="flex items-center my-4 justify-center md:justify-start lg:justify-center md:mx-10 lg:mx-0 gap-10 flex-wrap lg:flex-nowrap">
      {/* left */}
      <div className="w-80 md:w-[32rem] lg:w-96 rounded-xl md:h-96 md:mx-auto lg:mx-0 border-cyan-100 border-2 p-[2px]">
        <img
          className="rounded-xl h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      {/* right */}
      <div className="w-80 md:w-6/12 ">
        <h1 className="text-xl md:text-3xl font-[700] my-4 tracking-wider">Who Are We?</h1>
        <p className="text-gray-500 font-[500] w-80 md:w-[40rem]">
          We help people express their unique identities and elevate their
          confidence through our exquisite, handcrafted fragrance perfumes. Our
          mission is to bring a touch of luxury and elegance to everyday life
          with scents that leave a lasting impression.
        </p>
        <p className="font-[500] w-80 md:w-[40rem] text-sm my-3">
          Founded in 2023, we have quickly established a reputation for
          delivering 100% quality fragrance products. Our dedication to
          excellence ensures every scent embodies luxury and perfection, making
          each moment unforgettable.
        </p>
        <div className="flex flex-wrap md:flex-nowrap my-4 gap-8">
          {/* left */}
          <div className="flex gap-3">
            {/* icon */}
            <IoMdSettings size={30} color="blue" />
            <div>
              <h1 className="font-[700] tracking-wider">Verstile Brand</h1>
              <p className="text-sm w-52">
                our purpose is to provide best quality fragrances in valuable
                price
              </p>
            </div>
          </div>
          {/* right */}
          <div className="flex gap-3">
            {/* icon */}
            <BsFire size={30} color="blue" />
            <div>
              <h1 className="font-[700] tracking-wider">Digital Agency</h1>
              <p className="text-sm w-52">
                We believe in innovation and new experiances
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
