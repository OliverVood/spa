import React, {useEffect, useState} from 	'react';
import {useParams} from 					'react-router-dom';
import {useFetching} from 					'../hooks/useFetching';
import PostsService from 					'../API/PostsService';
import Loader from 							'../components/UI/loader/Loader';

const Post = () => {
	const params = useParams();

	const [post, setPost] = useState({});
	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostsService.getById(id);
		setPost(response.data);
	});

	const [comments, setComments] = useState([]);
	const [fetchPostComments, isLoadingComments, errorComments] = useFetching(async (id) => {
		const response = await PostsService.getCommentsById(id);
		setComments(response.data);
	});

	useEffect(() => {
		fetchPostById(params.id);
		fetchPostComments(params.id);
	}, []);

	return (
		<div>
			<h1>Пост #{params.id}</h1>
			{
				isLoading
				? <Loader/>
				: <div>{post.id}. {post.title}</div>
			}
			<div>
				<h2>Комментарии</h2>
				<div>
					{
						isLoadingComments
						? <Loader/>
						: comments.map(comment =>
							<div key = {comment.id} style = {{marginTop: '10px'}}>
								<h4>{comment.email}</h4>
								<div>{comment.body}</div>
							</div>
						)
					}
				</div>
			</div>
		</div>
	);
};

export default Post;