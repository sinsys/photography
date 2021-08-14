<script lang="ts">
  const _APP_ENV_: any = process.env._APP_ENV_ ?? {}
</script>

<div class="route">
  <h2>Welcome to {_APP_ENV_.APP_NAME}</h2>
  <p>[Unauthenticated Route] Home<p>
</div>

<style lang="scss">
  @import '../styles/common';
  
  div.route {
    @include route;
    padding: 1rem;
    color: $colorPlatinumGray;
  }
</style>