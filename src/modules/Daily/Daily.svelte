<div class="p-8 container mx-auto max-w-xl">
  <div class="flex flex-col">
    <div class="text-center text-3xl font-thin whitespace-no-wrap">
      What are you grateful for today ?
    </div>
    <div class="mt-10 bg-transparent-gray rounded-full p-5">
      <Typewriter interval="{[50, 80, 150]}" loop="{3000}" cursor="#718096">
        <p>I am grateful for the nice weather today !</p>
        <p>I am grateful for the warm hello from the neighbour !</p>
      </Typewriter>
    </div>
    <div class="mt-10 text-center text-3xl font-thin whitespace-no-wrap">
      How do you feel today ?
    </div>
    <div class="mt-10 flex gap-4">
      <DepressedIcon />
      <VerySadIcon />
      <SadIcon />
      <NeutralIcon />
      <HappyIcon />
      <VeryHappyIcon />
      <EcstaticIcon />
    </div>
  </div>
</div>

<script>
  import Typewriter from 'svelte-typewriter';

  import {
    HappyIcon,
    VeryHappyIcon,
    NeutralIcon,
    EcstaticIcon,
    SadIcon,
    DepressedIcon,
    VerySadIcon,
  } from 'components/Icons';
</script>

<style lang="scss">

</style>
