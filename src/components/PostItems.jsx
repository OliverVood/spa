import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItems = (props) => {
	return (
		<div className = "post">
			<div className = "post_counter">
				<strong>{props.post.id}. {props.post.title}</strong>
				<div>{props.post.body}</div>
			</div>
			<div className = "post_btns">
				<MyButton onClick = {() => props.remove(props.post)}>Удалить</MyButton>
			</div>
		</div>
	);
};

export default PostItems;