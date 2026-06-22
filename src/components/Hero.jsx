import { useTheme } from "../context/ThemeContext";
import {
  darkTheme,
  lightTheme,
  gradients,
} from "../styles/theme";

import { useState } from "react";
import heroVideo from "../assets/videos/hero-food.mp4";
import { motion } from "framer-motion";

function Hero() {
  const { darkMode } = useTheme();

  const theme = darkMode
    ? darkTheme
    : lightTheme;

    const [exploreHover, setExploreHover] =
  useState(false);

const [explorePressed, setExplorePressed] =
  useState(false);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "70vh",
display: "flex",
alignItems: "center",
justifyContent: "center",
padding: "80px 20px",
        textAlign: "center",
        color: theme.text,
      }}
    >
      {/* Background Video */}

<video
  autoPlay
  muted
  loop
  playsInline
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  }}
>
  <source src={heroVideo} type="video/mp4" />
</video>
<div
  style={{
    position: "absolute",
    inset: 0,

    background: darkMode
      ? "rgba(2,6,23,0.78)"
      : "rgba(255,255,255,0.80)",

    zIndex: 1,
  }}
/>

      <div
  style={{
    position: "absolute",
    width: "700px",
    height: "700px",

    background:
      "rgba(34,197,94,0.15)",

    borderRadius: "50%",

    filter: "blur(180px)",

    top: "-250px",
    left: "-250px",

    zIndex: 1,
  }}
/>

      <div
  style={{
    position: "absolute",
    width: "600px",
    height: "600px",

    background:
      "rgba(34,197,94,0.10)",

    borderRadius: "50%",

    filter: "blur(180px)",

    bottom: "-250px",
    right: "-250px",

    zIndex: 1,
  }}
/>

      <motion.div
  initial={{
    opacity: 0,
    y: 50,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
  }}
  style={{
    position: "relative",
    zIndex: 3,
    maxWidth: "1100px",
    margin: "auto",
  }}
>
        <div
          style={{
            display: "inline-block",
            padding: "12px 20px",
            borderRadius: "999px",
            background: "rgba(34,197,94,0.12)",
            border: "1px solid rgba(34,197,94,0.25)",
            color: theme.primary,
            fontWeight: "600",
            marginBottom: "30px",
          }}
        >
          🌿 Bengal's Healthy Food Platform
        </div>

        <h1
          style={{
            fontSize: "72px",
            textShadow: darkMode
  ? "0 4px 30px rgba(0,0,0,0.5)"
  : "0 4px 20px rgba(255,255,255,0.4)",
            fontWeight: "800",
            lineHeight: "1.1",
            marginBottom: "25px",
            color: theme.text,
          }}
        >
          Eat Healthy.
          <br />
          Live Better.
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            fontSize: "20px",
            color: theme.textSecondary,
            lineHeight: "1.8",
          }}
        >
          Fresh Bengali meals,
          protein-rich snacks,
          healthy sweets and drinks
          delivered to your doorstep.
        </p>

        <div
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  }}
>
  <button
  onMouseEnter={() =>
    setExploreHover(true)
  }
  onMouseLeave={() => {
    setExploreHover(false);
    setExplorePressed(false);
  }}
  onMouseDown={() =>
    setExplorePressed(true)
  }
  onMouseUp={() =>
    setExplorePressed(false)
  }
  onClick={() => {
    document
      .getElementById(
        "category-section"
      )
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }}
  style={{
    background:
      "linear-gradient(135deg,#22C55E,#16A34A)",

    color: "#FFFFFF",

    border: "none",

    padding: "16px 36px",

    borderRadius: "16px",

    cursor: "pointer",

    fontWeight: "700",

    fontSize: "16px",

    transition: "all 0.25s ease",

    transform: explorePressed
      ? "scale(0.95)"
      : exploreHover
      ? "translateY(-4px) scale(1.03)"
      : "translateY(0) scale(1)",

    boxShadow: exploreHover
      ? "0 20px 45px rgba(34,197,94,0.18)"
      : "0 15px 35px rgba(34,197,94,0.12)",
  }}
>
  Explore Menu ✨
</button>
</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              window.innerWidth < 768
              ? "repeat(2,1fr)"
              : "repeat(4,1fr)",
            gap: "25px",
            maxWidth: "1200px",
            margin: "60px auto 0",
            marginTop: "80px",
          }}
        >
          <Stat
            value="10K+"
            label="Orders Delivered"
            theme={theme}
            darkMode={darkMode}
          />

          <Stat
            value="5K+"
            label="Happy Customers"
            theme={theme}
            darkMode={darkMode}
          />

          <Stat
            value="50+"
            label="Healthy Meals"
            theme={theme}
            darkMode={darkMode}
          />

          <Stat
            value="4.9★"
            label="Customer Rating"
            theme={theme}
            darkMode={darkMode}
          />
        </div>
      </motion.div>
      
    </section>
  );
}

function Stat({
  value,
  label,
  theme,
  darkMode,
}) {
  return (
    <motion.div
  whileHover={{
    y: -8,
    scale: 1.04,
  }}
  transition={{
    duration: 0.25,
  }}
  style={{
        background: theme.card,
        border: `1px solid ${theme.border}`,
        borderRadius: "24px",
        padding: "25px",
        color: theme.text,
        boxShadow: darkMode
          ? "0 15px 35px rgba(0,0,0,0.35)"
          : "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <motion.h2
  initial={{
    opacity: 0,
    scale: 0.8,
  }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 0.5,
  }}
  style={{
    color: theme.primary,
    marginBottom: "10px",
  }}
>
  {value}
</motion.h2>

      <p
        style={{
          color: theme.textSecondary,
          margin: 0,
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}

export default Hero;