
import { Suspense } from "react";
import Spinner from "@/components/UI/spinner/spinner";
import { getAbout } from "@/lib/api";
import RichText from "@/components/UI/richText/richText";
export const metadata = {
    title: "Suplementos naturales en el Valle del Cauca y Colombia envios a nivel nacional | Maná de Vida",
    description:
        "Descubre suplementos naturales en el Valle del Cauca y Colombia para mejorar tu salud y bienestar.",
};
const about = await getAbout()
const aboutData = about?.data

const title = aboutData?.title

const textBlock = aboutData?.blocks.find(
    (block) => block.__component === 'shared.rich-text'
)

const mediaBlock = aboutData?.blocks.find(
    (block) => block.__component === 'shared.media'
)

const description = textBlock?.body
const image = mediaBlock?.file

export default function AboutPage() {
    return (
        <div className="pt-20">

            <Suspense fallback={<Spinner />}>
                <RichText title={title || ""} description={description || ""} image={image} />
            </Suspense>


        </div>
    );
}