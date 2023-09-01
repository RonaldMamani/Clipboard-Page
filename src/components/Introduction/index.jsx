import ButtonIOS from "./ButtonIOS";
import ButtonMac from "./ButtonMac";
import Logo from "./Logo";
import TextPrincipal from "../Texts/TextPrincipal";

import logo from "../../assets/images/logo.svg"
import TextNormal from "../Texts/Text";

export default function Introduction() {
    return (
        <section className="
            px-7 py-14 text-center flex flex-col gap-6
            md:px-28 md:py-20
            ">
            <Logo logo={logo} logoDescrition="Logotipo do Clipboard"/>
            <TextPrincipal text="A history of everything you copy" />
            <TextNormal text="Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices." />
            <div className="
                flex flex-col gap-3
                md:flex-row justify-center
                ">
                <ButtonIOS content="Download for IOS" />
                <ButtonMac content="Download for Mac" />
            </div>
        </section>
    )
}