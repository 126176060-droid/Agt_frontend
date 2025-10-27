// components/Home.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [sales, setSales] = useState(null);
  const [error, setError] = useState(null);

  const loadSales = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/sales");
      setSales(resp.data);
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
  };

  useEffect(() => {
    loadSales();
  }, []);

  return (
    <>
      <h1>Sales List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {sales && sales.length > 0 ? (
        sales.map((s) => (
          <div key={s.id} style={{ marginBottom: "12px", padding: "8px", border: "1px solid #ddd" }}>
            <strong>Sale ID:</strong> {s.id} <br />
            <strong>Product:</strong> {s.product} <br />
            <strong>Volume (L):</strong> {s.volume} — <strong>Price/L:</strong> {s.pricePerLiter} <br />
            <strong>Total:</strong> {(s.volume * s.pricePerLiter).toFixed(2)} <br />
            <strong>Customer:</strong> {s.customer || "—"} <br />
            <strong>Date:</strong> {new Date(s.saleDate).toLocaleString()}
          </div>
        ))
      ) : (
        <h2>No sales loaded</h2>
      )}
    </>
  );
}

export default Home;
