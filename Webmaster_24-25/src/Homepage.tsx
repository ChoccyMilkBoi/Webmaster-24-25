import HalfBarCard from "./HalfBarCard";
import Topbar from "./Topbar";
function Homepage() {
	return (
		<>
		<Topbar />
		<br />
		<br />

		<div className="full-grid-2">
			<div className="hero-section">
				<h1 className="hero-yap">
					greetings obese person
				</h1>
				<h4>
					and welcome to rushil consoomz, up and coming vegetarian cuisine
				</h4>
			</div>
			<div className="half-grid">
				<HalfBarCard title = {"Menu"} column={1}>
					<div></div>
				</HalfBarCard>
				<HalfBarCard title = {"Reservations"} column={2}>
					<div></div>
				</HalfBarCard>
				<HalfBarCard title = {"Reservations"} column={3}>
					<div></div>
				</HalfBarCard>
				<HalfBarCard title = {"Reservations"} column={4}>
					<div></div>
				</HalfBarCard>
				<HalfBarCard title = {"Reservations"} column={5}>
					<div></div>
				</HalfBarCard>
			</div>
		</div>
		</>
	);
}
export default Homepage;
