// src/components/AddSale.jsx
import React, { useState } from "react";
import axios from "axios";

function AddSale() {
  const [msg, setMsg] = useState(null);
  const [sale, setSale] = useState({
    id: 0,
    customer: '',
    oilType: '',
    liters: 0,
    pricePerLiter: 0,
    date: ''
  });

  const handlePost = async () => {
    try {
      const resp = await axios.post("http://localhost:3000/sales", sale);
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg(e.response?.data?.msg || e.message);
      console.log(e);
    }
  };

  return (
    <>
      <h1>Add New Sale</h1>

      <input type="number"
        value={sale.id}
        onChange={(e) => setSale({ ...sale, id: parseInt(e.target.value) || 0 })}
        placeholder="Sale ID"
      />
      <input
        type="text"
        value={sale.customer}
        onChange={(e) => setSale({ ...sale, customer: e.target.value })}
        placeholder="Customer"
      />
      <input
        type="text"
        value={sale.oilType}
        onChange={(e) => setSale({ ...sale, oilType: e.target.value })}
        placeholder="Oil Type (e.g., Diesel)"
      />
      <input
        type="number"
        value={sale.liters}
        onChange={(e) => setSale({ ...sale, liters: parseFloat(e.target.value) || 0 })}
        placeholder="Liters"
      />
      <input
        type="number"
        value={sale.pricePerLiter}
        onChange={(e) => setSale({ ...sale, pricePerLiter: parseFloat(e.target.value) || 0 })}
        placeholder="Price per liter"
      />
      <input
        type="date"
        value={sale.date}
        onChange={(e) => setSale({ ...sale, date: e.target.value })}
      />

      <button onClick={handlePost}>Add Sale</button>
      {msg && <p>{msg}</p>}
    </>
  );
}

export default AddSale;
