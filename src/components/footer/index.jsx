import './footer.scss'
const Footer = () => {
    return (
        <footer className="bg-secondary ">
            <div className="container">
                <div className="footer row">
                    <div className="col-12 col-md-6">
                        <h3>My Shop</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias numquam maxime mollitia omnis ipsa perspiciatis aliquid sequi recusandae ut. Tenetur ea quo quasi voluptatibus nihil nesciunt, magnam porro aut!</p>
                    </div>
                    <div className="col-6 col-md-2">
                        <h6>LINKS</h6>
                        <ul>
                            <li>Learning</li>
                            <li>Training</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <h6>INFORMATION</h6>
                        <ul>
                            <li>About Us</li>
                            <li>Terms of Use</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <h6>HELP</h6>
                        <ul>
                            <li>Learning</li>
                            <li>Training</li>
                        </ul>
                    </div>
                </div>
                Made with 💜 by <a href="">Loc Nguyen</a>
            </div>
        </footer>
    );
}

export default Footer;
