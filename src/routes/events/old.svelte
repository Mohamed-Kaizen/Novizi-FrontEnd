<script context="module">
	import custom_axios from "../../axios"

	export async function preload() {
		const res = await custom_axios.get("events/old/")
		const events = res.data
		return {events}
	}
</script>

<script>
	export let events
	import {fly} from "svelte/transition"

	import Card from "../../components/events/card.svelte"
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
			<h1>No old events</h1>
		{/each}

	</div>
</div>
