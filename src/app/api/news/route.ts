import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    let url = 'https://robota.avrora.ua/api/page/news/';
    if (slug) {
        url += `${slug}`;
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
            return NextResponse.json(
                { error: `HTTP error! status: ${response.status}` },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Помилка при отриманні даних з API:', error);
        return NextResponse.json(
            { error: 'Помилка при отриманні даних' },
            { status: 500 }
        );
    }
} 