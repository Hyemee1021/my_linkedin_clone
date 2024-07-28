import { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import { LogIn } from "./Pages/LogIn";
import Home from "./Pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./slices/userSlice";
import { login } from "./slices/userSlice";
import { auth } from "./firebase";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
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

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100">
        {/* header is on evry pages */}
        <Header />
        <Routes>
          {user ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/login" element={<LogIn />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
