import { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import { LogIn } from "./Pages/LogIn";
import { Post } from "./Post";
import Home from "./Pages/Home";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { selectUser } from "./slices/userSlice";
import { useSelector } from "react-redux";
import { useAuth } from "./hooks/useAuth";
function App() {
  //listen authentication state
  useAuth();
  const user = useSelector(selectUser);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100">
        {/* header is on evry pages */}
        <Header />
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />

          <Route path="/login" element={<LogIn />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
