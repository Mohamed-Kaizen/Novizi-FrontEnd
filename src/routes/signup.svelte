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
		password1,
		password2,
		email,
		full_name,
		phone_number,
		data,
		snackbar_visible = false,
		snackbar_message,
		snackbar_color,
		loading = false,
		username_error,
		email_error,
		password1_error,
		password2_error,
		full_name_error,
		phone_number_error

	async function sign_up() {
		username_error = email_error = password1_error = password2_error = full_name_error = phone_number_error = null
		loading = true
		data = {
			username,
			password1,
			password2,
			email,
			full_name,
			phone_number,
		}
		try {
			const response = await custom_axios.post("users/register/", data)
			snackbar_visible = true
			snackbar_message = "account has been created"
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
			if ("email" in error.response.data) {
				email_error = error.response.data.email
			}

			if ("username" in error.response.data) {
				username_error = error.response.data.username
			}
			if ("password1" in error.response.data) {
				password1_error = error.response.data.password1
			}
			if ("non_field_errors" in error.response.data) {
				password2_error = error.response.data.non_field_errors
			}

			if ("full_name" in error.response.data) {
				full_name_error = error.response.data.full_name
			}

			if ("detail" in error.response.data) {
				phone_number_error = error.response.data.detail
			}

			snackbar_visible = true
			snackbar_message = "Oops something goes worng!"
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
<form on:submit|preventDefault="{sign_up}">
	<div
		in:fly="{{x: 200, duration: 2000}}"
		class="transition duration-500 ease-in-out min-h-screen flex flex-col
		py-6">
		<div
			class="container max-w-sm mx-auto flex-1 flex flex-col items-center
			justify-center px-2 mt-16">
			<div
				class="bg-white text-black dark:bg-gray-700 dark:text-white px-6
				py-8 rounded shadow-lg w-full">
				<h1 class="mb-8 text-3xl text-center">Sign up</h1>
				<Textfield
					bind:value="{username}"
					error="{username_error}"
					message="max length 150"
					required
					outlined
					label="Username"
					type="text" />
				<br />
				<Textfield
					bind:value="{email}"
					error="{email_error}"
					required
					outlined
					label="Email"
					type="email" />
				<br />
				<Textfield
					bind:value="{password1}"
					error="{password1_error}"
					message="password length from 8 to 16"
					required
					outlined
					minlength="8"
					maxlength="16"
					label="Password"
					type="password" />
				<br />
				<Textfield
					bind:value="{password2}"
					error="{password2_error}"
					message="password length from 8 to 16"
					required
					outlined
					minlength="8"
					maxlength="16"
					label="Confirm Password"
					type="password" />
				<br />
				<Textfield
					bind:value="{full_name}"
					error="{full_name_error}"
					required
					outlined
					label="Full Name"
					type="text" />
				<br />
				<Textfield
					bind:value="{phone_number}"
					error="{phone_number_error}"
					message="phone number length from 9 to 15, eg. +999999999999"
					required
					outlined
					minlength="9"
					maxlength="15"
					label="Phone Number"
					type="text" />
				<br />
				<Button
					disabled="{loading | !phone_number | !username | !password1 | !password2 | !email | !full_name}"
					on:click="{sign_up}"
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
				Already have an account?
				<a
					class="no-underline border-b border-blue text-blue-400"
					href="/signin/">
					Sign in
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
