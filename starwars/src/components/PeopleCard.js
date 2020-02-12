import React from "react";


const PeopleCard = props => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Skin Color: {props.skin_color}</p>
        </div>
    );
};
export default PeopleCard;
