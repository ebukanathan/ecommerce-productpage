import React, { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [quantity, setQuantity] = useState(0);

  const HandleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const HandleDecrement = () => {
    setQuantity((prev) => (quantity == 0 ? 0 : prev - 1));
  };

  const thumbnails = [
    "image-product-1-thumbnail.jpg",
    "image-product-2-thumbnail.jpg",
    "image-product-3-thumbnail.jpg",
    "image-product-4-thumbnail.jpg",
  ];
  return (
    <div className="relative">
      <Nav quantity={quantity} />

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
              <div
                className="flex justify-center items-center w-[25px] h-[25px]"
                onClick={HandleDecrement}
              >
                <img src="icon-minus.svg" alt="" />
              </div>
              <div className="">{quantity}</div>
              <div
                className="w-[25px] h-[25px] flex justify-center items-center"
                onClick={HandleIncrement}
              >
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

      {/* Cart */}
      <div className="absolute top-10 right-10 z-10 bg-white  w-[250px] px-2 py-4 shadow-lg grid grid-cols-1 gap-4">
        <div className="font-bold text-xl">Cart</div>
        <div className="w-[95%] mx-auto flex  gap-2 justify-between items-center ">
          <div className="w-[50px] h-[50px] rounded-lg ">
            <img
              src="image-product-1-thumbnail.jpg"
              alt=""
              className="rounded-lg w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col">
            <div className="bfont-normal text-sm capitalize">
              fall limited edition sneakers
            </div>
            <div className="bfont-normal text-sm capitalize">
              {`$125 x ${quantity} = $${125 * quantity}`}{" "}
            </div>
          </div>
          <div className="w-[30px] h-[30px]">
            <img src="icon-delete.svg" alt="" />
          </div>
        </div>
        <div className=" w-full bg-red-500 text-black px-4 py-2 rounded-lg font-bold flex justify-center items-center">
          Checkout
        </div>
      </div>
    </div>
  );
}

export default App;
