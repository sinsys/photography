<script lang="ts">
	import Router, { link } from 'svelte-spa-router'
	import Home from './routes/Home.svelte'
	import NotFound from './routes/NotFound.svelte'
	import Photos from './routes/Photos.svelte'
	const routes = {
		// Exact path
		'/': Home,

		// Using named parameters, with last being optional
		'/photos/:id?': Photos,

		// Catch-all
		// This is optional, but if present it must be the last
		'*': NotFound,
	}

</script>

<main>
	<header>
		<h1>Photography</h1>
		<ul>
			<li>
				<a href="/" use:link>Home</a>
			</li>
			<li>
				<a href="/photos/123" use:link>Photos</a>
			</li>
		</ul>
		
	</header>

	<Router {routes}/>
</main>

<style lang="scss">
	main {
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		min-width: 100vw;
		overflow: hidden;
		background: #CCC;
		flex-direction: column;

		h1 {
			color: #666;
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>