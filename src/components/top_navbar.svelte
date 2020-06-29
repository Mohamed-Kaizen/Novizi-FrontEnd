<script>
	import {light_mode, token, user} from "../store"
	import {Menu, Menuitem} from "svelte-mui/src"
	import FaSignOutAlt from "svelte-icons/fa/FaSignOutAlt.svelte"
	import MdDashboard from "svelte-icons/md/MdDashboard.svelte"
	function mode_swticher() {
		if ($light_mode) {
			document.documentElement.classList.add("mode-dark")
			light_mode.set(false)
		} else {
			document.documentElement.classList.remove("mode-dark")
			light_mode.set(true)
		}
	}

	async function sign_out() {
		token.set(null)
		user.set(null)
	}
</script>

<nav
	class="fixed z-10 w-full transition duration-500 ease-in-out px-4 flex
	justify-between h-16 font-bold bg-white border-b text-purple-800
	dark:bg-gray-900 dark:text-purple-300 dark:border-b-0">

	<ul class="flex items-center">
		<!-- top bar left -->

		<li class="h-10 w-10">
			<a href="/">
				<img
					class="h-full w-full mx-auto select-none"
					src="/logo.png"
					alt="No logo" />
			</a>
		</li>

		<li>
			<h1 class="hidden ml-4 lg:block">NOVIZI</h1>
		</li>

	</ul>

	<ul class="flex items-center">

		<li>
			<h1 class="{$user ? 'pl-8' : ''} lg:hidden">NOVIZI</h1>
		</li>

	</ul>

	<ul class="flex items-center">
		<!-- to bar right  -->

		<li
			class="cursor-pointer transition duration-300 ease-in-out mr-2"
			on:click="{mode_swticher}">

			{#if !$light_mode}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-sun">
					<circle cx="12" cy="12" r="5"></circle>
					<line x1="12" y1="1" x2="12" y2="3"></line>
					<line x1="12" y1="21" x2="12" y2="23"></line>
					<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
					<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
					<line x1="1" y1="12" x2="3" y2="12"></line>
					<line x1="21" y1="12" x2="23" y2="12"></line>
					<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
					<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round">
					<path
						d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
				</svg>
			{/if}
		</li>
		<a href="/events" class="hidden lg:block select-none">
			<button
				type="button"
				class="transition duration-300 ease-in-out focus:outline-none
				focus:shadow-outline hover:bg-purple-700 hover:text-white
				font-normal py-2 px-4 mr-2 rounded-full">
				Events
			</button>
		</a>

		{#if $token && $user}
			<Menu origin="top right" dy="{57}" width="{300}">
				<div slot="activator">
					<li class="h-10 w-10 ml-2 cursor-pointer">
						<img
							class="h-full w-full rounded-full mx-auto
							object-cover"
							src="{$user.picture}"
							alt="{$user.username} profile picture" />
					</li>

				</div>
				<div class="h-10 w-10 ml-3 mb-2 flex">
					<img
						class="h-full w-full rounded-full mx-auto object-cover"
						src="{$user.picture}"
						alt="{$user.username} profile picture" />
					<div class="ml-3 flex flex-col">
						<span>{$user.username}</span>
						<span>{$user.email}</span>
					</div>
				</div>
				<Menuitem>Send feedback</Menuitem>
				<Menuitem>Help</Menuitem>
				<Menuitem href="/dashboard">
					<div class="h-6 w-6 mr-1">

						<MdDashboard />
					</div>
					<span>Dashboard</span>
				</Menuitem>

				<hr />
				<Menuitem on:click="{sign_out}" class="hover:bg-red-200">
					<div class="h-6 w-6 mx-1">

						<FaSignOutAlt />
					</div>
					<span>Sign Out</span>
				</Menuitem>
			</Menu>
		{:else}
			<a href="/signin" class="hidden lg:block select-none">
				<button
					type="button"
					class="transition duration-300 ease-in-out border
					focus:outline-none focus:shadow-outline border-purple-700
					hover:bg-purple-700 hover:text-white font-normal py-2 px-4
					rounded-full">
					Sign In
				</button>
			</a>
		{/if}
	</ul>

</nav>
