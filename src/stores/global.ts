import { writable } from 'svelte/store';

export function createAppStore() {
	const { subscribe, set } = writable({});
  const base = {
    theme: 'Dark'
  }

	return {
		subscribe,
		setTheme: (theme: string) => set({ theme }),
    reset: () => set(base)
	};
}