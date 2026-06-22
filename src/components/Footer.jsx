import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

import {
  darkTheme,
  lightTheme,
  gradients,
} from "../styles/theme";

function Footer() {
  const { darkMode } = useTheme();

  const theme = darkMode
    ? darkTheme
    : lightTheme;

  return (
    <footer
      style={{
        marginTop: "80px",

        background:
          theme.backgroundSecondary,

        borderTop:
          `1px solid ${theme.border}`,

        padding:
          "60px 40px 30px",

        color: theme.text,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",

          gap: "40px",
        }}
      >
        <div>
          <h2
            style={{
              marginTop: 0,

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

          <p
            style={{
              color:
                theme.textSecondary,
            }}
          >
            Healthy Bengali meals
            delivered fresh to your
            doorstep.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <FooterLink
            to="/"
            text="Home"
            theme={theme}
          />

          <FooterLink
            to="/orders"
            text="Orders"
            theme={theme}
          />

          <FooterLink
            to="/profile"
            text="Profile"
            theme={theme}
          />
        </div>

        <div>
          <h3>Contact</h3>

          <p
            style={{
              color:
                theme.textSecondary,
            }}
          >
            📧 support@pushtithala.com
          </p>

          <p
            style={{
              color:
                theme.textSecondary,
            }}
          >
            📞 +91 98765 43210
          </p>

          <p
            style={{
              color:
                theme.textSecondary,
            }}
          >
            📍 Kolkata, India
          </p>
        </div>

        <div>
          <h3>Follow Us</h3>

          <div
            style={{
              display: "flex",
              gap: "15px",
            }}
          >
            <SocialIcon theme={theme}>
              📘
            </SocialIcon>

            <SocialIcon theme={theme}>
              📷
            </SocialIcon>

            <SocialIcon theme={theme}>
              🐦
            </SocialIcon>

            <SocialIcon theme={theme}>
              ▶️
            </SocialIcon>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop:
            `1px solid ${theme.border}`,

          marginTop: "40px",

          paddingTop: "25px",

          textAlign: "center",

          color:
            theme.textSecondary,
        }}
      >
        © {new Date().getFullYear()} Pushti Thala. All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterLink({
  to,
  text,
  theme,
}) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <Link
        to={to}
        style={{
          color:
            theme.textSecondary,

          textDecoration:
            "none",
        }}
      >
        {text}
      </Link>
    </div>
  );
}

function SocialIcon({
  children,
  theme,
}) {
  return (
    <div
      style={{
        width: "45px",
        height: "45px",

        borderRadius: "50%",

        background:
          theme.card,

        border:
          `1px solid ${theme.border}`,

        display: "flex",

        justifyContent:
          "center",

        alignItems:
          "center",

        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
}

export default Footer;