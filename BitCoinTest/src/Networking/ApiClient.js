'use strict';

import axios from 'axios';
import { BASE_URL, HEADERS as headers } from './Config';

class APIClient {
	static timeout = 15000;
	constructor() {
		const config = { baseURL: BASE_URL, headers, timeout: APIClient.timeout };
		this.apiClient = axios.create({ baseURL: BASE_URL, headers, timeout: APIClient.timeout });
		this.apiClient.config = config;
		this.get = this.get.bind(this);
		this.post = this.post.bind(this);
	}

	get(url, { config = null } = {}) {
		return new Promise((resolve, reject) => {
			this.apiClient
				.get(url, config)
				.then(response => this.handleResponse(response, resolve))
				.catch(error => this.handleError(error, reject));
		});
	}

	post(url, params, { config = null } = {}) {
		return new Promise((resolve, reject) => {
			this.apiClient
				.post(url, params, config)
				.then(response => this.handleResponse(response, resolve))
				.catch(error => this.handleError(error, reject));
		});
	}

	handleResponse(response, resolve) {
		resolve(response);
	}

	handleError(error, reject) {
		reject(error);
	}
}

export default new APIClient();
