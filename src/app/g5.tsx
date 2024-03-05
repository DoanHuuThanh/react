import React from 'react';
 
interface Person {
    name: string;
    age: number
    url: string;
  }

  interface AvatarProps {
    person: Person;
    size: number;
  } 

 function Avatar({ person, size }: AvatarProps) {
    return (
        <>
         <h2>{person.name}</h2>
         <h2>{person.age}</h2>
        <img
        className="avatar"
        src={person.url}
        alt={person.name}
        width={size}
        height={size}
      />
      </>

    );
  }


  export default function Show() {
    return (
     <div>
        <Avatar
           person = {
              {
                name: 'thanh',
                age: 21,
                url: "https://i.imgur.com/MK3eW3As.jpg"
              }
           } 
           size = {200}
           />
        <Avatar
           person = {
              {
                name: 'nam',
                age: 22,
                url: "https://i.imgur.com/QIrZWGIs.jpg"
              }
           } 
           size = {200}
           />           

     </div>

    )
  }