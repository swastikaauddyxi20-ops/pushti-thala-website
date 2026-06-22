import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

import {
  darkTheme,
  lightTheme,
  gradients,
} from "../styles/theme";

import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  const { darkMode, toggleTheme } =
    useTheme();

  const theme = darkMode
    ? darkTheme
    : lightTheme;

  const totalItems = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <nav
      style={{
        background: theme.card,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter:
          "blur(20px)",

        position: "sticky",
        top: 0,
        zIndex: 1000,

        padding: "18px 40px",

        display: "flex",
        justifyContent:
          "space-between",
        alignItems: "center",

        borderBottom:
          `1px solid ${theme.border}`,

        boxShadow:
          "0 10px 30px rgba(0,0,0,0.15)",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "30px",
            fontWeight: "800",
            background:
              gradients.primary,
            WebkitBackgroundClip:
              "text",
            WebkitTextFillColor:
              "transparent",
          }}
        >
          Pushti Thala 🌿
        </h2>
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            ...linkStyle,
            color: theme.text,
          }}
        >
          Home
        </Link>

        <Link
          to="/orders"
          style={{
            ...linkStyle,
            color: theme.text,
          }}
        >
          Orders
        </Link>

        {user && (
          <Link
            to="/profile"
            style={{
              ...linkStyle,
              color: theme.text,
            }}
          >
            Profile
          </Link>
        )}

        <div
          style={{
            background:
              "rgba(34,197,94,0.15)",

            color:
              theme.primary,

            padding:
              "8px 14px",

            borderRadius:
              "999px",

            fontWeight:
              "700",
          }}
        >
          🛒 {totalItems}
        </div>

        <button
          onClick={toggleTheme}
          style={{
            width: "45px",
            height: "45px",

            borderRadius: "50%",

            border:
              `1px solid ${theme.border}`,

            background:
              theme.backgroundSecondary,

            color: theme.text,

            cursor: "pointer",

            fontSize: "20px",
          }}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {user ? (
          <>
            <div
              style={{
                background:
                  theme.backgroundSecondary,

                padding:
                  "8px 16px",

                borderRadius:
                  "999px",

                color:
                  theme.text,
              }}
            >
              👋 {user.name}
            </div>

            <button
              onClick={logout}
              style={{
                background:
                  "#EF4444",

                color: "white",

                border: "none",

                padding:
                  "10px 16px",

                borderRadius:
                  "12px",

                cursor:
                  "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            style={{
              background:
                gradients.primary,

              color: "white",

              padding:
                "10px 18px",

              borderRadius:
                "12px",

              textDecoration:
                "none",

              fontWeight:
                "600",
            }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  fontSize: "17px",
  fontWeight: "600",
};

export default Navbar;