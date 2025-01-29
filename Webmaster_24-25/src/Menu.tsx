import Topbar from "./Topbar";
import "./index.css";
import MenuItem from "./menuItem";

function menu() {
	return (
		<>
			<Topbar />
			<div className="full-grid-2">
				<div className="menu-grid">
					<MenuItem
						name="ChoppedChyn"
						price={3.5}
						posx={1}
						posy={2}
						pic="Webmaster_24-25/src/assets/services-pic.jpg"
					>
						<p>
							Chopped Chyn is a delicious salad with a variety of
							ingredients.
						</p>
					</MenuItem>
				</div>
			</div>
		</>
	);
}

export default menu;
