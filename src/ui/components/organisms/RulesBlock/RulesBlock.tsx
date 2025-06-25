"use client";

import { Page } from '@payload-types';


export const RulesBlock = ({ content }: { content: Page['content'] }) => {
    if (!content) return null;
    const contentData = content?.root?.children;
   
    return (
        null
    );
};