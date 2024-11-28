import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        background: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Top Gradient Section */}
      <div
        style={{
          width: "100%",
          height: "256px",
          borderRadius: "0px 0px 90px 90px",
          background:
            "linear-gradient(269deg, #0DCAF0 32.86%, #27D07D 85.61%), #D9D9D9",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* User Info */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            color: "#FFF",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: "500",
              marginLeft: "10px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "200px",
            }}
          >
            34frtgyuihgfh...
          </p>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "600",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            Ellen Halen
          </h3>
          <button
            style={{
              background: "#FFF",
              color: "#0DCAF0",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>

        {/* Card Section */}
        <div
  style={{
    background: "linear-gradient(102deg, #11CBDE -10.42%, #00256C 108.32%)",
    borderRadius: "20px",
    display: "flex", 
    width: "255px",
    padding: "18px 23px", 
    flexDirection: "column", 
    alignItems: "flex-start", 
    gap: "40px",
    height: "130px",
    color: "#FFF",
    justifyContent: "space-between",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  }}
>

<p
  style={{
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "26px", // 162.5%
  }}
>
  Virtue Balance:
</p>

          <h1
            style={{
              fontSize: "24px",
              fontWeight: "700",
              margin: "0 0 10px 0",
            }}
          >
            $5,890.00
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "14px", fontWeight: "400" }}>Visa</p>
            <p style={{ fontSize: "14px", fontWeight: "400" }}>
              2342 2212 **** ****
            </p>
          </div>
        </div>
      </div>

      {/* Transactions Section */}
      <div
        style={{
          width: "90%",
          marginTop: "20px",
          marginBottom: "50px",
        }}
      >
        <h3 style={{ marginBottom: "10px", fontSize: "16px" }}>Transactions</h3>
        <div
          style={{
            background: "#FFF",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "15px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontSize: "14px", marginBottom: "5px" }}>
              Walk not completed
            </p>
            <p style={{ fontSize: "12px", color: "#797979" }}>Dec 15, 2023</p>
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#FF0000",
              fontWeight: "600",
            }}
          >
            - £199
          </p>
        </div>

        <div
          style={{
            background: "#FFF",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "15px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontSize: "14px", marginBottom: "5px" }}>Gym for 2 hours</p>
            <p style={{ fontSize: "12px", color: "#797979" }}>Feb 12, 2024</p>
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#28A745",
              fontWeight: "600",
            }}
          >
            + £1445.90
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#FFF",
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        {["Home", "Events", "Settings"].map((item) => (
          <div
            key={item}
            style={{
              textAlign: "center",
              fontSize: "14px",
              color: "#007BFF",
              cursor: "pointer",
            }}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
