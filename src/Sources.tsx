import "./index.css";
import Topbar from "./Topbar";

function Sources() {
	return (
		<>
			<Topbar />
			<div className="full-grid-1">
				<div className="hero-section-sourced">
					<div className="center-hero-yap">
						<p className="hero-yap font-beeg">
							Enjoy the <s>first</s> freshest harvest, just for
							you
						</p>
						<p className="sub-center-hero-yap font-subheader">
							Our ingredients are sourced from local farmers, so
							you can enjoy the freshest, locally sourced dishes.
							Scroll down to find out more about our farm to table
							process!
						</p>
					</div>
				</div>
				<div className="sustainability-1">
					<div className="sustain-header">
						<p>Sustainability in serving you</p>
					</div>
					<div className="sustain-yap-1">
						<h3
							style={{
								gridColumnStart: 2,
								gridColumnEnd: 4,
								gridRowStart: 1,
								gridRowEnd: 2,
							}}
							>
							Sourcing from local farms
						</h3>
						<p
							style={{
								gridColumnStart: 2,
								gridColumnEnd: 4,
								gridRowStart: 2,
								gridRowEnd: 5,
							}}
							className="sustain-P"
							>
							We here at First Harvest cultivate relationship with
							nearby farms that grow fruits, vegetables, grains,
							and nuts. Fresh, seasonal produce—like berries,
							pumpkins, apples, and leafy greens—is purchased at
							its peak. Many bakeries prioritize organic or
							regenerative farms, ensuring ingredients are
							pesticide-free and nutrient-dense.
						</p>
					</div>
					<div className="sustain-yap-2">
						<h3
						style={{
							gridColumnStart: 2,
							gridColumnEnd: 4,
							gridRowStart: 1,
							gridRowEnd: 2,
						}}
						>
							Seasonal Menu Rotations
						</h3>
						<p
							style={{
								gridColumnStart: 2,
								gridColumnEnd: 4,
								gridRowStart: 2,
								gridRowEnd: 5,
							}}
							className="sustain-P"
							>
								The bakery adjusts its menu based on what is 
								available locally, ensuring the freshest 
								ingredients and giving customers a taste of the 
								season. For example, a spring menu may feature 
								rhubarb tarts, while autumn includes spiced pumpkin bread. 
						</p>
					</div>
					<div className="sustain-yap-3">
							<h3
							style={{
								gridColumnStart: 2,
								gridColumnEnd: 4,
								gridRowStart: 1,
								gridRowEnd: 2,
							}}
							>
								Baking in Small Batches
							</h3>
						<p
							style={{
								gridColumnStart: 2,
								gridColumnEnd: 4,
								gridRowStart: 2,
								gridRowEnd: 5,
							}}
							className="sustain-P"
							>
							In the kitchen, the ingredients are transformed into baked goods 
							like breads, muffins, cakes, and cookies. Vegan alternatives like 
							flaxseed meal for eggs, coconut oil or nut butters for fats, and 
							plant-based milks are utilized. The restaurant may create recipes around 
							seasonal ingredients, keeping the menu fresh and aligned with what is 
							locally available.
						</p>
						</div>
				</div>
				<div className="sustainability-2">
					<div className="compost-title"
					style={{
						alignContent: "center",
						justifyContent: "center",
					}}>
						<h3>Composting and Waste</h3>
					</div>
					<div className="compost-yap">
						<p>
							Our restaurant takes food waste seriously by implementing a comprehensive composting program. 
							Any food scraps and organic waste are composted and used to enrich the soil for local farms, 
							closing the loop on sustainability.
						</p>
					</div>
				</div>
				<div className="sustainability-3">
					<div className="sustain-header-small">
						<p>Putting the <strong>TO</strong> in farm-to-table</p>
					</div>
					<div className="to-uhh-left">
						<h3
							className="subhead-compost"
							>
							Direct-to-Customer Sales
						</h3>
						<p className="compost-yapping">
						Farmers harvest the produce by hand, often  
						selecting and transporting it quickly to preserve  
						freshness. Grains and seeds, essential for  
						baking flours and binders, are also gathered from  
						local sources. Farms might deliver directly to the  
						bakery, or small distribution services may manage  
						eco-friendly transport to keep the carbon footprint low. 
						</p>
					</div>
					<div className="to-uhh-right">
						<h3
							className="subhead-compost"
						>
							Harvesting & Transport
						</h3>
						<p className = "compost-yapping">
							Products are often sold directly in the restaurant, through
							farmers markets, or via subscription boxes, allowing customers
							to enjoy baked goods made within days of harvest. Packaging 
							is minimal, using compostable or recyclable materials to stay eco-friendly. 
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Sources;
