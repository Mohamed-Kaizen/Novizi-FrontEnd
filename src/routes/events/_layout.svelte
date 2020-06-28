<script>
	export let segment
	const links = [
		["/events/", "new", undefined],
		["/events/old/", "old", "old"],
	]
</script>

<div class="pt-16">
	<div class="bg-white dark:bg-gray-800">
		<nav class="flex flex-row items-center">
			{#each links as [route, name, route_name]}
				<a
					href="{route}"
					class="transition duration-700 ease-in-out w-full py-4 px-6
					block hover:bg-purple-300 focus:outline-none border-b-2
					font-medium capitalize text-center {segment === route_name ? 'text-purple-700 border-purple-700 dark:text-purple-500 dark:border-purple-500' : 'text-gray-800 dark:text-white dark:border-gray-800 '}">
					{name}
				</a>
			{/each}
		</nav>
	</div>
	<slot />
</div>
