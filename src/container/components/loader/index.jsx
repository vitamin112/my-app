const Loader = () => {
    return (
        <div className="container p-4 d-flex justify-content-center text-center h-100">
            <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loader;
