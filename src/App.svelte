<Tailwindcss />
<div id="app">
  <RootRouter>
    <!-- {$activeRoute} -->
    {#if $loggedIn}
      <nav class="m-4 flex justify-between items-center relative">
        <NavLink to="daily">
          <div class="w-32 cursor-pointer">
            <Logo />
          </div>
        </NavLink>
        <svg
          bind:this="{selector}"
          class="h-full selector absolute max-h-full top-0 w-auto h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 86 53"
        >
          <defs></defs>
          <path
            fill="#9AE6B4"
            fill-rule="evenodd"
            d="M22.5 0C10.074 0 0 10.074 0 22.5c0 10.665 7.42 19.597 17.38
            21.915C19.92 49.505 25.18 53 31.256 53H70.5C79.06 53 86 46.06 86
            37.5 86 28.94 79.06 22 70.5 22h-.261C69.973 9.804 60.004 0 47.744
            0H22.5z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div class="flex z-10 navigation">
          <NavLink to="stats">
            <div
              class="mr-12 stroke-current text-gray-800 cursor-pointer"
              bind:this="{linksRefs.stats}"
            >
              <StatsIcon />
            </div>
          </NavLink>
          <NavLink to="daily">
            <div
              class="mr-12 stroke-current text-gray-800 cursor-pointer"
              bind:this="{linksRefs.daily}"
            >
              <BookIcon />
            </div>
          </NavLink>
          <NavLink to="history">
            <div
              class="mr-12 stroke-current text-gray-800 cursor-pointer"
              bind:this="{linksRefs.history}"
            >
              <CalendarIcon />
            </div>
          </NavLink>
        </div>
        <div
          class="stroke-current text-gray-800 cursor-pointer"
          on:click="{() => {
            logout();
          }}"
        >
          <LogoutIcon />
        </div>
      </nav>
    {/if}
  </RootRouter>
</div>

<script>
  import { getContext, onMount, onDestroy } from 'svelte';
  import ApolloClient from 'apollo-boost';
  import { setClient } from 'svelte-apollo';
  import { navigate } from 'svelte-routing';
  import { ROUTER } from 'svelte-routing/src/contexts';
  import { Logo } from 'components';
  import {
    BookIcon,
    CalendarIcon,
    StatsIcon,
    LogoutIcon,
  } from 'components/Icons';
  import NavLink from 'components/NavLink.svelte';
  import RootRouter from 'router/RootRouter.svelte';
  import { ME } from 'api';
  import { query, subscribe } from 'svelte-apollo';
  import { loggedIn, token } from 'stores/auth';

  import Tailwindcss from './Tailwindcss.svelte';

  const client = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql',
    // uri: 'https://mymind.herokuapp.com/graphql',
    request: (operation) => {
      const activetoken = localStorage.getItem('token');
      console.error(activetoken);
      operation.setContext({
        headers: {
          authorization: activetoken ? `JWT ${activetoken}` : '',
        },
      });
    },
  });
  setClient(client);

  let user;
  let selector;
  const linksRefs = {};
  let activeRoute;
  let currentRoute;

  const placeSelector = (element) => {
    selector.style.display = 'block';
    selector.style.left = `${element.getBoundingClientRect().x -
      selector.clientWidth / 2}px`;
  };
  const watchResize = () => {
    if (linksRefs[currentRoute.split('/')[1]]) {
      placeSelector(linksRefs[currentRoute.split('/')[1]]);
    }
  };
  async function logout() {
    $token = null;
    $loggedIn = false;
    localStorage.removeItem('token');
    navigate('/', { replace: true });
  }
  async function me() {
    if (localStorage.getItem('token')) {
      try {
        user = query(client, {
          query: ME,
        });
        const loggedInUser = await $user;
        $loggedIn = true;
        console.error('test', loggedInUser);
      } catch (e) {
        console.error('user not logged in', e);
        navigate('/', { replace: true });
        localStorage.removeItem('token');
      }
    } else {
      navigate('/', { replace: true });
    }
  }
  onMount(() => {
    activeRoute = getContext(ROUTER).activeRoute;
    window.addEventListener('resize', watchResize);
    me();
  });
  onDestroy(() => {
    window.removeEventListener('resize', watchResize);
  });
  $: {
    if (selector && $activeRoute && $activeRoute.uri !== currentRoute) {
      currentRoute = $activeRoute.uri;
      if (linksRefs[currentRoute.split('/')[1]]) {
        placeSelector(linksRefs[currentRoute.split('/')[1]]);
      } else {
        selector.style.display = 'none';
      }
    }
  }
</script>

<style lang="scss" global>
  @import './styles/app.scss';
  .selector {
    transition: left 0.3s, visibility 0s, opacity 0.5s linear;
  }
</style>
