import Image from "next/image"


export default function Spinner() {
    return (
        <div className="w-full font-['Manrope'] text-center py-10 text-(--primary)">
            <Image src="/spinner.svg" alt="Loading..." width={50} height={50} className="mx-auto" />
            <p>Cargando...</p>
        </div>
    )

}

