import "./productlist.scss"
const ProductList = ({ data, searchTerm, handleShowProduct, category }) => {

    function handlePrint(data) {
        return data?.map((item) => {
            return (
                <div className="col-10 col-sm-6 col-md-4 p-2 col-lg-3" key={item?.id}>
                    <div className="box p-3" onClick={() => handleShowProduct(item)}>
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

    const searchValue = searchTerm ?? searchTerm.trim().toLowerCase();

    if (searchValue !== "" && data.length > 0) {
        let newProducts = data.filter(item => item.title.toLowerCase().includes(searchValue))
        console.log(newProducts);
        return handlePrint(newProducts);
    }
    else {
        if (data.length > 0) {
            let newProducts = data.filter(item => {
                if (item.category == category) return item;
                if (category == "all") return item;
            })
            return handlePrint(newProducts);
        }

    }
}

export default ProductList;
