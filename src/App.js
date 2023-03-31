import React, {useEffect, useState} from 'react';
import 						'./styles/styles.css';
import PostForm from 		'./components/PostForm';
import PostList from 		'./components/PostList';
import PostFilter from 		'./components/PostFilter';
import MyModal from 		'./components/UI/MyModal/MyModal';
import MyButton from 		'./components/UI/button/MyButton';
import Loader from 			'./components/UI/loader/Loader';
import Pagination from 		'./components/UI/pagination/Pagination';
import PostsService from 	'./API/PostsService';
import {usePosts} from 		'./hooks/usePosts';
import {useFetching} from 	'./hooks/useFetching';
import {getPageCount} from 	'./utils/pages';

function App() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({sort: '', query: ''});
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const [totalPages, setTotalPages] = useState(0);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostsService.getAll(page, limit);
		setPosts(response.data);
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit));getPageCount()
	});

	const changePage = page => {
		setPage(page);
	}

	useEffect(() => {
		fetchPosts();
	}, [page]);

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
			{
				postError && <h1>Произошла ошибка {postError}</h1>
			}
			{
				isPostsLoading
				? <div style = {{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
				: <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = 'Список постов про JS'/>
			}
			<Pagination page = {page} changePage = {changePage} totalPages = {totalPages}/>
		</div>
	);
}

export default App;