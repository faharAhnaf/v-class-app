import { create } from 'zustand';

interface MatkulStore {
    matkul: string;
    setMatkul: (matkul: string) => void;
}

export const useMatkul = create<MatkulStore>((set) => ({
    matkul: '',
    setMatkul: (matkul) => set({ matkul }),
}));
