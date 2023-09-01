import MonitorImage from "./MonitorImage";
import TextSecundary from "../Texts/TextSecundary";
import Topic from "./Topic";

import Monitor from "../../assets/images/image-computer.png"
import TextNormal from "../Texts/Text";

export default function Details() {
    return (
        <section className="
            px-7 py-14 flex flex-col gap-8 text-center
            md:px-40
            ">
            <div className="
                flex flex-col gap-6
                md:px-16
                ">
                <TextSecundary text="Keep track of your snippets" />
                <TextNormal text="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything." />
            </div>
            <div className="
                flex flex-col gap-10 mt-4
                md:grid md:grid-cols-5 md:items-center
                ">
                <div className="md:col-span-3">
                    <MonitorImage imagem={Monitor} DetailImage="Monitor de Computador" />
                </div>
                <div className="
                    flex flex-col gap-10 text-center
                    md:text-start md:col-span-2
                    ">
                    <Topic topic="Quick Search" text="Easily search your snippets by content, category, web address, application, and more." />
                    <Topic topic="Cloud Sync" text="Instantly saves and syncs snippets across all your devices." />
                    <Topic topic="Complete History" text="Retrieve any snippets from the first moment you started using the app." />
                </div>
            </div>
        </section>
    )
}