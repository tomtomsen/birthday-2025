
import { useDoneTasks } from "../../services/TaskService";
import Page from "../../components/Page";
import { Content } from "react-bulma-components";
import HintList from "../../components/HintList";
import ColorSwitch from "../../components/ColorSwitch";
import type { Color } from "../../components/types";
import { useEffect, useState } from "react";

function Person2() {
    const {
        tasks,
        markTaskDone,
        doneTaskVal,
        setTaskVal,
    } = useDoneTasks();

    const [ isDone, setIsDone ] = useState(false);

    useEffect(() => {
        console.log('doneTaskVal', doneTaskVal);
        console.log(tasks.mistery_persion_2 in doneTaskVal);
        setIsDone(tasks.mistery_persion_2 in doneTaskVal);
    }, [doneTaskVal]);

    const handleChange = (color: Color) => {
        setTaskVal(tasks.mistery_persion_2, color);
        markTaskDone(tasks.mistery_persion_2);
    }

    const handleComplete = () => {
        setIsDone(true);
        setTaskVal(tasks.mistery_persion_2, '');
    }

    return (
        <>
            <Page isChild>
                <Content>
                    <p><strong>Geheimnisvolle Person #2</strong></p>
                    <p>
                        Versuche die Person anhand der Hinweise zu erraten.
                    </p>
                    <HintList hints={[
                        "Ich habe 3 Geschwister.",
                        "Ich habe Alanis Morissette persönlich getroffen.",
                        "Thomas Brezina hat mir ein Buch signiert.",
                        "Meine Mama wohnt nur eine Stiege weiter.",
                        "Ich habe mein Bad vor kurzem renoviert.",
                    ]} 
                        showAll={isDone}
                        onComplete={() => handleComplete()}
                    />
                </Content>

                {isDone && (
                    <Content display="flex" justifyContent="center" alignItems="center">
                        <ColorSwitch 
                            options={['yellow', 'white', 'green']}
                            selected={tasks.mistery_persion_2 in doneTaskVal ? doneTaskVal[tasks.mistery_persion_2] as Color : null}
                            onChange={(color) => handleChange(color)} 
                        />
                    </Content>
                )}
            </Page>
        </>
    )
}

export default Person2;