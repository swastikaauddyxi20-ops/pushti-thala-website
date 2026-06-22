import { Navigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";


import {
  useTheme,
} from "../context/ThemeContext";
import {
  gradients,
  shadows,
  darkTheme,
  lightTheme,
} from "../styles/theme";

function Orders() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) {
    return <Navigate to="/login" />;
  }

  const orders =
    JSON.parse(
      localStorage.getItem("orders")
    ) || [];

    const { darkMode } =
  useTheme();

const theme = darkMode
  ? darkTheme
  : lightTheme;

  const cardStyle = {
  background: theme.card,
  border: `1px solid ${theme.border}`,
  borderRadius: "24px",
  boxShadow: shadows.card,
};

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          background:
            theme.pageBackground,
          padding: "40px 20px",
          color: theme.text,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
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
              📦 My Orders
            </h1>

            <p
              style={{
                color:
                  theme.textSecondary,
              }}
            >
              Track all your healthy
              meal orders
            </p>
          </div>

          {/* Empty State */}

          {orders.length === 0 ? (
            <div
              style={{
                ...cardStyle,
                padding: "60px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "80px",
                }}
              >
                🍱
              </div>

              <h2>
                No Orders Yet
              </h2>

              <p
                style={{
                  color:
                    theme.textSecondary,
                }}
              >
                Your order history
                will appear here.
              </p>

              <Link to="/">
                <button
                  style={{
                    marginTop:
                      "20px",

                    background:
                      gradients.primary,

                    border:
                      "none",

                    color:
                      "white",

                    padding:
                      "14px 24px",

                    borderRadius:
                      "14px",

                    cursor:
                      "pointer",

                    fontWeight:
                      "700",
                  }}
                >
                  Start Ordering 🍱
                </button>
              </Link>
            </div>
          ) : (
            orders.map((order) => (
              <div
                key={
                  order.id ||
                  Math.random()
                }
                style={{
                  ...cardStyle,
                  padding: "25px",
                  marginBottom:
                    "25px",
                }}
              >
                {/* Top */}

                <div
                  style={{
                    display: "flex",

                    justifyContent:
                      "space-between",

                    alignItems:
                      "center",

                    flexWrap:
                      "wrap",

                    gap: "15px",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        margin:
                          "0 0 8px",
                      }}
                    >
                      Order #
                      {order.id ||
                        "N/A"}
                    </h2>

                    <p
                      style={{
                        margin: 0,
                        color:
                          theme.textSecondary,
                      }}
                    >
                      {order.date ||
                        "Date unavailable"}
                    </p>
                  </div>

                  <div
                    style={{
                      background:
                        darkMode
                         ? "rgba(34,197,94,0.15)"
                           : "rgba(34,197,94,0.08)",

                      color:
                        theme.primary,

                      padding:
                        "10px 18px",

                      borderRadius:
                        "999px",

                      fontWeight:
                        "700",
                    }}
                  >
                    ✅ Delivered
                  </div>
                </div>

                <hr
                  style={{
                    border:
                    `1px solid ${theme.border}`,
                    margin:
                      "20px 0",
                  }}
                />

                {/* Items */}

                {order.items?.map(
                  (item) => (
                    <div
                      key={
                        item.id
                      }
                      style={{
                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap: "15px",

                        background:
                        theme.card,

                        padding:
                          "15px",

                        borderRadius:
                          "16px",

                        marginBottom:
                          "12px",
                      }}
                    >
                      {item.image && (
                        <img
                          src={
                            item.image
                          }
                          alt={
                            item.name
                          }
                          style={{
                            width:
                              "70px",

                            height:
                              "70px",

                            objectFit:
                              "cover",

                            borderRadius:
                              "12px",
                          }}
                        />
                      )}

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
                          {
                            item.name
                          }
                        </h4>

                        <p
                          style={{
                            margin: 0,
                            color:
                              theme.textSecondary,
                          }}
                        >
                          Qty:
                          {" "}
                          {
                            item.quantity
                          }
                        </p>
                      </div>

                      <h4
                        style={{
                          color:
                            theme.primary,
                        }}
                      >
                        ₹
                        {(
                          Number(
                            item.price
                          ) *
                          Number(
                            item.quantity
                          )
                        ).toFixed(
                          0
                        )}
                      </h4>
                    </div>
                  )
                )}

                {/* Summary */}

                <div
                  style={{
                    marginTop:
                      "20px",

                    background:
                    theme.backgroundSecondary,

                    padding:
                      "20px",

                    borderRadius:
                      "18px",
                  }}
                >
                  <div
                    style={{
                      display:
                        "flex",

                      justifyContent:
                        "space-between",

                      marginBottom:
                        "10px",
                    }}
                  >
                    <span>
                      Payment
                    </span>

                    <strong>
                      {order.paymentMethod ||
                        "N/A"}
                    </strong>
                  </div>

                  <div
                    style={{
                      display:
                        "flex",

                      justifyContent:
                        "space-between",

                      marginBottom:
                        "10px",
                    }}
                  >
                    <span>
                      Delivery
                    </span>

                    <strong>
                      {Number(
                        order.deliveryFee ||
                          0
                      ) === 0
                        ? "FREE 🚚"
                        : `₹${Number(
                            order.deliveryFee
                          ).toFixed(
                            2
                          )}`}
                    </strong>
                  </div>

                  <div
                    style={{
                      display:
                        "flex",

                      justifyContent:
                        "space-between",

                      marginBottom:
                        "10px",
                    }}
                  >
                    <span>
                      Discount
                    </span>

                    <strong>
                      ₹
                      {Number(
                        order.discountAmount ||
                          0
                      ).toFixed(
                        2
                      )}
                    </strong>
                  </div>

                  <div
                    style={{
                      display:
                        "flex",

                      justifyContent:
                        "space-between",

                      marginTop:
                        "15px",

                      fontSize:
                        "20px",

                      fontWeight:
                        "700",
                    }}
                  >
                    <span>
                      Total Paid
                    </span>

                    <span
                      style={{
                        color:
                          theme.primary,
                      }}
                    >
                      ₹
                      {Number(
                        order.total ||
                          0
                      ).toFixed(
                        2
                      )}
                    </span>
                  </div>
                </div>

                {/* Buttons */}

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    marginTop:
                      "20px",
                    flexWrap:
                      "wrap",
                  }}
                >
                  <button
                    style={{
                      flex: 1,

                      background:
                        gradients.primary,

                      border:
                        "none",

                      color:
                        "white",

                      padding:
                        "14px",

                      borderRadius:
                        "14px",

                      fontWeight:
                        "700",

                      cursor:
                        "pointer",

                      boxShadow:
                        shadows.button,
                    }}
                  >
                    🔁 Reorder
                  </button>

                  <button
                    style={{
                      flex: 1,

                      background: theme.backgroundSecondary,

                      border: `1px solid ${theme.border}`,

                      color: theme.text,

                      padding:
                        "14px",

                      borderRadius:
                        "14px",

                      fontWeight:
                        "700",

                      cursor:
                        "pointer",
                    }}
                  >
                    📄 Invoice
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Orders;