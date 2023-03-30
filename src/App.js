import React, {useMemo, useState} from 'react';
import './styles/styles.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript 1', description: 'JavaScript 2 - язык программирования'},
		{id: 2, title: 'JavaScript 3', description: 'JavaScript 3 - язык программирования'},
		{id: 3, title: 'JavaScript 5', description: 'JavaScript 5 - язык программирования'},
		{id: 4, title: 'JavaScript 2', description: 'JavaScript 4 - язык программирования'},
		{id: 5, title: 'JavaScript 4', description: 'JavaScript 1 - язык программирования'}
	]);
	const [filter, setFilter] = useState({sort: '', query: ''});
	const [modal, setModal] = useState(false);

	const sortedPosts = useMemo(() => {
		return filter.sort ? [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])) : posts;
	}, [filter.sort, posts]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
	}, [filter.query, sortedPosts]);

	const createPost = newPost => {
		setPosts([...posts, newPost]);
		setModal(false);
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	return (
		<div className = "App">
			<MyButton onClick = {() => setModal(true)}>Создать пост</MyButton>
			<MyModal visible = {modal} setVisible = {setModal}>
				<PostForm create = {createPost}/>
			</MyModal>
			<PostFilter filter = {filter} setFilter = {setFilter}/>
			<PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = 'Список постов про JS'/>
		</div>
	);
}

export default App;