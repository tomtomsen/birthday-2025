import { Button, Content } from "react-bulma-components";
import { useBoard } from "./context/BoardContext";
import Square from "./Square";
import { useEffect } from "react";

type BoardProps = {
    onDone?: () => void;
}

function Board(props: BoardProps) {
    const {
        size,
        currentPosition,
        usedPositions,
        allowedPositions,
        moveKnight,
        resetPositions,
        isDone
    } = useBoard();

    useEffect(() => {
        if (isDone && props.onDone) {
            props.onDone();
        
        }
    }, [isDone]);

    return (
        <>
            <Content justifyContent="center" display="flex">
                <div style={{ display: 'grid', gap: "0px", gridTemplateColumns: `repeat(${size}, 50px)`, gridTemplateRows: `repeat(${size}, 50px)` }}>
                {[...Array(size*size)].map((_, position) => {

                        const isKnight = currentPosition === position;
                        const isUsed = usedPositions.has(position);
                        const isAllowed = allowedPositions.has(position);

                        let color = 'var(--bulma-primary-90)';
                        if (isKnight) {
                            color = 'var(--bulma-primary-85)';
                        } else if (isUsed) {
                            color = 'var(--bulma-danger)';
                        } else if (isAllowed) {
                            color = 'var(--bulma-primary)';
                        }

                        return (
                        <Square key={position} onClick={() => {
                            moveKnight(position);
                        }}>
                            <div
                            style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: color,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: isKnight ? '2px solid black' : '1px solid var(--bulma-body-background-color)',
                            }}
                            >
                            {isKnight && <span style={{fontSize: '40px',color:'black'}}>♞</span>}
                            </div>
                        </Square>
                        )
                })}
                </div>
            </Content>
            <Content textAlign="center">
                <Button color="primary" onClick={resetPositions} textAlign="center">Reset</Button>
            </Content>
        </>
    );
}

export default Board;