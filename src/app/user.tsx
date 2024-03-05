import { useState } from 'react';

export default function Form() {

    const [person, setPerson] = useState({
      name: 'Niki',
      atwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
      }
    })

    function handleNameChange(e: any) {
        setPerson({
          ...person,
          name: e.target.value
        });
      }

    function handleTitleChange(e: any) {
        setPerson({
            ...person,
            atwork: {
                ...person.atwork,
                title: e.target.value
            }
        })
    }  

    return (
         <>
         <h3>{person.name}</h3>
         <h3>{person.atwork.title}</h3>
           <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.atwork.title}
          onChange={handleTitleChange}
        />
      </label>
         </>

    )
}