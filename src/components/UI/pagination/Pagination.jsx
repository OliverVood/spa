import React from 'react';
import {getPagesArray} from "../../../utils/pages";
import classes from './Pagination.module.css';

const Pagination = ({page, totalPages, changePage}) => {
	let pagesArray = getPagesArray(totalPages);

	return (
		<div className = {classes.page__wrapper}>
			{pagesArray.map(p => <span key = {p} onClick={() => changePage(p)} className = {p === page ? [classes.page, classes.active].join(' ') : classes.page}>{p}</span>)}
		</div>
	);
};

export default Pagination;