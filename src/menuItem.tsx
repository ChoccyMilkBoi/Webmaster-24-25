import { ReactNode } from "react";

interface menuItemProps {
	name: string;
	price: number;
	children: ReactNode;
	posx: number;
	posy: number;
	pic: string;
}

function MenuItem({ name, price, posx, posy, children }: menuItemProps) {
	return (
		<div
			className="menu-item"
			style={{
				gridColumnStart: posx * 2,
				gridColumnEnd: posx * 2 + 4,
				gridRowStart: posy,
				gridRowEnd: posy + 3,
			}}

		>
			<h3 className="menu-item-name">{name}</h3>
			<h3 className="menu-price"> $ {price}</h3>
			<div className="menu-item-yap">{children}</div>
		</div>
	);
}

export default MenuItem;
