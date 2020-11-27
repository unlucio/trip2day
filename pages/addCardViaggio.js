import { CardViaggioList } from "./listCardViaggio";
import React, { useEffect, useState } from "react";

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
            <CardViaggioList list={list} />
            <button
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
                Inizia il tuo nuovo viaggio!1
      </button>
        </div>
    );
};
