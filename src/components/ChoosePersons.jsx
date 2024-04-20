import './../pages/styles.css'
import React from "react";

const ChoosePersons = (props) => 
{

    const {buttonPressed = (index) => {return;}, worldIndex} = props

    const array = Array.from({length: 9}, (_, i) => i + 2);

    return(
        <>
            <h1 className="display-3 pb-5"><b>Velg antall personer</b></h1>
            <div className="row row-cols-sm-3 row-cols-md-1 row-cols-lg-1 justify-content-center gx-2 gy-5" role="group" arial-label="button group">
                {array.map((item, index) => (
                    <div key={item+index} className="col mb-3">
                        <input className="btn-check" name="btnradio" id={"btnradio" + item + worldIndex} key="index"
                            onClick={() => {
                                buttonPressed(item);
                            }}></input>
                        <label className="btn btn-outline-primary btn-lg" htmlFor={"btnradio" + item + worldIndex}>{item}</label>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ChoosePersons;
