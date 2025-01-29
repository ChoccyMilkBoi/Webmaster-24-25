import React from "react";
import ReactDOM from "react-dom/client";
import Menu_Render from "./Menu_Render";
import Topbar from "./Topbar";
import "./index.css";

function menu() {
	return (
		<React.StrictMode>
			<Topbar />
		</React.StrictMode>
	);
}

export default menu;
