export default function Logo({logo, logoDescrition}) {
    return (
        <img className="w-24 m-auto" src={logo} alt={logoDescrition} />
    )
}