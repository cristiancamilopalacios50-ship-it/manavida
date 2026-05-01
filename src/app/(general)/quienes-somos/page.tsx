
import { Suspense } from "react";
import Spinner from "@/components/UI/spinner/spinner";
import { getAbout } from "@/lib/api";
import RichText from "@/components/UI/richText/richText";
export const metadata = {
    title: "Sobre Nosotros | Mana Vida",
    description:
        "Conoce Mana Vida, una tienda enfocada en bienestar y cuidado personal. Trabajamos con compromiso, atención cercana y productos seleccionados para apoyar una mejor calidad de vida.",
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