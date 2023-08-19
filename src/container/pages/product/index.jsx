import { useState, useEffect } from "react";
import { DataSearch } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import ProductCard from "../../../components/productCard";
import NotFound from "../notFound/notFound";
import Loader from "../../../components/loader";
import ProductList from "../../../components/productList";
import Form from 'react-bootstrap/Form';
import "./product.scss";

function ProductPage({ searchTerm }) {
    const [categories, setCategories] = useState();
    const [category, setCategory] = useState("all");
    const [data, setData] = useState();
    const [modalShow, setModalShow] = useState(false);
    const [Product, setProduct] = useState();
    const [sortValue, setSortValue] = useState("");

    useEffect(() => {
        console.log("call api");
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => {
                setData([]);
            });

        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(categories => setCategories(categories))
            .catch(error => {
                console.log(error);
            });
    }, [])

    function handleFilter(item) {
        if (item == category)
            setCategory("all")
        else
            setCategory(item);
    }
    function handleShowProduct(item) {
        setModalShow(true);
        setProduct(item);
    }
    function handleSort(e) {
        let currentValue = e.target.value;
        setSortValue(currentValue);

        let sortedData = data.sort((a, b) => {
            const aValue = currentValue == "price" || currentValue == "id" ? a[currentValue] : a.rating[currentValue];
            const bValue = currentValue == "price" || currentValue == "id" ? b[currentValue] : b.rating[currentValue];

            if (aValue < bValue) {
                return 1;
            }
            if (aValue > bValue) {
                return -1;
            }
        })
        setData(sortedData);
    }

    return (
        <div>
            <div className="filter my-2 container d-flex gap-2 flex-wrap">
                <Form.Select aria-label="select" value={sortValue} onChange={handleSort}>
                    <option value="id">Default</option>
                    <option value="price">Price</option>
                    <option value="count">Selling</option>
                    <option value="rate">Rating</option>
                </Form.Select>
                {
                    categories?.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={item == category ? "active" : ""}
                                onClick={() => handleFilter(item)}
                            >
                                {item}
                            </div>
                        );
                    })}
            </div>
            <div>
                <ProductCard
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    item={Product}
                />
            </div>
            <div className="container d-flex flex-wrap justify-content-sm-start justify-content-center g-2">
                {data ? <ProductList searchTerm={searchTerm} data={data} category={category} handleShowProduct={handleShowProduct} /> : <Loader />}
            </div>
        </div>
    );
}

export default ProductPage;
