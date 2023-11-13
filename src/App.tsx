import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Compass from "./components/Compass";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Compass />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
