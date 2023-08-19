import { useEffect, useState, useContext } from "react";
import './searchBox.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { DataSearch } from "../../App";
import { Link } from "react-router-dom";
import ProductPage from "../../container/pages/product";
import { Button } from "react-bootstrap";

const SearchBox = (path) => {
    const [searchValue, setSearchValue] = useState("")

    let searchTerm = useContext(DataSearch);

    let SearchButton = () => {
        if (path.path.pathname == "/")
            return (<Link onClick={handleSearch} to="/product" component={<ProductPage />} >
                <FontAwesomeIcon icon={faSearch} />
            </Link>)
        else {
            return (<Link onClick={handleSearch} to="/product" component={<ProductPage />} >
                {
                    searchValue == "" ? <FontAwesomeIcon icon={faSearch} /> : <FontAwesomeIcon icon={faXmark} />
                }
            </Link>)
        }
    }

    const handleInputChange = (event) => {
        searchTerm(event.target.value);
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        searchTerm("");
        setSearchValue("");
    };


    return (
        <div className="header-search ms-auto me-2">
            <input type="text"
                className="header-search-input"
                placeholder="Find..."
                value={searchValue}
                onChange={handleInputChange}
            />
            <SearchButton />
        </div>
    );
}

export default SearchBox;
