import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './footer.scss'
const Footer = () => {
    return (
        <footer className="">
            <div className="">
                <div className="container">
                    <div className="footer row ">
                        <div className="col-12 col-md-6">
                            <h3>Lorsis store</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias numquam maxime mollitia omnis ipsa perspiciatis aliquid sequi recusandae ut. Tenetur ea quo quasi voluptatibus nihil nesciunt, magnam porro aut!</p>
                        </div>
                        <div className="col-6 col-md-2">
                            <h6>LINKS</h6>
                            <ul>
                                <li><a href="#"><FontAwesomeIcon icon={faCaretRight} /> Learning</a> </li>
                                <li><a href="#"><FontAwesomeIcon icon={faCaretRight} /> Training</a> </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-2">
                            <h6>INFORMATION</h6>
                            <ul>
                                <li><a href="#"><FontAwesomeIcon icon={faCaretRight} /> About Us</a> </li>
                                <li><a href="#"><FontAwesomeIcon icon={faCaretRight} /> Terms of Use</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-2">
                            <h6>HELP</h6>
                            <ul>
                                <li><a href="#"><FontAwesomeIcon icon={faCaretRight} /> Contact</a> </li>
                                <li><a href="#"><FontAwesomeIcon icon={faCaretRight} /> Order</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className='bg-secondary p-3'>  Made with 💜 by <a href="">Loc Nguyen</a></p>
            </div>
        </footer>
    );
}

export default Footer;
