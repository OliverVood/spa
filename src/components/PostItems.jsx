import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItems = (props) => {
	return (
		<div className = "post">
			<div className = "post_counter">
				<strong>{props.number}. {props.post.title}</strong>
				<div>{props.post.description}</div>
			</div>
			<div className = "post_btns">
				<MyButton onClick = {() => props.remove(props.post)}>Удалить</MyButton>
			</div>
		</div>
	);
};

export default PostItems;