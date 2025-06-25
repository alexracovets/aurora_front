export type RichTextItemType = {
    type: string;
    tag?: string;
    children?: Array<{
        text: string;
        format?: number;
    }>;
    value?: {
        url?: string;
        alt?: string;
    };
};