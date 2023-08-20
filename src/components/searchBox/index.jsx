import { useEffect, useState, useContext } from "react";
import './searchBox.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { DataSearch } from "../../App";
import { Link } from "react-router-dom";
import ProductPage from "../../container/pages/product";

const SearchBox = (path) => {
    const [searchValue, setSearchValue] = useState("");
    const [ShowSearchBox, setShowSearchBox] = useState(false);

    let searchTerm = useContext(DataSearch);

    let SearchButton = () => {
        if (path.path.pathname == "/")
            return (<Link to="/product" component={<ProductPage />} >
                <FontAwesomeIcon icon={faSearch} />
            </Link>)
        else {
            return (<button onClick={handleClickSearchBtn} className={ShowSearchBox ? "active" : ""} >
                {
                    searchValue == "" ? <FontAwesomeIcon icon={faSearch} /> : <FontAwesomeIcon icon={faXmark} />
                }
            </button >)
        }
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        searchTerm(event.target.value);
        setSearchValue(event.target.value);
    };

    const handleClickSearchBtn = () => {
        setShowSearchBox(!ShowSearchBox);
        searchTerm("");
        setSearchValue("");
    };


    return (
        <form className="header-search ms-auto me-2">
            <SearchButton />
            <input type="text"
                className="header-search-input"
                placeholder="Find..."
                required
                value={searchValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

export default SearchBox;
