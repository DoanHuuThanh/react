import React from 'react';
import {useState} from 'react'

interface num {
    guest: number
}

function Cup({ guest }: num) {
    return <h2>Tea cup for guest #{guest}</h2>;
  }
  
  export default function TeaGathering() {
    let cups = [];
    for (let i = 1; i <= 2; i++) {
      cups.push(<Cup key={i} guest={i}/>);
    }
    return cups;
  }