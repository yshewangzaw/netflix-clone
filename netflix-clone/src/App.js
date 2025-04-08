import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import RowList from "./components/Rows/RowsList/RowList";

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </Router>
  );
}
export default App;
