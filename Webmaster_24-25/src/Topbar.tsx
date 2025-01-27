import logo from "./assets/Black and White Retro Bakery Logo.svg.svg";

function Topbar() {
	return (
		<ul className="streamerBTW">
			<li className="logo-buttonBTW">
				<a href="index.html" className="logo-link">
					<br></br>
					<img src={logo} className="logoBTW logo"></img>
					<span className="logo-text">Home</span>
				</a>
			</li>
			<li className="buttonBTW">
				<a href="menu.html" className="buttonlnkBTW">
					<br></br>
					Menu
				</a>
			</li>
			<li className="buttonBTW">
				<a href="reservations.html" className="buttonlnkBTW">
					<br></br>
					Reservations
				</a>
			</li>
			<li className="buttonBTW">
				<a href="catering.html" className="buttonlnkBTW">
					<br></br>
					Catering
				</a>
			</li>
			<li className="buttonBTW">
				<a href="sources.html" className="buttonlnkBTW">
					<br></br>
					Our sources
				</a>
			</li>
			<li className="buttonBTW">
				<a href="mission.html" className="buttonlnkBTW">
					<br></br>
					Our Mission
				</a>
			</li>
		</ul>
	);
}
export default Topbar;
