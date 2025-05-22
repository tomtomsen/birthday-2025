import { useState } from "react";
import ColorChangeButton from "../ColorChangeButton";
import type { Color } from "../types";

type ColorLockProps = {
    solution: [Color, Color, Color, Color, Color, Color, Color]
    onSuccess?: () => void;
}

function ColorLock(props: ColorLockProps) {
    const [ attempt, setAttempt ] = useState<Color[]>(['red', 'red', 'red', 'red', 'red', 'red', 'red']);

    const handleChange = (index: number, color: string) => {
        const newCode = [...attempt];
        newCode[index] = color as Color;
        setAttempt(newCode);

        if (newCode.join('') === props.solution.join('') && props.onSuccess) {
            props.onSuccess();
        }
    };

    return (
        <>
            {attempt.map((_color: Color, index: number) => {
                return (
                <ColorChangeButton key={`color-${index}`} defaultColor={'red'} onChange={(color: Color) => handleChange(index, color)} />
                )
            })}
        </>
    );
} 

export default ColorLock;