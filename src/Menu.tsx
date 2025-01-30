import MenuHeader from "./MenuHeader";
import Topbar from "./Topbar";
import "./index.css";
import MenuItem from "./menuItem";

function menu() {
	return (
		<>
			<Topbar />
			<div className="full-grid-1">
				<div className="menu-grid">
					<MenuHeader row={1}>Appetizers</MenuHeader>
					<MenuItem
						name="Bruschetta al Pomodoro"
						price={6.99}
						posx={1}
						posy={4}
						pic="Webmaster_24-25/src/assets/services-pic.jpg"
					>
						<p>
						Crispy toasted bread topped with a mix of tomatoes, basil, garlic, and a drizzle of virgin olive oil.
						</p>
					</MenuItem>
					<MenuItem
						name="Vegan Croquettes"
						price={8.49}
						posx={4}
						posy={4}
						pic="Webmaster_24-25/src/assets/services-pic.jpg"
					>
						<p>
						Golden, crispy bites filled with a blend of seasonal vegetables, herbs, and creamy mashed potatoes. Lightly seasoned and served with a zesty dipping sauce.
						</p>
					</MenuItem>
					<MenuItem
						name="Panzanella Salad"
						price={9.99}
						posx={1}
						posy={8}
						pic="Webmaster_24-25/src/assets/services-pic.jpg"
					>
						<p>
						A Tuscan bread salad featuring tomatoes, cucumbers, red onions, and basil, all tossed with toasted bread and a light vinaigrette.
						</p>
					</MenuItem>
					<MenuItem
						name="Greek Salad"
						price={8.99}
						posx={4}
						posy={8}
						pic="Webmaster_24-25/src/assets/services-pic.jpg"
					>
						<p>
						A blend of cucumbers, tomatoes, red onions, and Kalamata olives, topped with feta cheese and drizzled with herb-infused olive oil dressing.
						</p>
					</MenuItem>


					<MenuHeader row={13}>Entrees</MenuHeader>
					
					
					<MenuItem
						name="Vegan Risotto al Funghi"
						price={14.99}
						posx={1}
						posy={14}
						pic="Webmaster_24-25/src/assets/services-pic.jpg"
					>
						<p>
						A creamy risotto crafted with Arborio rice, simmered in a vegetable broth, and infused with mushrooms, garlic, and herbs.
						</p>
					</MenuItem>
					<MenuItem
						name="Ratatouille Provençale"
						price={13.99}
						posx={4}
						posy={14}
						pic="Webmaster_24-25/src/assets/services-pic.jpg"
					>
						<p>
						A traditional French dish featuring eggplant, zucchini, bell peppers, and tomatoes, slow-cooked with garlic, onions, and herbs.
						</p>
					</MenuItem>
					<MenuItem
						name="Vegan Moussaka"
						price={15.99}
						posx={1}
						posy={18}
						pic="Webmaster_24-25/src/assets/services-pic.jpg"
					>
						<p>
						A blend of roasted eggplant, zucchini, and a lentil filling, finished with a dairy-free béchamel and baked.
						</p>
					</MenuItem>
					<MenuItem
						name="Vegan Schnitzel"
						price={14.49}
						posx={4}
						posy={18}
						pic="Webmaster_24-25/src/assets/services-pic.jpg"
					>
						<p>
						A crispy breaded cutlet made from plant-based ingredients, perfectly seasoned and pan-fried.
						</p>
					</MenuItem>
					<MenuItem
						name="Patatas Bravas"
						price={4.99}
						posx={1}
						posy={24}
						pic="Webmaster_24-25/src/assets/services-pic.jpg"
					>
						<p>
						Crispy, golden fried potatoes drizzled with a smoky tomato sauce and garlic aioli.
						</p>
					</MenuItem>
					<MenuItem
						name="Sauteed Spinish with Garlic and Olive Oil"
						price={5.99}
						posx={4}
						posy={24}
						pic="Webmaster_24-25/src/assets/services-pic.jpg"
					>
						<p>
						Fresh spinach leaves  sautéed in garlic and extra virgin olive oil, seasoned to perfection.
						</p>
					</MenuItem>


					<MenuHeader row={28}>Desserts</MenuHeader>
					
					
					<MenuItem
						name="Cinnamon Buns"
						price={4.25}
						posx={1}
						posy={30}
						pic="Webmaster_24-25/src/assets/services-pic.jpg"
					>
						<p>
						Soft, spiced rolls swirled with cinnamon and sugar, often topped with icing.
						</p>
					</MenuItem>
					<MenuItem
						name="Arroz Con Leche"
						price={5.99}
						posx={4}
						posy={30}
						pic="Webmaster_24-25/src/assets/services-pic.jpg"
					>
						<p>
						A rich, creamy rice pudding made with sweetened milk, cinnamon, and rice.
						</p>
					</MenuItem>
					<MenuItem
						name="Madeleines"
						price={4.25}
						posx={1}
						posy={34}
						pic="Webmaster_24-25/src/assets/services-pic.jpg"
					>
						<p>
						Light, airy shell-shaped sponge cakes with a hint of lemon.
						</p>
					</MenuItem>
					<MenuItem
						name="Kardinalschnitten"
						price={7.00}
						posx={4}
						posy={34}
						pic="Webmaster_24-25/src/assets/services-pic.jpg"
					>
						<p>
						A meringue and sponge cake dessert, often served with whipped cream and fruit.
						</p>
					</MenuItem>
				</div>
			</div>
		</>
	);
}

export default menu;
