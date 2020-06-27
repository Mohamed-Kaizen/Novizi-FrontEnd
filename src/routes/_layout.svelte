<script>
	import {stores} from "@sapper/app"

	import NavBar from "../components/top_navbar.svelte"
	import BottomNavBar from "../components/bottom_navbar.svelte"

	const {page} = stores()
	$: path = $page.path
</script>

<NavBar />

<slot />
<BottomNavBar {path} />
