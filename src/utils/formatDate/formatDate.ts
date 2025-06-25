export const formatDate = (dateString: string | null | undefined): string => {
    if (!dateString) return '';

    const date = new Date(dateString);

    // Перевіряємо чи дата валідна
    if (isNaN(date.getTime())) return dateString;

    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    return date.toLocaleDateString('uk-UA', options);
};