import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { useEffect } from "react";
import Hero from "./components/Hero/Hero";

function App() {
  const [navheight, setNavheight] = useState("py-8");
  return (
    <>
      <Nav navheight={navheight} setNavheight={setNavheight} />
      <Hero />
    </>
  );
}

export default App;
