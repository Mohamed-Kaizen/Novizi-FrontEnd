<script>
	import {scale} from "svelte/transition"
</script>

<!-- Hero -->
<section class="body-font" transition:scale="{{duration: 2000}}">
	<div
		class="container mx-auto flex px-5 py-24 md:flex-row flex-col
		items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col
			md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
			<h1
				class="title-font sm:text-4xl text-3xl mb-4 font-medium
				text-black dark:text-white">
				Create Your own Events
			</h1>
			<p class="mb-8 leading-relaxed text-gray-700 dark:text-gray-400">
				Novizi is an event management and ticketing service. It will
				Allow you our users to browse, create, and promote events.
			</p>
			<div class="flex justify-center">
				<a href="/signup">
					<button
						class="p-2 text-center text-white bg-purple-700
						dark:bg-purple-500 w-24 shadow-md hover:shadow-lg
						font-normal focus:outline-none focus:shadow-outline
						rounded-md transition duration-500 ease-in-out ">
						Join US
					</button>

				</a>
			</div>
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<img
				class="object-cover object-center rounded"
				alt="hero"
				src="hero.png" />
		</div>
	</div>
</section>

<section class="body-font" transition:scale="{{duration: 2000}}">
	<div
		class="container mx-auto flex px-5 py-24 md:flex-row flex-col
		items-center">
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
			<img
				class="object-cover object-center rounded"
				alt="hero"
				src="https://dummyimage.com/720x600" />
		</div>
		<div
			class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col
			md:items-start md:text-left items-center text-center">
			<h1
				class="title-font sm:text-4xl text-3xl mb-4 font-medium
				text-gray-900">
				Before they sold out
				<br class="hidden lg:inline-block" />
				readymade gluten
			</h1>
			<p class="mb-8 leading-relaxed">
				Copper mug try-hard pitchfork pour-over freegan heirloom neutra
				air plant cold-pressed tacos poke beard tote bag. Heirloom echo
				park mlkshk tote bag selvage hot chicken authentic tumeric
				truffaut hexagon try-hard chambray.
			</p>
			<div class="flex justify-center">
				<button
					class="inline-flex text-white bg-indigo-500 border-0 py-2
					px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
					Button
				</button>
				<button
					class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0
					py-2 px-6 focus:outline-none hover:bg-gray-300 rounded
					text-lg">
					Button
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Features -->
<section class="body-font" transition:scale="{{duration: 2000}}">
	<div class="container px-5 py-24 mx-auto">
		<div
			class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10
			sm:flex-row flex-col">
			<div
				class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex
				items-center justify-center rounded-full flex-shrink-0">
				<svg
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="sm:w-16 sm:h-16 w-10 h-10 dark:text-white"
					viewBox="0 0 24 24">
					<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
				</svg>
			</div>
			<div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
				<h2
					class="text-gray-900 dark:text-gray-400 text-lg title-font
					font-medium mb-2">
					Shooting Stars
				</h2>
				<p
					class="leading-relaxed text-base text-gray-900
					dark:text-gray-400">
					Blue bottle crucifix vinyl post-ironic four dollar toast
					vegan taxidermy. Gastropub indxgo juice poutine.
				</p>
			</div>
		</div>
		<div
			class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10
			sm:flex-row flex-col">
			<div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
				<h2
					class="text-gray-900 dark:text-gray-400 text-lg title-font
					font-medium mb-2">
					The Catalyzer
				</h2>
				<p
					class="leading-relaxed text-base text-gray-900
					dark:text-gray-400 ">
					Blue bottle crucifix vinyl post-ironic four dollar toast
					vegan taxidermy. Gastropub indxgo juice poutine.
				</p>
			</div>
			<div
				class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20
				sm:ml-10 inline-flex items-center justify-center rounded-full
				flex-shrink-0">
				<svg
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="sm:w-16 sm:h-16 w-10 h-10 dark:text-white"
					viewBox="0 0 24 24">
					<circle cx="6" cy="6" r="3"></circle>
					<circle cx="6" cy="18" r="3"></circle>
					<path
						d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
				</svg>
			</div>
		</div>
		<div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
			<div
				class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex
				items-center justify-center rounded-full flex-shrink-0">
				<svg
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="sm:w-16 sm:h-16 w-10 h-10 dark:text-white"
					viewBox="0 0 24 24">
					<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
					<circle cx="12" cy="7" r="4"></circle>
				</svg>
			</div>
			<div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
				<h2
					class="text-gray-900 dark:text-gray-400 text-lg title-font
					font-medium mb-2">
					The 400 Blows
				</h2>
				<p
					class="leading-relaxed text-base text-gray-900
					dark:text-gray-400 ">
					Blue bottle crucifix vinyl post-ironic four dollar toast
					vegan taxidermy. Gastropub indxgo juice poutine.
				</p>
			</div>
		</div>
	</div>
</section>
