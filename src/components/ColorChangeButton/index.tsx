import { useState } from "react";
import type { Color } from "../types";
import ColorButton from "../ColorButton";

type ColorChangeButtonProps = {
    defaultColor: Color;
    onChange: (color: Color) => void;
}

function ColorChangeButton(props: ColorChangeButtonProps) {
    const { defaultColor, onChange } = props;
    const [ color, setColor ] = useState<Color>(defaultColor);
    const colors: Color[] = ['red', 'green', 'blue', 'yellow', 'orange', 'white'];

    const switchColor = () => {
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length;
        const newColor = colors[nextIndex];
        setColor(newColor);
        onChange(newColor);
    }

    return (
        <>
            <ColorButton color={color} onClick={() => switchColor()} />
        </>
    );
}

export default ColorChangeButton;