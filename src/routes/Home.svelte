<script lang="ts">
  let title = '[Donovan] Photography'
</script>

<div class="route">
  Welcome to {title}
</div>

<style lang="scss">
  @import '../styles/common';
  div.route {
    @include route;
    padding: 1rem;
    color: $colorPlatinumGray;
  }
</style>