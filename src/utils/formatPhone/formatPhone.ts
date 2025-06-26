/**
 * Видаляє всі символи крім цифр з номера телефону
 */
export const cleanPhoneNumber = (phone: string): string => {
    return phone.replace(/\D/g, '');
};

/**
 * Перевіряє чи є номер телефону валідним українським номером
 */
export const isValidUkrainianPhone = (phone: string): boolean => {
    const cleaned = cleanPhoneNumber(phone);
    // Перевіряємо чи починається з 380 і має правильну довжину
    return cleaned.startsWith('380') && cleaned.length === 12;
};

/**
 * Форматує номер телефону для відображення
 */
export const formatPhoneForDisplay = (phone: string): string => {
    const cleaned = cleanPhoneNumber(phone);
    
    if (cleaned.startsWith('380') && cleaned.length === 12) {
        const number = cleaned.substring(4); // Видаляємо 380
        return `+380 (${number.substring(0, 2)}) ${number.substring(2, 5)} ${number.substring(5, 7)} ${number.substring(7, 9)}`;
    }
    
    return phone;
};

/**
 * Отримує тільки цифри номера телефону для збереження
 */
export const getPhoneDigits = (phone: string): string => {
    const cleaned = cleanPhoneNumber(phone);
    if (cleaned.startsWith('380') && cleaned.length === 12) {
        return cleaned.substring(4); // Повертаємо тільки цифри після 380
    }
    return phone;
}; 