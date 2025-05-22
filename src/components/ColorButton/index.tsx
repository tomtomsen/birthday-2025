import { Button } from "react-bulma-components";
import type { Color } from "../types";

type ColorButtonProps = {
    color: Color;
    onClick?: (color: Color) => void;
    selected?: boolean;
};

function ColorButton(props: ColorButtonProps) {

    const handleClick = () => {
        if (props.onClick) {
            props.onClick(props.color);
        }
    }

    return (
        <Button
            rounded
            style={{ 
                backgroundColor: props.color,
                margin: '5px',
                width: '50px',
                height: '50px',
                border: props.selected ? '2px solid white' : 'none',
                outline: props.selected ? '2px solid blue' : 'none',
            }}
            onClick={() => handleClick()}
        >
        </Button>
    )
}

export default ColorButton;