import React from 'react';
import '@styles/Login.scss';

import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo-login" />
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" placeholder="mail@example.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<input type="submit" value="Log in" className="primary-button login-button" />
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button">Sign up</button>
			</div>
		</div>
	);
}

export default Login;
