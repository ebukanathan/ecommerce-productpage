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

        <div className="flex flex-col">
          <div className="text-sm font-bold uppercase">sneaker company</div>
          <div className="text-2xl w-2/3 font-bold capitalise">
            Fall limted sneakers
          </div>
          <div className="text-sm">
            these low profile are your perfect casual wea companion. Featuring a
            gurable
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
