<div class="relative min-h-screen bg-login-gradient overflow-hidden">
  <div class="p-8 container mx-auto w-full sm:max-w-md">
    <div class="flex items-center flex-col mt-10">
      <Logo />
      <div class="text-2xl font-thin whitespace-no-wrap z-10">
        Improve your thoughts, one step at a time.
      </div>
    </div>
    <div class="mt-20 flex items-center justify-center">
      <LoginForm
        onSubmit="{(val) => {
          loggedIn.set(true);
          navigate('/daily', { replace: true });
        }}"
      />
    </div>
  </div>
  <Clouds cloudNumber="1" />
  <Clouds cloudNumber="1" />
  <Clouds cloudNumber="2" />
  <Clouds cloudNumber="3" />
  <Clouds cloudNumber="3" />
  <div class="absolute bottom-0 min-w-full mb-40">
    <SunLine />
  </div>
</div>

<script>
  import { navigate } from 'svelte-routing';
  import { Logo, Clouds, SunLine } from 'components';
  import LoginForm from './LoginForm.svelte';
  import { loggedIn } from 'stores/auth';
</script>

<style lang="scss" global>
  /* purgecss start ignore */
  @mixin initialCloudAnimation(
    $animation-name,
    $elementWidth,
    $position: 50%,
    $duration: 35s,
    $infinite: true,
    $delay: false
  ) {
    @if $infinite == true {
      animation: #{$animation-name} $duration linear infinite;
    } @else {
      animation: #{$animation-name} $duration linear;
    }
    @if $delay != false {
      animation-delay: $delay;
    }
    @keyframes #{$animation-name} {
      0% {
        margin-left: $position;
        visibility: visible;
      }
      100% {
        margin-left: -$elementWidth;
      }
    }
  }
  .cloud {
    visibility: hidden;
    @apply absolute;
    &-1 {
      top: 150px;
      width: 20rem;
      @include initialCloudAnimation(
        'infinite-cloud-1',
        20rem,
        100%,
        45s,
        true,
        45s
      );
      &:nth-of-type(odd) {
        @include initialCloudAnimation(
          'initial-cloud-1',
          20rem,
          80%,
          45s,
          false
        );
      }
    }
    &-2 {
      top: 30px;
      width: 25rem;
      @include initialCloudAnimation(
        'infinite-cloud-1',
        25rem,
        100%,
        60s,
        true,
        16s
      );
    }
    &-3 {
      top: 300px;
      width: 15rem;
      @include initialCloudAnimation(
        'infinite-cloud-3',
        15rem,
        100%,
        35s,
        true,
        35s
      );
      &:nth-of-type(odd) {
        @include initialCloudAnimation(
          'initial-cloud-3',
          15rem,
          40%,
          35s,
          false
        );
      }
    }
  }
</style>
