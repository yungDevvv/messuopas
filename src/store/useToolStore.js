import { create } from 'zustand';

export const useToolStore = create((set) => ({
  activeTab: 'johdanto',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
