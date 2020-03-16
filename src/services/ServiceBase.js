import axios from "axios";

const COUNTRY_SERVICE = 'https://restcountries-v1.p.rapidapi.com/';

class ServiceBase {
	getCountryService = () => COUNTRY_SERVICE;
	
	constructor() {
		this.axios = axios.create({
			headers: {
				"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
				"x-rapidapi-key" : "e52e06287dmsh511c521506f5579p18dd9cjsna9fea31c67b7"
			}
		});
	}
	
	handleAxiosErrors = error => {
		// Error 😨
		if (error.response) {
			/*
			 * The request was made and the server responded with a
			 * status code that falls out of the range of 2xx
			 */
			console.log("-----------ERROR.RESPONSE----------");
			console.log(error.response.data);
			console.log(error.response.status);
			console.log(error.response.headers);
		} else if (error.request) {
			/*
			 * The request was made but no response was received, `error.request`
			 * is an instance of XMLHttpRequest in the browser and an instance
			 * of http.ClientRequest in Node.js
			 */
			console.log("-----------ERROR.REQUEST----------");
			console.log(error.request);
		} else {
			// Something happened in setting up the request and triggered an Error
			console.log("-----------ERROR.MESSAGE----------");
			console.log("Error", error.message);
		}
		console.log("-----------ERROR.CONFIG----------");
		console.log(error.config);
	};
}

export default ServiceBase;
