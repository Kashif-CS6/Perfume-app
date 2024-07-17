import Slider from "react-slick";

export default function Slidercom() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="mx-7 my-2">
      <Slider {...settings}>
        <div className="h-60 md:h-[29rem] w-11/12 mx-auto bg-red-600">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1458538977777-0549b2370168?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="h-60 md:h-[29rem] w-11/12 mx-auto bg-red-600">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1544468266-6a8948003cd7?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="h-60 md:h-[29rem] w-11/12 mx-auto bg-red-600">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="h-60 md:h-[29rem] w-11/12 mx-auto bg-red-600">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1559277554-443fcb20a190?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD"
            alt=""
          />
        </div>
        <div className="h-60 md:h-[29rem] w-11/12 mx-auto bg-red-600">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="h-60 md:h-[29rem] w-11/12 mx-auto bg-red-600">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1615108395437-df128ad79e80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
