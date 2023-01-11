import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </>
  );
}

export default App;
