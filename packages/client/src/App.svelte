<script lang="ts">
  import { Router, Route } from "svelte-routing";

	import MainLayout from "./layout/Main.svelte";

	// Installations components
	import InstallationsOverview from "./pages/installations/Overview.svelte";
	import InstallationsView from "./pages/installations/View.svelte";

	export let appName: string;
	export let appVersion: string;
	export let url: string = '';
</script>

<Router url="{url}">
	<main>
	<MainLayout {appName}>
			<!-- Installations -->
			<Route path="installations" component="{InstallationsOverview}" />
			<Route path="installations/:id" component="{InstallationsView}" />

			<!-- Default -->
			<Route path="/">
				H!
			</Route>
	</MainLayout>
</main>
</Router>

