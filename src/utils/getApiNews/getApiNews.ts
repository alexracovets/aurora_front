import { ApiNewsResponse } from "@/types";

interface GetApiNewsOptions {
    slug?: string;
}

export async function getApiNews(options: GetApiNewsOptions = {}): Promise<ApiNewsResponse> {
    const { slug } = options;

    let url = "/api/news";
    if (slug) {
        url += `?slug=${encodeURIComponent(slug)}`;
    }

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiNewsResponse = await response.json(); 
        return data;
    } catch (error) {
        console.error('Помилка при отриманні даних з API:', error);
        throw error;
    }
}

export async function getApiNewsBySlug(slug: string): Promise<ApiNewsResponse> {
    return getApiNews({ slug });
}

export async function getApiNewsList(): Promise<ApiNewsResponse> {
    return getApiNews();
} 