import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);

	const Login = e => {
		e.preventDefault();
		setIsAuth(true);
		localStorage.setItem('auth', 'true');
	}

	return (
		<div>
			<form onSubmit = {Login}>
				<h1>Страница авторизации</h1>
				<MyInput type = 'text' placeholder = 'Введите логин'/>
				<MyInput type = 'password' placeholder = 'Введите пароль'/>
				<MyButton>Войти</MyButton>
			</form>
		</div>
	);
};

export default Login;