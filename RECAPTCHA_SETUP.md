# Налаштування Google reCAPTCHA v2

## Крок 1: Отримання ключів reCAPTCHA

1. Перейдіть на [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Увійдіть у свій Google акаунт
3. Натисніть "+" для створення нового сайту
4. Заповніть форму:
   - **Label**: Назва вашого сайту (наприклад, "Aurora Front")
   - **reCAPTCHA type**: Виберіть "reCAPTCHA v2" → "I'm not a robot" Checkbox
   - **Domains**: Додайте домени, де буде використовуватися reCAPTCHA
     - Для розробки: `localhost`, `127.0.0.1`
     - Для продакшену: ваш домен (наприклад, `example.com`)
5. Прийміть умови та натисніть "Submit"

## Крок 2: Налаштування змінних середовища

Створіть файл `.env.local` в корені проекту з наступним вмістом:

```env
# Google reCAPTCHA v2
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=ваш_публічний_ключ_тут
RECAPTCHA_SECRET_KEY=ваш_секретний_ключ_тут
```

**Важливо:**
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - публічний ключ, який використовується на фронтенді
- `RECAPTCHA_SECRET_KEY` - секретний ключ, який використовується тільки на сервері

## Крок 3: Перевірка роботи

1. Запустіть проект: `npm run dev`
2. Перейдіть на сторінку `/sign_in`
3. Перевірте, чи з'являється reCAPTCHA під полем введення телефону
4. Спробуйте відправити форму без проходження reCAPTCHA - має з'явитися помилка
5. Пройдіть reCAPTCHA та відправте форму - має працювати успішно

## Крок 4: Налаштування для продакшену

1. У Google reCAPTCHA Admin Console додайте ваш продакшн домен
2. Оновіть змінні середовища на сервері
3. Перезапустіть додаток

## Структура файлів

```
src/
├── ui/components/atoms/ReCaptcha/
│   ├── ReCaptcha.tsx          # Компонент reCAPTCHA
│   └── index.ts               # Експорт компонента
├── app/api/verify-recaptcha/
│   └── route.ts               # API роут для перевірки токена
└── ui/components/organisms/SignForm/
    └── SignForm.tsx           # Оновлена форма з reCAPTCHA
```

## Безпека

- Ніколи не публікуйте секретний ключ у публічному коді
- Завжди перевіряйте reCAPTCHA токен на сервері
- Використовуйте HTTPS у продакшені
- Регулярно моніторьте логи для виявлення підозрілої активності

## Додаткові налаштування

### Зміна теми reCAPTCHA

У файлі `ReCaptcha.tsx` можна змінити тему:

```tsx
<ReCAPTCHA
  sitekey={siteKey}
  onChange={onChange}
  theme="dark"  // або "light"
  size="normal" // або "compact"
/>
```

### Кастомізація повідомлень

У файлі `SignForm.tsx` можна змінити повідомлення про помилки:

```tsx
recaptcha: z.string().min(1, "Ваше кастомне повідомлення"),
``` 