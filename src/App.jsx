import { useState } from "react";
import { Header } from "./Components/Header";
import { LogIn } from "./Pages/LogIn";
import Home from "./Pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100">
        {/* header is on evry pages */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
