// src/components/DeleteSale.jsx
import React, { useState } from "react";
import axios from "axios";

function DeleteSale() {
  const [msg, setMsg] = useState(null);
  const [saleId, setSaleId] = useState(0);

  const handleDelete = async () => {
    try {
      const resp = await axios.delete(`https://assignment-backend-1-xe8n.onrender.com/sales/${saleId}`);
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg(e.response?.data?.msg || e.message);
      console.log(e);
    }
  };

  return (
    <>
      <h1>Delete Sale</h1>
      <input
        type="number"
        value={saleId}
        onChange={(e) => setSaleId(parseInt(e.target.value) || 0)}
        placeholder="Sale ID"
      />
      <button onClick={handleDelete}>Delete</button>
      {msg && <p>{msg}</p>}
    </>
  );
}

export default DeleteSale;
