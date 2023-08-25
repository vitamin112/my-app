import { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./container/pages/home/home";
import LoginPage from "./container/pages/login/login";
import Header from "./container/components/header";
import NotFound from "./container/pages/notFound/notFound";
import ProductPage from "./container/pages/product/product";
import Footer from "./container/components/footer";
import Contact from "./container/pages/contact/contact";
import "./App.css";
export const DataSearch = createContext();

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode ? JSON.parse(storedMode) : false;
  });

  let changeColor = (path, value1, value2) => {
    document.documentElement.style.setProperty(
      path,
      `${darkMode ? value2 : value1}`
    );
  };

  const handleDarkMode = () => {
    localStorage.setItem("darkMode", !darkMode);
    changeColor("--text-color", "black", "white");
    changeColor("--background-color", "white", "rgb(24,25,26)");
    changeColor("--bg-box", "white", "#777");
  };

  useEffect(() => {
    handleDarkMode();

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

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
