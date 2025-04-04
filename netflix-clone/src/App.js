import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  );
}
export default App;
