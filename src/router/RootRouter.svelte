<Router>
  <slot />
  <Route path="*">Not found</Route>
  <Route path="/daily">
    <Daily />
  </Route>
  <!-- <Route path="daily/:id" let:params>Test</Route> -->
  <Route path="/stats">
    <Stats />
  </Route>
  <Route path="/history">
    <History />
  </Route>
  <Route path="/">
    <Login />
  </Route>
</Router>

<script>
  import { Router, Route } from 'svelte-routing';
  import Login from 'modules/Auth';
  import Stats from 'modules/Stats';
  import History from 'modules/History';
  import Daily from 'modules/Daily';
</script>
