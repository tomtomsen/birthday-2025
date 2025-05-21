import { useDoneTasks } from "../../services/TaskService";
import Page from "../../components/Page";
import { Content } from "react-bulma-components";
import HintList from "../../components/HintList";

function Bianca() {
    const {
        tasks,
        markTaskDone,
        doneTaskIds,
    } = useDoneTasks();

    const handleComplete = () => {
        markTaskDone(tasks.mistery_persion_2);
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
                    "Ich habe 3 Geschwister.",
                    "Ich habe Alanis Morissette persönlich getroffen.",
                    "Thomas Brezina hat mir ein Buch signiert.",
                    "Meine Mama wohnt nur eine Stiege weiter.",
                    "Ich habe mein Bad vor kurzem renoviert.",
                ]} onComplete={() => handleComplete()} showAll={doneTaskIds.has(tasks.mistery_persion_2)} />
            </Content>
        </Page>
        </>
    )
}

export default Bianca;
