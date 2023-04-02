import Posts from '../pages/Post';
import About from "../pages/About";
import Post from "../pages/Post";
import Error from "../pages/Error";

export const routes = [
	{path: '/', element: Posts},
	{path: '/about', element: About},
	{path: '/posts', element: Posts},
	{path: '/post/:id', element: Post},
	{path: '*', element: Error}
];