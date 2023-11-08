/* eslint-disable react/no-unescaped-entities */
import React from "react";
import footerStyle from "@/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import logo2 from "@/assets/logo2.svg";
import vector from "@/assets/vector.svg";
import facebook from "@/assets/facebook.svg";

export default function footer() {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.card}>
        <Link href="/">
          <Image
            src={logo}
            width="100"
            height="80"
            alt="picture of the brand"
          />
          <Image
            src={logo2}
            width="80"
            height="auto"
            alt="picture of the brand"
          />
        </Link>
      </div>
      <div className={footerStyle.card}>
        <div>
          <p className={footerStyle.topography}>Follow Us</p>
          <Link href="https://instagram.com">
            <Image
              src={vector}
              width="20"
              height="20"
              alt="picture of instagram"
            />
            <span className={footer.topography}>pensionatrium</span>
          </Link>
          <Link href="https://facebook.com">
            <Image
              src={facebook}
              width="20"
              height="20"
              alt="picture of location"
            />
            <span className={footer.topography}>pensionatriumcz</span>
          </Link>
        </div>
      </div>

      <div className={footerStyle.card}>
        <div>
          <p className={footer.topography}>Pension Atrium</p>
          <Link href="" className={footerStyle.topography}>
            Žižkova 504 <br />
            541 01 - Trutnov{" "}
          </Link>
          <Link href="" className={footerStyle.topography}>
            50°33'39.393"N, <br />
            15°54'15.424"E
          </Link>
        </div>
      </div>
      <div className={footerStyle.card}>
        <div>
          <p className={footerStyle.topography}>Zdeněk Plecháč</p>
          <Link href="">
            penzionatrium@seznam.cz
            <br /> plechac@zskomtu.cz
          </Link>
          <Link href="http://penziontrutnov.cz/">
            tel.: (+420) 731 415 455 <br />
            www.penziontrutnov.cz
          </Link>
        </div>
      </div>
    </footer>
  );
}
