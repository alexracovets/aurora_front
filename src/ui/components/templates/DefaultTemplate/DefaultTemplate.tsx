"use client";

import "@styles/globals.scss";
import "@styles/tailwind.css";

import { Footer, Header } from "@organisms";
// import { CustomScroll } from "@atoms";
import { gilroy } from "@fonts";
import { cn } from "@utils";


export const DefaultTemplate = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={cn(gilroy.className, "w-full bg-bg min-h-screen")}>
                {/* <CustomScroll className="h-screen"> */}
                <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
                    <Header />
                    <main className="grow">
                        {children}
                    </main>
                    <Footer />
                </div>
                {/* </CustomScroll> */}
            </body>
        </html >
    )
}