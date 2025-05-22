
import { useDoneTasks } from "../../services/TaskService";
import Page from "../../components/Page";
import { Content } from "react-bulma-components";
import HintList from "../../components/HintList";
import ColorSwitch from "../../components/ColorSwitch";
import type { Color } from "../../components/types";
import { useEffect, useState } from "react";

function Person3() {
    const {
        tasks,
        markTaskDone,
        doneTaskVal,
        setTaskVal,
    } = useDoneTasks();

    const [ isDone, setIsDone ] = useState(false);

    useEffect(() => {
        setIsDone(tasks.mistery_persion_3 in doneTaskVal);
    }, [doneTaskVal]);

    const handleChange = (color: Color) => {
        setTaskVal(tasks.mistery_persion_3, color);
        markTaskDone(tasks.mistery_persion_3);
    }

    const handleComplete = () => {
        setIsDone(true);
        setTaskVal(tasks.mistery_persion_3, '');
    }

    return (
        <>
            <Page isChild>
                <Content>
                    <p><strong>Geheimnisvolle Person #3</strong></p>
                    <p>
                        Versuche die Person anhand der Hinweise zu erraten.
                    </p>
                    <HintList hints={[
                        "Ich bin eine Frau.",
                        "Ich finde auf K-Pop gut.",
                        "Meine Oma kann super backen.",
                        "Ich studierte in Madrid und London.",
                        "Ich singe gerne Toxic beim Karaoke mit dir.",
                    ]} 
                        showAll={isDone}
                        onComplete={() => handleComplete()}
                    />
                </Content>

                {isDone && (
                    <Content display="flex" justifyContent="center" alignItems="center">
                        <ColorSwitch 
                            options={['blue', 'green', 'orange']}
                            selected={tasks.mistery_persion_3 in doneTaskVal ? doneTaskVal[tasks.mistery_persion_3] as Color : null}
                            onChange={(color) => handleChange(color)} 
                        />
                    </Content>
                )}
            </Page>
        </>
    )
}

export default Person3;
