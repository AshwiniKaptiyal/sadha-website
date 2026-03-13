"use client";

import { useEffect, useState } from "react";
import Header from "./components/header";
import HeroVideo from "./components/herovideo";
 
 
import HorizontalImageGrid from "./home-img-gallery/page";
import Footer from "./components/footer";

const images = [
   { src: "/img/1.jpg", alt: "Flag of India" , type:'tall'},
    { src: "/img/2.jpg", alt: "2" , type:'tall'},
    { src: "/img/3.jpg", alt: "3" },
    { src: "/img/4.jpg", alt: "4", },
    { src: "/img/5.jpg", alt: "5", },
    { src: "/img/6.jpg", alt: "6", },
    { src: "/img/7.jpg", alt: "7", },
    { src: "/img/8.jpg", alt: "8", },
    { src: "/img/9.jpg", alt: "9", },
    { src: "/img/10.jpg", alt: "10", },
    { src: "/img/11.jpg", alt: "11", },
    { src: "/img/12.jpg", alt: "12", },
    { src: "/img/13.jpg", alt: "13", },
    { src: "/img/14.jpg", alt: "14", },
    { src: "/img/15.jpg", alt: "15", },
    { src: "/img/16.jpg", alt: "16", },
    { src: "/img/17.jpg", alt: "17", },
    { src: "/img/18.jpg", alt: "18", },
    { src: "/img/19.jpg", alt: "19", },
];


export default function Home() {

 
  return (
  <> 
  <Header/>
  <HeroVideo/>  
  <HorizontalImageGrid/>
 <Footer/>
        </>
  );
}
