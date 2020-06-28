<script context="module">
	import custom_axios from "../../axios"

	export async function preload(page, params, query) {
		const current_page = page.query["page"] || 1
		const tags_name = page.query["tags_name"] || ""
		const search = page.query["search"] || ""
		try {
			const res = await custom_axios.get(
				`events/?tags_name=${tags_name}&search=${search}&page=${current_page}`
			)
			const events = res.data.results
			return {events}
		} catch (error) {
			this.error(error.response.status, error.response.data.detail)
		}
	}
</script>

<script>
	export let events
	import {fly} from "svelte/transition"

	import Card from "../../components/events/card.svelte"

	let promise,
		current_page = 1

	async function load_more() {
		const res = await custom_axios.get(`events/?page=${++current_page}`)
		events = [...events, res.data.results]
	}
</script>

<div class="container mx-auto p-8" in:fly="{{y: 200, duration: 2000}}">
	<div class="flex flex-row flex-wrap -mx-2">
		{#each events as {title, event_date, total_guest, available_place, read_time, slug, cover, hosted_by, tags}}
			<Card
				{title}
				{event_date}
				{total_guest}
				{available_place}
				{read_time}
				{slug}
				{cover}
				{hosted_by}
				{tags} />
		{:else}
			<h1>No new events</h1>
		{/each}
		{#await promise}
			<h1>Loading........</h1>
		{:then data}
			<button on:click="{() => (promise = load_more())}">Load more</button>
		{:catch error}
			{#if error.response.data.detail === 'Invalid page.'}
				<h1>NO more data to load</h1>
			{:else}
				<h1>error.response.data.detail</h1>
			{/if}
		{/await}
	</div>
</div>
