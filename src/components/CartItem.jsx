import { useState } from "react";

export default function CartItem() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Aloe Vera",
      price: 10,
      quantity: 1,
      img: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 15,
      quantity: 1,
      img: "https://via.placeholder.com/100"
    }
  ]);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  // Remove item
  const deleteItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Total cart amount
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.map(item => (
        <div key={item.id}>
          <img src={item.img} alt={item.name} />

          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>

          <button onClick={() => deleteItem(item.id)}>Delete</button>

          <hr />
        </div>
      ))}

      <h2>Total Cart Amount: ${totalAmount}</h2>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <br /><br />

      <button onClick={() => window.location.href = "#"}>
        Continue Shopping
      </button>
    </div>
  );
}
