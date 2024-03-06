import React from 'react';
import TeaSet from './pure.tsx'
import Run from './ani.tsx'
import Showimage from './showimage.tsx'
import Form from './user.tsx'
import RunPlayground from './useEffext.tsx';
export default function Home() {
    return (
      <div>
         <div>
            <h2>Fala</h2>
             <TeaSet />     
             <Run />
             <Showimage />
             <Form />
             <RunPlayground />
         </div>
      </div>

    )
}