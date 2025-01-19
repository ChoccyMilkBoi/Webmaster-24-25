import { ReactNode } from "react";

interface Props {
    title: string;
    column: number;
    children: ReactNode;
}


export default function HalfBarCard({title, column}: Props){
    return(
        <>
                <div className={"half-bar-card-" + column}>
                    <h1 className="half-bar-card-title">{title}</h1>
                </div>
        </>
    );
}