import App from './App.svelte';
import './styles/app.scss';

const app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
});

export default app;
