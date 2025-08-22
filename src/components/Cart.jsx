import React from "react";

function Cart({ product, HandleDel }) {
  return (
    <>
      <div className="absolute top-10 right-10 z-10 bg-white  w-[250px] px-2 py-4 shadow-lg grid grid-cols-1 gap-4">
        <div className="font-bold text-xl">Cart</div>
        {product.length > 0 ? (
          product.map((item, index) => (
            <div
              key={index}
              className="w-[95%] mx-auto flex  gap-2 justify-between items-center "
            >
              <div className="w-[50px] h-[50px] rounded-lg ">
                <img
                  src="image-product-1-thumbnail.jpg"
                  alt=""
                  className="rounded-lg w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col">
                <div className="bfont-normal text-sm capitalize">
                  {item.productName}
                </div>
                <div className="bfont-normal text-sm capitalize">
                  {`$125 x ${item.quantity} = $${125 * item.quantity}`}{" "}
                </div>
              </div>
              <div
                className="w-[30px] h-[30px]"
                onClick={() => HandleDel(item)}
              >
                <img src="icon-delete.svg" alt="" />
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center font-semibold text-l capitalize">
            Your cart is empty
          </div>
        )}
        {product.length > 0 && (
          <div className=" w-full bg-red-500 text-black px-4 py-2 rounded-lg font-bold flex justify-center items-center">
            Checkout
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
