
import { useDoneTasks } from "../../services/TaskService";
import Page from "../../components/Page";
import { Content } from "react-bulma-components";
import HintList from "../../components/HintList";

function Selin() {
    const {
        tasks,
        markTaskDone,
        doneTaskIds,
    } = useDoneTasks();

    const handleComplete = () => {
        markTaskDone(tasks.mistery_persion_3);
    }

    return (
        <>
            <Page isChild>
                <Content>
                    <p><strong>Misterious Person #3</strong></p>
                    <p>
                        Versuche die Person anhand der Hinweise zu erraten.
                    </p>
                    <HintList hints={[
                        "Ich bin eine Frau.",
                        "Ich finde auf K-Pop gut.",
                        "Meine Oma kann super backen.",
                        "Ich studierte in Madrid und London.",
                        "Ich singe gerne Toxic beim Karaoke mit dir.",
                    ]} onComplete={() => handleComplete()} showAll={doneTaskIds.has(tasks.mistery_persion_3)}/>
                </Content>
            </Page>
        </>
    )
}

export default Selin;
