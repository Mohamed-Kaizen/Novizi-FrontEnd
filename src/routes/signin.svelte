<script>
	import {fly} from "svelte/transition"
	import {goto} from "@sapper/app"

	import {Textfield, Button, Snackbar} from "svelte-mui/src"

	import {token, user} from "../store"
	import custom_axios from "../axios"
	import Spinner from "../components/spinner/circle.svelte"

	if (typeof window !== "undefined") {
		if ($token) {
			goto("/")
		}
	}
	let username,
		password,
		data,
		snackbar_visible = false,
		snackbar_message,
		snackbar_color,
		loading = false

	async function sign_in() {
		loading = true
		data = {
			username,
			password,
		}
		try {
			const response = await custom_axios.post("users/login/", data)
			snackbar_visible = true
			snackbar_message = "sign in successfully"
			snackbar_color = "green"
			token.set({
				access_token: response.data.access_token,
				refresh_token: response.data.refresh_token,
			})
			user.set({
				username: response.data.user.username,
				email: response.data.user.email,
				picture: response.data.user.picture,
				is_active: response.data.user.is_active,
			})
			goto("/")
		} catch (error) {
			snackbar_visible = true
			snackbar_message = "Oops wrong username or password!"
			snackbar_color = "red"
		}

		loading = false
	}
</script>

<Snackbar bind:visible="{snackbar_visible}" bg="{snackbar_color}">
	{snackbar_message}
	<span slot="action">
		<Button color="#ff0" on:click="{() => (snackbar_visible = false)}">
			Close
		</Button>
	</span>
</Snackbar>
<form on:submit|preventDefault="{sign_in}" in:fly="{{x: 200, duration: 2000}}">
	<div
		class="transition duration-500 ease-in-out min-h-screen flex flex-col
		py-6">
		<div
			class="container max-w-sm mx-auto flex-1 flex flex-col items-center
			justify-center px-2">
			<div
				class="bg-white text-black dark:bg-gray-700 dark:text-white px-6
				py-8 rounded shadow-lg w-full">
				<h1 class="mb-8 text-3xl text-center">Sign in</h1>
				<Textfield
					bind:value="{username}"
					message="max length 150"
					required
					outlined
					label="Username"
					type="text" />
				<br />
				<Textfield
					bind:value="{password}"
					message="password length from 8 to 16"
					required
					outlined
					minlength="8"
					maxlength="16"
					label="Password"
					type="password" />
				<br />
				<Button
					disabled="{loading | !username | !password}"
					raised
					fullWidth
					color="#805ad5"
					type="submit">
					{#if loading}
						<Spinner />
					{:else}Submit{/if}
				</Button>
			</div>

			<div class="text-black dark:text-white mt-6">
				Need account?
				<a
					class="no-underline border-b border-blue text-blue-400"
					href="/signup/">
					Sign up
				</a>
				.
			</div>
		</div>
	</div>
</form>

<style>
	:root {
		--primary: orange;
		--label: #d6bcfa;
		--color: orange;
	}
</style>
