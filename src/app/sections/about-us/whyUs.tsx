"use client";
import React, { useCallback, useEffect, useState } from "react";

// Starting point - 3561

export default function WhyUs() {
  var expandDiv = document.getElementById("expand");
  var expandded = document.getElementsByClassName("demo-box");
  var speed = 5;

  function expanding() {
    var scrolltop = window.scrollY; // get number of pixels document has scrolled vertically
    var scrollAndSpeed = scrolltop / speed;
    //Expand using transform
    //expandDiv.style.transform = "scalex( " + Math.min(Math.max(scrollAndSpeed, 1), 10) + ")";

    //Or using width
    if (expandDiv)
      expandDiv.style.width = Math.min(Math.max(scrollAndSpeed, 20), 95) + "%";
  }

  window.addEventListener(
    "scroll",
    function () {
      // on page scroll
      requestAnimationFrame(expanding); // call parallaxing()
    },
    false
  );

  return (
    <div className="w-full h-max  bg-gradient-to-b from-background-900 via-background-700 to-background-600">
      <div className="initial-writeup text-center text-white w-2/6 pt-5 mx-auto bg-red-400 ">
        <h2 className="text-6xl font-semibold  mb-5">Why us?</h2>
        <span className="text-medium w-2/3">
          We help our partners connect their passion with technology and
          innovation, believing that our success is defined by their success.
        </span>
      </div>
      <div className="h-screen text-center pt-52 text-3xl text-white">
        {/* <RevealOnScroll> */}
        <div
          id="expand"
          className="demo-box bg-cyan-400 w-52 text-sm py-5 px-2 "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          inventore sint voluptatibus,
        </div>
        {/* </RevealOnScroll> */}
        {/* <RevealOnScroll>
          <h2>Nice</h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2>Meeting</h2>
        </RevealOnScroll> */}
      </div>
    </div>
  );
}
