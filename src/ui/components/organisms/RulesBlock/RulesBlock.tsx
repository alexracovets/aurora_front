"use client";

import { Page } from '@payload-types';
import { RichTextFilter } from '@molecules';


export const RulesBlock = ({ content }: { content: Page['content'] }) => {
    if (!content) return null;
    const contentData = content?.root?.children;

    return (
        <div className='flex flex-col mb-[40px] pt-[16px]'>
            {contentData.map((item, idx) => {
                return <RichTextFilter item={item} key={idx} />
            })}
        </div>
    );
};