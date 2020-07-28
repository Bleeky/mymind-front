<div class="p-8 container mx-auto max-w-xl">
  <div class="flex flex-col">
    <DailyForm
      onSubmit="{(values) => {
        console.dir(values);
        onSubmit({
          description: values.gratefulFor,
          mood: values.selectedMood,
        });
      }}"
    />
  </div>
</div>

<script>
  import { gql } from 'apollo-boost';
  import { CREATE_MOOD, GET_MOODS } from 'api';
  import { getClient, query, mutate } from 'svelte-apollo';
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
  const moods = query(client, {
    query: GET_MOODS,
  });

  async function onSubmit(values) {
    try {
      const ret = await mutate(client, {
        mutation: CREATE_MOOD,
        variables: values,
      });
      console.error(ret);
    } catch (error) {
      console.error(error);
      // TODO
    }
  }

  // $: {
  //   console.log($users);
  //   console.log($moods);
  // }
</script>

<style lang="scss">

</style>
