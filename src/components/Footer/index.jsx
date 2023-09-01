import Logo from "../Introduction/Logo";
import Links from "./Links";
import Social from "./Social";

import Facebook from "../../assets/images/icon-facebook.svg"
import Twitter from "../../assets/images/icon-twitter.svg"
import Instagram from "../../assets/images/icon-instagram.svg"
import logo from "../../assets/images/logo.svg"

export default function Footer() {
    return (
        <footer className="
            px-6 py-10 flex flex-col gap-7 text-center
            md:flex-row md:justify-around md:items-start
            ">
            <div className="
                w-16 m-auto my-6
                md:m-5
                ">
                <Logo logo={logo} logoDescrition="Logo da Clipboard" />
            </div>
            <div className="
                flex flex-col gap-6
                md:grid md:grid-cols-3 md:text-start
                ">
                <Links text="FAQs" />
                <Links text="Contact Us" />
                <Links text="Privacy Policy" />
                <Links text="Press Kit" />
                <Links text="Install Guide" />
            </div>
            <div className="flex items-center justify-center gap-10 py-6">
                <Social socialImage={Facebook} NameSocial="Icone do Facebook" />
                <Social socialImage={Twitter} NameSocial="Icone do Twitter" />
                <Social socialImage={Instagram} NameSocial="Icone do Instagram" />
            </div>
        </footer>
    )
}