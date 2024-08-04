import { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import { LogIn } from "./Pages/LogIn";
import Home from "./Pages/Home";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./slices/userSlice";

import { login } from "./slices/userSlice";
import { logout } from "./slices/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  //listen authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
  console.log("user: ", user);
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
