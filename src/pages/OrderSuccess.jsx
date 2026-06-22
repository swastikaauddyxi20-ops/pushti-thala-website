import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const paymentMethod =
    location.state?.paymentMethod || "UPI";

  const total =
    location.state?.total || 0;

  const customerName =
    location.state?.customerName || "Customer";

  const orderId =
    "PT" +
    Math.floor(
      100000 + Math.random() * 900000
    );

  const deliveryPartners = [
    {
      name: "Rahul Das",
      phone: "9876543210",
      vehicle: "Bike",
      avatar: "🚴",
    },
    {
      name: "Amit Roy",
      phone: "9123456780",
      vehicle: "Scooter",
      avatar: "🛵",
    },
    {
      name: "Priya Sen",
      phone: "9988776655",
      vehicle: "Bike",
      avatar: "🚴",
    },
  ];

  const partner =
    deliveryPartners[
      Math.floor(
        Math.random() *
          deliveryPartners.length
      )
    ];

  const [step, setStep] = useState(0);

  const timeline = [
    "Order Confirmed",
    "Preparing Food",
    "Out For Delivery",
    "Delivered",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) =>
        prev < 3 ? prev + 1 : prev
      );
    }, 5000);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#0F172A,#111827)",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "auto",
          background:
            "rgba(30,41,59,0.75)",
          backdropFilter: "blur(20px)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          borderRadius: "30px",
          padding: "40px",
          boxShadow:
            "0 25px 50px rgba(0,0,0,0.4)",
        }}
      >
        {/* Hero */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              fontSize: "80px",
              animation:
                "bounce 2s infinite",
            }}
          >
            🎉
          </div>

          <h1
            style={{
              fontSize: "42px",
              marginBottom: "8px",
            }}
          >
            Order Confirmed
          </h1>

          <p
            style={{
              color: "#94A3B8",
              fontSize: "18px",
            }}
          >
            Thank you, {customerName}
          </p>
        </div>

        {/* Delivered Banner */}
        {step === 3 && (
          <div
            style={{
              background:
                "linear-gradient(135deg,#22C55E,#16A34A)",
              padding: "25px",
              borderRadius: "20px",
              textAlign: "center",
              marginBottom: "25px",
              boxShadow:
                "0 0 40px rgba(34,197,94,0.4)",
            }}
          >
            <h2>
              🎊 Delivered Successfully
            </h2>

            <p>
              Enjoy your healthy meal 🍱
            </p>

            <div
              style={{
                fontSize: "28px",
              }}
            >
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        )}

        {/* Order Summary */}
        <div
          style={{
            background: "#0F172A",
            padding: "25px",
            borderRadius: "20px",
            marginBottom: "25px",
          }}
        >
          <h3>
            📦 Order Summary
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              marginTop: "15px",
            }}
          >
            <span>Order ID</span>
            <strong>{orderId}</strong>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              marginTop: "10px",
            }}
          >
            <span>Payment</span>
            <strong>
              {paymentMethod}
            </strong>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              marginTop: "10px",
            }}
          >
            <span>Total Paid</span>
            <strong>
              ₹
              {Number(total).toFixed(
                2
              )}
            </strong>
          </div>

          {step < 3 && (
            <div
              style={{
                marginTop: "20px",
                color: "#22C55E",
                fontWeight: "600",
              }}
            >
              ⏱ Estimated Delivery:
              25 - 35 mins
            </div>
          )}
        </div>

        {/* Delivery Partner */}
        <div
          style={{
            background:
              "linear-gradient(135deg,#0F172A,#111827)",
            padding: "25px",
            borderRadius: "20px",
            marginBottom: "25px",
          }}
        >
          <h3>
            🚚 Delivery Partner
          </h3>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,#22C55E,#16A34A)",
                display: "flex",
                alignItems: "center",
                justifyContent:
                  "center",
                fontSize: "32px",
              }}
            >
              {partner.avatar}
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                }}
              >
                {partner.name}
              </h3>

              <p
                style={{
                  color: "#CBD5E1",
                  margin: "5px 0",
                }}
              >
                ⭐ 4.9 Rider Rating
              </p>

              <p
                style={{
                  margin: 0,
                }}
              >
                📞 {partner.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Tracking */}
        <div
          style={{
            background: "#0F172A",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h3>
            📍 Live Order Tracking
          </h3>

          {timeline.map(
            (item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection:
                      "column",
                    alignItems:
                      "center",
                  }}
                >
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius:
                        "50%",
                      background:
                        index <= step
                          ? "#22C55E"
                          : "#334155",
                    }}
                  />

                  {index !==
                    timeline.length -
                      1 && (
                    <div
                      style={{
                        width: "3px",
                        height: "45px",
                        background:
                          index < step
                            ? "#22C55E"
                            : "#334155",
                      }}
                    />
                  )}
                </div>

                <div
                  style={{
                    paddingTop:
                      "1px",
                  }}
                >
                  <p
                    style={{
                      color:
                        index <= step
                          ? "#fff"
                          : "#94A3B8",
                      margin: 0,
                    }}
                  >
                    {item}
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          <button
            onClick={() =>
              navigate("/")
            }
            style={{
              flex: 1,
              padding: "16px",
              border: "none",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg,#22C55E,#16A34A)",
              color: "white",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            🏠 Back Home
          </button>

          <button
            onClick={() =>
              navigate("/")
            }
            style={{
              flex: 1,
              padding: "16px",
              border: "none",
              borderRadius: "14px",
              background:
                "#334155",
              color: "white",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            🍱 Order Again
          </button>
        </div>
      </div>

      <style>
        {`
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}
      </style>
    </div>
  );
}

export default OrderSuccess;