
import Image from "next/image";
import styles from "./errorSection.module.css";

export const ComponentError = () => {
    return (
        <section className="flex-grow flex items-center justify-center px-6 py-30 pb/0">
            <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/* Visual */}
                <div className="relative flex justify-center order-2 md:order-1">
                    <div className="relative w-full aspect-square max-w-[320px] bg-surface-container-low rounded-[2rem] flex items-center justify-center overflow-hidden">
                     
                        <Image src="/error.png" alt="Scientific glassware with liquid" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply" data-alt="Minimalist scientific laboratory setting with glass test tubes and subtle bokeh lighting in a clinical white and emerald palette" width={500} height={500} />
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-24 h-24 rounded-full bg-surface-container-highest flex items-center justify-center mb-4">
                                <span
                                    className={`${styles["material-symbols-outlined"]} text-5xl text-emerald-900`}
                                >
                                </span>
                            </div>
                            <div className="w-16 h-1 bg-tertiary-container/30 rounded-full mb-2" />
                            <div className="w-8 h-1 bg-tertiary-container/10 rounded-full" />
                        </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-container/20 backdrop-blur-xl rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div className="space-y-8 order-1 md:order-2">
                    <div className="space-y-4">
                        <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-fixed text-[10px] font-bold tracking-[0.1em] rounded-full uppercase font-label bg-[var(--error)]">
                            Protocol Error 503
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface font-headline tracking-tighter leading-none">
                            Sincronización Interrumpida
                        </h1>
                        <p className="text-lg text-on-surface-variant font-medium max-w-md text-[var(--on-secondary-container)]">
                            Nuestros servidores de laboratorio no se encuentran disponibles
                            temporalmente. El flujo de datos clínicos se ha pausado para
                            mantenimiento.
                        </p>
                    </div>


                </div>

            </div>
        </section>

    )
}