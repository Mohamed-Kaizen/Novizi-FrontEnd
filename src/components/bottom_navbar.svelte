<script>
	export let path

	import {light_mode} from "../store"
	import FaHome from "svelte-icons/fa/FaHome.svelte"
	import MdEvent from "svelte-icons/md/MdEvent.svelte"
	import FaSignInAlt from "svelte-icons/fa/FaSignInAlt.svelte"
	const links = [
		["/", "Home", FaHome],
		["/events/", "Events", MdEvent],
		["/signin/", "Sign In", FaSignInAlt],
	]
</script>

<nav
	class="lg:hidden select-none transition duration-500 ease-in-out fixed
	bottom-0 w-full flex overflow-x-auto bg-white text-black dark:bg-gray-900
	dark:text-white">
	{#each links as [route, name, icon]}
		<a
			href="{route}"
			class="flex flex-col flex-grow items-center justify-center
			overflow-hidden whitespace-no-wrap text-sm transition duration-100
			ease-in-out {path === route ? 'text-purple-600 dark:text-purple-400' : ''}">
			<div class="h-6 w-6">
				<svelte:component this="{icon}" />
			</div>
			<span
				class="{path === route ? 'block' : 'hidden'} text-sm capitalize">
				{name}
			</span>
		</a>
	{/each}

</nav>
