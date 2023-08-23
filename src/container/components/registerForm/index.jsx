import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className=""
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter " className="Centered">
                    Register
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-3">
                <Form>
                    <Form.Group className="mb-3" controlId="Register.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Type Name"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Register.ControlInput2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="Register.ControlInput3"
                    >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="your password"
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="Register.ControlInput4"
                    >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="Cpassword"
                            placeholder="Confirm your password"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>LogUp</Button>
            </Modal.Footer>
        </Modal>
    );
}

function RegisterForm() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="" onClick={() => setModalShow(true)}>
                Register
            </Button>

            <RegisterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
export default RegisterForm;