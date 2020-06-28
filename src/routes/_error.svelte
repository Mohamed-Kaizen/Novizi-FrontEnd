<script>
	import {Textfield, Snackbar, Button, Icon} from "svelte-mui/src"

	export let status
	export let error

	const dev = process.env.NODE_ENV === "development"
</script>

<svelte:head>
	<title>{status} | Relay</title>
</svelte:head>

{#if status === 404}
	<section class="py-8 px-4 text-center">
		<h2 class="text-5xl font-heading">Error 404</h2>
		<p class="text-gray-500">Page not found</p>
		<img
			class="max-w-auto md:max-w-sm my-12 mx-auto"
			src="error.svg"
			alt="404 picutre" />
		<div>
			<Button
				on:click="{() => {
					history.back()
				}}"
				fullWidth
				raised>
				Go Back
			</Button>
		</div>
	</section>
{:else}
	<div class="text-center">
		<p class="mb-2">
			Sorry, nothing here...
			<strong>{status} {error.message}</strong>
		</p>
		<Button
			on:click="{() => {
				history.back()
			}}"
			fullWidth
			raised>
			Go Back
		</Button>
	</div>
{/if}

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
