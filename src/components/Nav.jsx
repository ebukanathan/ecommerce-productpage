import React from "react";

function Nav({ product, ToggleCart }) {
  const navItem = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <div>
      <div className=" w-3/4  h-auto mx-auto flex justify-between items-center pt-4 pb-10 border-b border-black z-10">
        <div className="flex  h-[inherit]  justify-center gap-8">
          <div className="">
            <img src="logo.svg" alt="" />
          </div>
          <ul className="flex gap-3 h-[inherit] ">
            {navItem.map((item, index) => (
              <li
                key={index}
                className="h-[inherit] cursor-pointer hover:border-red-500  "
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <div className="relative " onClick={ToggleCart}>
            <img src="icon-cart.svg" alt="" />
            <div className="absolute bottom-[60%] right-0 rounded-xl flex justify-center items-center text-sm bg-red-500 text-white w-[15px] h-[15px]">
              {product.length}
            </div>
          </div>
          <div className="w-[30px] h-[30px]">
            <img
              src="image-avatar.png"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
