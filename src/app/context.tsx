import {createContext} from 'react'
import { useContext } from 'react';
import { useState } from 'react';

 const ThemeContext = createContext(0)
console.log(ThemeContext)

 const places = [{ 
    id: 0,
    name: 'Bo-Kaap in Cape Town, South Africa',
    description: 'The tradition of choosing bright colors for houses began in the late 20th century.',
    image: 'https://i.imgur.com/K9HVAGHl.jpg'
  }, {
    id: 1, 
    name: 'Rainbow Village in Taichung, Taiwan',
    description: 'To save the houses from demolition, Huang Yung-Fu, a local resident, painted all 1,200 of them in 1924.',
    image: 'https://i.imgur.com/9EAYZrtl.jpg'
  }, {
    id: 2, 
    name: 'Macromural de Pachuca, Mexico',
    description: 'One of the largest murals in the world covering homes in a hillside neighborhood.',
    image: 'https://i.imgur.com/9EAYZrtl.jpg'
  }, {
    id: 3, 
    name: 'Selarón Staircase in Rio de Janeiro, Brazil',
    description: 'This landmark was created by Jorge Selarón, a Chilean-born artist, as a "tribute to the Brazilian people".',
    image: 'https://i.imgur.com/aeO3rpIl.jpg'
  }, {
    id: 4, 
    name: 'Burano, Italy',
    description: 'The houses are painted following a specific color system dating back to 16th century.',
    image: 'https://i.imgur.com/aeO3rpIl.jpg'
  }, {
    id: 5, 
    name: 'Chefchaouen, Marocco',
    description: 'There are a few theories on why the houses are painted blue, including that the color repels mosquitos or that it symbolizes sky and heaven.',
    image: 'https://i.imgur.com/rTqKo46l.jpg'
  }
  ];
   
  interface Destination {
    id: number,
    name: string,
    description: string,
    image: string
  }

  function ShowPlace() {
    const [islarge, setIsLarge] = useState(false)
    const imageSize = islarge? 150 : 100

    return (
         <ThemeContext.Provider value={imageSize}>
            <>
            <label>
                <input
                 type = "checkbox"
                 checked = {islarge}
                 onChange={e => setIsLarge(e.target.checked)}
                />
              Use large images
            </label>
             <hr></hr>
             <List />
            </>
         </ThemeContext.Provider>
    )
  }

  function List() {
    const listItems = places.map(place => 
          <li key= {place.id}>
             <Place place={place} />
          </li>
    )
      return <ul>{listItems}</ul>
  }

  function Place({ place }: { place: Destination }) {
         return (
            <div>
             <PlaceImage place= {place} />
             <b>place.name</b>
             {': ' + place.description}
            </div>
              

         )
  }

  function PlaceImage({ place }: { place: Destination }) {
    const imageSize = useContext(ThemeContext)
    return (
          <img
            src = {place.image}
            alt = {place.name}
            width={imageSize}
            height={imageSize}
          />
       )
  }

  export default ShowPlace