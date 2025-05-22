import { useDoneTasks } from "../../services/TaskService";
import Page from "../../components/Page";
import { Content } from "react-bulma-components";
import HintList from "../../components/HintList";
import ColorSwitch from "../../components/ColorSwitch";
import type { Color } from "../../components/types";
import { useEffect, useState } from "react";

function Person1() {
    const {
        tasks,
        markTaskDone,
        doneTaskVal,
        setTaskVal,
    } = useDoneTasks();

    const [ isDone, setIsDone ] = useState(false);

    useEffect(() => {
        console.log('doneTaskVal', doneTaskVal);
        console.log(tasks.mistery_persion_1 in doneTaskVal);
        setIsDone(tasks.mistery_persion_1 in doneTaskVal);
    }, [doneTaskVal]);

    const handleChange = (color: Color) => {
        setTaskVal(tasks.mistery_persion_1, color);
        markTaskDone(tasks.mistery_persion_1);
    }

    const handleComplete = () => {
        setIsDone(true);
        setTaskVal(tasks.mistery_persion_1, '');
    }

    return (
        <>
            <Page isChild>
                <Content>
                    <p><strong>Geheimnisvolle Person #1</strong></p>
                    <p>
                        Versuche die Person anhand der Hinweise zu erraten.
                    </p>
                    <HintList hints={[
                        "Ich wollte Talk-Shows moderieren.",
                        "Ich bin eine Frau.",
                        "Als Kind liebte ich Leberkäsesemmeln.",
                        "Du kennst mich schon ziemlich lange.",
                        "Ich habe 350 Kaiserschnitte gemacht.",
                    ]} 
                        showAll={isDone}
                        onComplete={() => handleComplete()}
                    />
                </Content>

                {isDone && (
                    <Content display="flex" justifyContent="center" alignItems="center">
                        <ColorSwitch 
                            options={['blue', 'yellow', 'red']}
                            selected={tasks.mistery_persion_1 in doneTaskVal ? doneTaskVal[tasks.mistery_persion_1] as Color : null}
                            onChange={(color) => handleChange(color)} 
                        />
                    </Content>
                )}
            </Page>
        </>
    )
}

export default Person1;
