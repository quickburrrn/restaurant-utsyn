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
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

const BookModal = (props) => 
{
    const {page, setPage = (index) => {return;}} = props; 
    const [selectedDay, setSelectedDay] = useState(new Date())


    const [count, setCount] = useOutletContext()[0];
    const [personer, SetPersoner] = useOutletContext()[1];

    const [navn, setNavn] = useOutletContext()[2];
    const [telefonnnumer, setTelefonnnumer] = useOutletContext()[3];
    const [email, setEmail] = useOutletContext()[4];
    const [extra, setExtra] = useOutletContext()[5];
    const [etternavn, setEtternavn] = useOutletContext()[6];

    const [loading, setLoading] = useState(true)
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

    const sendReservasjon = async () => {
    
        const response = await axios.post('https://restaurant-utsyn-api.vercel.app/reservasjon',
        {
            Dato: count,
            Antall_gjester: personer,
            Fornavn: navn,
            Etternavn: etternavn,
            Telefonnummer: telefonnnumer,
            Epost: email,
            ExtraInfo: extra
        }
    
    ).then(res => {
            setLoading(false)
            if (res.data === "err") 
            {
                setError(true)
            }
        })
    };

    return(
        <>
            <Modal
                show={page===0}
                centered
                onHide={() => {setPage(-1);}}
            >
                <Modal.Header>
                    <Modal.Title>Velg Antall folk</Modal.Title>
                </Modal.Header>        

                <Modal.Body className="modal-content">
                    {error && <label className='text-danger'>Du må velge et antall personer</label>}
                    <ToggleButtonGroup type="radio" name="options" value={personer}>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={radio.value}
                                id={`radio-${idx}`}
                                variant={'outline-dark'}
                                value={radio.value}
                                onChange={(e) => {
                                    SetPersoner(Number(e.currentTarget.value)); 
                                    setError(false);     
                                    console.log(personer)                           
                                }}
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
                onHide={() => {setPage(-1);}}
            >

                <Modal.Header>
                        <Modal.Title>Velg Dato</Modal.Title>
                    </Modal.Header>        

                <Modal.Body>
                    <div style={{display: "grid", placeItems: "center"}}>
                        <Calendar value={selectedDay} tileDisabled={({date}) => [1, 2, 3, 6, 0].includes(date.getDay())} onClickDay={(value, event) => {
                            setCount(`${' ' + value.getFullYear()}-${('0' + (value.getMonth()+1)).slice(-2)}-${value.getDate()}`);
                            setSelectedDay(value)
                            setError(false)
                            }}/>
                    </div>
                    {error && <label className='text-danger'>Du må velge en dato først</label>}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={() => setPage(0)}>Tilbake</Button>
                    
                    {count === '00:00:00' ?
                        <Button variant="secondary" onClick={() => setError(true)}>Neste</Button> :
                        <Button variant="primary" onClick={() => setPage(2)}>Neste</Button>
                    }
                </Modal.Footer>

            </Modal>

            <Modal
                show={page===2}
                centered
                onHide={() => {setPage(-1);}}
            >

                <Modal.Header>
                        <Modal.Title>Informasjon</Modal.Title>
                    </Modal.Header>        

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="fornavn" >
                            {(error && navn === "") && <><label className="text-danger">Venlist fyll ut forrnavn</label><br /></>}
                            <Form.Label>Fornavn *</Form.Label>
                            <Form.Control type="text" placeholder="navn" value={navn !== '' ? navn : ''} onChange={(value) => {setNavn(value.target.value); setError(false)}}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="etternavn" >
                            {(error && etternavn === "") && <><label className="text-danger">Venlist fyll ut forrnavn</label><br /></>}
                            <Form.Label>Etternavn *</Form.Label>
                            <Form.Control type="text" placeholder="etternavn" value={etternavn !== '' ? etternavn : '' } onChange={(value) => {setEtternavn(value.target.value); setError(false)}}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="telefonummer" >
                            {(error && telefonnnumer === 0) && <><label className="text-danger">Venlist fyll ut forrnavn</label><br /></>}
                            <Form.Label>Telefonummer * (valgfritt)</Form.Label>
                            <Form.Control type="tel" placeholder="12345678" value={telefonnnumer !== 0 ? telefonnnumer : ''} onChange={(value) => {setTelefonnnumer(value.target.value); setError(false)}}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="E-post" >
                            <Form.Label>E-post (valgfritt)</Form.Label>
                            <Form.Control type="E-post" placeholder="Dinn E-post" value={email !== '' ? email : ''} onChange={(value) => setEmail(value.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="extra" >
                            <Form.Label>Extra informasjon (valgfritt)</Form.Label>
                            <Form.Control as="textarea" rows={3} value={extra !== '' ? extra : ''} onChange={(value) => setExtra(value.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={() => setPage(1)}>Tilbake</Button>
                    
                    {telefonnnumer === 0 || navn === "" || etternavn === ""?
                        <Button variant="secondary" onClick={() => setError(true)}>Neste</Button> :
                        <Button variant="primary" onClick={() => {setPage(3);}}>Neste</Button>
                    }
                </Modal.Footer>

            </Modal>

            <Modal
                show={page===3}
                centered
                onHide={() => {setPage(-1);}}
            >
                <Modal.Header>
                    <Modal.Title>Verifiser informasjon</Modal.Title>
                </Modal.Header>        

                <Modal.Body className="modal-content">
                    <p><strong>Navn:</strong> {navn+" "+etternavn} </p>
                    <p><strong>Antall gjester:</strong> {personer}</p>
                    <p><strong>Valge Dato:</strong> {count}</p>
                    <p><strong>Telefonummer:</strong> {telefonnnumer}</p>
                    {email.length > 0 && <p><strong>E-post:</strong> {email}</p>}
                    {extra.length > 0 && <p><strong>Ekstra:</strong> {extra}</p>}
                </Modal.Body>

                <Modal.Footer>                    
                    <Button variant="primary" onClick={() => setPage(2)}>Tilbake</Button>
                    
                    {personer <= 0 ?
                        <Button variant="secondary" onClick={() => {setError(true);}}>Neste</Button> :
                        <Button variant="success" onClick={() => {
                            setPage(4); 
                            console.log(sendReservasjon())}}><b>Reserver Bord</b></Button>
                    }
                </Modal.Footer>

            </Modal>

            <Modal
                show={page===4}
                centered
                onHide={() => {setPage(-1);}}
                backdrop="static"
            >
                <Modal.Header>
                    {loading ? 
                        <Modal.Title>Reserverer bord</Modal.Title> :

                        <Modal.Title>{error ? "beklager noe gikk galt" : "Et bord er Reservert til dere"}</Modal.Title>
                    }
                </Modal.Header>        

                <Modal.Body className="modal-content">
                    {loading ? 
                        <Spinner animation="border" size="lg"/> :

                        <p>{error ? "Beklager så mye prøv på nytt senere" : `Da er det vare å komme her ${count} fra klokken 12-14`}</p>
                    }
                </Modal.Body>

                <Modal.Footer>     
                    {!loading && <Button variant="primary" onClick={() => {setPage(-1);}}>lukk</Button>}               
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default BookModal