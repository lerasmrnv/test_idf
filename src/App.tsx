import React from "react"
import { Footer } from "./components/footer/footer";

import { Header } from "./components/header/header";
import { Main } from "./components/main/main";

function App() {
  return (
    <div style={{minHeight: '100vh'}}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
