"use client";

import { useEffect } from "react";

import "@styles/globals.scss";
import "@styles/tailwind.css";
import { gilroy } from "@fonts";

import { JustChildrenType } from "@types";
import { Footer, Header } from "@organisms";
import { useNavigationStore } from "@store";
import { cn } from "@utils";

export const DefaultTemplate = ({ children }: JustChildrenType) => {
    const { loadNavigation } = useNavigationStore();

    useEffect(() => {
        loadNavigation();
    }, [loadNavigation]);

    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen w-full flex flex-col bg-bg",
                    gilroy.className,
                )}
            >
                <Header />
                <main className="grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html >
    )
}