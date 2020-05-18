<div class="p-8 container mx-auto max-w-xl">
  <div class="flex flex-col">
    <DailyForm
      onSubmit="{(values) => {
        console.dir(values);
      }}"
    />
  </div>
</div>

<script>
  import { getClient, query } from 'svelte-apollo';
  import { gql } from 'apollo-boost';
  import DailyForm from './DailyForm.svelte';

  const USERS = gql`
    {
      users {
        id
        username
      }
    }
  `;
  const client = getClient();
  const users = query(client, {
    query: USERS,
  });

  $: {
    console.log($users);
  }
</script>

<style lang="scss">

</style>
