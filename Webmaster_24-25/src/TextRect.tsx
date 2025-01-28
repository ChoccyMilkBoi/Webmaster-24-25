import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

function TextRect({ children }: Props) {
	return <div className="about-us-home">{children}</div>;
}
export default TextRect;
