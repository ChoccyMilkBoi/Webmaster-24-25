import TextRect from "./TextRect";
import Topbar from "./Topbar";
function Homepage() {

	return (
		<>
			<Topbar />

			<div className="full-grid-2">
				<div className="hero-section">
					<div className="center-hero-yap">
						<p className="hero-yap font-beeg">
							Fresh from the land, just how you want it
						</p>
						<p className="sub-center-hero-yap font-beeg">
							Fresh harvest prepares timeless recipes with your
							choice of locally grown ingredients.
						</p>
					</div>
				</div>

				<TextRect>
					<div className="centered-text-wrap">
						<p className="about-us-home-title">
							Enjoy the harvests of the day, your way
						</p>
					</div>
					<p className="about-us-yap">
						When it comes to enjoying the best of the day's harvest,
						we all have out own preferences. That's why we offer a
						wide variety of dishes, all made with locally grown
						ingredients. From Western, to Asian, and everything in
						between, we have seomthing to satisfy your every
						craving.
					</p>
				</TextRect>
				<div className="services-wrap">
					<div className="services-pic-wrapper">
						<div className="services-pic">
						</div>
					</div>
					<div className="services-yap">
						<p className="services-title">Catering</p>
						{/* <p className="services-desc">
							We offer catering services for any event, big or
							small. From weddings, to corporate events, we have
							you covered.
						</p> */}
					</div>
				</div>
			</div>
		</>
	);
}
export default Homepage;
