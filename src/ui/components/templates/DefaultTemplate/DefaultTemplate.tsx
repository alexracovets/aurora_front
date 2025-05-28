"use client";

import { JustChildrenType } from "@types";
import { Footer, Header } from "@organisms";
import { cn } from "@utils";

import "@styles/globals.scss";
import "@styles/tailwind.css";
import { gilroy } from "@fonts";

export const DefaultTemplate = ({ children }: JustChildrenType) => {
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