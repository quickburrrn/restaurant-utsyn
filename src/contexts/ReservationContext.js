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
        console.log("hello?");
        //console.log('submitting answers:', info);
    };

    return (
        <ReservationContex.Provider value={{ info, handleReservationChange, handleSubmit}}>
            {children}
        </ReservationContex.Provider>
    );
};