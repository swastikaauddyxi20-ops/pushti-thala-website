import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Toast from "../components/Toast";
import CartDrawer from "../components/CartDrawer";
import FeaturedCarousel from "../components/FeaturedCarousel";

import foods from "../data/foods";

import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

import {
  darkTheme,
  lightTheme,
} from "../styles/theme";

function Home() {
  const { addToCart, cart } =
    useCart();

  const { darkMode } =
    useTheme();

  const theme = darkMode
    ? darkTheme
    : lightTheme;

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [toast, setToast] =
    useState("");

  const [cartOpen, setCartOpen] =
    useState(false);

  const totalItems = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  const handleAddToCart = (
    food
  ) => {
    addToCart(food);

    setToast(
      `${food.name} added to cart`
    );

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const filteredFoods =
    foods.filter((food) => {
      const matchesSearch =
        food.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "All" ||
        food.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <div
      style={{
        background:
          theme.pageBackground,

        minHeight:
          "100vh",
      }}
    >
      <Navbar />

      <Toast
        message={toast}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() =>
          setCartOpen(false)
        }
      />

      <Hero />

      <FeaturedCarousel />

      {/* Search */}

      <div
  id="category-section"
  style={{
    display: "flex",

          justifyContent:
            "center",

          marginTop: "30px",

          padding:
            "0 20px",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search healthy meals..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          style={{
            width: "100%",

            maxWidth:
              "500px",

            padding:
              "14px 18px",

            borderRadius:
              "12px",

            border:
              "1px solid #334155",

            background:
              theme.backgroundSecondary,

            color:
              theme.text,

            fontSize:
              "16px",

            outline:
              "none",
          }}
        />
      </div>

      {/* Heading */}

      <h2
        style={{
          textAlign:
            "center",

          color:
            theme.text,

          marginTop:
            "50px",

          marginBottom:
            "20px",

          fontSize:
            "32px",
        }}
      >
        Explore Our Menu 🍱
      </h2>

      {/* Categories */}

      <div
        style={{
          display: "flex",

          justifyContent:
            "center",

          gap: "18px",

          marginTop:
            "20px",

          marginBottom:
            "30px",

          flexWrap:
            "wrap",

          padding:
            "0 20px",
        }}
      >
        {[
          {
            name: "All",
            icon: "🍽️",
          },
          {
            name: "Meals",
            icon: "🍛",
          },
          {
            name: "Snacks",
            icon: "🥜",
          },
          {
            name: "Sweets",
            icon: "🍰",
          },
          {
            name: "Drinks",
            icon: "🥤",
          },
        ].map((item) => (
          <button
            key={item.name}
            onClick={() =>
              setCategory(
                item.name
              )
            }
            style={{
              background:
                category ===
                item.name
                  ? "linear-gradient(135deg,#22C55E,#16A34A)"
                  : theme.backgroundSecondary,

              color:
                theme.text,

              border:
                category ===
                item.name
                  ? "none"
                  : "1px solid #334155",

              padding:
                "12px 22px",

              borderRadius:
                "999px",

              cursor:
                "pointer",

              fontSize:
                "15px",

              fontWeight:
                "600",

              transition:
                "0.3s",

              boxShadow:
                category ===
                item.name
                  ? "0 10px 25px rgba(34,197,94,0.25)"
                  : "none",
            }}
          >
            {item.icon}
            {" "}
            {item.name}
          </button>
        ))}
      </div>

      {/* Menu */}

      <Menu
        foods={
          filteredFoods
        }
        addToCart={
          handleAddToCart
        }
      />

      {/* Floating Cart */}

      <button
        onClick={() =>
          setCartOpen(true)
        }
        style={{
          position:
            "fixed",

          bottom:
            "25px",

          right:
            "25px",

          background:
            "linear-gradient(135deg,#22C55E,#16A34A)",

          color:
            "white",

          border:
            "none",

          borderRadius:
            "20px",

          padding:
            "14px 20px",

          display:
            "flex",

          alignItems:
            "center",

          gap: "12px",

          cursor:
            "pointer",

          boxShadow:
            "0 10px 30px rgba(34,197,94,0.35)",

          backdropFilter:
            "blur(20px)",

          zIndex: 999,
        }}
      >
        <div
          style={{
            fontSize:
              "22px",
          }}
        >
          🛒
        </div>

        <div>
          <div
            style={{
              fontSize:
                "12px",
            }}
          >
            Your Cart
          </div>

          <div
            style={{
              fontWeight:
                "700",
            }}
          >
            {totalItems}
            {" "}
            Items • ₹
            {cartTotal}
          </div>
        </div>
      </button>

      <Footer />
    </div>
  );
}

export default Home;