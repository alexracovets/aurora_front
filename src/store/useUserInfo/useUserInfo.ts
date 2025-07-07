import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface UserInfoStoreType {
    isPhoneFilled: string | null;
    setIsPhoneFilled: (isPhoneFilled: string | null) => void;
}

export const useUserInfo = create<UserInfoStoreType>()(
    immer((set) => ({
        isPhoneFilled: '+380 50 123 4567',
        setIsPhoneFilled: (isPhoneFilled: string | null) => {
            set({ isPhoneFilled });
        },
    }))
);
