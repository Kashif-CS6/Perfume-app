const Herosection = () => {
  return (
    <div className="flex items-center my-14 flex-wrap md:flex-nowrap gap-14 lg:gap-0">
      {/* left side */}
      <div className="w-80 lg:w-6/12 flex flex-col justify-center items-start mx-8">
        <h1 className="text-3xl lg:text-5xl font-[700]">Perfume is the art that <span className="text-red-500">makes</span></h1>
        <h1 className="text-3xl lg:text-5xl font-[700]">memory speak</h1>
        <p className="w-80 md:w-96 my-3">
          Experience timeless elegance and unforgettable allure with our
          signature fragrance perfumes – the perfect essence of luxury.
        </p>
        <button className=" w-fit bg-orange-400 px-5 py-2 rounded-3xl font-[600] cursor-pointer">Explore Products</button>
      </div>

      {/* right side div */}
      <div className="w-80 lg:w-6/12 flex justify-end mx-8">
        <div className="bg-red-100 w-80 lg:w-96 h-80 lg:h-96 rounded-full flex justify-center items-center">
          <img src="https://freepngimg.com/thumb/perfume/3-2-perfume-free-download-png-thumb.png" className="w-80 h-80" alt=""  />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
