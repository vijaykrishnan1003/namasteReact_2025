import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";   

import { useEffect, useState } from "react";   

const Body = () =>{
    const [listOfRestaurant,setListOfRestaurant] = useState([]);

    const [filteredRestaurant,setFilteredRestaurant] = useState([]);

    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("Vijay Krishnan updated");
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        console.log(restaurants);
        
        if (Array.isArray(restaurants)) {
            // Iterate through the restaurants array and log each restaurant's info
            const restaurantInfos = restaurants.map((restaurant) => restaurant.info);
            setListOfRestaurant(restaurantInfos);
            setFilteredRestaurant(restaurantInfos);
    
        } else {
            console.error("Failed to fetch restaurants data. Ensure the structure is correct.");
        }
    };

    //COnditional rendering
        
    return listOfRestaurant.length === 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="filter">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
            }}></input>
            <button onClick={()=>{
                console.log(searchText);
                const filteredRestaurant = listOfRestaurant.filter((res)=> res.name.toLowerCase().includes(searchText.toLowerCase()));


                setFilteredRestaurant(filteredRestaurant);
            }}>Search</button>
                <button className="filter-btn" onClick={()=> {
                    const filteredList = listOfRestaurant.filter((res)=>res.avgRating>=4.0);
                    setListOfRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {filteredRestaurant.map((restaurant, index) => (
                <div key={restaurant?.id || index} className="restaurant-card">
                    <img src={CDN_URL + restaurant?.cloudinaryImageId} alt="restaurant logo" />
                    <h2>{restaurant?.name || "Unknown Name"}</h2>
                    <h4>Rating: {restaurant?.avgRating || "N/A"}</h4>
                    <h4>costForTwo: {restaurant?.costForTwo}</h4>
                    <h4>cuisines : {restaurant?.cuisines.join(", ")}</h4>
                </div>
            ))}
                
            </div>
        </div>
    )
}

export default Body;   // Exporting Body component