import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Menu from "./Menu";
import Mission from "./Mission";
import Sources from "./Sources";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/mission" element={<Mission />} />
				<Route path="/sources" element={<Sources />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
