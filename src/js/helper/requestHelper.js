import axios from 'axios';

class RequestHelper {
	constructor(endpoint) {
		this.endpoint = endpoint;
	}
	getAPI() {
		axios
			.get(this.endpoint)
			.then(response => response)
			.catch(error => {
				console.log(error);
			});
	}
}

export default RequestHelper;
