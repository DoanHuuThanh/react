import React from 'react';

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
  const avatar = "https://i.imgur.com/MK3eW3As.jpg"
  const alt = "Katherine Johnson"
  return (
    <img
      src= {avatar}
      alt= {alt}
    />
  );
}

export default function About() {
    return (
      <>
         <div>
             <h1 style= {{
              color: 'blue'
             }}>gala</h1>
             <Profile1 />
             <Profile1 />
             <Profile1 />
         </div>

         <div>
            <h2>Fala</h2>
             <Profile2 />
         </div>
      </>

    )
}

