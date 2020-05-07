<Router>
  <!-- <nav>
    <Link to="/">Home</Link>
    <Link to="/bifule">Bifule</Link>
  </nav> -->
  <div>
    <Route path="*">Not found</Route>
    <Route path="/">
      <Login />
    </Route>
  </div>
</Router>

<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Login from 'modules/Auth';
</script>
