import React from "react";
import Image from "next/image";
import data from "./data.json";
import pic from "@/assets/pic.svg";
import pic1 from "@/assets/pic1.svg";
import pic2 from "@/assets/pic2.svg";
import pic3 from "@/assets/pic3.svg";
import pic4 from "@/assets/pic4.svg";
import pic5 from "@/assets/pic5.svg";
import contentStyle from "@/styles/surroundings.module.css";

const pics = [pic, pic1, pic2, pic3, pic4, pic5];

export default function page() {
  return (
    <div className={contentStyle.page}>
      <h1 className={contentStyle.main_heading}>Surroundings</h1>
      <ContentCards />
    </div>
  );
}

const ContentCards = () => {
  return (
    <div className={contentStyle.page}>
      {data.items.map((item, index) => (
        <ContentCard item={item} index={index} key={index} />
      ))}
    </div>
  );
};

const ContentCard = ({ item, index }) => {
  return (
    <div className={contentStyle.card}>
      <Image
        src={pics[index]}
        height="auto"
        width="100%"
        alt="picture of park"
      />
      <div>
        <h1>{item.content.title}</h1>
        <p>{item.content.detail}</p>
      </div>
    </div>
  );
};
