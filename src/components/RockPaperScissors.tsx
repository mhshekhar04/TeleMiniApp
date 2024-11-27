import { useState } from "react";
import {
  ConnectButton,
  useActiveAccount,
  useDisconnect,
  useActiveWallet,
} from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";
import { client } from "../client";

export default function WalletApp() {
  const account = useActiveAccount();
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();

  const coins = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      balance: "0.1584 BTC",
      usdValue: "$10,741.57",
      percentage: "73%",
      icon: "🪙",
    },
    {
      name: "Binance Coin",
      symbol: "BNB",
      balance: "33 BNB",
      usdValue: "$21,219",
      percentage: "44%",
      icon: "🔶",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      balance: "1 ETH",
      usdValue: "$4,809.91",
      percentage: "14%",
      icon: "💎",
    },
    {
      name: "Litecoin",
      symbol: "LTC",
      balance: "4 LTC",
      usdValue: "$160",
      percentage: "5%",
      icon: "⚡",
    },
    {
      name: "XRP",
      symbol: "XRP",
      balance: "1000 XRP",
      usdValue: "$1,240",
      percentage: "1%",
      icon: "🌊",
    },
  ];

  const [activeTab, setActiveTab] = useState("Coins");

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f9f9f9",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {!account ? (
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1e88e5",
            color: "white",
          }}
        >
          <ConnectButton
            client={client} 
            style={{
              padding: "1rem 2rem",
              backgroundColor: "#4caf50",
              border: "none",
              borderRadius: "8px",
              color: "white",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          />
        </div>
      ) : (
        <>
          {/* Header */}
          <div
            style={{
              backgroundColor: "#1e88e5",
              color: "white",
              padding: "1.5rem 1rem",
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: "2.5rem", margin: 0 }}>$5730</h1>
              <button
                onClick={() => disconnect(wallet!)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              >
                ⚙️
              </button>
            </div>
            <p style={{ margin: "0.5rem 0", fontSize: "1.2rem", color: "#d8e9f3" }}>
              {shortenAddress(account.address)}
            </p>
            {/* Quick Actions */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "1rem",
              }}
            >
              {["Send", "Receive", "Buy", "Trade"].map((action) => (
                <button
                  key={action}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.75rem",
                    background: "#ffffff22",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "1rem",
                    cursor: "pointer",
                    width: "70px",
                    height: "70px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {action === "Send"
                    ? "📤"
                    : action === "Receive"
                    ? "📥"
                    : action === "Buy"
                    ? "🛒"
                    : "🔄"}
                  <span style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
                    {action}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div
            style={{
              flex: 1,
              padding: "1rem",
              overflowY: "auto",
            }}
          >
            {/* Tabs */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "1rem",
                backgroundColor: "#fff",
                borderRadius: "8px",
                padding: "0.5rem",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              {["Coins", "NFTs"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    flex: 1,
                    padding: "0.5rem",
                    background: activeTab === tab ? "#1e88e5" : "white",
                    color: activeTab === tab ? "white" : "#1e88e5",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow:
                      activeTab === tab ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Coins List */}
            {activeTab === "Coins" && (
              <div>
                {coins.map((coin) => (
                  <div
                    key={coin.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      marginBottom: "1rem",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span style={{ fontSize: "2rem" }}>{coin.icon}</span>
                      <div>
                        <p style={{ margin: 0, fontWeight: "bold", fontSize: "1.2rem" }}>
                          {coin.name}
                        </p>
                        <p style={{ margin: 0, fontSize: "0.875rem", color: "#666" }}>
                          {coin.balance}
                        </p>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ margin: 0, fontWeight: "bold", fontSize: "1.2rem" }}>
                        {coin.usdValue}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.875rem",
                          color: coin.percentage.startsWith("-")
                            ? "#ff6f61"
                            : "#28a745",
                        }}
                      >
                        {coin.percentage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* NFTs Tab (Placeholder) */}
            {activeTab === "NFTs" && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  color: "#666",
                }}
              >
                <p>No NFTs to display.</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <footer
            style={{
              height: "70px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "#fff",
              borderTop: "1px solid #e0e0e0",
              boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {["Wallet", "Discover", "Settings"].map((tab) => (
              <button
                key={tab}
                style={{
                  flex: 1,
                  textAlign: "center",
                  background: "none",
                  border: "none",
                  padding: "0.5rem",
                  fontSize: "1rem",
                  cursor: "pointer",
                  color: "#1e88e5",
                }}
              >
                {tab === "Wallet" ? "💼" : tab === "Discover" ? "🔍" : "⚙️"}
                <p style={{ margin: 0, fontSize: "0.75rem" }}>{tab}</p>
              </button>
            ))}
          </footer>
        </>
      )}
    </div>
  );
}
