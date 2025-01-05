const RestaurantCard =(props)=>{
    const {resData} = props;
    const {image, name, receipe, rating, price, deliveryTime} = resData;
    return (
        <div className="res-card">
            <img className="res-logo " src={image}></img>
            <h3>{name}</h3>
            <h4>{receipe}</h4>
            <h4>{rating}</h4>
            <h4>{price}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}
 
export default RestaurantCard;  // Exporting RestaurantCard component