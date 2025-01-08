import ItemCard from './ItemCard.jsx';
import './featureditems.css'
import AntiqueVase from '../../pictures/antique-vase.webp';
import GoldWatch from '../../pictures/gold-watch.webp';
import RareCoin from '../../pictures/rare-coin.webp';


function FeaturedItems() {
  const items = [
    { id: 1, name: 'Antique Vase', description: 'A beautiful antique vase.', price: 100, imageUrl: AntiqueVase },
    { id: 2, name: 'Gold Watch', description: 'A luxury gold watch.', price: 250, imageUrl: GoldWatch },
    { id: 3, name: 'Rare Coin', description: 'A rare collectible coin.', price: 75, imageUrl: RareCoin },
  ];

  return (
    <div>
      <h1>Featured Items</h1>
      <p>Check out our highlighted items available:</p>
      <div className="item-grid">
        {items.map(item => (
          <ItemCard
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedItems;
