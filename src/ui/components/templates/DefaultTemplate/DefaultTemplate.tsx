"use client";

import { JustChildrenType } from "@types";
import { Footer, Header } from "@organisms";

import "@styles/globals.scss";
import "@styles/tailwind.css";

export const DefaultTemplate = ({ children }: JustChildrenType) => {
    return (
        <html lang="en">
            <body
                className="min-h-screen w-full flex flex-col"
            >
                <Header />
                <main className="grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}