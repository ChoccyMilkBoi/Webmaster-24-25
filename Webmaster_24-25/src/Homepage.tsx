import HalfBarCard from "./HalfBarCard";
import TextRect from "./TextRect";
import Topbar from "./Topbar";
function Homepage() {
	return (
		<>
			<Topbar />

			<div className="full-grid-2">
				<div className="hero-section">
					<div className="center-hero-yap">
						<p className="hero-yap font-special">
							Fresh from the land, just how you want it
						</p>
						<p className="sub-center-hero-yap">
							Fresh harvest prepares timeless recipes with your
							choice of locally grown ingredients.
						</p>
					</div>
				</div>

				<div className="about-us-home">
					<TextRect title="Is this thing on?"></TextRect>
				</div>
				<div className="half-grid-wrapper">
					<div className="half-grid">
						<HalfBarCard title={"Menu"} column={1}>
							<div></div>
						</HalfBarCard>
						<HalfBarCard title={"Reservations"} column={2}>
							<div></div>
						</HalfBarCard>
						<HalfBarCard title={"Our Mission"} column={3}>
							<div></div>
						</HalfBarCard>
						<HalfBarCard title={"Catering"} column={4}>
							<div></div>
						</HalfBarCard>
						<HalfBarCard title={"Sourcing"} column={5}>
							<div></div>
						</HalfBarCard>
					</div>
				</div>
			</div>
		</>
	);
}
export default Homepage;
