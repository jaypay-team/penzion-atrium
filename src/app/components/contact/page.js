import React from "react";
import contactUs from "@/styles/contact.module.css";
import Image from "next/image";
import location from "@/assets/location1.svg";
import call from "@/assets/call-calling1.svg";
import email from "@/assets/sms1.svg";
import data from "./data.json";

const icons = [
  [location, call],
  [email, email],
];

export default function page() {
  return (
    <div>
      <h2 className={contactUs.heading}>Contact Us</h2>
      <div className={contactUs.body}>
        <MapFrame />
        <Form />
        <ContactInfo />
      </div>
    </div>
  );
}

const MapFrame = () => (
  <div>
    <iframe
      width="100%"
      height="100%"
      id="gmap_canvas"
      src="https://www.google.com/maps/embed/v1/place?q=Žižkova+504,+541+01+Trutnov+1-Horní+Předměstí,+Czechia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
    ></iframe>
  </div>
);

const Form = () => {
  return (
    <form className={contactUs.form}>
      <h3>Leave Us A Message</h3>
      <div>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" placeholder="Enter your email" />
      </div>
      <div>
        <label>Message</label>
        <textarea type="text" placeholder="write your message here" />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

const ContactInfo = () => {
  return (
    <div className={contactUs.infos}>
      {data.items.map((item, index) => (
        <InfoCard
          key={index}
          headingTitle={item.heading}
          content={item.content}
          icons={icons[index]}
        />
      ))}
    </div>
  );
};

const InfoCard = ({ headingTitle, content, icons }) => (
  <div className={contactUs.info_card}>
    <h4>{headingTitle}</h4>
    <div className={contactUs.flex}>
      <Image
        src={icons[0]}
        width="auto"
        height="auto"
        alt="picture of info "
        background="black"
      />
      <span>{content[0]}</span>
    </div>
    <div className={contactUs.flex}>
      <Image src={icons[1]} width="auto" height="auto" alt="picture of info " />
      <span>{content[1]}</span>
    </div>
  </div>
);
