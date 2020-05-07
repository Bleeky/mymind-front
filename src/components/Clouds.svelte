<div class="{`cloud cloud-${cloudNumber}`}">
  {#if cloudNumber === '1'}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 286 100">
      <defs></defs>
      <path
        fill="#fff"
        fill-opacity=".7"
        fill-rule="evenodd"
        d="M95 0C81.193 0 70 11.193 70 25c0 4.349 1.11 8.438 3.063 12H25C11.193
        37 0 48.193 0 62s11.193 25 25 25h89.063c4.247 7.747 12.479 13 21.937
        13h125c13.807 0 25-11.193 25-25s-11.193-25-25-25h-41c13.807 0 25-11.193
        25-25S233.807 0 220 0H95z"
        clip-rule="evenodd"
      ></path>
    </svg>
  {:else if cloudNumber === '2'}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 192 63">
      <defs></defs>
      <path
        fill="#fff"
        fill-opacity=".7"
        fill-rule="evenodd"
        d="M68.5 0C61.044 0 55 6.044 55 13.5c0 3.221 1.128 6.18 3.011
        8.5H13.5C6.044 22 0 28.044 0 35.5S6.044 49 13.5
        49h11.51c-.007.166-.01.333-.01.5C25 56.956 31.044 63 38.5 63h110c7.456 0
        13.5-6.044 13.5-13.5S155.956 36 148.5 36h-11.509a13.444 13.444 0
        00-3.002-9H178.5c7.456 0 13.5-6.044 13.5-13.5S185.956 0 178.5 0h-110z"
        clip-rule="evenodd"
      ></path>
    </svg>
  {:else if cloudNumber === '3'}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 131 53">
      <defs></defs>
      <path
        fill="#fff"
        fill-opacity=".7"
        fill-rule="evenodd"
        d="M22.5 0C10.074 0 0 10.074 0 22.5S10.074 45 22.5 45h3.432c2.643 4.77
        7.728 8 13.568 8h76c8.56 0 15.5-6.94 15.5-15.5
        0-8.56-6.94-15.5-15.5-15.5h-8.505C106.729 9.804 96.759 0 84.5 0h-62z"
        clip-rule="evenodd"
      ></path>
    </svg>
  {/if}
</div>

<script>
  export let cloudNumber;
</script>

<style>

</style>
