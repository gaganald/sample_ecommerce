import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Cards from '../../Components/Cards';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [filterItems, setFilterItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");

    useEffect(() => {
      const fetchData = async () =>{
        try{
            const response = await fetch("/products.json");
            const data = await response.json();
            setProducts(data);
            setFilterItems(data);
        }
        catch(err){
            console.log("Error fetching data:", err);
        }
      }
      fetchData();
    
    }, [])

    // console.log(products);
    //filtering function
    const filterItem = (category) => {
      const filtered = category === "all" ? (products) : products.filter((item) => item.category === category);
      setFilterItems(filtered);
      setSelectedCategory(category);
    }

    // Show all Products
    const showAll = () => {
      setFilterItems(products);
      setSelectedCategory("all");
    };

    // sorting functionality
    const handleSortChange = (option) => {
      setSortOption(option);
      // logic for sorting
      let sortedItems = [...filterItems];

      switch (option){
        case "A-Z" :
          sortedItems.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "Z-A" : 
          sortedItems.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "low-to-high" : 
          sortedItems.sort((a, b) => a.price - b.price);
          break;  
        case "high-to-low" : 
          sortedItems.sort((a, b) => b.price - a.price);
          break;  
        default:
          break;     
      }
      setFilterItems(sortedItems);
    }
    
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="title">Or subscribe to the newsletter</h2>

      {/* Product Cards */}
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* All Buttons */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4  flex-wrap">
            <button onClick={showAll} >All Products</button>
            <button onClick={() => filterItem("Dress")} >Clothing</button>
            <button onClick={() => filterItem("Hoodies")} >Hoodies</button>
            <button onClick={() => filterItem("Bag")} >Bag</button>
          </div>

          {/* Sorting Option */}
          <div className="flex justify-end mb-4 rounded-sm gap-1">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select id='sort' 
              onChange={(e) => handleSortChange(e.target.value)} value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm">
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low-to-High</option>
              <option value="high-to-low">High-to-Low</option>
            </select>
          </div>
        </div>

        <Cards filterItems={filterItems}/>

      </div>
    </div>
  );
}

export default Products