import React from "react";
import Image from "next/image";
import Link from "next/link";
import service from "@/assets/service_img.svg";
import service1 from "@/assets/service_img1.svg";
import service2 from "@/assets/service_img2.svg";
import ski from "@/assets/ski.svg";
import sport from "@/assets/sport.svg";
import sport1 from "@/assets/sport1.svg";
import sport3 from "@/assets/sport3.svg";
import sport4 from "@/assets/sport4.svg";
import sport5 from "@/assets/sport5.svg";
import sport6 from "@/assets/sport6.svg";
import sport7 from "@/assets/sport7.svg";
import sport8 from "@/assets/sport8.svg";
import sport9 from "@/assets/sport9.svg";
import icon5 from "@/assets/icon5.svg";
import icon6 from "@/assets/icon6.svg";
import serviceStyle from "@/styles/services.module.css";

export default function page() {
  const listItem = [
    { icon: icon5, activity: "Breakfast", value: "80 Kč" },
    { icon: icon6, activity: "Half board", value: "160 Kč" },
    { icon: icon6, activity: "Full Board", value: "240 Kč" },
  ];

  const listItem2 = [
    { icon: sport, activity: "Sports Hall" },
    { icon: sport, activity: "Multipurpose gym" },
    { icon: sport1, activity: "Gymnastics hall" },
    { icon: sport3, activity: "Fitness Gym" },
    { icon: sport4, activity: "Climbing Wall" },
    { icon: sport5, activity: "Athletic stadium" },
    { icon: sport6, activity: "Multipurpose court" },
    { icon: sport7, activity: "Beach volleyball court" },
    { icon: sport8, activity: "Asphalt circuit" },
    { icon: sport9, activity: "Cross-country ski trails" },
  ];

  const listItem3 = [
    { icon: ski, url: "#", activity: "Ski park Mladé Buky (8 km)" },
    {
      icon: ski,
      url: "https://www.cerna-hora.cz/zima/",
      activity: "Ski resort Černá Hora (14 km)",
    },
    {
      icon: ski,
      url: "https://petrikovice.cz/",
      activity: "Ski area Petříkovice (9 km)",
    },
    {
      icon: ski,
      url: "https://www.skizacler.com/",
      activity: "Ski area Žacléř (15 km)",
    },
  ];

  return (
    <div>
      <h1 className={serviceStyle.heading}>Our Services</h1>
      <div className={serviceStyle.body}>
        <div>
          <Image src={service} alt="picture of service/bedrooms" />
          <MealDetailLayout
            item={{
              heading: "Meals",
              paragraph:
                "Only for group consisting of 20 people or more – need to order in advance",
            }}
          >
            {listItem.map((item, index) => (
              <MealDetail key={index} item={item} />
            ))}
          </MealDetailLayout>
        </div>

        <div>
          <Image src={service1} alt="picture of service/bedrooms" />
          <ServiceDetail
            item={{
              heading: "Sports Centre of Komensky School",
              paragraph:
                "In the sports centre of Komenský School, which is located in the very neighbourhood of our pension (map), we offer to our guests:",
            }}
          >
            <div className={serviceStyle.sport_list}>
              {listItem2.map((item, index) => (
                <SportDetail key={index} item={item} />
              ))}
            </div>
          </ServiceDetail>
        </div>
        <div>
          <Image src={service2} alt="picture of service/bedrooms" />
          <ServiceDetail
            item={{
              heading: "Ski Resorts close to Trutnov",
              paragraph:
                "For group consisting of 20 people or more we offer free ski bus to these resorts (map):",
            }}
          >
            {listItem3.map((item, index) => (
              <SkiDetail key={index} item={item} />
            ))}
          </ServiceDetail>
        </div>
      </div>
    </div>
  );
}

const MealDetailLayout = ({ item, children }) => {
  return (
    <div className={serviceStyle.meal_detail}>
      <h4>{item.heading}</h4>
      <p>{item.paragraph}</p>
      {children}
      <p>Snacks and drinks at the reception desk (18:00–21:00)</p>
      <p>Self cooking (induction cooker, microwave oven, dishes available)</p>
      <p>Dining room for 35 people</p>
    </div>
  );
};

const ServiceDetail = ({ item, children }) => {
  return (
    <div className={serviceStyle.detail}>
      <h4>{item.heading}</h4>
      <p>{item.paragraph}</p>
      {children}
    </div>
  );
};

/**
 * then it is ideal to to construct different child for these details
 */

const SkiDetail = ({ item }) => {
  return (
    <div className={serviceStyle.list}>
      <Image src={item.icon} alt="picture of ski" />
      <Link href={item.url}>{item.activity}</Link>
    </div>
  );
};

const SportDetail = ({ item }) => {
  return (
    <div className={serviceStyle.list}>
      <Image src={item.icon} alt="picture of ski" />
      <span>{item.activity}</span>
    </div>
  );
};

const MealDetail = ({ item }) => {
  return (
    <div className={serviceStyle.list}>
      <Image src={item.icon} alt="picture of ski" />
      <span>{item.activity}</span>
      <span>{item.value}</span>
    </div>
  );
};
