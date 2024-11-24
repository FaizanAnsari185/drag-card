import Background from "@/Components/Background";
import Foreground from "@/Components/Foreground";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" relativew-screen h-screen bg-zinc-800">
        <Background />
        <Foreground />
      </div>
    </>
  );
};

export default page;
