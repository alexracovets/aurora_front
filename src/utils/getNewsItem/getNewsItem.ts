"use server";

export async function getNewsItem(slug: string) {
    const newsItem = await fetch(`https://robota.avrora.ua/api/page/news/${slug}`, {
        next: {
            revalidate: 60
        }
    });

    if (!newsItem.ok) {
        throw new Error(`HTTP error! status: ${newsItem.status}`);
    }

    const pageData = await newsItem.json();
    return pageData.data[0];
}