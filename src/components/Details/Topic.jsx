import TextNormal from "../Texts/Text";
import TextBolding from "../Texts/TextBolding";

export default function Topic({topic, text}) {
    return (
        <div>
            <TextBolding text={topic}/>
            <TextNormal text={text}/>
        </div>
    )
}