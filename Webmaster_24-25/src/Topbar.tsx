import logo from "./assets/Black and White Retro Bakery Logo.svg.svg";
import { Link } from "react-router-dom";

function Topbar() {
	return (
		<ul className="streamerBTW">
			<li className="logo-buttonBTW">
				<Link to="index.html" className="logo-link">
					<br></br>
					<img src={logo} className="logoBTW logo"></img>
					<span className="logo-text">Home</span>
				</Link>
			</li>
			<li className="buttonBTW">
				<Link to="menu.html" className="buttonlnkBTW">
					<br></br>
					Menu
				</Link>
			</li>
			<li className="buttonBTW">
				<Link to="reservations.html" className="buttonlnkBTW">
					<br></br>
					Reservations
				</Link>
			</li>
			<li className="buttonBTW">
				<Link to="catering.html" className="buttonlnkBTW">
					<br></br>
					Catering
				</Link>
			</li>
			<li className="buttonBTW">
				<Link to="sources.html" className="buttonlnkBTW">
					<br></br>
					Our sources
				</Link>
			</li>
			<li className="buttonBTW">
				<Link to="mission.html" className="buttonlnkBTW">
					<br></br>
					Our Mission
				</Link>
			</li>
		</ul>
	);
}
export default Topbar;
