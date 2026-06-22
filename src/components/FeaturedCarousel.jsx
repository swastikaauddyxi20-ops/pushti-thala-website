import foods from "../data/foods";
import { useTheme } from "../context/ThemeContext";
import {
  darkTheme,
  lightTheme,
} from "../styles/theme";

function FeaturedCarousel() {
  const featured = foods.slice(0, 4);

  const { darkMode } = useTheme();

  const theme = darkMode
    ? darkTheme
    : lightTheme;

  return (
    <div
      style={{
        maxWidth: "1300px",
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: theme.text,
        }}
      >
        🔥 Featured Meals
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {featured.map((food) => (
          <div
            key={food.id}
            style={{
              background: theme.card,
              borderRadius: "20px",
              overflow: "hidden",
              border: `1px solid ${theme.border}`,
              boxShadow: darkMode
                ? "0 15px 35px rgba(0,0,0,0.35)"
                : "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={food.image}
              alt={food.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "20px",
              }}
            >
              <h3
                style={{
                  color: theme.text,
                }}
              >
                {food.name}
              </h3>

              <p
                style={{
                  color: theme.textSecondary,
                }}
              >
                💪 {food.protein}
              </p>

              <h2
                style={{
                  color: theme.primary,
                }}
              >
                ₹{food.price}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCarousel;