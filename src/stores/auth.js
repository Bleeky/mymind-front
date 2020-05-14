import { writable } from 'svelte/store';

function store() {
  const { subscribe, set, update } = writable(true);

  return {
    subscribe,
    set: (value) => set(value),
  };
}

export const loggedIn = store();
