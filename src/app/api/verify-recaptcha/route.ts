import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: 'reCAPTCHA токен відсутній' },
        { status: 400 }
      );
    }

    // Перевіряємо reCAPTCHA токен на сервері Google
    const verificationResponse = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY || 'your_secret_key_here',
          response: token,
        }),
      }
    );

    const verificationData = await verificationResponse.json();

    if (!verificationData.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA перевірка не пройшла', details: verificationData['error-codes'] },
        { status: 400 }
      );
    }

    // Якщо перевірка пройшла успішно
    return NextResponse.json(
      { success: true, message: 'reCAPTCHA перевірка пройшла успішно' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Помилка перевірки reCAPTCHA:', error);
    return NextResponse.json(
      { error: 'Внутрішня помилка сервера' },
      { status: 500 }
    );
  }
} 