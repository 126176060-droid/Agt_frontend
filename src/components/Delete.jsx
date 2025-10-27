// components/Delete.jsx
import React, { useState } from "react";
import axios from "axios";

function Delete() {
  const [id, setId] = useState("");
  const [msg, setMsg] = useState(null);

  const handleDelete = async () => {
    if (!id) {
      setMsg("Please provide Sale ID to delete");
      return;
    }
    try {
      const resp = await axios.delete(`http://localhost:3000/sales/${id}`);
      setMsg(resp.data.msg || "Sale deleted");
      setId("");
    } catch (e) {
      console.error(e);
      setMsg(e.response?.data?.msg || e.message);
    }
  };

  return (
    <>
      <h1>Delete Sale</h1>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Sale ID"
      />
      <br />
      <button onClick={handleDelete}>Delete</button>
      {msg && <p>{msg}</p>}
    </>
  );
}

export default Delete;
