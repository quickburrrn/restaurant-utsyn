import React, { useState } from "react";
import { Modal, Button, Anchor} from 'react-bootstrap';
import { CSSTransition } from "react-transition-group";
import '../styles/BookModal.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const BookModal = (props) => 
{
    const {page, setPage = (index) => {return;}} = props; 

    // const [page, setPage] = useState(0)

    

    return(
        <>
            <Modal
                show={page===0}
                centered
                onHide={() => setPage(-1)}
            >
                <Modal.Header>
                    <Modal.Title>Velg Antall folk</Modal.Title>
                </Modal.Header>        

                <Modal.Body className="modal-content">
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button>1</Button>
                            <Button>2</Button>
                            <Button>3</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button>4</Button>
                            <Button>5</Button>
                            <Button>6</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button>7</Button>
                            <Button>8</Button>
                            <Button>9</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Modal.Body>

                <Modal.Footer>
                <button onClick={() => setPage(0)}>Tilbake</button>
                    <button onClick={() => setPage(1)}>Frem</button>
                </Modal.Footer>

            </Modal>
            
            <Modal
                show={page===1}
                centered
                onHide={() => setPage(-1)}
            >

                <Modal.Header>
                        <Modal.Title>Velg Dato</Modal.Title>
                    </Modal.Header>        

                <Modal.Body className="modal-content">
                    Hello World
                </Modal.Body>

                <Modal.Footer>
                <button onClick={() => setPage(0)}>Tilbake</button>
                    <button onClick={() => setPage(1)}>Frem</button>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default BookModal