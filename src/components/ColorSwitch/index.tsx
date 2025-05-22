import { useState } from "react";
import ColorButton from "../ColorButton";
import type { Color } from "../types";

type ColorSwitchProps = {
    selected: Color | null;
    options: Color[];
    onChange?: (color: Color) => void;
}

function ColorSwitch(props: ColorSwitchProps) {

    const [ selectedColor, setSelectedColor ] = useState<Color | null>(props.selected);

    const handleClick = (color: Color) => {
        setSelectedColor(color);
        if (props.onChange) {
            props.onChange(color);
        }
    }

    return (
        <>
            {props.options.map((color: Color, index: number) => {
                return (
                    <span key={`color-${index}`} style={{marginInline: "10px"}}>
                        <ColorButton key={`color-${index}`} color={color} onClick={(c) => handleClick(c)} selected={selectedColor == color} />
                    </span>
                )
            })}
        </>
    );
}

export default ColorSwitch;
