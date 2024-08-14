import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import TopHeader from "./component/header/TopHeader";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <TopHeader />
      <div className="container mx-auto px-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
