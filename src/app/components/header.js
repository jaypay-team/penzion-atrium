import React from "react";
import Image from "next/image";
import Link from "next/link";
import headerStyle from "@/styles/header.module.css";
import logo from "@/assets/logo.svg";
import logo2 from "@/assets/logo2header.svg";
import flag from "@/assets/GB.svg";
import icon from "@/assets/icon.svg";

export default function header() {
  return (
    <nav className={headerStyle.header}>
      <div>
        <Link href="">
          <Image
            src={logo}
            width="auto"
            height="55"
            alt="picture of the brand"
          />
          <Image
            src={logo2}
            width="auto"
            height="55"
            alt="picture of the brand"
          />
        </Link>
      </div>

      <div>
        <Link href="/components/accommodation">Accommodation</Link>
        <Link href="">Services</Link>
        <Link href="">Surroundings</Link>
        <Link href="/components/contact">Contact</Link>
      </div>

      <div>
        <div>
          <Image
            src={flag}
            height="24"
            width="24"
            alt="picture language options"
          />
          <span>SV</span>
          <select>
            <option></option>
          </select>
        </div>

        <button className={headerStyle.button}>
          <Image src={icon} width="auto" height="auto" alt="picture booking" />
          Book Now
        </button>
      </div>
    </nav>
  );
}
