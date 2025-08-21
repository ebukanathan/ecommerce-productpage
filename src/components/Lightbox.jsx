import React from "react";

function Lightbox() {
  return (
    <div className="w-screen h-[100vh] z-50 absolute top-0 bg-black opacity-90 flex justify-center items-center">
      <div className="w-2/3 rounded-lg  bg-yellow-500 justify-center">
        <div className="">
          <img src="icon.prev.svg" alt="" />
        </div>
        <div className="w-[400px] h-[400px]">
          <img
            src="image-product-1.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="">
          <img src="icon.next.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
