import React from "react";
import Image from "next/image";
import icon1 from "@/assets/icon1.svg";
import icon2 from "@/assets/icon2.svg";
import icon3 from "@/assets/icon3.svg";
import icon4 from "@/assets/icon4.svg";
import icon5 from "@/assets/icon5.svg";
import icon6 from "@/assets/icon6.svg";
import icon7 from "@/assets/icon7.svg";
import icon8 from "@/assets/icon8.svg";
import floor from "@/assets/floor.svg";
import guest from "@/assets/guest.svg";
import AccommodationStyle from "../styles/accommodation.module.css";

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
  const listItems = [
    {
      icon: icon1,
      name: "Shared",
    },
    {
      icon: icon2,
      name: "Shared",
    },
    {
      icon: icon3,
      name: "Shared",
    },
    {
      icon: icon4,
      name: "Shared",
    },
  ];
  const listItemsPrivate = [
    {
      icon: icon1,
      name: "Private",
    },
    {
      icon: icon2,
      name: "Private",
    },
    {
      icon: icon3,
      name: "Private",
    },
    {
      icon: icon4,
      name: "Private",
    },
  ];

  const card2Detail = [
    {
      icon: icon5,
      name: "Breakfast",
      value: "80 Kč",
    },
    {
      icon: icon6,
      name: "Half board",
      value: "160 Kč",
    },
    {
      icon: icon6,
      name: "Full Board",
      value: "240 Kč",
    },
  ];

  const card3Detail = [
    {
      icon: icon7,
      rule: {
        name: "Transport",
        specification: "VW Transporter, max. 8 people",
      },
      value: "10 Kč/km",
    },
    {
      icon: icon8,
      rule: { name: "Laundry", specification: "Max. 7kg" },
      value: "150 Kč",
    },
    {
      icon: icon3,
      rule: { name: "Borrowing TV", specification: "Only for Tourist Room" },
      value: "50 Kč/day",
    },
  ];
  return (
    <div className={AccommodationStyle.cards}>
      <div className={AccommodationStyle.card}>
        <CardHeader headerText="Room Type" />
        <div className={AccommodationStyle.card_body}>
          <div>
            <h3>Tourist</h3>
            <div>
              {listItems.map((item, index) => (
                <ServiceDetail key={index} item={item} />
              ))}
            </div>
          </div>
          <div>
            <h3>Standard</h3>
            <div>
              {listItemsPrivate.map((item, index) => (
                <ServiceDetail key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* the second cars endpoint */}
      <div className={AccommodationStyle.card}>
        <CardHeader headerText="Meal" />
        <p>
          Only for group consisting of 20 people or more – need to order in
          advance
        </p>
        <div className={AccommodationStyle.card_body2}>
          {card2Detail.map((item, index) => (
            <ServiceDetail2 item={item} key={index} />
          ))}
        </div>
      </div>

      {/* the third card endpoint */}
      <div className={AccommodationStyle.card}>
        <CardHeader headerText="Other services" />
        {card3Detail.map((item, index) => (
          <ServiceDetail3 key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const CardHeader = ({ headerText }) => (
  <h1 className={AccommodationStyle.header_text}>{headerText}</h1>
);

const Detail = () => {
  const standardList = [
    { value: "500 Kč*", standard: "Tourist" },
    { value: "600 Kč*", standard: "Standard" },
  ];

  return (
    <div className={AccommodationStyle.detail}>
      <div>
        <DetailHeader detailHeaderText="Ground Floor" />
        <p>
          first floor - 30 beds, meeting room and kitchen - wheelchair
          accessible.
        </p>
        <div className={AccommodationStyle.floor_card}>
          <Image src={floor} alt="picture of the floor" />
          <Room />
          <Line />
          {standardList.map((item, index) => (
            <ValuePerStandard key={index} item={item} />
          ))}
          <BookAvailable />
        </div>
      </div>

      <div>
        <DetailHeader detailHeaderText="First Floor" />

        <p>
          ground floor - 30 beds, meeting room and kitchen - wheelchair
          accessible.
        </p>
        <div className={AccommodationStyle.floor_card}>
          <Image src={floor} alt="picture of the floor" />
          <Room />
          <Line />
          {standardList.map((item, index) => (
            <ValuePerStandard key={index} item={item} />
          ))}
          <BookAvailable />
        </div>
      </div>
      <div>
        <DetailHeader detailHeaderText="INFORMATION NOTICE" />
        <p>
          According to the Sales Registration Act, the seller is obliged to
          issue a receipt to the buyer. At the same time, he is obliged to
          register the received sales with the tax administrator online, within
          48 hours in the event of a technical failure
        </p>
        <p>
          *Prices do not include city tax 20CZK per person per day). This tax
          does not apply to guests under 18 or over 65 years of age. Valid from
          1.1. 2022.
        </p>
      </div>
    </div>
  );
};

const DetailHeader = ({ detailHeaderText }) => (
  <h1 className={AccommodationStyle.detail_header}>{detailHeaderText}</h1>
);

const ServiceDetail = ({ item }) => (
  <div className={AccommodationStyle.list}>
    <Image
      src={item.icon}
      width="auto"
      height="auto"
      alt="picture of the service"
    />
    <span>{item.name}</span>
  </div>
);

const ServiceDetail2 = ({ item }) => {
  return (
    <div className={AccommodationStyle.list2} key={item.name}>
      <ServiceDetail item={{ icon: item.icon, name: item.name }} />
      <span className={AccommodationStyle.list2_p}>{item.value}</span>
    </div>
  );
};

const ServiceDetail3 = ({ item }) => {
  return (
    <div className={AccommodationStyle.list2}>
      <div className={AccommodationStyle.list}>
        <Image
          src={item.icon}
          width="auto"
          height="auto"
          alt="picture of the service"
        />
        <Detail3 rule={item.rule} />
      </div>
      <span className={AccommodationStyle.list2_p}>{item.value}</span>
    </div>
  );
};

const Detail3 = ({ rule }) => (
  <span className={AccommodationStyle.spans}>
    <span>{rule.name}</span>
    <span>{rule.specification}</span>
  </span>
);

const Room = () => {
  return (
    <div className={AccommodationStyle.detail_cards}>
      <span>1 Bed Room</span>
      <div>
        <span>1</span>
        <Image src={guest} height="auto" width="auto" alt="picture of gust" />
      </div>
    </div>
  );
};

const Line = () => {
  return <div className={AccommodationStyle.line}></div>;
};

const ValuePerStandard = ({ item }) => {
  return (
    <div className={AccommodationStyle.detail_cards}>
      <span>{item.value}</span>
      <span>{item.standard}</span>
    </div>
  );
};

const BookAvailable = () => {
  return (
    <div className={AccommodationStyle.detail_cards}>
      <select>
        <option>Short-term Stay (1-6 Days)</option>
      </select>
      <button>Book Now</button>
    </div>
  );
};
