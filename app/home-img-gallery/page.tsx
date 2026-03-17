import Image from "next/image";

const images = [
  // { src: "/img/home/1.jpeg", alt: "1", type: "tall" },
  // { src: "/img/home/2.jpeg", alt: "2", type: "rect" },
  // { src: "/img/home/3.jpg", alt: "3" , type: "smallTall"},
  // { src: "/img/home/4.jpeg", alt: "4", type:"smallTall" },
  // { src: "/img/home/5.jpg", alt: "5",  type:"tall"  },
  // { src: "/img/home/6.jpg", alt: "6", type: "rect" },
  // { src: "/img/home/7.jpeg", alt: "7", type: "samllRect" },
  // { src: "/img/home/8.jpg", alt: "8", type: "samllRect" },
  // { src: "/img/home/9.jpeg", alt: "9" },
  // { src: "/img/home/10.jpg", alt: "10" },
  // { src: "/img/home/11.jpg", alt: "11",type:"tall" },
  // { src: "/img/home/12.jpg", alt: "12", type: "rect"  },
  // { src: "/img/home/13.jpg", alt: "13", type: "rect" },
  // { src: "/img/home/14.jpg", alt: "14", type: "tall" }

 
  { src: "/img/home/964A0541.jpg", alt: "2", type: "rect" },
  { src: "/img/home/JSK_7658.jpg", alt: "3" , type: "smallTall"},
  { src: "/img/home/ZR5_3955.jpg", alt: "4", type: "smallTall" },
    { src: "/img/home/CAM12408.jpg", alt: "1", type: "tall" },
   { src: "/img/home/CAM34622.jpg", alt: "14", type: "tall" },
  { src: "/img/home/JSK_1767.jpg", alt: "5",  type:"tall"  },
  { src: "/img/home/1b.jpg", alt: "6", type: "rect" },
  { src: "/img/home/MND_0777.jpg", alt: "7", type: "rect" },
 
  { src: "/img/home/1a.jpg", alt: "11",type:"tall" },
  { src: "/img/home/CN1A9238.jpg", alt: "12", type: "rect"  },
  { src: "/img/home/MND_0805.jpg", alt: "13", type: "rect" },
 
   { src: "/img/home/JSK_8543.jpg", alt: "14", type: "tall" }
];

export default function HorizontalImageGrid() {
  return (
    <div className="grid-wrapper">
      
        {images.map((img, i) => (
          <div
            key={i}
            className={`${img.type}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      
    </div>
  );
}
