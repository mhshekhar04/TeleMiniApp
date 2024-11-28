import { useState, } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateLogin = () => {
    if (email === "test@gmail.com" && password === "test") {
      setError(""); // Clear the error message on successful login
      navigate("/MainPage"); // Redirect to MainPage
    } else {
      setError("Invalid email or password!"); // Set error message
    }
  };
  
  

  if (isLoggedIn) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <h1>Welcome to the Dashboard</h1>
      </div>
    );
  }

  return (
    
    <div
    style={{
      width: "100%",
      minHeight: "97vh", // Ensures background color covers full height and grows with content
      fontFamily: "Inter, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#f9f9f9",
    }}
  >
  
      {/* Top Section with Image */}
      <div
        style={{
          width: "100%",
          height: "246px",
          flexShrink: 0,
          borderRadius: "0px 0px 90px 90px",
          background:
            "linear-gradient(269deg, #0DCAF0 32.86%, #27D07D 85.61%), #D9D9D9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "256px",
            flexShrink: 0,
            borderRadius: "0px 0px 90px 90px",
            background:
              "linear-gradient(269deg, #0DCAF0 32.86%, #27D07D 85.61%), #D9D9D9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative", // Allow positioning of images
          }}
        >
          {/* Cloud1 */}
          <img
            src="./src/assets/Cloud1.svg"
            alt="Cloud1"
            style={{
              width: "100%",
              height: "152.418px",
              position: "absolute",
              top: "20px", // Adjust position as needed
              left: "50%",
              transform: "translateX(-50%)",
              fill: "#F5F5F5",
            }}
          />

          {/* Shadow */}
          <img
            src="./src/assets/shadow.svg"
            alt="Shadow"
            style={{
              width: "138.098px",
              height: "18.678px",
              position: "absolute",
              top: "210px", // Adjust position to align with Cloud1
              left: "50%",
              transform: "translateX(-50%)",
              fill: "#45413C",
              opacity: 1,
            }}
          />

          {/* Cloud2 */}
          <img
            src="./src/assets/Cloud2.svg"
            alt="Cloud2"
            style={{
              width: "41.091px",
              height: "40.468px",
              position: "absolute",
              top: "150px", // Adjust position as needed
              left: "24%",
            }}
          />

          {/* Cloud3 */}
          <img
            src="./src/assets/Cloud3.svg"
            alt="Cloud3"
            style={{
              width: "17.432px",
              height: "17.432px",
              position: "absolute",
              top: "190px", // Adjust position as needed
              left: "22%",
              fill: "#F5F5F5",
              stroke: "#45413C",
              strokeWidth: "1px",
            }}
          />
        </div>


      </div>

      {/* Login Text */}
      <h2
        style={{
          color: "#474F62",
          fontSize: "28px",
          fontWeight: 700,
          marginTop: "30px",
          marginBottom: "20px",
        }}
      >
        Login
      </h2>

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          // width: "80%",
          width: "236px",
          height: "49px",
          flexShrink: 0,
          borderRadius: "12px",
          background: "#FFF",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          color: "#797979",
          fontSize: "14px",
          fontWeight: 400,
          letterSpacing: "0.14px",
          padding: "0 15px",
          marginBottom: "20px",
          border: "none",
        }}
      />

    {/* Password Input */}
<input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  style={{
    width: "236px",
    height: "49px",
    flexShrink: 0,
    borderRadius: "12px",
    background: "#FFF",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    color: "#797979",
    fontSize: "14px",
    fontWeight: 400,
    letterSpacing: "0.14px",
    padding: "0 15px",
    marginBottom: "10px",
    border: "none",
  }}
/>

{/* Error Message */}
{error && (
  <p
    style={{
      color: "red",
      fontSize: "12px",
      fontWeight: "400",
      marginBottom: "20px",
    }}
  >
    {error}
  </p>
)}

      {/* Login Button */}
      <button
        onClick={validateLogin}
        style={{
          width: "80%",
          height: "45px",
          flexShrink: 0,
          borderRadius: "30px",
          background:
            "linear-gradient(269deg, #0DCAF0 32.86%, #27D07D 85.61%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          color: "#FFF",
          fontSize: "18px",
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
          marginTop:"15px"
        }}
      >
        Login
      </button>

      {/* Don't Have an Account Text */}
      <p
        style={{
          color: "#000",
          fontSize: "14px",
          fontWeight: 400,
          letterSpacing: "0.14px",
          marginBottom: "5px",
        }}
      >
        Don’t have an account?
      </p>

      {/* Signup Link */}
      <a
        href="#signup"
        style={{
          color: "rgba(48, 95, 217, 0.87)",
          fontSize: "14px",
          fontWeight: 400,
          textDecoration: "underline",
        }}
      >
        Sign up
      </a>
    </div>
    
  );
}
