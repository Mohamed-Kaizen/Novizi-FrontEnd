<script>
	export let title,
		event_date,
		total_guest,
		available_place,
		read_time,
		slug,
		cover,
		hosted_by,
		tags
</script>

<div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
	<div
		class="relative bg-white dark:bg-gray-700 rounded border border-b
		dark:border-gray-700 shadow">
		<div class="flex m-4">
			<img
				src="{hosted_by.picture}"
				alt="{hosted_by.username} profile picture"
				class="h-10 w-10 rounded-full mr-4 object-cover" />
			<a
				href="/users/{hosted_by.username}"
				class="font-semibold text-sm capitalize mt-3 text-purple-500">
				{hosted_by.username}
			</a>
		</div>
		<picture class="block ">
			<img
				class="block border-t border-b dark:border-0"
				src="{cover ? cover : '/logo.png'}"
				alt="{title} cover" />
		</picture>
		<div class="p-4">
			<h3 class="text-lg font-bold">
				<a
					class="stretched-link capitalize text-purple-500"
					href="/events/{slug}"
					{title}>
					{title}
				</a>
			</h3>
			<p class="text-base my-2 ">
				{#each tags as tag}
					<div
						class="text-xs inline-flex items-center font-bold
						leading-sm uppercase px-3 py-1 bg-purple-200
						text-purple-700 rounded-full mr-2 -ml-1">
						{tag}
					</div>
				{/each}
			</p>
			<time
				class="block my-2 text-sm text-gray-600"
				datetime="{event_date}">
				<strong>{new Date(event_date).toString()}</strong>
			</time>
			<p class="text-gray-600">
				Total Guest:
				<strong class="ml-2">{total_guest}</strong>
			</p>

			<p class="text-gray-600">
				Available seat:
				<strong class="ml-2">{available_place}</strong>
			</p>
			<p class="text-gray-600">
				<strong class="mr-1">{read_time} minute</strong>
				read time
			</p>
		</div>
	</div>
</div>
