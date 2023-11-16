"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import headerStyle from "@/styles/header.module.css";
import logo from "@/assets/logo.svg";
import logo2 from "@/assets/logo2header.svg";
import flag from "@/assets/GB.svg";
import icon from "@/assets/icon.svg";
import menu from "@/assets/icon_menu.svg";
import cancel from "@/assets/cancel.svg";

export default function Header() {
  const [open, seOpen] = useState(false);
  return (
    <nav className={headerStyle.header}>
      <div>
        <Link href="/">
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
        <Link href="/accommodation">Accommodation</Link>
        <Link href="/services">Services</Link>
        <Link href="/surroundings">Surroundings</Link>
        <Link href="/contact">Contact</Link>
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
      {!open ? (
        <Image
          src={menu}
          className={headerStyle.menu}
          alt="picture of menu"
          onClick={() => seOpen(!open)}
        />
      ) : (
        <Image
          src={cancel}
          className={headerStyle.menu}
          alt="picture of cancel"
          onClick={() => seOpen(!open)}
        />
      )}
      {open && <MenuOpen />}
    </nav>
  );
}

const MenuOpen = () => (
  <div className={headerStyle.menu_open}>
    <div>
      <Link href="/components/accommodation">Accommodation</Link>
      <Link href="/components/services">Services</Link>
      <Link href="/components/surroundings">Surroundings</Link>
      <Link href="/components/contact">Contact</Link>
    </div>

    <div>
      <select>
        <option>🇬🇧 EN</option>
      </select>

      <button className={headerStyle.button}>
        <Image src={icon} width="auto" height="auto" alt="picture booking" />
        Book Now
      </button>
    </div>
  </div>
);
