import {writable} from "svelte/store"

const create_writable_store = (key, start_value) => {
	const {subscribe, set} = writable(start_value)

	return {
		subscribe,
		set,
		use_local_storage: () => {
			const json = localStorage.getItem(key)
			if (json) {
				set(JSON.parse(json))
			}

			subscribe((current) => {
				localStorage.setItem(key, JSON.stringify(current))
			})
		},
	}
}

export const token = create_writable_store("token", null)
export const user = create_writable_store("user", null)
