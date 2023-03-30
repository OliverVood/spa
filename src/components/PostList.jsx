import React from 'react';
import PostItems from "./PostItems";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
	if (!posts.length) return <h3 style = {{textAlign: 'center'}}>Посты не найдены</h3>
	return (
		<div>
			<h1 style = {{textAlign: 'center'}}>{title}</h1>
			<TransitionGroup>
				{posts.map((post, index) =>
					<CSSTransition timeout = {500} classNames = 'post' key = {post.id}>
						<PostItems remove = {remove} number = {index + 1} post = {post} />
					</CSSTransition>
				)}
			</TransitionGroup>
		</div>
	);
};

export default PostList;