"use client";

import localFont from 'next/font/local';

const gilroy = localFont({
    src: [
        {
            path: '/src/Gilroy-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '/src/Gilroy-Semibold.woff',
            weight: '600',
            style: 'normal',
        }
    ],
    variable: '--font-gilroy',
    display: 'swap',
})

export { gilroy };