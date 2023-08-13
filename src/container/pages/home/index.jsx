import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProductCard from "../../../components/productCard";
import NotFound from "../notFound/notFound";
import Loader from "../../../components/load";
import "../product";
import "./home.scss";

function HomePage() {

    const [categories, setCategories] = useState();
    const [category, setCategory] = useState("all");
    const [data, setData] = useState();
    const [modalShow, setModalShow] = useState(false);
    const [Product, setProduct] = useState();

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
    function handlePrintProduct(data) {
        return data?.map((item) => {
            if (item?.category == category || category == "all")
                return (
                    <div className="col-10 col-sm-6 col-md-4 col-lg-3 p-2" key={item?.id}>
                        <div className="box p-2" onClick={() => handleShowProduct(item)}>
                            <div className="image">
                                <img src={item?.image} alt="" />
                            </div>
                            <div className="title h6 py-2">{item?.title}</div>
                            <div className="d-flex justify-content-between">
                                <span className="text-danger">{item?.price} $</span>{" "}
                                {item?.rating?.count} sold
                            </div>
                        </div>
                    </div>
                );
        });
    }

    return (
        <div >
            <div className="container">
                <ProductCard
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    item={Product}
                />
            </div>
            <div className="banner">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            src={
                                "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                            }
                            className="w-100 d-block carousel-img"
                            alt=""
                        />
                        <Carousel.Caption>
                            <h3 className="h2 text-white banner-text">Attractive price</h3>
                            <p className='h3'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            src={
                                "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                            }
                            className="w-100 d-block carousel-img"
                            alt=""
                        />
                        <Carousel.Caption>
                            <h3 className="h2 text-white banner-text">New collection</h3>
                            <p className='h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            src={
                                "https://plus.unsplash.com/premium_photo-1674625943116-5f7eeed92917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80 "
                            }
                            className="w-100 d-block carousel-img"
                            alt=""
                        />
                        <Carousel.Caption>
                            <h3 className="h2 text-white banner-text">young and dynamic</h3>
                            <p className='h3'>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <p className="pt-5 h2 container">Our products</p>
            <div className="tags">
                <div className="filter my-2 container d-flex gap-2 flex-wrap">
                    {categories?.map((item, index) => {
                        return (<div key={index}
                            className={item == category ? "active" : ""}
                            onClick={() => handleFilter(item)}>
                            {item}
                        </div>);
                    })}
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-sm-start justify-content-center container">
                {data ? (handlePrintProduct(data)?.every((element) => element === undefined) ? <NotFound /> : handlePrintProduct(data)) : <Loader />}
            </div>
        </div>
    );
}

export default HomePage;
