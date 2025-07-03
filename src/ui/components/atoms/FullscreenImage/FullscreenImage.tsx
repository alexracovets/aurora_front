"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { Gallery, Media } from "@payload-types";
import { useState } from "react";
import Link from "next/link";

import { AtomImage, Modal } from "@atoms";
import { cn } from "@utils";

interface FullscreenImageProps {
    image: Media;
    alt: string;
    prevPage: Gallery | null;
    nextPage: Gallery | null;
}

export const FullscreenImage = ({ image, alt, prevPage, nextPage }: FullscreenImageProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="relative w-[80rem] h-[40rem] mx-auto mb-[16px]">
            <div className="relative w-full h-full rounded-[8px] overflow-hidden">
                <AtomImage
                    variant="fullscreen"
                    src={image?.url || null}
                    alt={alt}
                    onClick={openModal}
                />
                <Modal isOpen={isOpen} onClose={closeModal} >
                    <TransformWrapper
                        initialScale={1}
                        minScale={0.5}
                        maxScale={4}
                        centerOnInit
                    >
                        {({ zoomIn, zoomOut, resetTransform }) => (
                            <>
                                <div className="fixed top-4 left-4 z-10 flex gap-2" onClick={(e) => e.stopPropagation()}>
                                    <button
                                        onClick={() => zoomIn()}
                                        className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                                    >
                                        <ZoomIn className="w-5 h-5 text-white" />
                                    </button>
                                    <button
                                        onClick={() => zoomOut()}
                                        className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                                    >
                                        <ZoomOut className="w-5 h-5 text-white" />
                                    </button>
                                    <button
                                        onClick={() => resetTransform()}
                                        className=" w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                                    >
                                        <RotateCcw className="w-5 h-5 text-white" />
                                    </button>
                                </div>
                                <TransformComponent>
                                    <div className="relative w-[100vw] h-[100dvh] flex justify-center items-center">
                                        <AtomImage
                                            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                                            src={image?.url || null}
                                            alt={alt}
                                            width={image?.width || 0}
                                            height={image?.height || 0}
                                            priority={false}
                                            classNameImage="object-contain"
                                        />
                                    </div>
                                </TransformComponent>
                            </>
                        )}
                    </TransformWrapper>
                </Modal>
            </div>
            <Link href={prevPage?.slug ? `/gallery/${prevPage?.slug}` : ""} className={cn(
                "absolute top-[50%] left-0 w-[40px] h-[40px] rounded-[50%] bg-white flex justify-center items-center z-1",
                "translate-x-[calc(-100%-16px)]",
                !prevPage?.slug ? "pointer-events-none pointer-none opacity-50" : ""
            )}>
                <LuArrowLeft size={"2.4rem"} className="text-black" />
            </Link>
            <Link
                href={nextPage?.slug ? `/gallery/${nextPage.slug}` : ""}
                className={cn(
                    "absolute top-[50%] right-0 w-[40px] h-[40px] rounded-[50%] bg-white flex justify-center items-center z-1",
                    "translate-x-[calc(100%+16px)]",
                    !nextPage?.slug ? "pointer-events-none pointer-none opacity-50" : ""
                )}>
                <LuArrowRight size={"2.4rem"} className="text-black" />
            </Link>
        </div>
    );
}; 