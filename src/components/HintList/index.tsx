import { useState } from "react";
import { Box, Button } from "react-bulma-components";

type HintListProps = {
    showAll: boolean;
    hints: string[];
    onComplete?: () => void;
}

function HintList(props: HintListProps) {

    const [ visibleHints, setVisibleHints ] = useState<number>(1);

    const handleShowMore = () => {
        if (visibleHints < props.hints.length) {
            setVisibleHints(visibleHints + 1);
            if (visibleHints + 1 === props.hints.length && props.onComplete) {
                props.onComplete();
            }
        }
    }

    if (props.showAll) {
        return (
            <div>
                {props.hints.map((hint, index) => (
                    <Box key={index} style={{marginBlock: "3px"}}>
                        {hint}
                    </Box>
                ))}
            </div>
        );
    }

    return (
        <div>
            {props.hints.slice(0, visibleHints).map((hint, index) => (
                <Box key={index} style={{marginBlock: "3px"}}>
                    {hint}
                </Box>
            ))}
            {visibleHints < props.hints.length && (
            <Button color="primary" onClick={() => handleShowMore()}>
                Nächster Hinweis
            </Button>
            )}
        </div>
    );
}

export default HintList;