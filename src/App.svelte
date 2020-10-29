<script lang="ts">
	import Router from "svelte-spa-router";

	import MainLayout from "./layout/Main.svelte";
	import PageNotFound from "./pages/PageNotFound.svelte";
	import InstallationsOverview from "./pages/installations/Overview.svelte";
	import InstallationsView from "./pages/installations/View.svelte";

	const routes = {
		"/installations": InstallationsOverview,
		"/installations/:id": InstallationsView,
		"/*": PageNotFound,
	};

	export let appName: string;
	export let appVersion: string;
</script>

<main>
	<MainLayout {appName}>
		<Router {routes} />
	</MainLayout>
</main>
