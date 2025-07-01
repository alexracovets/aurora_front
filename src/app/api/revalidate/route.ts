import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { collection, slug } = body;

    // Ревалідуємо відповідні сторінки
    if (collection === 'pages') {
      if (slug === 'results') {
        revalidatePath('/results');
      } else if (slug === '/') {
        revalidatePath('/');
      }
    } else if (collection === 'results') {
      revalidatePath('/results');
      revalidatePath(`/results/${slug}`);
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    console.error('Помилка ревалідації:', error);
    return NextResponse.json(
      { error: 'Помилка ревалідації' },
      { status: 500 }
    );
  }
} 