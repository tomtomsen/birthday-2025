
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

    const handleClick = () => {
        markTaskDone(tasks.mistery_persion_1);
    }

    return (
        <>
            <Page isChild>
                <Content>
                    <p><strong>Misterious Person</strong></p>
                    <p>
                        Versuche die Person anhand der Hinweise zu erraten.
                    </p>
                    <HintList hints={[
                        "Ich wollte Talk-Shows moderieren.",
                        "Ich bin eine Frau.",
                        "Als Kind liebte ich Leberkäsesemmeln.",
                        "Du kennst mich schon ziemlich lange.",
                        "Ich habe 350 Kaiserschnitte gemacht.",
                    ]} onComplete={() => handleClick()} showAll={doneTaskIds.has(tasks.mistery_persion_1)}/>
                </Content>
            </Page>
        </>
    )
}

export default Selin;
