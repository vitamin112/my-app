import { useState, useEffect, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProductCard from "../../components/productCard";
import NotFound from "../notFound/notFound";
import Loader from "../../../container/components/loader";
import ProductList from "../../../container/components/productList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faRepeat, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import "../product/product";
import "./home.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { Link } from "react-router-dom";

const categoriesImg = [
    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1508243771214-6e95d137426b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=80',

]
const OnSaleImg = [
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1395&q=80',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80'
]

function HomePage() {

    const [data, setData] = useState();
    const [modalShow, setModalShow] = useState(false);
    const [Product, setProduct] = useState();
    const [categories, setCategories] = useState();

    useEffect(() => {
        console.log("call api");
        fetch('https://fakestoreapi.com/products?limit=12')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => {
                setData([]);
            });
    }, [])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(categories => setCategories(categories))
            .catch(error => {
                console.log(error);
            });
    }, []);

    function handleShowProduct(item) {
        setModalShow(true);
        setProduct(item);
    }

    return (
        <div >
            <section className="container">
                <ProductCard
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    item={Product}
                />
            </section>
            <section className="banner ">
                <Swiper
                    pagination={true} modules={[Pagination]} className="mySwiper"
                >

                    <SwiperSlide >
                        <a href="/product" >
                            <img
                                src={
                                    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                }
                                className="w-100 d-block carousel-img"
                                alt=""
                            />
                        </a>
                        <div className="banner-content">
                            <h3>young fashion</h3>
                            <p>We have everything you need</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="/product" >
                            <img
                                src={
                                    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                }
                                className="w-100 d-block carousel-img"
                                alt=""
                            />
                        </a>
                        <div className="banner-content">
                            <h3>young fashion</h3>
                            <p>We have everything you need</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a href="">
                            <img
                                src={
                                    "https://plus.unsplash.com/premium_photo-1674625943116-5f7eeed92917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80 "}
                                className="w-100 d-block carousel-img"
                                alt=""
                            />
                        </a>
                        <div className="banner-content">
                            <h3>young fashion</h3>
                            <p>We have everything you need</p>
                        </div>
                    </SwiperSlide>

                </Swiper >

            </section >
            <section className="block-service">
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
            </section>
            <section className="categories-tags">
                <div className="h3 title pt-5 container">New Categories</div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        968: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper container py-4"
                    effect="fade"
                >
                    {
                        categories?.map((item, index) => {
                            return (
                                <SwiperSlide key={index} className="categories-item">
                                    <a href={`/product?category=${item}`} title={item}>
                                        <img src={categoriesImg[index]} alt="img" />
                                    </a>
                                    <h3 className="p-1">{item}</h3>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </section>
            <p className="pt-4 pb-2 h2 container">On Sale</p>
            <section className="container d-flex flex-wrap justify-content-sm-start justify-content-center g-2">
                <section className="on-sale">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            968: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper container py-1"
                        effect="fade"
                    >
                        {
                            categories?.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="categories-item pb-4" >
                                        <span class="translate-middle badge rounded-pill bg-danger p-2">
                                            -10%
                                            <span class="visually-hidden">unread messages</span>
                                        </span>
                                        <a href={`/product?category=${item}`} title={item}>
                                            <img src={OnSaleImg[index]} alt="img" />
                                        </a>
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </section>
            </section>
            <p className="pt-4 pb-2 h2 container">New products</p>
            <section className="container d-flex flex-wrap justify-content-sm-start justify-content-center g-2">
                {data ? <ProductList searchTerm={""} data={data} category={"all"} handleShowProduct={handleShowProduct} /> : <Loader />}
                <a href={"/product"} className="mx-auto btn btn-warning mt-3">All product</a>
            </section>


        </div >
    );
}

export default HomePage;
