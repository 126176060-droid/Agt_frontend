// src/components/SalesList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function SalesList() {
  const [data, setData] = useState(null);
  const [msg, setMsg] = useState(null);

  const handleGet = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/sales");
      setData(resp.data);
    } catch (e) {
      setMsg(e.message);
      console.log(e);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      <h1>Oil Sales List</h1>
      {data && data.length > 0 ? (
        data.map((d) => (
          <div key={d.id} style={{border:"1px solid #ddd", margin:8, padding:8}}>
            <h3>Sale ID: {d.id}</h3>
            <p>Customer: {d.customer}</p>
            <p>Oil Type: {d.oilType}</p>
            <p>Liters: {d.liters}</p>
            <p>Price / L: {d.pricePerLiter}</p>
            <p>Date: {d.date}</p>
          </div>
        ))
      ) : (
        <h2>No sales found</h2>
      )}

      {msg && <p>{msg}</p>}
    </>
  );
}

export default SalesList;
