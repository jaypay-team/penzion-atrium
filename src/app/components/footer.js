/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Link from "next/link";
import footerStyle from "@/styles/footer.module.css";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import logo2 from "@/assets/logo2.svg";
import TRUTNOV from "@/assets/TRUTNOV.svg";
import instagram from "@/assets/instagram.svg";
import facebook from "@/assets/facebook.svg";
import location from "@/assets/location.svg";
import call from "@/assets/call-calling.svg";
import sms from "@/assets/sms.svg";

export default function Footer() {
  return (
    <nav className={footerStyle.footer}>
      <FooterLogo />
      <ContactInfo />
      <ContactEmail />
    </nav>
  );
}

const FooterLogo = () => (
  <div className={footerStyle.initial}>
    <div className={footerStyle.logos}>
      <Link href="/">
        <Image src={logo} width="45" height="auto" alt="picture logo" />
        <Image src={logo2} width="45" height="auto" alt="picture logo" />
      </Link>
      <Image src={TRUTNOV} width="90" height="auto" alt="picture logo" />
    </div>
    <div className={footerStyle.social}>
      <Link href="https://facebook.com" target="_blank">
        {" "}
        <Image src={facebook} width="40" height="auto" alt="picture logo" />
      </Link>
      <Link href="https://instagram.com" target="_blank">
        <Image src={instagram} width="auto" height="auto" alt="picture logo" />
      </Link>
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <div className={footerStyle.contact}>
      <Heading headingText="Contact info" />
      <div className={footerStyle.contact}>
        <div className={footerStyle.contact_info}>
          <Image
            src={location}
            width="auto"
            height="auto"
            alt="picture location/map"
          />
          <Link
            href="https://maps.app.goo.gl/zJ8BCQWUZh5jzbom6"
            target="_blank"
          >
            541 01 - Trutnov, Žižkova 504
          </Link>
        </div>
        <div className={footerStyle.contact_info}>
          <Image
            src={call}
            width="auto"
            height="auto"
            alt="picture call/phone"
          />
          <span>tel.: (+420) 731 415 455</span>
        </div>
      </div>
    </div>
  );
};

const ContactEmail = () => {
  return (
    <div className={footerStyle.contact}>
      <Heading headingText="Emails" />
      <div className={footerStyle.contact}>
        <div className={footerStyle.contact_info}>
          <Image
            src={sms}
            width="auto"
            height="auto"
            alt="picture location/map"
          />
          <span>penzionatrium@seznam.cz</span>
        </div>
        <div className={footerStyle.contact_info}>
          <Image
            src={sms}
            width="auto"
            height="auto"
            alt="picture call/phone"
          />
          <span>plechac@zskomtu.cz</span>
        </div>
      </div>
    </div>
  );
};

const Heading = ({ headingText }) => {
  return <p className={footerStyle.heading}>{headingText}</p>;
};
