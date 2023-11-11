import React from "react";
import AccommodationStyle from "@/styles/accommodation.module.css";

export default function page() {
  return (
    <div className={AccommodationStyle.parent}>
      <h1 className={AccommodationStyle.main_heading}>Our Accommodation</h1>
      <Cards />
      <Detail />
    </div>
  );
}

const Cards = () => {
  return (
    <div className={AccommodationStyle.cards}>
      <div className={AccommodationStyle.card}>
        <CardHeader headerText="Room Type" />
      </div>
      <div className={AccommodationStyle.card}>
        <CardHeader headerText="Meal" />
      </div>
      <div className={AccommodationStyle.card}>
        <CardHeader headerText="Other services" />
      </div>
    </div>
  );
};

const CardHeader = ({ headerText }) => (
  <h1 className={AccommodationStyle.header_text}>{headerText}</h1>
);

const Detail = () => (
  <div className={AccommodationStyle.detail}>
    <div>
      <DetailHeader detailHeaderText="Ground Floor" />
      <p>
        first floor - 30 beds, meeting room and kitchen - wheelchair accessible.
      </p>
    </div>
    <div>
      <DetailHeader detailHeaderText="First Floor" />
      <p>
        ground floor - 30 beds, meeting room and kitchen - wheelchair
        accessible.
      </p>
    </div>
    <div>
      <DetailHeader detailHeaderText="INFORMATION NOTICE" />
      <p>
        According to the Sales Registration Act, the seller is obliged to issue
        a receipt to the buyer. At the same time, he is obliged to register the
        received sales with the tax administrator online, within 48 hours in the
        event of a technical failure
      </p>
      <p>
        *Prices do not include city tax 20CZK per person per day). This tax does
        not apply to guests under 18 or over 65 years of age. Valid from 1.1.
        2022.
      </p>
    </div>
  </div>
);

const DetailHeader = ({ detailHeaderText }) => (
  <h1 className={AccommodationStyle.detail_header}>{detailHeaderText}</h1>
);
