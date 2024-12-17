import React from 'react'
import Card from './Card'
import { useRef } from 'react';
function Foreground() {
 const ref= useRef(null);
  const data=[
    {
      desc: "this is an example of the card and can be chnaged with respect to the other changes.", 
      filesize: ".9mb", 
      close: true,
      tag:{ isOpen: true, tagTitle:"Downloald Now", tagColor:"green",},
    },
    {
      desc: "this is an example of the card and can be chnaged with respect to the other changes.", 
      filesize: ".9mb", 
      close: true,
      tag:{ isOpen: true, tagTitle:"Downloald Now", tagColor:"green",},
    },
    {
      desc: "this is an example of the card and can be chnaged with respect to the other changes.", 
      filesize: ".9mb", 
      close: true,
      tag:{ isOpen: true, tagTitle:"Upload", tagColor:"blue",},
    }
  ];
  return (
    <div ref={ref} className=" fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index)=>(
        <Card data={item}  reference={ref}/>
      ))}
      
    </div>
  )
}

export default Foreground
