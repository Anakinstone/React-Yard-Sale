import React from 'react';
import { Link } from "react-router-dom";
import '@styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/" className="title">My orders</a>
				</li>
				<li>
					<Link to="/login">My account</Link>
				</li>
				<li>
					<a href="/">Sign out</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
