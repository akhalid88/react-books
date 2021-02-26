import React from "react";
import "./navbar.css";

function Navbar() {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" >
					Books
				</a>
				<a className="navbar-item" >
					Search
				</a>
				<a className="navbar-item" >
					Saved
				</a>
  		</div>
		</nav>
	);
}

export default Navbar;