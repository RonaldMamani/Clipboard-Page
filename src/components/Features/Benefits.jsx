import TextNormal from "../Texts/Text";
import TextBolding from "../Texts/TextBolding";

export default function Benefits({Image, ImageDtl, Title, Text}) {
    return (
        <div className="flex flex-col gap-5 text-center items-center">
            <img src={Image} alt={ImageDtl} />
            <TextBolding text={Title} />
            <TextNormal text={Text} />
        </div>
    )
}