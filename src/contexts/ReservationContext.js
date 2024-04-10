import React, { Children } from "react"
import { createContext , useContext, useState} from "react";

const ReservationContex = createContext({});

export const useReservationContext = () => useContext(ReservationContex);

export const ReservationProvider = ({ children }) => 
{
    const [info, setInfo] = useState({});

    const handleReservationChange = (page, info) => 
    {
        setInfo(prevInfo => ({
            ...prevInfo,
            [page]: info
        }));
    };

    const handleSubmit = () => 
    {
        console.log('submitting answers:', answers);
    }

    return (
        <ReservationContex.Provider value={{ answers, handleReservationChange, handleSubmit}}>
            {children}
        </ReservationContex.Provider>
    );
};