// src/components/UpdateSale.jsx
import React, { useState } from "react";
import axios from "axios";

function UpdateSale() {
  const [msg, setMsg] = useState(null);
  const [sale, setSale] = useState({
    id: 0,
    customer: '',
    oilType: '',
    liters: '',
    pricePerLiter: '',
    date: ''
  });

  const handlePut = async () => {
    try {
      // only send the fields the user filled in (except id)
      const body = {};
      if (sale.customer) body.customer = sale.customer;
      if (sale.oilType) body.oilType = sale.oilType;
      if (sale.liters !== '') body.liters = parseFloat(sale.liters);
      if (sale.pricePerLiter !== '') body.pricePerLiter = parseFloat(sale.pricePerLiter);
      if (sale.date) body.date = sale.date;

      const resp = await axios.put(`http://localhost:3000/sales/${sale.id}`, body);
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg(e.response?.data?.msg || e.message);
      console.log(e);
    }
  };

  return (
    <>
      <h1>Update Sale</h1>

      <input
        type="number"
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
        placeholder="Oil Type"
      />
      <input
        type="number"
        value={sale.liters}
        onChange={(e) => setSale({ ...sale, liters: e.target.value })}
        placeholder="Liters"
      />
      <input
        type="number"
        value={sale.pricePerLiter}
        onChange={(e) => setSale({ ...sale, pricePerLiter: e.target.value })}
        placeholder="Price per liter"
      />
      <input
        type="date"
        value={sale.date}
        onChange={(e) => setSale({ ...sale, date: e.target.value })}
      />

      <button onClick={handlePut}>Update</button>
      {msg && <p>{msg}</p>}
    </>
  );
}

export default UpdateSale;
