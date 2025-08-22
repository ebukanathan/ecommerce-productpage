import React, { use, useState } from "react";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Lightbox from "./components/Lightbox";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [prodImage, setProdImage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState([]);

  const AddtoCart = () => {
    setProduct((prev) => [
      ...prev,
      {
        productName: "Fall Limited edition Sneaker",
        quantity: quantity,
        image: "image-product-1-thumbnail.jpg",
      },
    ]);

    console.log(product);
  };

  const HandleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const HandleDecrement = () => {
    setQuantity((prev) => (quantity == 0 ? 0 : prev - 1));
  };

  const HandleClick = (n) => {
    setProdImage(n);
    console.log(n);
  };

  const ToggleCart = () => {
    setIsOpen((n) => !n);
  };

  const ToggleModal = () => {
    setModal((prev) => !prev);
  };

  const HandleNext = (e) => {
    e.stopPropagation();
    setProdImage((prev) => (prodImage == 4 ? 1 : prev + 1));
  };
  const HandlePrev = (e) => {
    e.stopPropagation();
    setProdImage((prev) => (prodImage == 1 ? 4 : prev - 1));
  };

  const HandleDel = (item) => {
    setProduct(product.filter((n) => n !== item));
  };

  const thumbnails = [
    {
      id: 1,
      thumbnail: "image-product-1-thumbnail.jpg",
      product: "image-product-1.jpg",
    },
    {
      id: 2,
      thumbnail: "image-product-2-thumbnail.jpg",
      product: "image-product-2.jpg",
    },
    {
      id: 3,
      thumbnail: "image-product-3-thumbnail.jpg",
      product: "image-product-3.jpg",
    },
    {
      id: 4,
      thumbnail: "image-product-4-thumbnail.jpg",
      product: "image-product-4.jpg",
    },
  ];
  return (
    <div className="relative w-full ">
      <Nav product={product} ToggleCart={ToggleCart} />

      {modal && (
        <Lightbox
          HandleNext={HandleNext}
          HandlePrev={HandlePrev}
          prodImage={prodImage}
          ToggleModal={ToggleModal}
        />
      )}
      <div className="font-bold text-2xl"></div>

      <div className="w-full mx-auto  mt-10 grid grid-cols-1 md:grid-cols-2 md:w-3/4">
        <div className="flex flex-col gap-4">
          <div
            className=" relative w-full md:w-[400px] md:h-[400px] md:rounded-xl"
            onClick={ToggleModal}
          >
            <img
              src={`image-product-${prodImage}.jpg`}
              alt=""
              className="md:rounded-xl w-full h-full"
            />{" "}
            <div
              className="bg-white w-[40px]  h-[40px] rounded-full absolute left-2 top-[50%] md:flex justify-center items-center p-3 md:hidden"
              onClick={HandlePrev}
            >
              <img src="icon-previous.svg" alt="" className="w-full" />
            </div>
            <div
              className="bg-white w-[40px]  h-[40px] rounded-full absolute right-2 top-[50%] md:flex justify-center items-center p-3 md:hidden"
              onClick={HandleNext}
            >
              <img src="icon-next.svg" alt="" className="w-full" />
            </div>
          </div>
          <div className="hidden md:flex gap-2 w-full mx-auto">
            {thumbnails.map((item, index) => (
              <div
                className="w-[70px] h-[70px] rounded-xl"
                onClick={() => HandleClick(item.id)}
              >
                <img
                  src={item.thumbnail}
                  key={index}
                  alt={item + index}
                  className="w-full h-full rounded-xl object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-[90%] mx-auto pt-4 flex flex-col gap-6">
          <div className="text-sm font-bold uppercase">sneaker company</div>
          <div className="w-full text-4xl w-2/3 font-bold capitalize">
            Fall limited edition sneakers
          </div>
          <div className="w-full w-3/4 text-sm">
            these low profile are your perfect casual wea companion. Featuring a
            durable rubber outer sole,they'll withstand everything the weather
            can offer.
          </div>
          <div className="flex justify-between items-center md:flex-col md:items-start  gap-2">
            <div className="flex items-center gap-2">
              <div className="font-bold text-2xl">$125.00</div>
              <div className="bg-black text-white text-sm px-2 rounded-lg">
                50%
              </div>
            </div>
            <div className="text-md font-semibold line-through">$250.00</div>
          </div>

          <div className="flex flex-col gap-4  mb-10 md:flex-row">
            <div className=" w-full px-2 py-3 flex  rounded-lg  justify-between items-center bg-slate-500 md:w-[100px] md:py-0">
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
            <div className="flex  shadow-xl rounded-xl gap-2 justify-center px-2 py-3 bg-red-500 text-black md:px-7 hover:text-white">
              <div className="">
                <img src="icon-cart.svg" alt="" />
              </div>
              <div className="" onClick={AddtoCart}>
                Add to cart{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart */}
      {isOpen && <Cart product={product} HandleDel={HandleDel} />}
    </div>
  );
}

export default App;
