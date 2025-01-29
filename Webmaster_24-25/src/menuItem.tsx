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
				gridColumnStart: posx,
				gridColumnEnd: posx + 1,
				gridRowStart: posy,
				gridRowEnd: posy + 1,
			}}
		>
			<h3>{name}</h3>
		</div>
	);
}

export default MenuItem;
