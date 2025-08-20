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
          <div className="rounded-xl">
            <img src="image-product-1.jpg" alt="" className="rounded-xl" />
          </div>
          <div className="flex gap-4 w-full">
            {thumbnails.map((item, index) => (
              <div className="w-[120px] h-[120px] rounded-xl">
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
      </div>
    </div>
  );
}

export default App;
