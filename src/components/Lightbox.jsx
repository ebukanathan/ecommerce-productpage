import React from "react";

function Lightbox({ HandleNext, HandlePrev, prodImage, ToggleModal }) {
  return (
    <div
      className="w-screen h-[100vh] z-50 absolute top-0 bg-black bg-opacity-90 flex justify-center items-center"
      onClick={ToggleModal}
    >
      <div className="w-3/4 rounded-lg  flex bg-black opacity-100  gap-4 justify-center items-center">
        <div className="bg-white w-[30px] " onClick={HandlePrev}>
          <img src="icon-previous.svg" alt="" className="w-full" />
        </div>
        <div className="w-[400px] h-[400px] rounded-lg">
          <img
            src={`image-product-${prodImage}.jpg`}
            alt=""
            className=" rounded-lg w-full h-full object-cover object-center"
          />
        </div>
        <div className="bg-white w-[30px] " onClick={HandleNext}>
          <img src="icon-next.svg" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
