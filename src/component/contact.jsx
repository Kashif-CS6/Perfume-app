const Contactus = () => {
  return (
    <div className="my-20">
      <h1 className="text-4xl font-[700] text-center">Contact Us</h1>
      <hr className="text-center w-52 flex justify-center mx-auto my-2 border border-black" />
      <form action="#" className="flex flex-col items-center my-10">
        <div className="w-80 md:w-96 ">
          <p>Enter your name</p>
          <div className="border rounded-md my-2 py-1">
            <input
              type="text"
              required
              className="w-full outline-none px-2 py-1 rounded-md text-sm"
              name=""
              id=""
              placeholder="Ali imtiaz"
            />
          </div>
        </div>
        <div className="w-80 md:w-96 ">
          <p>Enter Email</p>
          <div className="border rounded-md my-2 py-1">
            <input
              type="email"
              className="w-full outline-none px-2 py-1 rounded-md text-sm"
              required
              name=""
              id=""
              placeholder="ali@gmail.com"
            />
          </div>
        </div>
        <div className="w-80 md:w-96 ">
          <p>Enter Mobile Number</p>
          <div className="border rounded-md my-2 py-1">
            <input
              className="w-full outline-none px-2 py-1 rounded-md text-sm"
              type="number"
              required
              name=""
              id=""
              placeholder="1234567544"
            />
          </div>
        </div>
        <div className="w-80 md:w-96 ">
          <p>Enter your Message</p>
          <div className="border rounded-md my-2 py-1">
            <textarea
              className="w-full outline-none px-2 py-1 rounded-md text-sm"
              required
              name=""
              id=""
              placeholder="I like about your products..."
            />
          </div>
        </div>
        <input
          type="submit"
          className="w-80 md:w-96 my-2 py-2 text-sm bg-orange-500 rounded-md font-[600] cursor-pointer"
          value="Send Message"
        />
      </form>
    </div>
  );
};

export default Contactus;
