import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const product = data.filter((p) => p.id == id);
        setProducts(product[0]);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const { image, title, category, price } = products;

  return (
    <div className="mt-10 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      
      <div className="flex items-center gap-2 pt-2 text-Black/50">
        <a href="/">Home</a> <a href="/shop" className="font-semibold text-black">/ Shop</a>
      </div>

      <div className="p-2 max-w-7xl m-auto">
        <div className="mt-3 sm:mt-3">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
            <div>
              <img src={image} alt="" className="w-full" />
            </div>

            {/* Product Details */}
            <div>
              <h1 className="title text-left">{title}</h1>
              <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                enim ut sem viverra aliquet eget sit. Odio facilisis mauris sit
                amet
              </p>

              <span className="my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-3">
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
              </span>
              <p className="text-xl text-red-500 font-semibold sm:text-2xl">${price}</p>
              <div className="mt-2">
                <div className="text-left flex flex-col gap-2 w-full">
                    <label className="font-semibold">Quantity</label>
                    <input type="number" name="price" id="price" defaultValue={1} required className="border border-gray-300 text-sm font-semibold
                     mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-500" />
                </div>
                <div className="w-full text-left my-3">
                    <button className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500
                    text-white font-bold border border-red-500 rounded-md ease-in-out duration-150
                    shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"><span>Confirmed Order</span> <FaArrowAltCircleRight/></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-black/75 mt-8">
            <p className="py-2">Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Quod corporis temporibus illum aut, tempore ullam enim laudantium ex harum natus amet, perferendis dolorum ea beatae necessitatibus rem est officia ipsam!</p>
            <p className="py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod corporis temporibus illum aut, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorem. tempore ullam enim laudantium ex harum natus amet, perferendis dolorum ea beatae necessitatibus rem est officia ipsam!</p>
            <p className="py-2">Lorem sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod corporis temporibus illum aut, tempore ullam enim laudantium ex harum natus amet, perferendis dolorum ea beatae necessitatibus rem est officia ipsam!</p>
            <p className="py-2">Ipsum dolor sit amet consectetur adipisicing elit. Ut delectus accusamus dolorem vel quisquam quia itaque ab, excepturi facilis doloremque. adipisicing elit. Quod corporis temporibus illum aut, tempore ullam enim laudantium ex harum natus amet, perferendis dolorum ea beatae necessitatibus rem est officia ipsam!</p>
            <p className="py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod corporis temporibus illum aut, tempore ullam enim laudantium ex harum natus amet, perferendis dolorum ea beatae necessitatibus rem est officia ipsam!</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
