import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

import {
  darkTheme,
  lightTheme,
  gradients,
  shadows,
} from "../styles/theme";

function FoodCard({ food, addToCart }) {
  const [hovered, setHovered] = useState(false);

  const { darkMode } = useTheme();

  const theme = darkMode
    ? darkTheme
    : lightTheme;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "290px",
        overflow: "hidden",

        background: theme.card,
        color: theme.text,

        border: `1px solid ${theme.border}`,
        borderRadius: "24px",

        transition: "all .35s ease",

        transform: hovered
          ? "translateY(-10px)"
          : "translateY(0)",

        boxShadow: hovered
          ? "0 20px 45px rgba(34,197,94,0.18)"
          : shadows.card,
      }}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={food.image}
          alt={food.name}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",

            transition: ".4s ease",

            transform: hovered
              ? "scale(1.08)"
              : "scale(1)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",

            background: darkMode
              ? "rgba(15,23,42,0.85)"
              : "rgba(255,255,255,0.9)",

            padding: "6px 12px",
            borderRadius: "999px",

            color: theme.text,

            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          {food.category}
        </div>

        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",

            background: darkMode
              ? "rgba(15,23,42,0.85)"
              : "rgba(255,255,255,0.9)",

            padding: "6px 10px",

            borderRadius: "999px",

            color: "#FBBF24",

            fontWeight: "700",
          }}
        >
          ⭐ 4.8
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <h3
          style={{
            color: theme.text,
            marginTop: 0,
            marginBottom: "8px",
          }}
        >
          {food.name}
        </h3>

        <p
          style={{
            color: theme.textSecondary,
            fontSize: "14px",
            marginBottom: "18px",
          }}
        >
          Fresh • Healthy • Protein Rich
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            marginBottom: "18px",
          }}
        >
          <div
            style={{
              background:
                "rgba(34,197,94,0.15)",

              color: theme.primary,

              padding: "8px 14px",

              borderRadius: "999px",

              fontSize: "13px",

              fontWeight: "700",
            }}
          >
            💪 {food.protein}
          </div>

          <div
            style={{
              background: darkMode
                ? "rgba(255,255,255,0.05)"
                : "#F1F5F9",

              color: theme.text,

              padding: "8px 14px",

              borderRadius: "999px",

              fontWeight: "700",
            }}
          >
            ₹{food.price}
          </div>
        </div>

        <button
          onClick={() => addToCart(food)}
          style={{
            width: "100%",

            background: gradients.primary,

            color: "white",

            border: "none",

            padding: "14px",

            borderRadius: "14px",

            cursor: "pointer",

            fontWeight: "700",

            boxShadow: shadows.button,
          }}
        >
          🛒 Add To Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;