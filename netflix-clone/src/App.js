import "./App.css";
import "./index.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import { BrowseRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Footer />
      <Banner />
    </>
  );
}

export default App;
