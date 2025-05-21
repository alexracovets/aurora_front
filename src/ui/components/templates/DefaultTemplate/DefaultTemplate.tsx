"use client";

import { JustChildrenType } from "@types";
import { Header } from "@organisms";

import "@styles/tailwind.scss";
import "@styles/globals.scss";

export const DefaultTemplate = ({ children }: JustChildrenType) => {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}