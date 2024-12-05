import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cloud1 from "../assets/Cloud1.svg";
import Shadow from "../assets/shadow.svg";
import Cloud2 from "../assets/Cloud2.svg";
import Cloud3 from "../assets/Cloud3.svg";
import Video from "../assets/video.mp4";
import { ethers } from "ethers";
import { Keypair } from "@solana/web3.js";

export default function Verification() {
  const [passportNumber, setPassportNumber] = useState("");
  const [confirmPassportNumber, setConfirmPassportNumber] = useState("");
  const [passportPhoto, setPassportPhoto] = useState<File | null>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPassportPhoto(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (passportNumber !== confirmPassportNumber) {
      setError("Passport numbers do not match!");
      return;
    }
    if (!passportPhoto) {
      setError("Please upload your passport photo!");
      return;
    }
    setError("");

    // Generate Solana Address
    const solanaKeypair = Keypair.generate();
    const solanaWallet = {
      address: solanaKeypair.publicKey.toString(),
      privateKey: Buffer.from(solanaKeypair.secretKey).toString("hex"),
    };

    console.log("solanaWallet",solanaWallet);
    

    // Generate EVM Address
    const wallet = ethers.Wallet.createRandom();
    const evmWallet = {
      address: wallet.address,
      privateKey: wallet.privateKey,
    };

    console.log("evm",evmWallet);
    

    navigate("/MainPage", {
      state: {
        solanaWallet,
        evmWallet,
      },
    });
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "97vh",
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
          position: "relative",
        }}
      >
        {/* Cloud1 */}
        <img
          src={Cloud1}
          alt="Cloud1"
          style={{
            width: "282.731px",
            height: "172.418px",
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        {/* Video Inside Cloud */}
        <video
          src={Video}
          autoPlay
          loop
          muted
          style={{
            width: "180px",
            height: "auto",
            position: "absolute",
            top: "50px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            borderRadius: "15px",
          }}
        ></video>

        {/* Shadow */}
        <img
          src={Shadow}
          alt="Shadow"
          style={{
            width: "168.098px",
            height: "18.678px",
            position: "absolute",
            top: "180px",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.15,
          }}
        />

        {/* Cloud2 */}
        <img
          src={Cloud2}
          alt="Cloud2"
          style={{
            width: "41.091px",
            height: "40.468px",
            position: "absolute",
            top: "170px",
            left: "20%",
          }}
        />
        {/* Cloud3 */}
        <img
          src={Cloud3}
          alt="Cloud3"
          style={{
            width: "17.432px",
            height: "17.432px",
            position: "absolute",
            top: "200px",
            left: "17%",
          }}
        />
      </div>

      {/* Verification Text */}
      <h2
        style={{
          color: "#474F62",
          fontSize: "28px",
          fontWeight: 700,
          marginTop: "30px",
          marginBottom: "20px",
        }}
      >
        Passport Verification
      </h2>

      {/* Passport Number Input */}
      <input
        type="text"
        placeholder="Passport Number"
        value={passportNumber}
        onChange={(e) => setPassportNumber(e.target.value)}
        style={{
          width: "236px",
          height: "49px",
          borderRadius: "12px",
          background: "#FFF",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          color: "#797979",
          fontSize: "14px",
          fontWeight: 400,
          padding: "0 15px",
          marginBottom: "20px",
          border: "none",
        }}
      />

      {/* Confirm Passport Number Input */}
      <input
        type="text"
        placeholder="Confirm Passport Number"
        value={confirmPassportNumber}
        onChange={(e) => setConfirmPassportNumber(e.target.value)}
        style={{
          width: "236px",
          height: "49px",
          borderRadius: "12px",
          background: "#FFF",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          color: "#797979",
          fontSize: "14px",
          fontWeight: 400,
          padding: "0 15px",
          marginBottom: "20px",
          border: "none",
        }}
      />

      {/* Upload Passport Photo */}
      <label
        style={{
          width: "236px",
          height: "49px",
          borderRadius: "12px",
          background: "#474F62",
          color: "#FFF",
          fontSize: "14px",
          fontWeight: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Upload your Passport Photo
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
      </label>

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

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        style={{
          width: "236px",
          height: "45px",
          borderRadius: "30px",
          background:
            "linear-gradient(269deg, #0DCAF0 32.86%, #27D07D 85.61%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          color: "#FFF",
          fontSize: "18px",
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
}
