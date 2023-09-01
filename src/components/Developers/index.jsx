import ButtonIOS from "../Introduction/ButtonIOS";
import ButtonMac from "../Introduction/ButtonMac";
import TextNormal from "../Texts/Text";
import TextSecundary from "../Texts/TextSecundary";
import Companies from "./Companies";

import Google from "../../assets/images/logo-google.png"
import Hp from "../../assets/images/logo-hp.png"
import IBM from "../../assets/images/logo-ibm.png"
import Microsoft from "../../assets/images/logo-microsoft.png"
import Vector from "../../assets/images/logo-vector-graphics.png"

export default function Developers() {
    return (
        <section className="px-6 py-10 flex flex-col gap-16">
            <div className="
                flex flex-col gap-14
                md:grid md:grid-cols-5
                ">
                <Companies ImageCompany={Google} NameCompany="Logo da Google" />
                <Companies ImageCompany={IBM} NameCompany="Logo da IBM" />
                <Companies ImageCompany={Microsoft} NameCompany="Logo da Microsoft" />
                <Companies ImageCompany={Hp} NameCompany="Logo da HP" />
                <Companies ImageCompany={Vector} NameCompany="Logo da Vector Graphics" />
            </div>
            <div className="text-center flex flex-col gap-7 my-16">
                <TextSecundary text="Clipboard for IOS and Mac OS" />
                <TextNormal text="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard." />
                <div className="
                    flex flex-col gap-3
                    md:flex-row md:justify-center
                    ">
                    <ButtonIOS content="Download for IOS" />
                    <ButtonMac content="Download for Mac" />
                </div>
            </div>
        </section>
    )
}