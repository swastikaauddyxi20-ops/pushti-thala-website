function Toast({ message }) {
  if (!message) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "90px",
        right: "20px",

        background: "#22C55E",
        color: "white",

        padding: "15px 20px",

        borderRadius: "12px",

        boxShadow:
          "0 10px 25px rgba(0,0,0,0.25)",

        zIndex: 9999,

        fontWeight: "600",

        animation: "slideIn 0.3s ease",
      }}
    >
      ✅ {message}
    </div>
  );
}

export default Toast;