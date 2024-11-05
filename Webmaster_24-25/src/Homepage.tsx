import pollo from "./assets/PollosHermanos.jpg";

function Homepage() {
	return (
		<>
			<div className="full-grid">
				<div className="bumper-L">One</div>
				<div className="hero-section">
					<img className="home-banner" src={pollo}></img>
				</div>
				<div className="bumper-R">Three</div>
			</div>
		</>
	);
}
export default Homepage;
