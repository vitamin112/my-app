import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';

function ProductCard({ item, ...props }) {

    return (
        <Modal
            {...props}
            size='lg'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="ProductCard-custom-modal-styling-title">
                    <div className="h3">{item?.title}</div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col className='col-12 col-md-4'>
                            <Card >
                                <Card.Img variant="top" src={item?.image} />
                            </Card>
                        </Col>
                        <Col className='col-12 col-md-8'>
                            <Card.Body>
                                <Card.Title>
                                    Category: {item?.category}
                                </Card.Title>
                                <Card.Text>
                                    {
                                        <span className="d-block py-2">
                                            <strong>Description</strong>
                                            : {item?.description}
                                        </span>}
                                    {<span className="d-block h3">Price: ${item?.price}</span>}
                                    <span className="rating">
                                        {<span className="h5 me-2">{item?.rating.rate} <FontAwesomeIcon icon={faStar} className='text-warning' beat />
                                        </span>}
                                        {<span className="h5"> {item?.rating.count} Rating</span>}
                                    </span>
                                </Card.Text>
                                <Button variant="primary" className='me-2'>Buy now</Button>
                                <Button variant="warning ">Add to cart</Button>
                            </Card.Body>
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