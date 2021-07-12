import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
	state = { clicked: false };
	handleClick = () => {
		this.setState({ clicked: ~this.state.clicked });
	};
	render() {
		return (
			<nav className="NavbarItems">
				<Link to="/" style={{"textDecoration": "none"}}>
					<h1 className="navbar-logo">Vfily</h1>
				</Link>
				<div className="menu-icon" onClick={this.handleClick}>
					<i
						className={
							this.state.clicked ? "fas fa-times" : "fas fa-bars"
						}
					></i>
				</div>
				<ul
					className={
						this.state.clicked ? "nav-menu active" : "nav-menu"
					}
				>
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<Link className={item.cName} to={item.url}>
									{item.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}
export default Navbar;
