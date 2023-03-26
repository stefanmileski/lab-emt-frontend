import React from "react";

const bookTerm = (props) => {
    return (
        <tr>
            <td scope="col">{props.x.name}</td>
            <td scope="col">{props.x.category}</td>
            <td scope="col">{props.x.author.name + " " + props.x.author.surname}</td>
            <td scope="col">{props.x.availableCopies}</td>
        </tr>
    );
}