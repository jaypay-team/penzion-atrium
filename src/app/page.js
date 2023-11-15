import React from "react";
import Image from "next/image";
import left from "@/assets/left.svg";
import right from "@/assets/right.svg";
import specter from "@/assets/specter.svg";
import homeStyle from "./styles/home.module.css";
import icon from "@/assets/icon.svg";
import list1 from "@/assets/list1.svg";
import list2 from "@/assets/list2.svg";
import list3 from "@/assets/list3.svg";
import list4 from "@/assets/list4.svg";
import service1 from "@/assets/service1.svg";
import service2 from "@/assets/service2.svg";
import service3 from "@/assets/service3.svg";
import service4 from "@/assets/service4.svg";
import service5 from "@/assets/service5.svg";
import service6 from "@/assets/service6.svg";
import service7 from "@/assets/service7.svg";
import service8 from "@/assets/service8.svg";

export default function Home() {
  return (
    <div className={homeStyle.container}>
      <div className={homeStyle.cards}>
        <div>
          <h1>
            Discover <span>Trutnov&#39;</span>s
            <br /> Hidden Gem
          </h1>
          <p>
            Our prime and affordable location near the historical center of
            Trutnov ensures convenience and easy access to all the attractions
            the city has to offer.
          </p>
          <form>
            <div className={homeStyle.form}>
              <label>
                Check-in:
                <br /> <input type="date" placeholder="Check-in Date" />
              </label>

              <label>
                Check-out:
                <br /> <input type="date" placeholder="Check-out Date" />
              </label>
            </div>
            <button type="submit">
              <Image
                src={icon}
                height="auto"
                width="auto"
                alt="picture of booking"
              />
              Book Now
            </button>
          </form>
        </div>

        <div className={homeStyle.specter}>
          <Image src={left} alt="picture left frame" />
          <Image src={specter} alt="picture fixed specter frame" />
          <Image src={right} alt="picture left frame" />
        </div>
      </div>
      <div className={homeStyle.lists}>
        <Image src={list1} alt="picture of home" />
        <Image src={list2} alt="picture of home" />
        <Image src={list3} alt="picture of home" />
        <Image src={list4} alt="picture of home" />
      </div>

      <div className={homeStyle.services}>
        <h2>Our Amenities</h2>
        <div className={homeStyle.service_cards}>
          <div>
            <Image src={service1} width="auto" height="auto" alt="" />

            <span>Free wi-fi</span>
          </div>
          <div>
            <Image src={service2} width="auto" height="auto" alt="" />

            <span>Garden with playground</span>
          </div>
          <div>
            <Image src={service3} width="auto" height="auto" alt="" />

            <span>Beds from 200 Kč (8 €) per night</span>
          </div>
          <div>
            <Image src={service4} width="auto" height="auto" alt="" />

            <span>Free parking</span>
          </div>
          <div>
            <Image src={service5} width="auto" height="auto" alt="" />

            <span>Wheelchair accessible</span>
          </div>
          <div>
            <Image src={service6} width="auto" height="auto" alt="" />

            <span>Close to the bus terminal and train station.</span>
          </div>
          <div>
            <Image src={service7} width="auto" height="auto" alt="" />

            <span>Group discounts and long stay discounts</span>
          </div>
          <div>
            <Image src={service8} width="auto" height="auto" alt="" />

            <span>Kitchen and meeting room with TV</span>
          </div>
        </div>
      </div>
    </div>
  );
}
