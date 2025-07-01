"use client";

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { ReactNode } from 'react';
import type { Options } from 'overlayscrollbars';

import 'overlayscrollbars/overlayscrollbars.css';
import '@styles/scroll_bar.scss';

interface CustomScrollProps {
    children: ReactNode;
    className?: string;
}

export const CustomScroll = ({ children, className = "" }: CustomScrollProps) => {
    const osOptions = {
        scrollbars: {
            theme: 'os-theme-dark',
            visibility: 'auto',
            autoHide: 'move',
            autoHideDelay: 800,
            autoHideSuspend: false,
            dragScroll: true,
            clickScroll: false,
            pointers: ['mouse', 'touch', 'pen']
        },
        overflow: {
            x: 'scroll',
            y: 'scroll'
        }
    };

    return (
        <OverlayScrollbarsComponent
            options={osOptions as Options}
            className={className}
        >
            {children}
        </OverlayScrollbarsComponent>
    );
}; 