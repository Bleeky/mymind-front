<form on:submit="{handleSubmit}" class="relative z-10">
  <div class="mb-4">
    <input
      id="username"
      name="username"
      on:change="{handleChange}"
      bind:value="{$form.username}"
      class="appearance-none py-3 px-4 focus:outline-none text-gray-800
      leading-tight rounded-lg placeholder-blue-900 placeholder-opacity-75"
      type="text"
      placeholder="Username"
    />
    {#if $errors.username}
      <p class="text-red-500 text-xs italic">{$errors.username}</p>
    {/if}
  </div>
  <div class="mb-4">
    <input
      id="password"
      name="password"
      on:change="{handleChange}"
      bind:value="{$form.password}"
      class="appearance-none py-3 px-4 focus:outline-none text-gray-800
      leading-tight rounded-lg placeholder-blue-900 placeholder-opacity-75"
      type="password"
      placeholder="Password"
    />
    {#if $errors.password}
      <p class="text-red-500 text-xs italic">{$errors.password}</p>
    {/if}
  </div>
  <div class="text-center">
    <button
      type="submit"
      class="focus:outline-none bg-green-main hover:bg-transparent text-white
      font-semibold hover:text-gray-700 py-2 px-4 rounded-lg duration-100"
    >
      Sign in
    </button>
  </div>
</form>

<script>
  import { createForm } from 'svelte-forms-lib';

  export let onSubmit;

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: (values) => {
      const errs = {};
      if (!values.username) {
        errs.username = 'Username is required';
      }
      if (!values.password) {
        errs.password = 'Password is required';
      }
      return errs;
    },
    onSubmit,
  });
</script>
