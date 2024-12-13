import { useContext } from "react";

import "./accordion.css";
import { GlobalContext } from "../../context/context";
import { Address } from "../../interfaces";
import { AddressTable } from "../AddressTable";

interface Props {
    cliendId:string;
    addresses:Address[]
}

export const AccordionAddress = ({cliendId, addresses}:Props) => {
    
    const { clientsState } = useContext(GlobalContext);
    const {clientIdSelected} = clientsState;

    return (
        <div
            className={`accordion-content ${
            clientIdSelected === cliendId ? "expanded" : "collapsed"
            }`}
        >
                {addresses.length > 0 ? (
                    <AddressTable addresses={addresses} />
                ) : (
                    <p style={{ textAlign: "center", margin: "10px 0" }}>
                    Este cliente no tiene direcciones registradas.
                    </p>
                )}
        </div>
    )
}
