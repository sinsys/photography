<script lang="ts">
	import Router from 'svelte-spa-router'
	import Header from './layout/Header.svelte'
	import Home from './routes/Home.svelte'
	import NotFound from './routes/NotFound.svelte'
	import Photos from './routes/Photos.svelte'

	const routes = {
		// Unauthenticated Routes
		'/': Home,

		// Authenticated Routes
		'/photos/:id?': Photos,

		// Unknown
		'*': NotFound,
	}
</script>

<main>
	<div class="header">
		<Header />
	</div>
	<div class="router">
		<Router {routes} />
	</div>
</main>

<style lang="scss">
	@import './styles/common.scss';

	main {
		background: $colorDark;
		background: url('../images/stock-city.jpg') no-repeat center center fixed;
		-webkit-background-size: cover;
		background-size: cover;
		
		margin: 0 auto;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		min-height: 100vh;
		min-width: 100vw;
		overflow: hidden;
		flex-direction: column;

		.header, .router {
			min-width: 100%;
			display: flex;
			margin: 0;
			padding: 0;
		}

		.header {
			flex-shrink: 1;
			background: $colorDark;
		}

		.router {
			flex-grow: 1;
			min-height: 100%;
			min-width: 100%;
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>