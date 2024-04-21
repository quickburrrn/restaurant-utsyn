import React, { useState } from "react";
import { Modal, Anchor} from 'react-bootstrap';
import { CSSTransition } from "react-transition-group";
import '../styles/BookModal.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';
import { Link , useLoaderData, useOutletContext} from "react-router-dom";
import Calendar from "react-calendar";


const BookModal = (props) => 
{
    const {page, setPage = (index) => {return;}} = props; 

    const [personer, SetPersoner] = useOutletContext()[1];

    const [error, setError] = useState(false);

    const radios = 
    [
        {name: '1', value: 1},
        {name: '2', value: 2},
        {name: '3', value: 3},
        {name: '4', value: 4},
        {name: '5', value: 5},
        {name: '6', value: 6},
        {name: '7', value: 7},
        {name: '8', value: 8},
        {name: '9', value: 9},
        {name: '10', value: 10}
    ]

    return(
        <>
            <Modal
                show={page===0}
                centered
                onHide={() => {setPage(-1); SetPersoner(0)}}
            >
                <Modal.Header>
                    <Modal.Title>Velg Antall folk</Modal.Title>
                </Modal.Header>        

                <Modal.Body className="modal-content">
                    {error && <label className='text-danger'>Du må velge et antall personer</label>}
                    <ToggleButtonGroup type="radio" name="options">
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                variant={'outline-dark'}
                                value={radio.value}
                                checked={radio.value === personer}
                                onChange={(e) => {SetPersoner(e.currentTarget.value); setError(false)}}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>

                </Modal.Body>

                <Modal.Footer>                    
                    {personer <= 0 ?
                        <Button variant="secondary" onClick={() => setError(true)}>Neste</Button> :
                        <Button variant="primary" onClick={() => setPage(1)}>Neste</Button>
                    }
                </Modal.Footer>

            </Modal>
            
            <Modal
                show={page===1}
                centered
                onHide={() => {setPage(-1); SetPersoner(0)}}
            >

                <Modal.Header>
                        <Modal.Title>Velg Dato</Modal.Title>
                    </Modal.Header>        

                <Modal.Body>
                    <div style={{display: "grid", placeItems: "center"}}>
                        <Calendar />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={() => setPage(0)}>Tilbake</Button>
                    
                    {personer <= 0 ?
                        <Button variant="secondary" onClick={() => setError(true)}>Neste</Button> :
                        <Button variant="primary" onClick={() => setPage(1)}>Neste</Button>
                    }
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default BookModal