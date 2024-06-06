import { create } from "zustand";
import { initialItems } from "../../lib/constants";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      removeAllItems: () => set({ items: [] }),
      resetToInitial: () => set({ items: initialItems }),
      markAllAsComplete: () =>
        set((state) => ({
          items: state.items.map((item) => ({ ...item, packed: true })),
        })),
      markAllAsIncomplete: () =>
        set((state) => ({
          items: state.items.map((item) => ({ ...item, packed: false })),
        })),
      addItem: (name) =>
        set((state) => ({
          items: [
            ...state.items,
            { id: new Date().getTime(), name, packed: false },
          ],
        })),
      deleteItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      toggleItem: (id) =>
        set((state) => ({
          items: state.items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          }),
        })),
    }),
    {
      name: "items",
    }
  )
);
