import TextNormal from "../Texts/Text";
import TextSecundary from "../Texts/TextSecundary";
import Benefits from "./Benefits";
import DeviceImage from "./DeviceImage";

import Device from "../../assets/images/image-devices.png"
import Blacklist from "../../assets/images/icon-blacklist.svg"
import Preview from "../../assets/images/icon-preview.svg"
import TeXT from "../../assets/images/icon-text.svg"

export default function Features() {
    return (
        <section className="
            px-6 py-10 text-center flex flex-col gap-8
            md:items-center md:py-10
            ">
            <TextSecundary text="Access Clipboard Anywhere" />
            <TextNormal text="Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks." />
            <div className="py-7">
                <DeviceImage Imagem={Device} ImagemDetails="Imagem da Tela de Celular e Desktop" />
            </div>
            <div className="flex flex-col gap-5 py-7">
                <TextSecundary text="Supercharge your workflow" />
                <TextNormal text="We’ve got the tools to boost your productivity." />
            </div>
            <div className="
                flex flex-col gap-10 py-7 items-center
                md:grid md:grid-cols-3 md:gap-5 md:px-16
                ">
                <Benefits Image={Blacklist} ImageDtl="Icone de Blacklist" Title="Create Blacklists" Text="Ensure sensitive information never makes its way to your clipboard by excluding certain sources." />
                <Benefits Image={TeXT} ImageDtl="Icone de Text" Title="Main text snippets" Text="Remove unwanted formatting from copied text for a consistent look." />
                <Benefits Image={Preview} ImageDtl="Icone de Preview" Title="Sneek preview" Text="Quick preview of all snippets on your Clipboard for easy access." />
            </div>
        </section>
    )
}