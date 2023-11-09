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
    </div>
    <div>
      <DetailHeader detailHeaderText="First Floor" />
    </div>
    <div>
      <DetailHeader detailHeaderText="INFORMATION NOTICE" />
    </div>
  </div>
);

const DetailHeader = ({ detailHeaderText }) => (
  <h1 className={AccommodationStyle.detail_header}>{detailHeaderText}</h1>
);
