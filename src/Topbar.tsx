import logo from "./assets/Black and White Retro Bakery Logo.svg.svg";
import { Link } from "react-router-dom";

function Topbar() {
	return (
		<ul className="streamerBTW">
			<li className="logo-buttonBTW">
				<Link to="/" className="logo-link">
					<br></br>
					<img src={logo} className="logoBTW logo" alt="..."></img>
					<span className="logo-text">Home</span>
				</Link>
			</li>
			<li className="buttonBTW">
				<Link to="/menu" className="buttonlnkBTW">
					<br></br>
					Menu
				</Link>
			</li>
			<li className="buttonBTW">
				<Link to="/sources" className="buttonlnkBTW">
					<br></br>
					Sources & Sustainability
				</Link>
			</li>
			<li className="buttonBTW">
				<Link to="/mission" className="buttonlnkBTW">
					<br></br>
					Our Mission
				</Link>
			</li>
		</ul>
	);
}
export default Topbar;
