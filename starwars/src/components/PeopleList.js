import React, { useEffect, useState } from "react";
import axios from "axios";
import PeopleCard from "../components/PeopleCard";
const PeopleList = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
    const [people, setPeople] = useState([]);
    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
                console.log(response.data.results);
                setPeople(response.data.results);
            })
            .catch(error => {
                console.log("The data was not returned", error);
            });
    }, []);
    return (
        <div>
            {people.map((people, index) => {
                return (
                    <PeopleCard
                        key={index}
                        name={people.name}
                        height={people.height}
                        mass={people.mass}
                        hair_color={people.hair_color}
                        skin_color={people.skin_color}
                    />
                );
            })}
        </div>
    );
};
export default PeopleList;