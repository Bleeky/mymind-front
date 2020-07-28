<form on:submit="{handleSubmit}" class="relative z-10 text-center">
  <div class="mb-4">
    <input
      id="username"
      name="username"
      on:keyup="{handleChange}"
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
      on:keyup="{handleChange}"
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
  {#if mode === 'signup'}
    <div class="mb-4">
      <input
        id="password_confirm"
        name="passwordConfirm"
        on:keyup="{handleChange}"
        bind:value="{$form.passwordConfirm}"
        class="appearance-none py-3 px-4 focus:outline-none text-gray-800
        leading-tight rounded-lg placeholder-blue-900 placeholder-opacity-75"
        type="password"
        placeholder="Password confirmation"
      />
      {#if $errors.passwordConfirm}
        <p class="text-red-500 text-xs italic">{$errors.passwordConfirm}</p>
      {/if}
    </div>
  {/if}
  <button
    type="submit"
    class="focus:outline-none bg-green-main hover:bg-transparent text-white
    font-semibold hover:text-gray-700 py-2 px-4 rounded-lg duration-100"
  >
    {mode !== 'signup' ? 'Sign in' : 'Sign up'}
  </button>
  {#if mode !== 'signup'}
    <Link to="/signup">
      <div class="focus:outline-none text-gray-700 py-2 px-4 duration-100">
        Don't have an account ? Signup up here !
      </div>
    </Link>
  {/if}
</form>

<script>
  import { Link } from 'svelte-routing';
  import { createForm } from 'svelte-forms-lib';

  export let onSubmit;
  export let mode;

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      username: '',
      password: '',
      passwordConfirm: '',
    },
    validate: (values) => {
      const errs = {};
      if (!values.username) {
        errs.username = 'Username is required';
      }
      if (!values.password) {
        errs.password = 'Password is required';
      }
      if (mode === 'signup' && !values.passwordConfirm) {
        errs.passwordConfirm = 'Password confirmation is required';
      }
      if (
        mode === 'signup' &&
        $form.password &&
        $form.passwordConfirm &&
        $form.password !== $form.passwordConfirm
      ) {
        errs.password = 'Passwords must be indenticals';
        errs.passwordConfirm = 'Passwords must be indenticals';
      }
      return errs;
    },
    onSubmit,
  });
</script>
