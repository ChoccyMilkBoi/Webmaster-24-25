import { ReactNode } from "react";

interface props{
    row: number;
    children: ReactNode;
}

function MenuHeader( {row, children} : props){
    return(
    <>
        <div
        className="menu-subheader"
         style={{
            gridColumnStart: 1,
            gridColumnEnd: -1,
            gridRowStart: row,
            gridRowEnd: row + 1,
        }}>
            <h1>
                {children}
            </h1>

        </div>
    </>)
}

export default MenuHeader;