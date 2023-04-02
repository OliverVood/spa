import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import classes from './Navbar.module.css';
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);

	const Logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth');
	}

	return (
		<div className = {classes.navbar}>
			<MyButton onClick = {Logout}>Выйти</MyButton>
			<div className = {classes.links}>
				<Link to = '/about'>О сайте</Link>
				<Link to = '/posts'>Посты</Link>
			</div>
		</div>
	);
};

export default Navbar;