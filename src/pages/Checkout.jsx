import {
  gradients,
  shadows,
  darkTheme,
  lightTheme,
} from "../styles/theme";

import {
  useTheme,
} from "../context/ThemeContext";
import { useState } from "react";
import {
  Navigate,
  useNavigate,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();

  const { cart, clearCart } =
    useCart();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const { darkMode } =
  useTheme();

const theme = darkMode
  ? darkTheme
  : lightTheme;

  const inputStyle =
  getInputStyle(theme);

  if (!user) {
    return <Navigate to="/login" />;
  }

  const subtotal = cart.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  const availableCoupons = [];

  if (subtotal >= 199) {
    availableCoupons.push({
      code: "SAVE10",
      discount: 10,
    });
  }

  if (subtotal >= 299) {
    availableCoupons.push({
      code: "SAVE20",
      discount: 20,
    });
  }

  if (subtotal >= 399) {
    availableCoupons.push({
      code: "SAVE25",
      discount: 25,
    });
  }

  const bestCoupon =
    availableCoupons.length > 0
      ? availableCoupons[
          availableCoupons.length - 1
        ]
      : null;

  const [selectedCoupon, setSelectedCoupon] =
    useState(
      bestCoupon
        ? bestCoupon.code
        : ""
    );

  const [paymentMethod, setPaymentMethod] =
    useState("COD");

  const [note, setNote] =
    useState("");

    const [selectedAddress, setSelectedAddress] =
  useState("home");

  const coupon =
    availableCoupons.find(
      (c) =>
        c.code ===
        selectedCoupon
    ) || null;

  const discountAmount = coupon
    ? (subtotal *
        coupon.discount) /
      100
    : 0;

  const deliveryFee =
    subtotal >= 299 ? 0 : 49;

  const total =
    subtotal -
    discountAmount +
    deliveryFee;

  const placeOrder = () => {
    const orders =
      JSON.parse(
        localStorage.getItem(
          "orders"
        )
      ) || [];

    const newOrder = {
      id: Date.now(),

      date: new Date().toLocaleString(),

      items: cart,

      subtotal,

      discountAmount,

      deliveryFee,

      total,

      paymentMethod,

      note,
    };

    orders.unshift(newOrder);

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    clearCart();

    navigate("/success", {
  state: {
    paymentMethod,
    total,
    customerName: user.name,
  },
});
  };

  const addresses = [
  {
    id: "home",
    title: "🏠 Home",
    address:
      "Salt Lake, Kolkata - 700091",
  },
  {
    id: "office",
    title: "🏢 Office",
    address:
      "Sector V, Kolkata - 700156",
  },
];

  return (
  <>
    <Navbar />

    <div
      style={{
        background:
        theme.background,
        minHeight: "100vh",
        padding: "40px 20px",
        color: theme.text,
      }}
    >
      {/* Header */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          🚀 Secure Checkout
        </h1>

        <p
          style={{
            color:
              theme.textSecondary,
          }}
        >
          Complete your healthy meal
          order
        </p>
      </div>

      {/* Layout */}

      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",

          display: "grid",

          gridTemplateColumns:
            "1.4fr 0.9fr",

          gap: "25px",
        }}
      >
        {/* LEFT */}

        <div
          style={{
            background: theme.card,
border: `1px solid ${theme.border}`,
backdropFilter: "blur(20px)",
borderRadius: "24px",
boxShadow: shadows.card,
            padding: "30px",
          }}
        >
          <h2>
            📍 Delivery Address
          </h2>

<div
  style={{
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
  }}
>
  {addresses.map((address) => (
    <div
      key={address.id}
      onClick={() =>
        setSelectedAddress(
          address.id
        )
      }
      style={{
        flex: 1,

        cursor: "pointer",

        padding: "16px",

        borderRadius: "16px",

        border:
          selectedAddress ===
          address.id
            ? "2px solid #22C55E"
            : "1px solid rgba(255,255,255,0.08)",

        background:
          selectedAddress ===
          address.id
            ? "rgba(34,197,94,0.12)"
            : "rgba(255,255,255,0.03)",
      }}
    >
      <h4>{address.title}</h4>

      <p
        style={{
          color: "#94A3B8",
          margin: 0,
        }}
      >
        {address.address}
      </p>
    </div>
  ))}
</div>

          <input
            type="text"
            placeholder="Full Name"
            defaultValue={
              user.name
            }
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Phone Number"
            style={inputStyle}
          />

          <textarea
            rows="4"
            placeholder="Full Address"
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />

          <input
            type="text"
            placeholder="Pincode"
            style={inputStyle}
          />

          {/* Notes */}

          <div
            style={{
              marginTop: "25px",
            }}
          >
            <h2>
              📝 Special
              Instructions
            </h2>

            <textarea
              value={note}
              onChange={(e) =>
                setNote(
                  e.target.value
                )
              }
              rows="4"
              placeholder="Less spicy, call before delivery..."
              style={{
                ...inputStyle,
                resize: "none",
              }}
            />
          </div>

          {/* Payment */}

          <div
  style={{
    display: "flex",
    gap: "15px",
    marginTop: "20px",
  }}
>
  {[
    {
      value: "UPI",
      icon: "📱",
    },
    {
      value: "Card",
      icon: "💳",
    },
    {
      value: "COD",
      icon: "💵",
    },
  ].map((method) => (
    <div
      key={method.value}
      onClick={() =>
        setPaymentMethod(
          method.value
        )
      }
      style={{
        flex: 1,

        cursor: "pointer",

        padding: "18px",

        textAlign:
          "center",

        borderRadius:
          "16px",

        border:
          paymentMethod ===
          method.value
            ? "2px solid #22C55E"
            : "1px solid rgba(255,255,255,0.08)",

        background:
          paymentMethod ===
          method.value
            ? "rgba(34,197,94,0.12)"
            : "rgba(255,255,255,0.03)",
      }}
    >
      <div
        style={{
          fontSize: "26px",
        }}
      >
        {method.icon}
      </div>

      <div>
        {method.value}
      </div>
    </div>
  ))}
</div>
        </div>

        {/* RIGHT */}

        <div
          style={{
            background: theme.card,
border: `1px solid ${theme.border}`,
backdropFilter: "blur(20px)",
borderRadius: "24px",
boxShadow: shadows.card,

            padding: "30px",

            height:
              "fit-content",

            position:
              "sticky",

            top: "120px",
          }}
        >
          <h2
            style={{
              marginBottom:
                "25px",
            }}
          >
            🛒 Order Summary
          </h2>

          {/* Items */}

          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display:
                  "flex",

                alignItems:
                  "center",

                gap: "15px",

                background:
                  "rgba(255,255,255,0.03)",

                padding:
                  "15px",

                borderRadius:
                  "16px",

                marginBottom:
                  "12px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width:
                    "60px",

                  height:
                    "60px",

                  objectFit:
                    "cover",

                  borderRadius:
                    "12px",
                }}
              />

              <div
                style={{
                  flex: 1,
                }}
              >
                <h4
                  style={{
                    margin:
                      "0 0 6px",
                  }}
                >
                  {item.name}
                </h4>

                <p
                  style={{
                    color:
                      theme.textSecondary,
                    margin: 0,
                  }}
                >
                  Qty:
                  {" "}
                  {
                    item.quantity
                  }
                </p>
              </div>

              <strong>
                ₹
                {item.price *
                  item.quantity}
              </strong>
            </div>
          ))}

          {/* Coupon */}

          {bestCoupon && (
            <div
  style={{
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px",
  }}
>
  {availableCoupons.map(
    (coupon) => (
      <button
        key={coupon.code}
        onClick={() =>
          setSelectedCoupon(
            coupon.code
          )
        }
        style={{
          border: "none",

          cursor: "pointer",

          padding:
            "10px 16px",

          borderRadius:
            "999px",

          fontWeight:
            "600",

          background:
            selectedCoupon ===
            coupon.code
              ? "linear-gradient(135deg,#22C55E,#16A34A)"
              : theme.card,

          color:
  selectedCoupon === coupon.code
    ? "#fff"
    : theme.text,
        }}
      >
        🎁 {coupon.code}
      </button>
    )
  )}
</div>
          )}

          {/* Free Delivery */}

          {subtotal < 299 && (
            <div
              style={{
                marginBottom:
                  "20px",
              }}
            >
              <div
  style={{
    color: theme.textSecondary,
  }}
>
  <p
    style={{
      fontWeight: "600",
      marginBottom: "10px",
    }}
  >
    🚚 Free Delivery Progress
  </p>
</div>

              <div
                style={{
                  height: "8px",

                  background:
                    theme.card,

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

                    height:
                      "100%",

                    background:
                      gradients.primary,
                  }}
                />
              </div>
            </div>
          )}

          {/* Bill */}

          <div
            style={{
              background:
                theme.backgroundSecondary,

              padding:
                "20px",

              borderRadius:
                "18px",
            }}
          >
            <div>
              Cart Value:
              ₹
              {subtotal.toFixed(
                2
              )}
            </div>

            <div>
              Discount:
              -₹
              {discountAmount.toFixed(
                2
              )}
            </div>

            <div>
              Delivery:
              {" "}
              {deliveryFee ===
              0
                ? "FREE 🚚"
                : `₹${deliveryFee}`}
            </div>

            <hr />

            <h2
              style={{
                color:
                  theme.primary,
              }}
            >
              Total:
              ₹
              {total.toFixed(
                2
              )}
            </h2>
          </div>

          <button
            onClick={
              placeOrder
            }
            style={{
              width: "100%",

              marginTop:
                "25px",

              padding:
                "18px",

              border:
                "none",

              borderRadius:
                "16px",

              background:
                gradients.primary,

              color:theme.text,

              fontWeight:
                "700",

              fontSize:
                "18px",

              cursor:
                "pointer",

              boxShadow:
                shadows.button,
            }}
          >
            🔒 Place Order
          </button>
          <div
  style={{
    textAlign: "center",

    marginTop: "15px",

    color: "#94A3B8",

    fontSize: "14px",
  }}
>
  🔒 Secure Checkout • SSL Protected
</div>
        </div>
      </div>
    </div>
  </>
);
}

const getInputStyle = (theme) => ({
  width: "100%",
  padding: "14px",

  marginTop: "12px",
  marginBottom: "12px",

  borderRadius: "12px",

  border: `1px solid ${theme.border}`,

  background: theme.card,

  color: theme.text,

  outline: "none",
});

export default Checkout;