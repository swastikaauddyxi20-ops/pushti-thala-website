import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";
import {
  darkTheme,
  lightTheme,
  gradients,
  shadows,
} from "../styles/theme";

function Profile() {
  const { darkMode } = useTheme();

  const theme = darkMode
    ? darkTheme
    : lightTheme;

  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  const orders =
    JSON.parse(
      localStorage.getItem("orders")
    ) || [];

  const totalSpent =
    orders.reduce(
      (total, order) =>
        total + Number(order.total || 0),
      0
    );

  const latestOrders =
    orders.slice(0, 3);

  const glassCardStyle = {
    background: theme.card,
    backdropFilter: "blur(20px)",
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
          background: theme.pageBackground,
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
          {/* Hero */}

          <div
            style={{
              background:
                gradients.primary,
              borderRadius: "30px",
              padding: "40px",
              textAlign: "center",
              boxShadow:
                shadows.glow,
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                background:
                  "rgba(255,255,255,0.2)",
                margin: "auto",
                display: "flex",
                justifyContent:
                  "center",
                alignItems:
                  "center",
                fontSize: "60px",
                marginBottom:
                  "15px",
              }}
            >
              👤
            </div>

            <h1>
              {user.name ||
                "Guest User"}
            </h1>

            <p>
              Premium Green Member 🌿
            </p>
          </div>

          {/* Stats */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
              marginBottom:
                "30px",
            }}
          >
            <StatCard
              theme={theme}
              title="Total Orders"
              value={orders.length}
              icon="📦"
            />

            <StatCard
              theme={theme}
              title="Total Spent"
              value={`₹${totalSpent.toFixed(
                0
              )}`}
              icon="💰"
            />

            <StatCard
              theme={theme}
              title="Reward Points"
              value={
                orders.length * 10
              }
              icon="⭐"
            />

            <StatCard
              theme={theme}
              title="Member Tier"
              value="Premium"
              icon="🏆"
            />
          </div>

          {/* Account & Membership */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(350px,1fr))",
              gap: "20px",
              marginBottom:
                "30px",
            }}
          >
            <div
              style={{
                ...glassCardStyle,
                padding: "25px",
              }}
            >
              <h2>
                👤 Account Info
              </h2>

              <p>
                <strong>
                  Name:
                </strong>{" "}
                {user.name ||
                  "N/A"}
              </p>

              <p>
                <strong>
                  Email:
                </strong>{" "}
                {user.email ||
                  "N/A"}
              </p>

              <p>
                <strong>
                  Phone:
                </strong>{" "}
                +91 XXXXX XXXXX
              </p>
            </div>

            <div
              style={{
                ...glassCardStyle,
                padding: "25px",
              }}
            >
              <h2>
                🌿 Membership
              </h2>

              <p>
                Current Plan
              </p>

              <h3
                style={{
                  color:
                    theme.primary,
                }}
              >
                Premium Green
              </h3>

              <p>
                Free Delivery
                Benefits Active
              </p>

              <div
                style={{
                  marginTop:
                    "15px",
                  background:
                    "rgba(34,197,94,0.15)",
                  color:
                    theme.primary,
                  padding:
                    "10px",
                  borderRadius:
                    "12px",
                  textAlign:
                    "center",
                  fontWeight:
                    "700",
                }}
              >
                Active
              </div>
            </div>
          </div>

          {/* Recent Orders */}

          <div
            style={{
              ...glassCardStyle,
              padding: "25px",
              marginBottom:
                "30px",
            }}
          >
            <h2>
              📦 Recent Orders
            </h2>

            {latestOrders.length ===
            0 ? (
              <p
                style={{
                  color:
                    theme.textSecondary,
                }}
              >
                No recent orders.
              </p>
            ) : (
              latestOrders.map(
                (order) => (
                  <div
                    key={
                      order.id
                    }
                    style={{
                      display:
                        "flex",
                      justifyContent:
                        "space-between",
                      padding:
                        "15px",
                      background:
                        darkMode
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(0,0,0,0.05)",
                      borderRadius:
                        "12px",
                      marginBottom:
                        "10px",
                    }}
                  >
                    <div>
                      <strong>
                        #
                        {
                          order.id
                        }
                      </strong>

                      <p
                        style={{
                          color:
                            theme.textSecondary,
                        }}
                      >
                        {
                          order.date
                        }
                      </p>
                    </div>

                    <div>
                      ₹
                      {Number(
                        order.total ||
                          0
                      ).toFixed(
                        2
                      )}
                    </div>
                  </div>
                )
              )
            )}
          </div>

          {/* Favourite Meals */}

          <div
            style={{
              ...glassCardStyle,
              padding: "25px",
              marginBottom:
                "30px",
            }}
          >
            <h2>
              ❤️ Favourite Meals
            </h2>

            <p
              style={{
                color:
                  theme.textSecondary,
              }}
            >
              Feature coming
              soon.
            </p>
          </div>

          {/* Buttons */}

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={
                actionButton
              }
            >
              ✏️ Edit Profile
            </button>

            <button
              style={
                actionButton
              }
            >
              📦 View Orders
            </button>

            <button
              style={
                actionButton
              }
            >
              🎁 Rewards
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function StatCard({
  title,
  value,
  icon,
  theme,
}) {
  return (
    <div
      style={{
        background:
          theme.card,
        border: `1px solid ${theme.border}`,
        borderRadius:
          "24px",
        padding: "25px",
        textAlign:
          "center",
      }}
    >
      <div
        style={{
          fontSize: "40px",
        }}
      >
        {icon}
      </div>

      <h3>{value}</h3>

      <p
        style={{
          color:
            theme.textSecondary,
        }}
      >
        {title}
      </p>
    </div>
  );
}

const actionButton = {
  flex: 1,
  minWidth: "200px",
  background:
    gradients.primary,
  color: "white",
  border: "none",
  padding: "16px",
  borderRadius: "14px",
  cursor: "pointer",
  fontWeight: "700",
  boxShadow:
    shadows.button,
};

export default Profile;