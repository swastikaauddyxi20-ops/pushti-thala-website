import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import { useCart } from "../context/CartContext";

import { useTheme } from "../context/ThemeContext";

import {
  darkTheme,
  lightTheme,
  gradients,
  shadows,
} from "../styles/theme";

function CheckoutV3() {
  const navigate = useNavigate();

  const { cart, subtotal, clearCart } =
    useCart();

  const { darkMode } =
    useTheme();

  const theme = darkMode
    ? darkTheme
    : lightTheme;

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user)
    return <Navigate to="/login" />;

  const [paymentMethod, setPaymentMethod] =
    useState("COD");

  const [selectedAddress, setSelectedAddress] =
    useState("home");

  const [note, setNote] =
    useState("");

  const [selectedCoupon, setSelectedCoupon] =
    useState("");

  const availableCoupons = [];

  if (subtotal >= 199)
    availableCoupons.push({
      code: "SAVE10",
      discount: 10,
    });

  if (subtotal >= 299)
    availableCoupons.push({
      code: "SAVE20",
      discount: 20,
    });

  if (subtotal >= 399)
    availableCoupons.push({
      code: "SAVE25",
      discount: 25,
    });

  const coupon =
    availableCoupons.find(
      (c) =>
        c.code === selectedCoupon
    ) || null;

  const discountAmount =
    coupon
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

  const addresses = [
    {
      id: "home",
      title: "🏠 Home",
      address:
        "Salt Lake, Kolkata",
    },
    {
      id: "office",
      title: "🏢 Office",
      address:
        "Sector V, Kolkata",
    },
  ];

  const placeOrder = () => {
    const orders =
      JSON.parse(
        localStorage.getItem(
          "orders"
        )
      ) || [];

    const order = {
      id: Date.now(),
      date:
        new Date().toLocaleString(),
      items: cart,
      subtotal,
      discountAmount,
      deliveryFee,
      total,
      paymentMethod,
      note,
    };

    orders.unshift(order);

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    clearCart();

    navigate("/success", {
      state: {
        paymentMethod,
        total,
        customerName:
          user.name,
      },
    });
  };

  const cardStyle = {
    background: theme.card,
    border: `1px solid ${theme.border}`,
    borderRadius: "24px",
    backdropFilter: "blur(20px)",
    boxShadow: shadows.card,
  };

  const inputStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "12px",
  borderRadius: "14px",
  border: `1px solid ${theme.border}`,
  background: theme.backgroundSecondary,
  color: theme.text,
  outline: "none",
};

  return (
    <>
      <Navbar />

      <div
        style={{
          background:
            theme.pageBackground,
          minHeight: "100vh",
          color: theme.text,
          padding: "40px 20px",
        }}
      >
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
            🚀 Premium Checkout
          </h1>

          <p
            style={{
              color:
                theme.textSecondary,
            }}
          >
            Secure payment &
            healthy delivery
          </p>
        </div>

        <div
          style={{
            maxWidth: "1400px",
            margin: "auto",

            display: "grid",

            gridTemplateColumns:
              "1.4fr 0.8fr",

            gap: "25px",
          }}
        >
          {/* LEFT COLUMN */}

          <div
            style={{
              ...cardStyle,
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
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              {addresses.map(
                (address) => (
                  <div
                    key={
                      address.id
                    }
                    onClick={() =>
                      setSelectedAddress(
                        address.id
                      )
                    }
                    style={{
                      flex: 1,
                      minWidth:
                        "220px",

                      cursor:
                        "pointer",

                      padding:
                        "18px",

                      borderRadius:
                        "18px",

                      border:
                        selectedAddress ===
                        address.id
                          ? `2px solid ${theme.primary}`
                          : `1px solid ${theme.border}`,

                      background:
                        selectedAddress ===
                        address.id
                          ? "rgba(34,197,94,0.12)"
                          : theme.backgroundSecondary,
                    }}
                  >
                    <h4>
                      {
                        address.title
                      }
                    </h4>

                    <p
                      style={{
                        color:
                          theme.textSecondary,
                      }}
                    >
                      {
                        address.address
                      }
                    </p>
                  </div>
                )
              )}
            </div>

            <h2
              style={{
                marginTop:
                  "40px",
              }}
            >
              💳 Payment Method
            </h2>

            <h2
  style={{
    marginTop: "40px",
  }}
>
  📝 Delivery Details
</h2>

<input
  type="text"
  placeholder="Full Name"
  defaultValue={user.name}
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

<textarea
  rows="3"
  placeholder="Special instructions..."
  value={note}
  onChange={(e) =>
    setNote(e.target.value)
  }
  style={{
    ...inputStyle,
    resize: "none",
  }}
/>

            <div
              style={{
                display: "flex",
                gap: "15px",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  value:
                    "UPI",
                  icon:
                    "📱",
                },
                {
                  value:
                    "Card",
                  icon:
                    "💳",
                },
                {
                  value:
                    "COD",
                  icon:
                    "💵",
                },
              ].map(
                (method) => (
                  <div
                    key={
                      method.value
                    }
                    onClick={() =>
                      setPaymentMethod(
                        method.value
                      )
                    }
                    style={{
                      flex: 1,
                      minWidth:
                        "150px",

                      cursor:
                        "pointer",

                      padding:
                        "18px",

                      textAlign:
                        "center",

                      borderRadius:
                        "18px",

                      border:
                        paymentMethod ===
                        method.value
                          ? `2px solid ${theme.primary}`
                          : `1px solid ${theme.border}`,
                    }}
                  >
                    <div
                      style={{
                        fontSize:
                          "28px",
                      }}
                    >
                      {
                        method.icon
                      }
                    </div>

                    {
                      method.value
                    }
                  </div>
                )
              )}
            </div>
          </div>

          {/* RIGHT COLUMN */}

          <div
            style={{
              ...cardStyle,
              padding: "30px",
              height:
                "fit-content",
            }}
          >
            <h2>
              🛒 Order Summary
            </h2>

            <h3
  style={{
    marginTop: "25px",
  }}
>
  🎁 Coupons
</h3>

<div
  style={{
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "25px",
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
          padding: "10px 15px",
          borderRadius: "999px",

          background:
            selectedCoupon ===
            coupon.code
              ? gradients.primary
              : theme.backgroundSecondary,

          color:
            selectedCoupon ===
            coupon.code
              ? "#fff"
              : theme.text,
        }}
      >
        {coupon.code}
      </button>
    )
  )}
