import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./container/pages/home";
import LoginPage from "./container/pages/login/login";
import Header from "./components/header";
import NotFound from "./container/pages/notFound/notFound";
import ProductPage from "./container/pages/product";
import Footer from "./components/footer";
import "./App.css";

export const DataSearch = createContext();

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    return searchTerm;
  };

  return (
    <div className="App">
      <DataSearch.Provider value={handleSearch}>
        <Router>
          <Header />
          <div className="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/product"
                element={<ProductPage searchTerm={searchTerm} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </DataSearch.Provider>
    </div>
  );
}

export default App;
