import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./component/Register";
import Login from "./component/Login";
import Dashboard from "./component/deshboard/Dashboard";
import ProtectedRoute from "./protectedrout/ProtectedRoute";
import { useSelector } from "react-redux";
import UserDetail from "./component/deshboard/UserDetail";

function App() {
  const root = useSelector((state) => state.app.token);
  const storeg = localStorage.getItem("email");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route
            exact
            path="/Login"
            element={!root || !storeg ? <Login /> : <Dashboard />}
          />
          <Route element={<ProtectedRoute />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route
              exact
              path="/dashboard/userdetail/:id"
              element={<UserDetail />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
