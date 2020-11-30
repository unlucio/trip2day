import { CardViaggioList } from "./listCardViaggio";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

export const AddCardViaggio = (props) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/").then((response) => {
            response.json().then((content) => {
                setList([...content.cardViaggio]);
            });
        });
    }, []);

    return (
        <div>
            <Button
                onClick={() => {
                    fetch("http://localhost:3001/", { method: "POST" }).then(
                        (response) => {
                            response.json().then((content) => {
                                setList([...content.cardViaggio]);
                                // this.setState({ list: content.robaccia });
                            });
                        }
                    );
                }}
            >
                <Link href="./MyPlannedTrips">Inizia il tuo nuovo viaggio!1</Link>
      </Button>
        </div>
    );
};
