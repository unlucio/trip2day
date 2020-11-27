import React from "react";
import {useState,useEffect} from "react";

export const CardViaggioList = ({list}) => {
    const [cardList, setList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/").then((response) => {
            response.json().then((content) => {
                setList([...content.cardViaggio]);
            });
        });
    }, []);
    return (
        <div>
            {list.map((o, i) => {
                return (
                    <div key={i}>
                        {o.location} -- {o.photo}
                    </div>
                );
            })}
        </div>
    );
};
