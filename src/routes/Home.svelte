<script lang="ts">
  let title = '[Donovan] Photography'
  const _APP_ENV_: any = process.env._APP_ENV_ ?? {}
</script>

<div class="route">
  Welcome to [{_APP_ENV_.APP_NAME}] Photography
</div>

<style lang="scss">
  @import '../styles/common';
  
  div.route {
    @include route;
    padding: 1rem;
    color: $colorPlatinumGray;
  }
</style>