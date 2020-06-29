import axios from "axios"

import {token, user} from "./store"

const custom_axios = axios.create({
	baseURL: "https://novizi.herokuapp.com/api/",
})

if (typeof window !== "undefined") {
	let tokens

	token.subscribe((value) => (tokens = value))
	if (tokens && tokens.access_token) {
		custom_axios.defaults.headers.common[
			"Authorization"
		] = `Bearer ${tokens.access_token}`
		let refreshing = false
		let subscribes = []
		function subscribes_token_refresh(callback) {
			subscribes.push(callback)
		}
		function on_refresh() {
			subscribes.map((callback) => callback())
		}
		custom_axios.interceptors.response.use(
			(response) => {
				return response
			},
			(error) => {
				const {
					config,
					response: {status, data},
				} = error
				if (status === 403 && data.code === "token_not_valid") {
					if (!refreshing) {
						refreshing = true
						custom_axios
							.post("users/token/refresh/", {
								refresh: tokens.refresh_token,
							})
							.then((res) => {
								refreshing = false
								token.set({
									access_token: res.data.access,
									refresh_token: tokens.refresh_token,
								})
								subscribes = []
							})
							.catch((err) => {
								console.log(err.response)
								token.set(false)
								user.set(false)
								window.location = "/"
							})
					}
					const request_subscribes = new Promise((resolve) => {
						subscribes_token_refresh(() => {
							config.headers[
								"Authorization"
							] = `Bearer ${tokens.access_token}`
							resolve(custom_axios(config))
						})
					})
					on_refresh()
					return request_subscribes
				}
				return Promise.reject(error)
			}
		)
	}
}

export default custom_axios
