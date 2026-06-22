import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      const user = {
        name,
        email,
        password,
        joinedAt: new Date().toLocaleDateString(),
      };

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      login(user);

      alert("Signup Successful!");

      navigate("/");
    } else {
      const savedUser = JSON.parse(
        localStorage.getItem("user")
      );

      if (
        savedUser &&
        savedUser.email === email &&
        savedUser.password === password
      ) {
        login(savedUser);

        alert("Login Successful!");

        navigate("/");
      } else {
        alert("Invalid Email or Password");
      }
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "#2E7D32",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020B2D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#1f2937",
          padding: "40px",
          borderRadius: "15px",
          width: "350px",
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          {isSignup ? "Signup" : "Login"}
        </h1>

        {isSignup && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          {isSignup ? "Signup" : "Login"}
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
            cursor: "pointer",
          }}
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Signup"}
        </p>
      </form>
    </div>
  );
}

export default Login;