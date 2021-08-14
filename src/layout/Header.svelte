<script lang="ts">
	import { link } from 'svelte-spa-router'
  const _APP_ENV_: any = process.env._APP_ENV_
</script>

<header>
  <h1>{_APP_ENV_.APP_NAME}</h1>
  <ul>
    <li>
      <a href="/" use:link>Home</a>
    </li>
    <li>
      <a href="/photos/123" use:link>Photos</a>
    </li>
  </ul>
</header>

<style lang="scss">
  @import '../styles/common.scss';

  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    h1 {
      color: $colorHighlightFocus;
    }

    a,
    a:visited,
    a:active {
      color: $colorHighlightFocus;
    }
  }
</style>