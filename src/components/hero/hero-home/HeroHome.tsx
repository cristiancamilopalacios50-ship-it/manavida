import { getHome } from "@/lib/api";
import HeroHomeClient from "./HeroHomeClient";
import { Suspense } from "react";
import { ComponentError } from "@/components/error-component/componentError";
export default async function HeroHome() {
    const result = await getHome();
    if (!result) {
        return <ComponentError />;
    }
    return (
        <Suspense fallback={<HeroSkeleton />}>
            <HeroHomeClient heroData={result.data} />
        </Suspense>
    );
}

function HeroSkeleton() {
    return (
        <div className="relative min-h-screen w-full bg-muted animate-pulse" />
    );
}
