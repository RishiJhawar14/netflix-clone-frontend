import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  //const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={!user ? <Login /> : <Home />} />
        {user && (
          <React.Fragment>
            <Route
              exact
              path="/movies"
              element={user ? <Home type="movie" /> : <Login />}
            />
            <Route
              exact
              path="/series"
              element={user ? <Home type="series" /> : <Login />}
            />
            <Route exact path="/watch" element={user ? <Watch /> : <Login />} />
          </React.Fragment>
        )}
      </Routes>
    </Router>
  );
};

export default App;
