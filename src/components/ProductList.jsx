import { useState } from "react";

const plants = [
  // Indoor (6)
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Peace Lily", price: 20, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Spider Plant", price: 12, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 5, name: "ZZ Plant", price: 18, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 6, name: "Areca Palm", price: 22, category: "Indoor", img: "https://via.placeholder.com/100" },

  // Flowering (6)
  { id: 7, name: "Rose", price: 12, category: "Flowering", img: "https://via.placeholder.com/100" },
  { id: 8, name: "Tulip", price: 14, category: "Flowering", img: "https://via.placeholder.com/100" },
  { id: 9, name: "Sunflower", price: 18, category: "Flowering", img: "https://via.placeholder.com/100" },
  { id: 10, name: "Daisy", price: 11, category: "Flowering", img: "https://via.placeholder.com/100" },
  { id: 11, name: "Lily", price: 16, category: "Flowering", img: "https://via.placeholder.com/100" },
  { id: 12, name: "Orchid", price: 25, category: "Flowering", img: "https://via.placeholder.com/100" },

  // Succulent (6)
  { id: 13, name: "Cactus", price: 8, category: "Succulent", img: "https://via.placeholder.com/100" },
  { id: 14, name: "Jade Plant", price: 11, category: "Succulent", img: "https://via.placeholder.com/100" },
  { id: 15, name: "Agave", price: 13, category: "Succulent", img: "https://via.placeholder.com/100" },
  { id: 16, name: "Echeveria", price: 9, category: "Succulent", img: "https://via.placeholder.com/100" },
  { id: 17, name: "Sedum", price: 10, category: "Succulent", img: "https://via.placeholder.com/100" },
  { id: 18, name: "Haworthia", price: 14, category: "Succulent", img: "https://via.placeholder.com/100" }
];

export default function ProductList() {
  const [cartCount, setCartCount] = useState(0);
  const [added, setAdded] = useState({});

  const addToCart = (plant) => {
    setCartCount(cartCount + 1);
    setAdded({ ...added, [plant.id]: true });
  };

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      <h1>Plant Shop</h1>

      {/* Navbar */}
      <nav>
        <a href="#">Home</a> | 
        <a href="#">Plants</a> | 
        <a href="#">Cart ({cartCount})</a>
      </nav>

      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>

          {plants
            .filter(p => p.category === category)
            .map(plant => (
              <div key={plant.id}>
                <img src={plant.img} alt={plant.name} />

                <p>{plant.name}</p>
                <p>${plant.price}</p>

                <button
                  onClick={() => addToCart(plant)}
                  disabled={added[plant.id]}
                >
                  {added[plant.id] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
