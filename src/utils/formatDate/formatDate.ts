export const formatDate = (dateString: string, isNumber: boolean = true) => {
    if (!dateString) return '';

    const date = new Date(dateString);

    // Перевіряємо чи дата валідна
    if (isNaN(date.getTime())) return dateString;

    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    if (isNumber) {
        return date.toLocaleDateString('uk-UA', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    } else {
        return date.toLocaleDateString('uk-UA', options);
    }

};