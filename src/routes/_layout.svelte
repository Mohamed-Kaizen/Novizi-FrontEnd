<script>
	import {stores} from "@sapper/app"

	import BottomNavBar from "../components/bottom_navbar.svelte"
	import NavBar from "../components/top_navbar.svelte"
	import PreloadingIndicator from "../components/PreloadingIndicator.svelte"
	import {light_mode, token, user} from "../store"

	if (typeof window !== "undefined") {
		light_mode.use_local_storage()
		token.use_local_storage()
		user.use_local_storage()
		if ($light_mode) {
			document.documentElement.classList.remove("mode-dark")
		} else {
			document.documentElement.classList.add("mode-dark")
		}
	}

	const {preloading, page} = stores()
	$: path = $page.path
</script>

{#if $preloading}
	<PreloadingIndicator />
{/if}

<NavBar />

<slot />
<BottomNavBar {path} />
