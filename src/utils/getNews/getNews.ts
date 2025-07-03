"use server";

export const getNews = async () => {
    const news = await fetch("https://robota.avrora.ua/api/page/news/", {
        next: {
            revalidate: 60
        }
    });

    if (!news.ok) {
        throw new Error(`HTTP error! status: ${news.status}`);
    }

    const newsData = await news.json();
    return newsData.data;
};