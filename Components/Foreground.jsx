"use client"
import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
    const ref = useRef(null);
  const data = [
    {
      desc: "This is the background color of the card that will be displayed",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Downlaod Now", tagColor: "green" },
    },
    {
        desc: "This is the background color of the card that will be displayed",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: false, tagTitle: "Downlaod Now", tagColor: "green" },
      },
      {
        desc: "This is the background color of the card that will be displayed",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
      },
  ];
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-4 flex-wrap">
        {data.map((item, index)=>(
            <Card data={item} reference={ref} key={index}/>
        ))}
      </div>
    </>
  );
};

export default Foreground;
