import React from "react";

function Cart({ product }) {
  return (
    <>
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
              {`$125 x ${product.quantity} = $${125 * product.quantity}`}{" "}
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
    </>
  );
}

export default Cart;
