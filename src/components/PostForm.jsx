import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
	const [post, setPost] = useState({title: '', description: ''});

	const addNewPost = e => {
		e.preventDefault();
		const newPost = {...post, id: Date.now()};
		create(newPost);
		setPost({title: '', description: ''});
	}

	return (
		<form>
			<MyInput type = "text" value = {post.title} placeholder = "Название поста" onChange = {e => setPost({...post, title: e.target.value})}/>
			<MyInput type = "text" value = {post.description} placeholder = "Описание поста" onChange = {e => setPost({...post, description: e.target.value})}/>
			<MyButton onClick = {addNewPost}>Опубликовать пост</MyButton>
		</form>
	);
};

export default PostForm;