import { writable } from 'svelte/store';

const tokenStorage = localStorage.getItem('token');

const token = writable(tokenStorage);
const loggedIn = writable(false);
const loggedUser = writable(false);

export { loggedIn, token, loggedUser };
