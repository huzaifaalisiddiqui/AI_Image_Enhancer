import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col max-h-screen bg-amber-50">
      <Header />
      <div className="container mx-auto px-1 py-2 flex-1 flex items-center justify-center bg-amber-50">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;

