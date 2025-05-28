"use server"; 

export const findData = async <T>(api: string): Promise<T | null> => {
    try {
        const req = await fetch(api);
        
        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
        }
        
        const data = await req.json();
        return data as T;
    } catch (err) {
        console.error('Помилка при отриманні даних:', err);
        return null;
    }
}