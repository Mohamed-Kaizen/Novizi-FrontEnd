import axios from "axios"

const custom_axios = axios.create({
	baseURL: "",
})

if (typeof window !== "undefined") {
	custom_axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
		localStorage.getItem("token")
	)}`
}

export default custom_axios
