"use client";

import { Page } from '@payload-types';
import { RichTextFilter } from '../../molecules/RichTextFilter/RichTextFilter';


export const RulesBlock = ({ content }: { content: Page['content'] }) => {
    if (!content) return null;
    const contentData = content?.root?.children;

    return (
        <div className='flex flex-col gap-y-[16px] mb-[40px]'>
            {contentData.map((item, idx) => {
                return <RichTextFilter item={item} key={idx} rules />
            })}
        </div>
    );
};