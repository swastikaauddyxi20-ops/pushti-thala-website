import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

import {
  darkTheme,
  lightTheme,
  gradients,
  shadows,
} from "../styles/theme";

function CartDrawer({
  isOpen,
  onClose,
}) {
  const { darkMode } = useTheme();

  const theme = darkMode
    ? darkTheme
    : lightTheme;

  const {
    cart,
    subtotal,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const qtyBtn = {
    width: "34px",
    height: "34px",
    border: "none",
    borderRadius: "10px",
    background: gradients.primary,
    color: "#fff",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "16px",
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen
            ? "visible"
            : "hidden",
          transition: "0.3s",
          zIndex: 1000,
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? 0 : "-450px",
          width: "420px",
          maxWidth: "100%",
          height: "100vh",
          background:
            theme.backgroundSecondary,
          transition:
            "right 0.35s ease",
          boxShadow:
            "-10px 0 40px rgba(0,0,0,0.35)",
          zIndex: 1001,
          display: "flex",
          flexDirection: "column",
          borderLeft: `1px solid ${theme.border}`,
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "25px",
            borderBottom: `1px solid ${theme.border}`,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  color: theme.text,
                  margin: 0,
                }}
              >
                🛒 Your Cart
              </h2>

              <p
                style={{
                  color:
                    theme.textSecondary,
                  margin: "6px 0 0",
                }}
              >
                {cart.length} item(s)
                added
              </p>
            </div>

            <button
              onClick={onClose}
              style={{
                background:
                  "transparent",
                border: "none",
                color: theme.text,
                fontSize: "28px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px",
          }}
        >
          {cart.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                marginTop: "100px",
              }}
            >
              <div
                style={{
                  fontSize: "80px",
                }}
              >
                🛒
              </div>

              <h2
                style={{
                  color: theme.text,
                }}
              >
                Cart is Empty
              </h2>

              <p
                style={{
                  color:
                    theme.textSecondary,
                }}
              >
                Add healthy meals to
                get started.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                style={{
                  background:
                    theme.card,
                  border: `1px solid ${theme.border}`,
                  borderRadius: "18px",
                  padding: "15px",
                  marginBottom: "15px",
                  display: "flex",
                  gap: "15px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "85px",
                    height: "85px",
                    objectFit: "cover",
                    borderRadius: "14px",
                  }}
                />

                <div
                  style={{
                    flex: 1,
                  }}
                >
                  <h4
                    style={{
                      color:
                        theme.text,
                      margin:
                        "0 0 8px",
                    }}
                  >
                    {item.name}
                  </h4>

                  <p
                    style={{
                      color:
                        theme.primary,
                      margin:
                        "0 0 12px",
                    }}
                  >
                    ₹{item.price}
                  </p>

                  <div
                    style={{
                      display:
                        "flex",
                      alignItems:
                        "center",
                      gap: "10px",
                    }}
                  >
                    <button
                      onClick={() =>
                        decreaseQty(
                          item.id
                        )
                      }
                      style={qtyBtn}
                    >
                      −
                    </button>

                    <span
                      style={{
                        color:
                          theme.text,
                      }}
                    >
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQty(
                          item.id
                        )
                      }
                      style={qtyBtn}
                    >
                      +
                    </button>

                    <button
                      onClick={() =>
                        removeFromCart(
                          item.id
                        )
                      }
                      style={{
                        marginLeft:
                          "auto",
                        background:
                          "#EF4444",
                        border: "none",
                        color:
                          "#fff",
                        padding:
                          "8px 12px",
                        borderRadius:
                          "10px",
                        cursor:
                          "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div
            style={{
              padding: "20px",
              borderTop: `1px solid ${theme.border}`,
            }}
          >
            {subtotal < 299 && (
              <div
                style={{
                  marginBottom:
                    "20px",
                }}
              >
                <p
                  style={{
                    color:
                      theme.textSecondary,
                  }}
                >
                  Add ₹
                  {299 - subtotal}
                  more for FREE
                  Delivery 🚚
                </p>

                <div
                  style={{
                    height: "8px",
                    background:
                      theme.border,
                    borderRadius:
                      "999px",
                    overflow:
                      "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${Math.min(
                        (subtotal /
                          299) *
                          100,
                        100
                      )}%`,
                      height: "100%",
                      background:
                        gradients.primary,
                    }}
                  />
                </div>
              </div>
            )}

            <h2
              style={{
                color: theme.text,
              }}
            >
              ₹
              {subtotal.toFixed(
                2
              )}
            </h2>

            <Link
              to="/checkout"
              style={{
                textDecoration:
                  "none",
              }}
            >
              <button
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "none",
                  borderRadius:
                    "16px",
                  background:
                    gradients.primary,
                  color: "#fff",
                  fontWeight:
                    "700",
                  cursor:
                    "pointer",
                  boxShadow:
                    shadows.button,
                }}
              >
                Proceed To Checkout →
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default CartDrawer;