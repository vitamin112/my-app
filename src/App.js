import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./container/pages/home/home";
import LoginPage from "./container/pages/login/login";
import Header from "./components/header";
import NotFound from "./container/pages/notFound/notFound";
import ProductPage from "./container/pages/product/product";
import Footer from "./components/footer";
import "./App.css";
import Contact from "./container/pages/contact/contact";
export const DataSearch = createContext();

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    return searchTerm;
  };

  return (
    <div className="App" id={darkMode ? "darkMode" : ""}>
      <DataSearch.Provider value={handleSearch}>
        <Router>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/product"
                element={<ProductPage searchTerm={searchTerm} />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/my-app" element={<HomePage />} />
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
