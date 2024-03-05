import React from 'react';
import ShowData from './array.tsx'

function Profile1() {
  return (
    <div>
     <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
    </div>
  );
}

function Profile2() {
  const person = {
    name: "thanh",
    avatar: "https://i.imgur.com/MK3eW3As.jpg",
    age: 21
  }
  return (
    <>
    <h2>{person.name}</h2>
    <img
      src= {person.avatar}
      alt= {person.name}
    />
    </>
  );
}

export default function Home() {
    return (
      <div>
         <div>
            <h2>Fala</h2>
             <Profile2 />
             <ShowData />
            
         </div>
      </div>

    )
}

