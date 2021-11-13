import "./App.css";

import { useState } from "react";
import useWindowSize from "./hooks/WindowSize";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function App() {
  const { width } = useWindowSize();

  console.log(width);

  const [searchActive, setSearchActive] = useState(false);

  return width > 721 ? (
    <DesktopNav searchActive={searchActive} setSearchActive={setSearchActive} />
  ) : (
    <MobileNav searchActive={searchActive} setSearchActive={setSearchActive} />
  );
}

export default App;
