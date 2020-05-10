<Link {to} {getProps}>
  <slot />
</Link>

<script>
  import { Link } from 'svelte-routing';

  export let to = '';

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    // console.error(isCurrent, isPartiallyCurrent, href, location);
    // const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;
    if (isCurrent) {
      return { class: 'active' };
    }
    return {};
  }
</script>
