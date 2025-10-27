// App.js
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Add from "./components/Add.jsx";
import Update from "./components/Update.jsx";
import Delete from "./components/Delete.jsx";

function App() {
  return (
    <>
      <h1>Oil Sales Management</h1>

      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to="/">Load Sales</Link>
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
    </>
  );
}

export default App;
