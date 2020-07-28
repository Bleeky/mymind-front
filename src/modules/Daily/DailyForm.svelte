<form on:submit="{handleSubmit}" class="relative z-10">
  <div class="text-3xl font-thin whitespace-no-wrap">
    What are you grateful for today ?
  </div>

  <div class="mb-4">
    <input
      id="gratefulFor"
      name="gratefulFor"
      on:change="{handleChange}"
      bind:value="{$form.gratefulFor}"
      type="text"
      class="appearance-none py-5 focus:outline-none text-gray-800 leading-tight
      rounded-lg placeholder-blue-900 placeholder-opacity-75 w-full text-2xl
      font-thin"
      placeholder="Today, I am grateful for ..."
    />
    {#if $errors.gratefulFor}
      <p class="text-red-500 text-xs italic">{$errors.gratefulFor}</p>
    {/if}
  </div>
  <div class="mt-10 text-3xl font-thin whitespace-no-wrap">
    How do you feel today ?
  </div>
  <div class="mt-10 flex gap-4">
    {#each moods as mood}
      <div
        class="mood{$form.selectedMood === mood.value ? ' selected' : ''}"
        on:click="{() => {
          $form.selectedMood = mood.value;
        }}"
      >
        <svelte:component this="{mood.icon}" />
      </div>
    {/each}
  </div>
  <div class="text-center mt-4">
    <button
      type="submit"
      class="focus:outline-none bg-green-main hover:bg-transparent text-white
      font-semibold hover:text-gray-700 py-2 px-4 rounded-lg duration-100"
    >
      Thanks !
    </button>
  </div>
</form>

<script>
  import { createForm } from 'svelte-forms-lib';
  import {
    HappyIcon,
    VeryHappyIcon,
    NeutralIcon,
    EcstaticIcon,
    SadIcon,
    DepressedIcon,
    VerySadIcon,
  } from 'components/Icons';

  export let onSubmit;
  export let moods = [
    { icon: DepressedIcon, value: -3 },
    { icon: VerySadIcon, value: -2 },
    { icon: SadIcon, value: -1 },
    { icon: NeutralIcon, value: 0 },
    { icon: HappyIcon, value: 1 },
    { icon: VeryHappyIcon, value: 2 },
    { icon: EcstaticIcon, value: 3 },
  ];

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      selectedMood: '',
      gratefulFor: '',
    },
    validate: (values) => {
      const errs = {};
      if (!values.gratefulFor) {
        errs.gratefulFor = 'Required';
      }
      return errs;
    },
    onSubmit,
  });
</script>

<style lang="scss" global>
  .mood {
    transition: all 0.2s ease-in-out;
    @apply cursor-pointer;
    &:hover {
      transform: scale(1.2);
    }
    &.selected {
      transform: scale(1.3);
    }
  }
</style>
