import { useEffect, useState, useContext } from "react";
import './searchBox.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { DataSearch } from "../../App";
import { Link } from "react-router-dom";
import ProductPage from "../../container/pages/product";

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState("")

    let searchTerm = useContext(DataSearch);

    const handleInputChange = (event) => {
        searchTerm(event.target.value);
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        searchTerm("");
        setSearchValue("");
    };


    return (
        <div className="header-search">
            <input type="text"
                id="header-search-input"
                placeholder="Find..."
                value={searchValue}
                onChange={handleInputChange}
            />
            <Link onClick={handleSearch} to="/product" component={<ProductPage />} >
                {
                    searchValue == "" ? <FontAwesomeIcon icon={faSearch} /> : <FontAwesomeIcon icon={faXmark} />
                }
            </Link>
        </div>
    );
}

export default SearchBox;
