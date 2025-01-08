function ItemCard({ name, description, price, imageUrl }) {
    return (
      <div className="item-card">
        <img src={imageUrl} alt={name} className="item-image" />
        <h2>{name}</h2>
        <p>{description}</p>
        <p><strong>Price:</strong> <span className="price">${price}</span></p>
      </div>
    );
  }
  
  export default ItemCard;
  