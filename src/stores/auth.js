import { writable } from 'svelte/store';

function store() {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    set: (value) => set(value),
  };
}

export const loggedIn = store();
