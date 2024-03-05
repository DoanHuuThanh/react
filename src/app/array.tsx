import React from 'react';
import {people} from './data.tsx'


export default function ShowData() {
    const listPeople = people.map(person => {
        return (
            <li key={person.id}>
                <img
                    src={person.image}
                    alt={person.name}
                />
                <p>
                    <b>{person.name}:</b>
                    {' ' + person.profession + ' '}
                    known for {person.accomplishment}
                </p>
            </li>
        );
    });

    return (<ul>{listPeople}</ul>);
}

 