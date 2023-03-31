import axios from "axios";

export default class PostsService {
	static async getAll(page = 1, limit = 10) {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
			params: {
				_page: page,
				_limit: limit
			}
		});
		// console.log(response);
		return response;
	}
}