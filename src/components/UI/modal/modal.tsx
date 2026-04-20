"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ModalState } from "@/types/modal";
import ReactMarkdown from "react-markdown";
import styles from "./modal.module.css";
import Button from "@/components/UI/button/button"
type Props = ModalState & {
    onClose: () => void;
};

export default function ModalClientModule({
    open,
    title,
    description,
    onClose,
}: Props) {
    return (
        <Dialog open={open} onClose={onClose} className="fixed inset-0 z-70 bg-inverse-surface/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
            <div className="fixed inset-0 bg-black/40" />

            <div className="fixed inset-0 flex items-center justify-center">
                <DialogPanel className="bg-white p-6 rounded">
                    {title && <DialogTitle>{title}</DialogTitle>}
                    <div className={`p-6 sm:p-8 overflow-y-auto custom-scrollbar font-['Manrope'] ${styles.body}`}>
                    {description && <ReactMarkdown>{description}</ReactMarkdown>}
                    </div>
                    <div className="grid  gap-2 justify-items-center">
                            <Button onClick={onClose} title="Cerrar"></Button>
                    </div>
                
            
                </DialogPanel>
            </div>
        </Dialog>
    );
}