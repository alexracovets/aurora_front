"use client";

import "@styles/globals.scss";
import "@styles/tailwind.css";
import { gilroy } from "@fonts";

import { JustChildrenType } from "@types";
import { Footer, Header } from "@organisms";
import { cn } from "@utils";

export const DefaultTemplate = ({ children }: JustChildrenType) => {
    return (
        <html lang="en">
            <body
                className={cn(
                    "w-full flex flex-col bg-bg min-h-screen",
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