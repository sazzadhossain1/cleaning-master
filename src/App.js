import { Route, Routes } from "react-router-dom";
import Navebar from "./components/Navebar";
import { publicRoute } from "./routes/publicRoute";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PrivateRoute from "./Authentication/PrivateRoute";
import { PrivateRoutes } from "./routes/PrivateRouts";
import AdminRoute from "./Authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Navebar>
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />}></Route>
        ))}

        <Route element={<PrivateRoute></PrivateRoute>}>
          {PrivateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
        </Route>
        <Route element={<AdminRoute />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Navebar>
  );
}

export default App;
