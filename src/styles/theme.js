export const colors = {
  primary: "#22C55E",
  primaryDark: "#16A34A",

  background: "#020617",
  backgroundSecondary: "#0F172A",

  card: "rgba(30,41,59,0.75)",

  text: "#F8FAFC",
  textSecondary: "#94A3B8",

  border: "rgba(255,255,255,0.08)",

  danger: "#EF4444",
};

export const shadows = {
  card:
    "0 25px 50px rgba(0,0,0,0.4)",

  glow:
    "0 0 30px rgba(34,197,94,0.35)",

  button:
    "0 15px 35px rgba(34,197,94,0.3)",
};

export const gradients = {
  primary:
    "linear-gradient(135deg,#22C55E,#16A34A)",

  background:
    "linear-gradient(135deg,#020617,#0F172A,#111827)",

  success:
    "linear-gradient(135deg,#22C55E,#16A34A)",
};

export const darkTheme = {
  primary: "#22C55E",

  background: "#020617",

  backgroundSecondary: "#0F172A",

  card: "rgba(30,41,59,0.75)",

  text: "#F8FAFC",

  textSecondary: "#94A3B8",

  border:
    "rgba(255,255,255,0.08)",

  pageBackground: `
    radial-gradient(
      circle at top left,
      rgba(34,197,94,0.15),
      transparent 35%
    ),

    radial-gradient(
      circle at bottom right,
      rgba(34,197,94,0.08),
      transparent 35%
    ),

    #020617
  `,
};

export const lightTheme = {
  primary: "#16A34A",

  background: "#F8FAFC",

  backgroundSecondary: "#FFFFFF",

  card: "#FFFFFF",

  text: "#0F172A",

  textSecondary: "#64748B",

  border: "#E2E8F0",

  pageBackground: `
    radial-gradient(
      circle at top left,
      rgba(34,197,94,0.08),
      transparent 35%
    ),

    radial-gradient(
      circle at bottom right,
      rgba(34,197,94,0.05),
      transparent 35%
    ),

    #F8FAFC
  `,
};

export const glassCard = {
  background:
    "rgba(30,41,59,0.75)",

  backdropFilter:
    "blur(20px)",

  border:
    "1px solid rgba(255,255,255,0.08)",

  boxShadow:
    "0 25px 50px rgba(0,0,0,0.4)",

  borderRadius: "24px",
};

export const buttonStyles = {
  primary: {
    background:
      "linear-gradient(135deg,#22C55E,#16A34A)",

    color: "white",

    border: "none",

    borderRadius: "12px",

    padding: "14px 24px",

    fontWeight: "600",

    cursor: "pointer",

    boxShadow:
      "0 15px 35px rgba(34,197,94,0.3)",
  },
};