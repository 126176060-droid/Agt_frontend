// src/App.js
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import Update from "./components/Update";
import Delete from "./components/Delete";

function App() {
  return (
      <div style={{ padding: 20 }}>
        <h1>Oil Sales Management</h1>

        <nav style={{ display: "flex", gap: "20px", marginBottom: 20 }}>
          <Link to="/">Sales</Link>
          <Link to="/add">Add Sale</Link>
          <Link to="/update">Update Sale</Link>
          <Link to="/delete">Delete Sale</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
  );
}

export default App;
