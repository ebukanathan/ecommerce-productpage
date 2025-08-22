import React from "react";

function Nav({ product, ToggleCart }) {
  const navItem = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <div>
      <div className=" relative  h-auto px-3  mx-auto flex justify-between items-center pt-4 pb-2 md:pb-10 md:w-3/4 md:border-b md:border-black z-10">
        <div className="flex  h-[inherit]  justify-center gap-8">
          <div className="flex gap-4">
            <img src="icon-menu.svg" alt="" className="md:hidden" />
            <img src="logo.svg" alt="" />
          </div>
          <ul className="hidden md:flex gap-3 h-[inherit] ">
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
            {product.length > 0 && (
              <div className="absolute bottom-[60%] right-0 rounded-xl flex justify-center items-center text-sm bg-red-500 text-white w-[15px] h-[15px]">
                {product.length}
              </div>
            )}
          </div>
          <div className="w-[30px] h-[30px]">
            <img
              src="image-avatar.png"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        {/* MOBILE MENU */}
        <div className="absolute top-0 left-0 w-2/3 h-screen px-3 bg-white md:hidden">
          <div className="w-[20px] h-[20px]">
            <img src="icon-close.svg" alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
