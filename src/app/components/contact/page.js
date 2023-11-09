import React from "react";
import contactUs from "@/styles/contact.module.css";
export default function page() {
  return (
    <div>
      <h2 className={contactUs.heading}>Contact Us</h2>
      <div className={contactUs.body}>
        <MapFrame />
        <ContactFrom />
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
      src="https://maps.google.com/maps?q=zizkova&t=&z=20&ie=UTF8&iwloc=&output=embed"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
    ></iframe>
  </div>
);

const ContactFrom = () => {
  return (
    <div className={contactUs.contact_form}>
      <From />
      <ContactInfo />
    </div>
  );
};
const From = () => {
  return (
    <form className={contactUs.form}>
      <div>
        <div>Name</div>
        <input type="text" />
      </div>
      <div>
        <div>Email</div>
        <input type="text" />
      </div>
      <div>
        <div>Message</div>
        <textarea type="text" />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

const ContactInfo = () => {
  return <div></div>;
};
