import React from "react";
import Nav from "./components/Nav";

function App() {
  const thumbnails = [
    "image-product-1-thumbnail.jpg",
    "image-product-2-thumbnail.jpg",
    "image-product-3-thumbnail.jpg",
    "image-product-4-thumbnail.jpg",
  ];
  return (
    <div>
      <Nav />

      <div className="w-3/4 mx-auto  mt-10 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className=" w-[400px] h-[400px] rounded-xl">
            <img
              src="image-product-1.jpg"
              alt=""
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="flex gap-2 w-full mx-auto">
            {thumbnails.map((item, index) => (
              <div className="w-[70px] h-[70px] rounded-xl">
                <img
                  src={item}
                  key={index}
                  alt={item + index}
                  className="w-full h-full rounded-xl object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="text-sm font-bold uppercase">sneaker company</div>
          <div className="text-2xl w-2/3 font-bold capitalise">
            Fall limted sneakers
          </div>
          <div className="w-3/4 text-sm">
            these low profile are your perfect casual wea companion. Featuring a
            durable rubber outer sole,they'll withstand everything the weather
            can offer.
          </div>
          <div className="flex items-center gap-2">
            <div className="font-bold text-xl">$125.00</div>
            <div className="bg-black text-white text-sm px-2 rounded-lg">
              50%
            </div>
          </div>
          <div className="text-md font-semibold line-through">$250.00</div>

          <div className="flex gap-4">
            <div className=" w-[80px] flex  rounded-lg  justify-between items-center bg-slate-500">
              <div className="flex justify-center items-center w-[25px] h-[25px]">
                <img src="icon-minus.svg" alt="" />
              </div>
              <div className="">3</div>
              <div className="w-[25px] h-[25px] flex justify-center items-center">
                <img src="icon-plus.svg" alt="" />
              </div>
            </div>
            <div className="flex  gap-2 justify-center px-2">
              <div className="">
                <img src="icon-cart.svg" alt="" />
              </div>
              <div className="">Add to cart </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] shadow-lg grid grid-cols-1">
        <div className="font-bold text-xl">Cart</div>
        <div className="w-4/5 flex justify-between ">
          <div className="w-[50px] h-[50px]"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
