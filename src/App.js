import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/signup" element={<Signup />} />
        <Route exact path="player" element={<Player />} />
        <Route exact path="/" element={<Netflix />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
