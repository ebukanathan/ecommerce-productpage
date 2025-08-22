import React, { useState } from "react";

function Nav({ product, ToggleCart }) {
  const [isMobile, setIsMobile] = useState(false);
  const navItem = ["Collections", "Men", "Women", "About", "Contact"];

  const HandleNavOpen = () => {
    setIsMobile((n) => !n);
  };

  return (
    <div>
      <div className=" relative  px-3  mx-auto flex justify-between items-center pt-4   md:w-3/4 md:border-b md:border-LightGrayishBlue z-10">
        <div className="flex    justify-center items-center gap-8">
          <div className="flex gap-4">
            <img
              src="icon-menu.svg"
              alt=""
              className="md:hidden"
              onClick={HandleNavOpen}
            />
            <img src="logo.svg" alt="" />
          </div>
          <ul className="hidden md:flex gap-3 h-[inherit] ">
            {navItem.map((item, index) => (
              <li
                key={index}
                className="h-[inherit]  py-8 border-b-2 border-transparent cursor-pointer hover:border-Orange  "
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
        {isMobile && (
          <div className="absolute top-0 left-0 w-2/3 h-screen px-4  py-6 bg-white md:hidden">
            <div className="w-[20px] h-[20px]">
              <img
                src="icon-close.svg"
                alt=""
                className="w-full h-full"
                onClick={HandleNavOpen}
              />
            </div>
            <ul className="flex flex-col gap-4 mt-10 ">
              {navItem.map((item, index) => (
                <li
                  key={index}
                  className="font-semibold text-xl cursor-pointer hover:border-red-500  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
