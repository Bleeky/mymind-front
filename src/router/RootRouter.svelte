<Router>
  <slot />
  <Route path="*">Not found</Route>
  <Route path="/daily">
    <Daily />
  </Route>
  <Route path="/stats">
    <Stats />
    <!-- <Loadable loader="{StatsLoader}">
      <div slot="loading">Loading...</div>
    </Loadable> -->
  </Route>
  <Route path="/history">
    <History />
  </Route>
  <Route path="/signup">
    <Login mode="signup" />
  </Route>
  <Route path="/">
    <Login />
  </Route>
</Router>

<!-- <script context="module">
  import { register } from 'svelte-loadable';

  const StatsLoader = register({
    loader: () => import('modules/Stats'),
    resolve: () => require.resolve('modules/Stats'),
  });
</script> -->

<script>
  // import Loadable from 'svelte-loadable';
  import { Router, Route } from 'svelte-routing';
  import Login from 'modules/Auth';
  import Stats from 'modules/Stats';
  import History from 'modules/History';
  import Daily from 'modules/Daily';
</script>
