import { Route, Routes } from "react-router-dom";
import Navebar from "./components/Navebar";
import { publicRoute } from "./routes/publicRoute";

function App() {
  return (
    <Navebar>
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />}></Route>
        ))}
      </Routes>
    </Navebar>
  );
}

export default App;
