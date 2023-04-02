import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import About from 	'../pages/About';
import Posts from 	'../pages/Posts';
import Error from 	'../pages/Error';
import Post from 	'../pages/Post';
import Login from "../pages/Login";
import {routes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);
	return (
		isAuth
		? <Routes>
			{/*{routes.map(route => <Route path = {route.path} element = {route.element} />)}*/}
			<Route path = '/' element = {<Posts/>} />
			<Route path = '/about' element = {<About/>} />
			<Route path = '/posts' element = {<Posts/>} />
			<Route path = '/post/:id' element = {<Post/>} />
			<Route path = '*' element = {<Error/>} />
		</Routes>
		: <Routes>
			{/*{routes.map(route => <Route path = {route.path} element = {route.element} />)}*/}
			<Route path = '/' element = {<Login/>} />
			<Route path = '/login' element = {<Login/>} />
			<Route path = '*' element = {<Error/>} />
		</Routes>
	);
};

export default AppRouter;