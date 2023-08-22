import img from './no-result.png'
import { useContext } from "react";
import { DataSearch } from "../../App";
import "./productlist.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import NotFound from '../../container/pages/notFound/notFound';

const ProductList = ({ data, searchTerm, handleShowProduct, category }) => {

    function handlePrint(data) {
        if (data.length <= 0) {
            return <div className="w-100 text-center py-5 no-result">
                <div className="py-3"><img src={img} alt="nothing here!" /></div>
                <h2 className="px-5">Sorry, we couldn't find any results for <strong>"{searchValue}"</strong></h2>
            </div >
        }
        return data?.map((item) => {
            return (
                <div className="col-10 col-sm-6 col-md-4 p-2 col-lg-3" key={item?.id}>
                    <div className="box p-3" onClick={() => handleShowProduct(item)}>
                        <div className="image">
                            <img src={item?.image} alt="" />
                        </div>
                        <div className="title h6 py-2">{item?.title}</div>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="text-danger">{item?.price} $</span>
                            <div className="product-rating">
                                {item?.rating?.rate}
                                <FontAwesomeIcon icon={faStar} className='px-1 text-warning' />
                                {" | "}
                                {item?.rating?.count} <strong>sold</strong></div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    const searchValue = searchTerm ?? searchTerm.trim().toLowerCase();
    if (searchValue !== "" && data.length > 0) {

        let newProducts = data.filter(item => item.title.toLowerCase().includes(searchValue))
        return <>
            <h2 className='container'>Result for "{searchTerm}"</h2>
            {handlePrint(newProducts)}
        </>;
    }
    else if (data.length > 0) {

        let newProducts = data.filter(item => {
            if (item.category == category) return item;
            if (category == "all") return item;
        })
        return handlePrint(newProducts);
    }
    else {
        return <NotFound />;
    }
}

export default ProductList;
