import Image from "next/image"


export default function Spinner() {
    return (
        <div className="w-full">
            <Image src="/spinner.svg" alt="Loading..." width={50} height={50} className="mx-auto" />
        </div>
    )

}

