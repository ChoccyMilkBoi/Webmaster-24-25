import logo from "./assets/Black and White Retro Bakery Logo.svg.svg";

function Topbar() {
	return (
		<ul className="streamerBTW">
			<li className="buttonBTW">
				<img src={logo} className="logoBTW"></img>
				<a href="index.html" className="buttonlnkBTW"></a>
			</li>
			<li className="buttonBTW">
				<a href="menu.html" className="buttonlnkBTW">
					Menu
				</a>
			</li>
			<li className="buttonBTW">
				<a href="reservations.html" className="buttonlnkBTW">
					Reservations
				</a>
			</li>
			<li className="buttonBTW">
				<a href="catering.html" className="buttonlnkBTW">
					Catering
				</a>
			</li>
			<li className="buttonBTW">
				<a href="sources.html" className="buttonlnkBTW">
					Our sources
				</a>
			</li>
			<li className="buttonBTW">
				<a href="mission.html" className="buttonlnkBTW">
					Our Mission
				</a>
			</li>
		</ul>
	);
}
export default Topbar;
