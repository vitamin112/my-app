import { useState, useEffect, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProductCard from "../../../components/productCard";
import NotFound from "../notFound/notFound";
import Loader from "../../../components/loader";
import ProductList from "../../../components/productList";
import "../product";
import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faRepeat, faTruckFast } from "@fortawesome/free-solid-svg-icons";


function HomePage() {

    const [data, setData] = useState();
    const [modalShow, setModalShow] = useState(false);
    const [Product, setProduct] = useState();

    useEffect(() => {
        console.log("call api");
        fetch('https://fakestoreapi.com/products?limit=12')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => {
                setData([]);
            });
    }, [])


    function handleShowProduct(item) {
        setModalShow(true);
        setProduct(item);
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
            <div className="block-service">
                <div className="container d-none d-sm-flex gap-2 py-2 ">
                    <div className="item col d-flex py-2">
                        <div className="icon p-2">
                            <FontAwesomeIcon icon={faBasketShopping} />
                        </div>
                        <div className="content">
                            <h4 className="">Payment on delivery.</h4>
                            <span className="text-secondary">Nationwide Delivery.</span>
                        </div>
                    </div>
                    <div className="item col d-flex py-2">
                        <div className="icon p-2">
                            <FontAwesomeIcon icon={faTruckFast} />
                        </div>
                        <div className="content">
                            <h4 className="">Free shipping </h4>
                            <span className="text-secondary">For orders over $10.</span>
                        </div>
                    </div>
                    <div className="item col d-flex py-2">
                        <div className="icon p-2">
                            <FontAwesomeIcon icon={faRepeat} />
                        </div>
                        <div className="content">
                            <h4 className="">Free exchange</h4>
                            <span className="text-secondary">Within 30 days from purchase date.</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 pb-2 h2 container">New products</p>
            <div className="container d-flex flex-wrap justify-content-sm-start justify-content-center g-2">
                {data ? <ProductList searchTerm={""} data={data} category={"all"} handleShowProduct={handleShowProduct} /> : <Loader />}
            </div>


        </div>
    );
}

export default HomePage;
