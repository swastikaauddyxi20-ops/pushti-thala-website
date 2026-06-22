import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#020B2D",
          minHeight: "100vh",
          color: "white",
          padding: "40px",
        }}
      >
        <h1>Cart</h1>

        {cart.length === 0 ? (
          <h2>Your cart is empty</h2>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "#1f2937",
                  padding: "20px",
                  marginBottom: "15px",
                  borderRadius: "10px",
                }}
              >
                <h3>{item.name}</h3>

                <p>
                  ₹{item.price} × {item.quantity}
                </p>

                <button
                  onClick={() =>
                    decreaseQty(item.id)
                  }
                >
                  -
                </button>

                <span
                  style={{
                    margin: "0 15px",
                  }}
                >
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQty(item.id)
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  style={{
                    marginLeft: "20px",
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}

            <h2>Total: ₹{total}</h2>

            <Link to="/checkout">
              <button
                style={{
                  background: "#2E7D32",
                  color: "white",
                  border: "none",
                  padding: "15px 25px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Proceed To Checkout
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;