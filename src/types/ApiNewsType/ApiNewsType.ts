export interface ApiNewsImage {
    banner: string[];
}

export interface ApiNewsItem {
    id: number;
    date: string;
    title: string;
    short_description?: string;
    description: string;
    slug: string;
    url: string;
    images: ApiNewsImage;
}

export interface ApiNewsLinks {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}

export interface ApiNewsMeta {
    current_page: number;
    from: number;
    last_page: number;
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
    path: string;
    per_page: number;
    to: number;
    total: number;
} 