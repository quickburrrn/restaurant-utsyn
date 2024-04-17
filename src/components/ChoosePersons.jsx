import React from "react";

const ChoosePersons = (props) => 
{
    const {buttonPressed = (index) => {return;}} = props

    const array = Array.from({length: 9}, (_, i) => i + 2);

    return(
        <>
            <h1 className="display-3 pb-5"><b>Velg antall personer</b></h1>
            <div className="d-flex justify-content-evenly btn-group align-items-center " role="group" arial-label="Basic radio button group">
                {array.map((item, index) => (
                    <div key={item+index}>
                        <input type="radio" className="btn-check" name="btnradio" id={"btnradio" + item} key="index" autoComplete="off" 
                            onClick={() => {
                                buttonPressed(item);
                            }}></input>
                        <label className="btn btn-outline-primary btn-lg" htmlFor={"btnradio" + item}>{item}</label>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ChoosePersons;
