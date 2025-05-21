import { useState } from "react";
import { Button, Content } from "react-bulma-components";

type Color = 'red' | 'green' | 'blue' | 'yellow' | 'orange' | 'white';

type ColorLockProps = {
    solution: [Color, Color, Color, Color, Color, Color, Color]
    onSuccess?: () => void;
}

function ColorLock(props: ColorLockProps) {
    const [ attempt, setAttempt ] = useState<Color[]>(['red', 'red', 'red', 'red', 'red', 'red', 'red']);

    const handleChange = (index: number, color: string) => {
        const newCode = [...props.solution];
        newCode[index] = color as Color;
        setAttempt(newCode);

        if (newCode.join('') === props.solution.join('') && props.onSuccess) {
            props.onSuccess();
        }
    };

    return (
        <>
            <Content display="flex" justifyContent="center" alignItems="center">
                {attempt.map((_color: Color, index: number) => {
                    return (
                    <ColorSelector defaultColor={'red'} onChange={(color: Color) => handleChange(index, color)} />
                    )
                })}
            </Content>
        </>
    );
} 

type ColorSelectorProps = {
    defaultColor: Color;
    onChange: (color: Color) => void;
}

function ColorSelector(props: ColorSelectorProps) {
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
            <Button
                rounded
                key={color}
                style={{ backgroundColor: color, margin: '5px', width: '50px', height: '50px' }}
                onClick={() => switchColor()}
            >
            </Button>
        </>
    );
}

export default ColorLock;