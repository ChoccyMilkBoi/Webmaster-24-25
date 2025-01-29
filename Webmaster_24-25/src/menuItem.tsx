import { ReactNode } from "react";

interface menuItemProps {
	name: string;
	price: number;
	children: ReactNode;
	posx: number;
	posy: number;
	pic: string;
}

function MenuItem({ name, price, posx, posy, pic, children }: menuItemProps) {
	return (
		<div
			className="menu-item"
			style={{
				gridColumnStart: posx * 2,
				gridColumnEnd: posx * 2 + 1,
				gridRowStart: posy,
				gridRowEnd: posy + 2,
			}}

		>
			<h3 className="menu-item-name">{name}</h3>
			<div className="menu-item-yap"></div>
		</div>
	);
}

export default MenuItem;
