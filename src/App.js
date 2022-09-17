import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedInUser } from "./actions";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log(auth);

  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isLoggedInUser());
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* only logged in user can access this home route */}
          <Route
            path="/"
            exact
            element={
              auth.authenticated ? <HomePage /> : <Navigate to={`/login`} />
            }
          />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