</div>

{subtotal < 299 && (
  <>
    <div
      style={{
        display: "flex",
        justifyContent:
          "space-between",
        marginBottom: "10px",
      }}
    >
      <span>
        🚚 Free Delivery
      </span>

      <span>
        ₹{299 - subtotal}
        away
      </span>
    </div>

    <div
      style={{
        height: "10px",
        borderRadius: "999px",
        background:
          theme.backgroundSecondary,
        overflow: "hidden",
        marginBottom: "25px",
      }}
    >
      <div
        style={{
          width: `${Math.min(
            (subtotal / 299) * 100,
            100
          )}%`,

          height: "100%",

          background:
            gradients.primary,
        }}
      />
    </div>
  </>
)}

<div
  style={{
    background:
      theme.backgroundSecondary,

    borderRadius: "20px",

    padding: "20px",

    marginBottom: "25px",
  }}
>
  <BillRow
    label="Subtotal"
    value={subtotal}
  />

  <BillRow
    label="Discount"
    value={
      -discountAmount
    }
  />

  <BillRow
    label="Delivery"
    value={deliveryFee}
  />

  <hr
    style={{
      borderColor:
        theme.border,
    }}
  />

  <BillRow
    label="Total"
    value={total}
    bold
  />
</div>

<div
  style={{
    background:
      "rgba(34,197,94,0.12)",

    border:
      "1px solid rgba(34,197,94,0.2)",

    padding: "15px",

    borderRadius: "16px",

    marginBottom: "20px",

    textAlign: "center",

    color:
      theme.primary,
  }}
>
  🔒 Secure SSL Checkout
</div>

<div
  style={{
    background:
      theme.backgroundSecondary,

    padding: "15px",

    borderRadius: "16px",

    marginBottom: "20px",
  }}
>
  🛡️ Order Protection Included
</div>

            <button
              onClick={
                placeOrder
              }
              style={{
                width:
                  "100%",

                marginTop:
                  "20px",

                border:
                  "none",

                padding:
                  "18px",

                borderRadius:
                  "18px",

                background:
                  gradients.primary,

                color:
                  "#fff",

                cursor:
                  "pointer",

                fontWeight:
                  "700",

                boxShadow:
                  shadows.button,
              }}
            >
              🔒 Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
function BillRow({
  label,
  value,
  bold,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent:
          "space-between",

        marginBottom: "12px",

        fontWeight:
          bold ? "700" : "500",
      }}
    >
      <span>{label}</span>

      <span>
        ₹
        {Number(value).toFixed(
          2
        )}
      </span>
    </div>
  );
}

export default CheckoutV3;