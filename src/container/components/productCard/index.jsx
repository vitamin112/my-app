import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsHolding, faStar, faTruck } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';
import './productCard.scss';

function ProductCard({ item, ...props }) {

    return (
        <Modal
            {...props}
            size='lg'
            centered
            id='productCard'
        >
            <Modal.Header closeButton>
                <Modal.Title id="ProductCard-custom-modal-styling-title">
                    <div className="h3">{item?.title}</div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col className='col-12 col-md-6'>
                            <Card >
                                <Card.Img variant="top" src={item?.image} />
                            </Card>
                        </Col>
                        <Col className='col-12 col-md-6'>
                            <Card.Body>
                                <Card.Title className='h2'>
                                    Category:
                                    <span class="badge bg-primary">{item?.category}</span>
                                </Card.Title>
                                <Card.Text>
                                    <div className="rating py-2">
                                        {<span className="h5 me-3">{item?.rating.rate} <FontAwesomeIcon icon={faStar} className='text-warning' beat />
                                        </span>}

                                        {<span className="h5"> {item?.rating.count} Rating</span>}
                                    </div>
                                    {<span className="d-block h4 my-1 text-danger">Price: ${item?.price}</span>}
                                    <p>Shipping: <FontAwesomeIcon icon={faTruck} />  Free shipping</p>
                                    <p className=''><strong>Qty</strong>: <select id="qty">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select></p>
                                </Card.Text>
                                <Button variant="primary" className='me-2' >Buy now</Button>
                                <Button variant="warning ">Add to cart</Button>
                                <p className='pt-2 h5'><FontAwesomeIcon className="text-info" icon={faHandsHolding} /> Lorsis Guarantee
                                </p>
                                <span > Get the items you ordered or get your money back.</span>

                            </Card.Body>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                <span className="d-block pt-4">
                                    <strong>Description</strong>
                                    : {item?.description}
                                </span>}
                        </Col>
                    </Row>
                </Container>
            </Modal.Body >
            <Modal.Footer>
            </Modal.Footer>
        </Modal >
    );
}

export default ProductCard;