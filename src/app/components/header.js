import React from "react";
import Image from "next/image";
import Link from "next/link";
import headerStyle from "@/styles/header.module.css";
import logo from "@/assets/logo.svg";
import logo2 from "@/assets/logo2header.svg";
import flag from "@/assets/united-kingdom-flag.svg";
import icon from "@/assets/icon.svg";
import options from "@/assets/options.svg";

export default function header() {
  return (
    <nav className={headerStyle.header}>
      <Link href="/">
        <Image src={logo} width="auto" height="55" alt="picture of the brand" />
        <Image
          src={logo2}
          width="auto"
          height="55"
          alt="picture of the brand"
        />
      </Link>
      <div>
        <Link href="">Accommodation</Link>
        <Link href="">Services</Link>
        <Link href="">Surroundings</Link>
        <Link href="">Contact</Link>
        <div>
          <Image
            src={flag}
            height="auto"
            width="auto"
            alt="picture language options"
          />
          <span>EN</span>
          <Image
            src={options}
            height="auto"
            width="auto"
            alt="picture language options"
          />
        </div>
        <button className={headerStyle.button}>
          <Image src={icon} width="auto" height="auto" alt="picture booking" />
          Book Now
        </button>
      </div>
    </nav>
  );
}
