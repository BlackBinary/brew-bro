import App from './App.svelte';
import { version } from './../package.json';

const app = new App({
	target: document.body,
	props: {
		appName: 'BrewBro',
		appVersion: version,
	}
});

export default app;